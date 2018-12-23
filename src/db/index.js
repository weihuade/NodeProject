/**
 * 封装数据库的所有操作
 * 
 */

//引入mongoDB
const mongodb = require("mongodb");
//获取客户端
const MongoClient = mongodb.MongoClient;

const ObjectID = mongodb.ObjectID;

//封装连接数据库函数
function connect(collectionName){
   return new Promise((resolve,reject)=>{
        MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
            if(err){
                reject(err);
                return;
            }
            //使用数据库
            let db = client.db("nodeproject");
            //使用集合(表)
            let col = db.collection(collectionName);
            resolve({col,client});
        });
   });
}

exports.sort=(collectionName,data)=>{
    return new Promise(async(resolve,reject)=>{
        // console.log(data);//{ mth: 'o_price', rank: 1, page: 1, qty: 2 }
        let {quy,mth,rank,page,qty} = data;
        // console.log(typeof(mth),mth);
        let query = {[mth]:rank*1};
        let {col,client} = await connect(collectionName);
        //sort({mth:-1}) 名为mth的字段降序输出
        col.find(quy).sort(query).skip((page-1)*qty).limit(qty).toArray((err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:"获取该页码数据失败",
                    data:err
                });
                return;
            }else{
                resolve({
                    code:1,
                    msg:"获取该页码数据成功",
                    data:result
                });
            }
            //关闭数据库,避免资源浪费
            client.close();
        });
    });
};

exports.page=(collectionName,data)=>{
    return new Promise(async(resolve,reject)=>{
        // console.log(data);
        let {quy,page,qty} = data;
        // [page,qty] = [page*1,qty*1];
        // console.log(page);
        let {col,client} = await connect(collectionName);
        col.find(quy).skip((page-1)*qty).limit(qty).toArray((err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:"获取该页码数据失败",
                    data:err
                });
                return;
            }else{
                resolve({
                    code:1,
                    msg:"获取该页码数据成功",
                    data:result
                });
            }
            //关闭数据库,避免资源浪费
            client.close();
        });
    });
};
//find()查询
exports.find=(collectionName,query)=>{
    return new Promise(async(resolve,reject)=>{
        let {col,client} = await connect(collectionName);
        col.find(query).toArray((err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:"查询失败",
                    data:err
                });
                // reject(result);
                return;
            }else{
                resolve({
                    code:1,
                    msg:"查询所有",
                    data:result
                });
                // resolve(result);
            }
            //关闭数据库,避免资源浪费
            client.close();
        });
    });
};

//增
exports.insert=(collectionName,data)=>{
    return new Promise(async(resolve,reject)=>{
        let {col,client} = await connect(collectionName);
        //col.insertMany();
        col[Array.isArray(data)?'insertMany':'insertOne'](data,(err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:"插入失败",
                    data:err
                });
                // reject(result);
                return;
            }else{
                resolve({
                    code:1,
                    msg:"插入成功",
                    data:result
                });
                // resolve(result);
            }
            //关闭数据库,避免资源浪费
            client.close();
        });
    });
};

//删
exports.delete=(collectionName,query)=>{
    // console.log(query._id.split(",").length);
    // if(query._id){
    //     if(query._id.split(",")>1){

    //     }else{
    //         query = {_id:ObjectID(query._id)}
    //     }
    // }
    return new Promise(async(resolve,reject)=>{
        let {col,client} = await connect(collectionName);
        if(query._id){
            query = {_id:ObjectID(query._id)}
        }
        col[Array.isArray(query)?'deleteMany':'deleteOne'](query,(err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:"删除失败",
                    data:err
                });
                // reject(result);
                return;
            }else{
                resolve({
                    code:1,
                    msg:"删除成功",
                    data:result
                });
                // resolve(result);
            }
            //关闭数据库,避免资源浪费
            client.close();
        });
    });
};

//改
exports.update=(collectionName,query,data)=>{
    return new Promise(async(resolve,reject)=>{
        let {col,client} = await connect(collectionName);
        if(query._id){
            query = {_id:query._id}
        }
        col[Array.isArray(data)?'updateMany':'updateOne'](query,{$set:data},(err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:"更新失败",
                    data:err
                });
                // reject(result);
                return;
            }else{
                resolve({
                    code:1,
                    msg:"更新成功",
                    data:result
                });
                // resolve(result);
            }
            //关闭数据库,避免资源浪费
            client.close();
        });
    });
};
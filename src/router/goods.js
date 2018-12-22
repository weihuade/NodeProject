//把路由封装成模块

const express = require("express");
const bodyParser = require("body-parser");

let urlencodedParser = bodyParser.urlencoded({extended:false});
let Router = express.Router();
const db = require("../db");

//查询所有数据,所以query传回去的是判断条件{}
// Router.get("/",async(req,res)=>{
//     console.log(req.query);//{ mth: '', flag: 'false', page: '1', qty: '2' }
//     let {mth,flag,page,qty} = req.query;
    
//     let data;
//     try {
//         data = await db.find("goodslist",{});
//     } catch (err) {
//         data = err;
//     }
//     res.send(data);
// });

/**
 *      let {mth,flag,page,qty} = data;
        // console.log(typeof(data),data);
        // console.log(mth,flag,page,qty);
        let query;
        if(mth){
            if(flag){//降序
                query = `find().sort({${mth}:-1}).skip((${page}-1)*${qty}).limit(${qty})`;
            }else{
                query = `find().sort({${mth}:1}).skip((${page}-1)*${qty}).limit(${qty})`;
            } 
        }else{//默认方式即初始化时的查询语句
            query = `find().skip((${page}-1)*${qty}).limit(${qty})`;
        }
        console.log(query);//find().skip((1-1)*2).limit(2)
       
        //find().skip((1-1)*2).limit(2)
        //col['insertMany']()
        //col.insertMany();
        //col['find().skip((1-1)*2).limit(2)'] */
Router.route("/")
    .get(async(req,res)=>{
        // console.log(req.query);//{ mth: 'o_price', flag: 'true', page: '1', qty: '2' }
        let data;
        let sum;
        let {category,mth,flag,page,qty} = req.query;
        [flag,page,qty] = [flag,page*1,qty*1];
        let rank;
        // console.log("flage:",flag);
        
        if(category){//如果前端选择分类
            quy = {category:category};
            // sum = await db.page("goodslist",{category:category});
        }else{//如果没有选择分类或者是选择全部
            quy = {};
            // sum = await db.find("goodslist",{});
        }

        if(mth){//排序分支
            if(flag=='true'){//升序
                rank = 1;
                data = await db.sort("goodslist",{quy,mth,rank,page,qty});
            }
            if(flag=='false'){//降序
                rank = -1;
                data = await db.sort("goodslist",{quy,mth,rank,page,qty});
            }
        }
        else{//默认分支(不排序)
            data = await db.page("goodslist",{quy,mth,flag,page,qty});
        }
        sum = await db.find("goodslist",quy);
        // console.log(sum);
        res.send({data,sum});
    })
    .post(urlencodedParser,async(req,res)=>{
        let data;
        try {
            data = await db.update("goodslist",{},{...req.body});
        } catch (err) {
            data = err;
        }
        res.send(data);
        // res.send({
        //     type:"post",
        //     msg:"修改商品信息",
        //     gid:req.params.gid
        // });
    })
    .put(urlencodedParser,async(req,res)=>{
        // console.log(req);
        let data;
        try {
            //先扩展req.body,再插入time
            data = await db.insert("goodslist",{...req.body,create_time:Date.now()});
        } catch (err) {
            data = err;
        }
        res.send(data);
        // res.send({
        //     type:"put",
        //     msg:"增加商品信息",
        //     gid:req.params.gid
        // });
    })
    .delete(urlencodedParser,(req,res)=>{
        // res.send({
        //     type:"delete",
        //     msg:"删除商品",
        //     _id:req.body//{_id: "5c19fb90b85a1f855b3c9c8b"}
        // });
        // console.log(typeof(req.body),req.body);
        let data; 
        try {
            data = db.delete("goodslist",{...req.body});
        } catch (err) {
            data = err;
        }
        res.send(data);
    }) 

module.exports = Router;
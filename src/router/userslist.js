//用户列表的后台系统
const express = require('express');
const mongodb = require('mongodb');
let Router = express.Router();

const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
const MongoClient = mongodb.MongoClient;
const db = require('../db');

//1、查询进行渲染
Router.get('/select',async (req,res)=>{
    //获取所有分类

    let data
    try{
        data = await db.find('administrator',{});
    }catch(err){
        data = err;
    }

    res.send(data);
});



//3.删除单行的路由
Router.delete('/del',urlencodedParser,async(req,res)=>{
    let data
//  console.log(req.query);
    console.log(req.body);
    try{
        data = await db.delete('administrator',req.body);//什么用条件查询进行删除
    }catch(err){
        data = err;
    }

    res.send(data);
})


//删除多行的路由
Router.delete('/deleteall',urlencodedParser,(req,res)=>{
    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        //连接成功后执行这个回调函数

        // 使用某个数据库，无则自动创建
        let db = database.db('nodeproject');
	
        // 使用集合
        let user = db.collection('administrator');
  			
        // 删除所有gid等于2的数据。
        user.deleteMany({"gid":'2'},(err,result)=>{
//      	console.log(result)
            if(result){
                res.send({
                    code:1,
                    data:result,
                    msg:'ok'
                })
            }else{
                res.send({
                    code:0,
                    data:[],
                    msg:'fail'
                })
            }
        });

        // 关闭数据库，避免资源浪费
        database.close();

    });
});






module.exports = Router;
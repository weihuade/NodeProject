const express = require('express');
let Router = express.Router();//路由
const mongodb = require('mongodb');
const ObjectID=mongodb.ObjectID;
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });//中间件

const db = require('../db');//引入db文件夹中的封装文件。
const MongoClient = mongodb.MongoClient;

//插入用户的所有信息。
Router.put('/adduser1',urlencodedParser,async(req,res)=>{
//	console.log(req.body)
    let data
    try{
    	//add_time:Date.now()添加时间
        data = await db.insert('username',{...req.body,add_time:new Date()});//username为集合的名称
    }catch(err){
        data = err;
    }
	
    res.send(data);
})




//查询一条数据：

Router.post('/slecteone',urlencodedParser,(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
// let{id}=req.body;//得到前端传过来的id

// let ObjectID = require('mongodb').ObjectID;//传成对象不然匹配不了数据库里的东西。
    var whereStr = {_id:ObjectID(req.body.id)};  // 查询条件
    dbo.collection("username").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
//      console.log(result);
          if(result){
                res.send({
                    code:1,
                    data:result,
                    msg:'ok'
                })
            }
            else{
                res.send({
                    code:0,
                    data:[],
                    msg:'fail'
                })
            }
        
        
        db.close();
   		 });
	});

});



//更新数据
//4.更改的路由
Router.post('/upadata',urlencodedParser,async(req,res)=>{
  var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 console.log(req.body)
 let{use,nichen,pass,repass,phon,xingbie,email1,beizhu1}=req.body;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    var whereStr = {_id:ObjectID(req.body.idx)};  // 查询条件 
	
	

    var updateStr = {$set: { "use" :req.body.use,
    						"nichen":req.body.nichen,
    						"pass":req.body.pass, 
    						"repass":req.body.repass,
    						"phon":req.body.phon,
    						"xingbie":req.body.xingbie,
    						"email1":req.body.email1,
    						"beizhu1":req.body.beizhu1
    	 }
    };
   	
   	dbo.collection("username").updateOne(whereStr, updateStr, function(err, result) {
        if (err) throw err;
         if(result){
                res.send({
                    code:1,
                    data:result,
                    msg:'ok'
                })
            }
            else{
                res.send({
                    code:0,
                    data:[],
                    msg:'fail'
                })
            }
        
        
        db.close();
    	});
	});
})




module.exports = Router;
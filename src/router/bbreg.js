const express = require('express');
let Router = express.Router();//路由
const mongodb = require('mongodb');
const ObjectID=mongodb.ObjectID;
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });//中间件
const MongoClient = mongodb.MongoClient;


//检测用户名是否存在（查询一条数据如果存在就返回一个东西给前端以利于判断。）
Router.post('/checkname',urlencodedParser,(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    let user=Number(req.body.use); 
    let conllect="username";
//  getTotal(conllect,user);
//  function getTotal(names,uses){
//  	return new Promise((resolve,reject)=>{
//  		let countNum=db.collection(names).find("name":uses)
//  	})
//  }
//  
//var whereStr = {"name":`${req.body.use}`};  // 查询条件
  //find({"name":18377852269})中这种结构才能查到结果。
    dbo.collection("username").find({"name":Number(req.body.use)}).toArray(function(err, result) {
        if (err) throw err;
       
       	//当返回的值不为空的时候就是说明有数据存在了
       	if(result){
                res.send({
                    code:0,
                    msg:'fail'
                })
            }
            else{
            	res.send({
                    code:1,
                    msg:'ok'
                })
            }
        
        
        db.close();
   		 });
	});

});



module.exports = Router;
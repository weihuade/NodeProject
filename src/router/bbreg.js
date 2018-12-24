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
// console.log(req.body.use)
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    console.log(req.body.use)
    var whereStr = {"name":req.body.use};  // 查询条件
    dbo.collection("username").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        console.log(result)
          if(true){
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
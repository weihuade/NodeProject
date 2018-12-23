const express = require('express');
const mongodb = require('mongodb');
let Router = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
const MongoClient = mongodb.MongoClient;
const db = require('../db');//引入db文件夹中的封装文件。

//查询一条数据。
Router.post('/slecteone',urlencodedParser,(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
// console.log(req.body)
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    var whereStr = {"gid":req.body.idx};  // 查询条件
    dbo.collection("goodsxuanran").find(whereStr).toArray(function(err, result) {
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

});



//插入数据。
Router.post('/inserttocar',urlencodedParser,async(req,res)=>{
console.log(req.body)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    var myobj = {
    	dianming:req.body.dianming1,
    	urlimg1:req.body.urlimgc,
    	yangshi:req.body.yang,
    	danjia:req.body.danjiac,
    	shuliang:req.body.shuliangc,
    	title:req.body.titlec
    };
    dbo.collection("cars").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});



});



module.exports=Router;
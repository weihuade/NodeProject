const express = require('express');
const mongodb = require('mongodb');
let Router = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
const MongoClient = mongodb.MongoClient;





//渲染的部分
Router.post('/cars',urlencodedParser,async(req,res)=>{

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    dbo.collection("cars"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        if(result){
                res.send({
                    code:1,
                    data:result,
                    msg:'ok'
                })
            }
        db.close();
    });
});




});


//数量的加减更新
Router.post('/updatanum',urlencodedParser,(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 console.log(req.body.valss)
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    var whereStr = {"danjia":req.body.jiage};  // 查询条件
    var updateStr = {$set: { "shuliang":req.body.valss}};
    dbo.collection("cars").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
//      console.log("文档更新成功");
        db.close();
    	});
	});
});


//删除当行

Router.post('/delnow',urlencodedParser,(req,res)=>{
	var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    var whereStr = {"danjia":req.body.jiage};  // 查询条件
    dbo.collection("cars").deleteOne(whereStr, function(err, obj) {
        if (err) throw err;
     
        db.close();
    	});
	});
});

//全部删除
Router.post('/delall',urlencodedParser,(req,res)=>{
	var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    var whereStr = {"danjia":{$gt:'0'}};  // 查询条件
    dbo.collection("cars").deleteMany(whereStr, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " 条文档被删除");
        db.close();
    });
});
});




module.exports=Router;
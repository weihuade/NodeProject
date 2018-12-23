//贝贝网首页的后台
const express = require('express');
const mongodb = require('mongodb');
let Router = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
const MongoClient = mongodb.MongoClient;

const db = require('../db');


Router.post('/select',urlencodedParser,(req,res)=>{
let qty=req.body.qty*1;
let page=req.body.page*1;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("nodeproject");
    dbo.collection("list").find({}).skip((page-1)*qty).limit(qty).toArray(function(err, result) { // 返回集合中所有数据
       if (err) throw err;
          if(result){
                res.send({
                    code:1,
                    data:result,
                    msg:'ok',
           			page:page,
           			qty:qty
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




//查询所有数据的路由为了得到总条数。
Router.get('/selectall',async (req,res)=>{
    //获取所有分类

    let data
    try{
        data = await db.find('list',{});
    }catch(err){
        data = err;
    }
	
    res.send(data);
});



// http://www.runoob.com/mongodb/mongodb-sort.html    排序的问题
//价格升序
Router.post('/price',urlencodedParser,(req,res)=>{
let qty=req.body.qty*1;
let page=req.body.page*1;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("nodeproject");
    dbo.collection("list").find({}).skip((page-1)*qty).limit(qty).sort({priceint:1}).toArray(function(err, result) { // 返回集合中所有数据
       if (err) throw err;
          if(result){
                res.send({
                    code:1,
                    data:result,
                    msg:'ok',
           			page:page,
           			qty:qty
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



Router.post('/zonghe',urlencodedParser,(req,res)=>{
let qty=req.body.qty*1;
let page=req.body.page*1;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("nodeproject");
    dbo.collection("list").find({}).skip((page-1)*qty).limit(qty).sort({id:-1}).toArray(function(err, result) { // 返回集合中所有数据
       if (err) throw err;
          if(result){
                res.send({
                    code:1,
                    data:result,
                    msg:'ok',
           			page:page,
           			qty:qty
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



//销量
Router.post('/xiaoliang',urlencodedParser,(req,res)=>{
let qty=req.body.qty*1;
let page=req.body.page*1;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("nodeproject");
    dbo.collection("list").find({}).skip((page-1)*qty).limit(qty).sort({xiaoliang:-1}).toArray(function(err, result) { // 返回集合中所有数据
       if (err) throw err;
          if(result){
                res.send({
                    code:1,
                    data:result,
                    msg:'ok',
           			page:page,
           			qty:qty
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


module.exports = Router;
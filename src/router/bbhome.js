//贝贝网首页的后台
const express = require('express');
const mongodb = require('mongodb');
let Router = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
const MongoClient = mongodb.MongoClient;

const db = require('../db');

//查询所有数据的路由
Router.post('/select',urlencodedParser,(req,res)=>{

let qty=req.body.qty*1;
let page=req.body.page*1;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeproject");
    dbo.collection("index").find({}).skip((page-1)*qty).limit(qty).toArray(function(err, result) { // 返回集合中所有数据
       console.log(req.body);
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


Router.get('/selectall',async (req,res)=>{
    //获取所有分类

    let data
    try{
        data = await db.find('index',{});
    }catch(err){
        data = err;
    }

    res.send(data);
});



module.exports = Router;
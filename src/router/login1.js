const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

let Router = express.Router();
let app=express();
// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;
let urlencodedParser = bodyParser.urlencoded({ extended: false })



Router.post('/login',urlencodedParser,(req,res)=>{
   let {username1,password1} = req.body;
  console.log(req.body)
   	
    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        //连接成功后执行这个回调函数

        // 使用某个数据库，无则自动创建
        let db = database.db('nodeproject');
	
        // 使用集合
        let user = db.collection('administrator');
        
        // 处理password为数字的情况,处理username为数字的情况
//       username = isNaN(username) ? username : username*1;
//      password1 = isNaN(password1) ? password1 : password1*1;

        // 查询是否存在数据
        user.findOne({use:username1,pass:password1},(err,result)=>{
//	console.log(result)
            if(result){
                // 登录成功后，给前端发送用户表示：token
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
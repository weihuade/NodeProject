const express = require('express');
let Router = express.Router();//路由

const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });//中间件

const db = require('../db');//引入db文件夹中的封装文件。


//插入用户的所有信息。
Router.put('/adduser1',urlencodedParser,async(req,res)=>{console.log(req.body)
    let data
    try{
    	//add_time:Date.now()添加时间
        data = await db.insert('username',{...req.body,add_time:new Date()});//username为集合的名称
    }catch(err){
        data = err;
    }
	
    res.send(data);
})

module.exports = Router;
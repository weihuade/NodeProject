//把路由封装成模块。
const express=require('express');
//引入单独路由模块。
const loginRouter = require('./login1')//引入登录的后台

const adduserRouter = require('./adduser')//引入添加用户的后台。

let Router=express.Router();

// 关于登录的路由
Router.use('/login1',loginRouter);

//关于添加用户的路由
Router.use('/adduser',adduserRouter);

module.exports=Router;
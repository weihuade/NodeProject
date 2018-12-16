//把路由封装成模块。
const express=require('express');
//引入单独路由模块。
const login1 = require('./login1')

let Router=express.Router();

// 关于登录的路由
Router.use('/login1',login1)

module.exports=Router;
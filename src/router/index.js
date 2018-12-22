//把路由封装成模块。
const express=require('express');
//引入单独路由模块。
const loginRouter = require('./login1')//引入登录的后台

const adduserRouter = require('./adduser')//引入添加用户的后台。

const userslistRouter = require('./userslist')//引入用户列表的后台


let Router=express.Router();

Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// 关于登录的路由
Router.use('/login1',loginRouter);

//关于添加用户的路由
Router.use('/adduser',adduserRouter);


//关于用户列表的路由
Router.use('/userslist',userslistRouter);


module.exports=Router;
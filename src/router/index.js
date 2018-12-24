//把路由封装成模块。
const express=require('express');
//引入单独路由模块。
const loginRouter = require('./login1')//引入登录的后台

const adduserRouter = require('./adduser')//引入添加用户的后台。

const userslistRouter = require('./userslist')//引入用户列表的后台
const  goodsRouter=require('./goods');//引入goodsde后台。

const  bbhoemRouter=require('./bbhome');//引入贝贝网首页的后台
const bblistRouter=require('./bblist') //贝贝网列表页。
const bbgoodsRouter=require('./bbgoods') //贝贝详情页。
const bbcarsRouter=require('./bbcars') //贝贝购物车。
const bbregRouter=require('./bbreg') //贝贝注册页。



const editGoodsRouter = require("./editGoods"); 

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



//贝贝网首页的路由
Router.use('/bbhome', bbhoemRouter);


Router.use("/goods",goodsRouter);//商品列表的路由 

Router.use("/editGoods",editGoodsRouter);//商品添加页面的路由

//贝贝网列表页的路由
Router.use('/bblist', bblistRouter);
//贝贝网详情页的路由
Router.use('/bbgoods', bbgoodsRouter);
//贝贝购物车
Router.use('/bbcars', bbcarsRouter);
Router.use('/bbreg', bbregRouter);


module.exports=Router;
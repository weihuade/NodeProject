//把路由封装成模块。
const express=require('express');
//引入单独路由模块。
const userRouter=require('./user');
const goodsRouter=require('./goods');
const login1 = require('./login1')

let Router=express.Router();

Router.get('/home',(req,res)=>{
	res.send('home');
	
});
// 关于用户的路由
Router.use('/user',userRouter);
// 关于商品的路由
Router.use('/goods',goodsRouter);

// 关于登录的路由
Router.use('/login1',login1)

module.exports=Router;
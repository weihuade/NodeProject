<<<<<<< HEAD
﻿//把路由封装成模块
=======
//把路由封装成模块
>>>>>>> 9ce76790f66f228d51186aa72eee7b838fd5b499

const express = require("express");
const bodyParser = require("body-parser");

let urlencodedParser = bodyParser.urlencoded({extended:false});
let Router = express.Router();
<<<<<<< HEAD
const db = require("../db/goodsindex");
=======
const db = require("../db");
>>>>>>> 9ce76790f66f228d51186aa72eee7b838fd5b499


Router.route("/")
    .get(async(req,res)=>{//查询获取数据
    // console.log(req.query);
    let data;
    try {
        data = await db.find("goodslist",{...req.query});
    } catch (err) {
        data = err;
    }
    res.send(data);
    })
    .post(urlencodedParser,async(req,res)=>{//修改数据
        // console.log(req.body);
        let data;
        try {
            data = await db.update("goodslist",req.body,{...req.body});
        } catch (err) {
            data = err;
        }
        res.send(data);
    })
    .put(urlencodedParser,async(req,res)=>{//插入数据
        // console.log(req);
        let data;
        try {
            //先扩展req.body,再插入time
            data = await db.insert("goodslist",{...req.body,create_time:new Date()});
        } catch (err) {
            data = err;
        }
        res.send(data);
    })

module.exports = Router;
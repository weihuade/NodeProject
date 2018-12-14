const express=require('express');

let Router=express.Router();

Router.get('/',(req,res)=>{
	res.send('user list');
	
});

Router.get('/:username',(req,res)=>{
	res.send({
			path:req.url,
			username:req.params.username
	});
	
});

module.exports=Router;
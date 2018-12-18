
let username=document.querySelector('.username');
let password=document.querySelector('.password');
let yanzhengma=document.querySelector('.yanzhengma');
let suiji=document.querySelector('.suiji');
let loginbtn=document.querySelector('.loginbtn');
let tishi=document.querySelector('.tishi');
let isok1=false;
let butto=document.querySelector('.butto')
//随机验证码

suiji.onclick=function(){
			suiji.innerHTML=randomNum();
		}
	//封装一个函数生成随机数
			function randomNum(){
				var num='';
				for(var i=0;i<4;i++){
					num+=parseInt(Math.random()*10);//0-9之间的随机数
				}
				return num;
			}

yanzhengma.onblur=function(){
		var val=yanzhengma.value.trim();
		var spa=suiji.innerText;
		if(val){
			if(val==spa){
				isok1=true;
				tishi.innerHTML='您输入的验证码正确';
				tishi.style.color='green';
			}else{
				tishi.innerHTML='请您输入正确的验证码';
				tishi.style.color='red';
			}
		}
	}
	



let status = [200,304];

//当点击登录按钮的时候发送请求。
	loginbtn.onclick=(e)=>{
	let _username = username.value.trim();
    let _password = password.value.trim();
	
	if(_username&&_password&&isok1){
		let xhr = new XMLHttpRequest();
		 xhr.onload = ()=>{
                    if(status.includes(xhr.status)){
                    	
                        let res = JSON.parse(xhr.responseText);
                        console.log(res)
                        if(res.code ==1){
                        	alert('登录成功。')
                            location.href ="index.html";
                            
                        }else{
          
							alert('请输入正确的账户、密码以及验证码!')
                        }
                    }
                }
	  xhr.open('post','/login1/login',true);//这里的路径（关于登录的路由index.js和login1中那里所对应的路径）
	  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	  xhr.send(`username1=${_username}&password1=${_password}`);
	}else{
		alert('请填入完整信息')
	}
	  

}


//当点击按钮的时候存账户和密码。
let isok2=false;
butto.onclick=()=>{
	isok2=true;
	let _username = username.value.trim();
    let _password = password.value.trim();
    let now=new Date();
	now.setDate(now.getDate()+7);
   Cookie.set('name',_username,{'expires':now});
   Cookie.set('psw',_password,{'expires':now});
 
}
 	let name=Cookie.get('name');
	let pwdval=Cookie.get('psw');
	if(name)  username.value=name;
	if(pwdval)  password.value=pwdval;
	

window.onload=function(){
	
	
	
var inner = document.getElementsByClassName('inner')[0];
var outer=document.querySelector('#outer');
var flex = document.getElementsByClassName('flex_box')[0];
var span = outer.getElementsByTagName('span')[0];
 var isok1=false;
inner.onmousedown = function(e) {
					var e_x = e.offsetX;
					//鼠标按下然后移动
					document.onmousemove = function(e) {
						var x = e.clientX - outer.offsetLeft - e_x;
						var max = outer.offsetWidth - inner.offsetWidth;
						if(x < 0) {
							x = 0;
						}
						if(x >= max) {
							x = max;
						}

						inner.style.left = x + 'px';
						flex.style.width = x + 'px';
						if(x == max) { //如果拖动到底
							span.className = 'pass';
							span.innerHTML = '验证通过!';
							inner.innerHTML = "&radic;";
							isok1 = true;
//							inner.onmousedown = null;
							document.onmousemove = null;
						}
					}
					//鼠标松开
					document.onmouseup = function() {
						if(isok1) {
							return;
						} else {
							inner.style.transition = 'left 0s linear';
							inner.style.left = 0;
							flex.style.transition = 'width 0s linear';
							flex.style.width = 0;
						}
						document.onmousemove = null;
					}
				}
	
	
	
	
	var phonenum=document.querySelector('.phonenum');
	var pass=document.querySelector('.pass');
	var login=document.querySelector('.login');
	
	login.onclick=function(){
		var val=phonenum.value.trim();
		var pa=pass.value.trim();
		if(val&&pa&&isok1){
			var	url='../api/login.php';
			var data=`username=${val}&psw=${pa}`;
			ajax('POST',url,data,function(str){
				console.log(str);
				if(str=='yes'){
					
					alert('登录成功');
					Cookie.set('name',val,{path:'/'})
					location.href='../index.html';
					
				}else{
					alert('请输入正确的用户名或密码')
				}
			});
		}else('请将信息填写完整。')
	}
}

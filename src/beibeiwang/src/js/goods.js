
window.onload=function(){
		//商家的下拉菜单
		$('.shangjia').mousemove(function(){
		$('.top-r1').css({
			'display':'block',
			'transition':'1s',
			'background':'#ffffff',
			'border':'1px solid #ccc',
			'border-top':'none',
			'transition':'2s',
			
		});
		
		$('.shangjia').css('background','#ffffff').css('border','1px solid #ccc').css('border-top','none');
	});
		$('.shangjia').mouseout(function(){
		$('.top-r1').css('display','none');
		$('.shangjia').css('background','#f4f4f4').css('border','none');
	});
	
	//帮助的下拉菜单
	$('.bangzhu').mousemove(function(){
		$('.bangzhu2').css({
			'display':'block',
			'background':'#ffffff',
			'z-index':'1000',
			
		});
		$('.bangzhu').css({
			'background':'#ffffff',
			'border':'1px solid #ccc',
		});
	});
	//离开的时候
	$('.bangzhu').mouseout(function(){
		$('.bangzhu2').css('display','none');
		$('.bangzhu').css({
			'background':'#f4f4f4',
			'border':'none'
		});
	});
	
	//关注下拉菜单
	$('.guanzhu').mousemove(function(){
		$('.guanzhu1').css({
			'display':'block',
			'background':'white',
				
		});
		$('.guanzhu').css({
			'background':'#ffffff',
			'border':'1px solid #ccc',
			'border-bottom':'1px solid white',
			'z-index':'100'
		});
	});
	//离开的时候
	$('.guanzhu').mouseout(function(){
		$('.guanzhu1').css({
			'display':'none'
		});
		$('.guanzhu').css({
			'border':'none',
			'background':'#f4f4f4'
		});
	});
	
	
	//我的购物车那里
	$('.beibei-r1').mousemove(function(){
		$('.gouwuche').css({
			'display':'block',
			});
		$('.beibei-r1').css({
			'border-bottom-right-radius':'0'
		});
	});
	$('.beibei-r1').mouseout(function(){
		$('.gouwuche').css({
			'display':'none',
		});
		$('.beibei-r1').css({
			'border-bottom-right-radius':'10px'
		});
	});
	
	//侧栏广告回到顶部等。
	$('.cgouwu').mousemove(function(){
		$('.cgouwuche').css({
			'display':'block',
		});
		$('.cgouwu').css({
			'background':'#ff647c'
		});
		
	});
	//离开的时候
	$('.cgouwu').mouseout(function(){
		$('.cgouwuche').css({
			'display':'none',
		});
		$('.cgouwu').css({
			'background':'#ffffff'
		});
		
	});
	
	//手机
		$('.cshouji').mousemove(function(){
		$('.phone1').css({
			'display':'block'
			});
		$('.cshouji').css({
			'background':'#ff647c'
		});
		
		});
		
		$('.cshouji').mouseout(function(){
		$('.phone1').css({
			'display':'none'
			});
		$('.cshouji').css({
			'background':'#ffffff'
		});
		
		});
		
		//客服在线
		$('.gfzx').mousemove(function(){
			$('.gfzx-img').css({
				'display':'none'
			});
			$('.gfzx').css({
				'background':'#ff647c',
			});
			$('.gfzx-span').css({
				'display':'block'
			});
		});
		//离开的时候
		$('.gfzx').mouseout(function(){
			$('.gfzx-span').css({
				'display':'none',
			});
			$('.gfzx-img').css({
				'display':'block',
				'text-aline':'center'
			});
			$('.gfzx').css({
				'background':'#ffffff'
			});
			
		});
		
		
		//回到顶部
		$('.totop').mousemove(function(){
			$('.totop-img').css({
				'display':'none'
			});
			$('.totop-span').css({
				'display':'block'
			});
			$('.totop').css('background','#ff647c')
		});
		
		//离开的时候
		$('.totop').mouseout(function(){
			$('.totop-img').css({
				'display':'block'
			});
			$('.totop-span').css({
				'display':'none'
			});
			$('.totop').css('background','#ffffff')
		});
		
		//回到顶部的按钮
		window.onscroll = function() {
			var scrollTop = window.scrollY;
		}
		$('.totop').click(function(){
			window.scrollTo(0,0);
		});
		
		
		//在售分类的下拉菜单部分
		
		$('.liebiao').mousemove(function(){
			$('.fenkuai').css({
				'display':'block'
			});
			$('.liebiao').css('background','#f34660');
		});
		$('.liebiao').mouseout(function(){
			$('.fenkuai').css({
				'display':'none'
			});
			$('.liebiao').css('background','#ff647c');
		});
		
		//选项卡部分
		  $('.fenlei li').mousemove(function(){
                   //排他，清除所有
                   $('.fenlei li').attr('class','');
                   //当前的高亮显示
                   $(this).attr('class','active');
                   //div跟着切换
                   $('.fenlei-r .con').css('display','none');
                   $('.fenlei-r .con').eq($(this).index()).css('display','block');
              });
              
			 
 			    //吸顶菜单
           	var hei=document.getElementsByClassName('xiding1')[0];
           	var top=hei.offsetTop;
//          console.log(top);
            window.onscroll=function(){
					//获取滚动距离
					var scrollTop=window.scrollY;
					if(scrollTop>=top){
						hei.classList.add('menu');
						$('.xiding1 .qianggou').css('display','block');
					}else{
						hei.classList.remove('menu');
						$('.xiding1 .qianggou').css('display','none');
					}
				}
            
            
            
           //尺码那里
           $('.yanse2 ul li a').click(function(){
           	 $('.yanse2 ul li a').attr('class','');	
            $('.yanse2 ul li a div:nth-child(2)').attr('class',''); 
              $('.yanse2 ul li a i:nth-child(3)').attr('class','');
           
			$(this).attr('class','addbiank');		
           	$(this).children().eq(1).attr('class','current-box');
             $(this).children().eq(2).attr('class','dagou'); 
           });
            
            
            
            //颜色那块当点击的时候右下角和边框固定住。(有问题的)
          	  $('.yanse1-2 li a').click(function(){
                 
                  	 //排他，清除所有

                   	$('.yanse1-2 li a').attr('class','');
                   	$('.yanse1-2 li a div:nth-child(3)').attr('class',''); 
                   	$('.yanse1-2 li a i:nth-child(4)').attr('class','');
                   //当前的高亮显示
                   $(this).attr('class','addbiank');
               		$(this).children().eq(2).attr('class','current-box');
                	$(this).children().eq(3).attr('class','dagou'); 
             });
 
 
 					//加减数量
 				
 				$('.jia').click(function(){
 					var val=$(this).prev().val();
 					val++;
 					if(val>=5){
 						val=5;
 						$('.noticeMaxBuy').css('display','block');
 					}
 					$(this).prev().val(val);
 				});
 				
 				
 				//减
 			$('.jian').click(function(){
 				var val=$(this).next().val()
 				val--;
 				if(val<=1){
 					val=1;
 					$('.noticeMaxBuy').css('display','none');
 				}
 				
 				val=$(this).next().val(val);
 			});
 			
 			
 			
 			
 			//放大镜部分
 			
 			//接收列表页转过来的id
 			var res=(location.search).slice(1)
 			var id=res.split('=')[1];
			var price1=document.querySelector('.price1');
 			var url='../api/goods.php';
 			data=`idx=${id}`;
 			ajax('GET',url,data,function(str){
 			var arr=JSON.parse(str);
				
 				var arrSmall =[];
				var arrBig = [];
 			for(var i=0;i<arr.length;i++){
 				arrSmall.push(arr[i].imgurl);
				arrBig.push(arr[i].imgurl);
		}
 			
 				price1.innerHTML=arr[0].priceint+'.00';
 				
 			
			
			//渲染数据	
			var html='';
			for(var i=0;i<arrSmall.length;i++){
				html+=`<li><img src="${arrSmall[i]}" data-lsrc="${arrSmall[i]}" data-maxSrc="${arrBig[i]}"></li>`;
			}
//			console.log(html);
			$('#MagnifierWrap2 .spec-items ul').html(html);//生成节点
			$('#MagnifierWrap2 .spec-items ul li').eq(0).addClass('on');//第一个li样式为on
			
			//第一个大图的渲染
			var str=`<img class="MagTargetImg" src="${arrSmall[0]}" data-src="${arrBig[0]}">`;
			$('#MagnifierWrap2 .MagnifierMain').html(str);
			
			//调用放大镜插件：传最大盒子id即可
			MagnifierF("MagnifierWrap2");
 			
 			
 			});
 			
// 			
// 		曲线运动
// 		var buyalong=document.querySelector('.buyalong');
// 		var paowuxian=document.querySelector('.paowuxian');
// 				var tspeed=0;//加速
//				var lspeed=50;//减速
// 				var timer=null;	
// 		buyalong.onclick=function(){
// 	
// 		timer=setInterval(function(){
//			var t=paowuxian.offsetTop;
//			console.log(t);
//			var l=paowuxian.offsetLeft;
//			
//			l+=lspeed;
//			tspeed+=5;//加速
//			t+=tspeed;//步长
//			
//			
//			if(t>=window.innerHeight-paowuxian.offsetHeight){
//				clearInterval(timer);
//			t=window.innerHeight-paowuxian.offsetHeight;
//			}
//			
//			paowuxian.style.top=t+'px';
//			paowuxian.style.left=l+'px';
//			},100);
// 	}
// 			
 		
 			
 			
 			
 			
 			
 			//获取id并且将得到的数据插入到cars表中。
 			
 			
 			var buyalong=document.querySelector('.buyalong');
   			buyalong.onclick=function(){
   			ajax('GET',url,data,function(str){
   				var arr=JSON.parse(str);
   				console.log(arr);
   				
   				var num=$('.num').val();
//		  	 	console.log(num);
   				var url1='../api/inserttocars.php';
				var data1=`dianming1=${arr[0].dianming}&urlimgc=${arr[0].imgurl}&titlec=${arr[0].title1}&yang=${arr[0].yangshi}&danjiac=${arr[0].priceint}&shuliangc=${num}`;				
   				ajax('GET',url1,data1,function(str1){
// 				console.log(str1);
   				
   					});
   				
   			});
   		}
   			
   			
};

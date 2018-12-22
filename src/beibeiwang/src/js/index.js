
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
           	var hei=document.getElementsByClassName('sub-nav')[0];
           	var top=hei.offsetTop;
//          console.log(a)
            window.onscroll=function(){
					//获取滚动距离
					var scrollTop=window.scrollY;
					if(scrollTop>=top){
						hei.classList.add('menu');
						$('.sub-nav .sub-nav-logo').css('display','block');
						$('.sub-nav .yugao').css('display','none');
						$('.sub-nav .feiji').css('display','block');
						$('.sub-nav .dianzan').css('display','block');
					}else{
						hei.classList.remove('menu');
						$('.sub-nav .sub-nav-logo').css('display','none');
						$('.sub-nav .yugao').css('display','block');
						$('.sub-nav .feiji').css('display','none');
						$('.sub-nav .dianzan').css('display','none');
					}
					
					
				}
              
              
           //右侧选项卡部分的js
           $('.temai_r2 .J_sort li').mousemove(function(){
                   //排他，清除所有
                   $('.temai_r2 .J_sort .active2').attr('class','');
                   //当前的高亮显示
                   $(this).attr('class','active2');
                   //div跟着切换
                   $('.temai_r2 .con2').css('display','none');
                   $('.temai_r2 .con2').eq($(this).index()).css('display','block');
              });
		        		
         //轮播图
        		sliderImg('slideimg', 'active1');
        		$('#slideimg').mousemove(function(){
        			$('#pis').css('opacity','1').css('transition','1s');
        		});
        		$('#slideimg').mouseout(function(){
        			$('#pis').css('opacity','0').css('transition','1s');
        		});
        		
        		
        		//渲染的封装
        		function xuanlan(arr){
					var res=arr.datalist.map(function(item){
						return`<li>
									<div class="img-hei">
										<img src="${item.imgurl}" />
									</div>
									<p class="title">${item.title}</p>
									<div class="price">
										<p class="cur-price">
											<span class="currency">￥</span>
											<span class="price-num">${item.priceint}</span>
											<span class="price-little">${item.pricefloat}</span>
										</p>
										<p class="old-price">${item.yuanjia}</p>
										<p class="discount-desc">${item.dazhe}</p>
									</div>
								</li>`;
					}).join('');
					haochi.innerHTML+=res;
				}
        		
        		var haochi=document.querySelector('.haochi');
        		
        		var url='api/index.php';
        		var data=`page=1&qty=12`;
        		ajax('GET',url,data,function(str){
        		var arr=JSON.parse(str);
//      		console.log(arr);
        			xuanlan(arr);
        		});
    			
    			//当点击的时候又加载一片。
    			var now=1;
    			
    			var morejiazai=document.querySelector('.morejiazai');
    			var	jiazai=document.querySelector('.jiazai')
    				morejiazai.onclick=function(){
    				now++
    				var url='api/index.php';
        			var data=`page=${now}&qty=12`;
    				ajax('GET',url,data,function(str){
    					var arr=JSON.parse(str);
//  					console.log(arr);
    					xuanlan(arr);
    					var num=Math.ceil(arr.total/arr.qty)
    				console.log(num);
    				if(arr.page>=num){
    					jiazai.style.display='none';
    				}else{
    					jiazai.style.display='block';
    				}
    				});
    				
    				
    			}
				
				
				
				//获取cookie
//		var name1=document.cookie.split('=')[1]
			var nihao=document.querySelector('.nihao');
			var cookies=document.querySelector('.cookies');
			var name1=Cookie.get('name');
			console.log(name1);
			if(name1){
				
				cookies.innerHTML=name1+'欢迎来到贝贝网';
				cookies.style.color='burlywood'
				nihao.style.display='none';
			}else{
				cookies.style.display='none';
				cookies.innerHTML='还没有设置cookie';
				nihao.style.display='block';
			}

}
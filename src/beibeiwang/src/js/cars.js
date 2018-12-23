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
	
	
	
//底部的菜单。
//			var queren=document.querySelector('.queren')
////			console.log(queren);
//         	var top=queren.offsetTop;
////         	console.log(top)
//          window.onscroll=function(){
//					//获取滚动距离
//					var scrollTop=window.scrollY;
////					console.log(scrollTop);
//					if(scrollTop>=top){
//						queren.classList.add('menu');
//						
//					}else{
//						queren.classList.remove('menu');
//					}
//				}
//	
	
	
	//购物车功能开始
	
	//1.加数量
	$('.view-CartList').on('click','.jia',function(){
		var val=$(this).prev().val();
		val++;
		if(val>=10){
			val=10;
		}
	
		var danjia=$(this).parent().parent().prev().find('.view-ItemEntryPrice').text();
		var url='/bbcars/updatanum';
		var data=`valss=${val}&jiage=${danjia}`;
		ajax('POST',url,data,function(str){});
		
		$(this).prev().val(val);
		price($(this));//小计
		var arr=checked();//判断哪行被选中，存到该数组中
		allnum(arr);
		allprice(arr);
	});
	
	
	//2.减数量
	$('.view-CartList').on('click','.jian',function(){
		var val=$(this).next().val();
		val--;
		if(val<=1){
			val=1;
		}
		var danjia=$(this).parent().parent().prev().find('.view-ItemEntryPrice').text();
		var url='/bbcars/updatanum';
		var data=`valss=${val}&jiage=${danjia}`;
		ajax('POST',url,data,function(str){});
		
		
		
		
		$(this).next().val(val);
		price($(this));
		var arr=checked();//判断哪行被选中，存到该数组中
		allnum(arr);
		allprice(arr);
	});
	
	
	
	//3.小计
	
function price(now){
	var pri=now.parent().parent().prev().find('.view-ItemEntryPrice').text();
	pri=$.trim(pri);//去掉前后空格
	
//	console.log(pri);

//获取数量
var all=now.parent().find('input').val();
//console.log(all);
var aprice=pri*all;//小计
now.parent().parent().next().html(aprice.toFixed(2));//赋值小计,.toFixed(2)保留两个小数
var pp=now.parent().parent().parent().next().find('.jiage1').html(aprice.toFixed(2));
}
	
	
	
	
	
	//4.删除当行
	$('.view-CartList').on('click','.del',function(){
		
		var res=confirm('您确定要删除该商品吗？');
		if(res){
		$(this).parent().parent().prev().prev().remove();	
		$(this).parent().parent().prev().remove();
		$(this).parent().parent().next().remove();	
		$(this).parent().parent().remove();	
		
		//做接口删除数据库中的东西。
			var danjia=$(this).parent().prev().prev().prev().find('.view-ItemEntryPrice').text();
			var url='/bbcars/delnow';
			var data=`jiage=${danjia}`;
			ajax('POST',url,data,function(str){	});
	
		
		
		}
		updata();
		var arr=checked();//判断哪行被选中，存到该数组中
		allnum(arr);
		allprice(arr);
		
	});
	
	
	
			//5.刷新

		function updata(){
			if($('.jia').size()==0){
				$('.queren').remove();
		}
			
			
	}
	
	//6.全选
	var isCheacked=true;
	$('.quanxuan').on('click',function(){
		if(isCheacked){
			$('.cart-td-check input').prop('checked','checked');
			$('.quanxuan input').prop('checked','checked');
		}else{
			$('.cart-td-check input').removeAttr('checked');
			$('.quanxuan input').removeAttr('checked');
		}
		isCheacked=!isCheacked;
		var arr=checked();//判断哪行被选中，存到该数组中
		allnum(arr);
		allprice(arr);
	});
	
	//7.删除多行
	$('.deleteall').on('click',function(){
		var arr=checked();
		var res=confirm('您确定要删除多行吗？');
		if(res){
		//删除arr下标对应的行
		for(var i=arr.length-1;i>=0;i--){
			//从后面开始删除
			$('.cart-td-check').eq(arr[i]).parent().parent().remove();
			var url='/bbcars/delall';
			var data='';
			ajax('POST',url,data,function(str){});
			}
		}
		updata();
	});
	

	//8.循环判断哪行被选中了
function checked(){
	var arr=[];//设置一个空数组，等会被选中的就把下标存起来
	var le=$('.cart-td-check input').size();
	for(var i=0;i<le;i++){
		if($('.cart-td-check input').eq(i).prop('checked')){
			//不为空证明被选中了
			arr.push(i);
		}
	}
	return arr;
}



		
//9.总数量

function allnum(arr){
	var num=0;//总数量
	for(var i=0;i<arr.length;i++){
		num+=parseInt($('.shuliang').eq(arr[i]).val());
	}
	
	$('.allnum').html(num);
}

		
		//10.总价
		function allprice(arr){
				var price=0;
				for(var i=0;i<arr.length;i++){
						var nowtotal=$('.cart-td-subtotal').eq(arr[i]).text();
//						console.log(nowtotal)
						nowtotal=$.trim(nowtotal);
//						console.log(nowtotal);
//						nowtotal=nowtotal.substring(2);//数据提取完成  255
//						console.log(nowtotal);
						price+=nowtotal*1;
				}
	
	$('.allprice').html('￥'+price.toFixed(2));
}

		//11.单行选中
		$('.view-CartList').on('click','.gouxuan',function(){
			var arr=checked();
			if(arr.length==$('.gouxuan').size()){
				$('.quanxuan').prop('checked','checked');
				isCheacked=false;
			}else{
				$('.quanxuan').removeAttr('checked');
				//证明没有选中全部
				isCheacked=true;
			}
			var arr=checked();//判断哪行被选中，存到该数组中
			allnum(arr);//传被选中的行的下标过去，那边做累计处理
	
			//总价
			allprice(arr);
		});
		
	$('.view-CartList').on('blur','.shuliang',function(){
		price($(this));
		var arr=checked();//判断哪行被选中，存到该数组中
		allnum(arr);//传被选中的行的下标过去，那边做累计处理
	
	//总价
		allprice(arr);
	});
	
	
	//做数据的渲染
	var sjxr=document.querySelector('.view-CartList');
	var form=document.querySelector('.pure-form');
	var url='/bbcars/cars';
	var data='';
	ajax('POST',url,data,function(str){
		var arr=JSON.parse(str).data;
//		console.log(arr);
		
		var reg=arr.map(function(item){
			return`<thead>
			<tr class="seg-entry"></tr>
							<tr class="dianming">
								<td colspan="7">
									<input type="checkbox" class="J_eventCheck" checked="checked">
									<span class="event-title">
										${item.dianming}
									</span>
								</td>
								
							</tr>
							<tr class="xuanlan">
								<td class="cart-td-check">
									<input type="checkbox" name="" class="gouxuan" />
								</td>
								<td class="cart-td-item-info">
									<a class="image"><img src="${item.urlimg1}"/></a>
									<a class="biaoti">${item.title}</a>
								</td>
								<td class="cart-td-item-sku">
									<p>${item.yangshi}</p>
								</td>
								<td class="cart-td-item-price">
									<p class="view-ItemEntryPrice">${item.danjia}</p>
									<p class="strike">${item.danjia}</p>
								</td>
								<td class="cart-td-number">
								<div>
									<span class="jian">-</span>
									<input type="text"  value="${item.shuliang}" class="shuliang" />
									<span class="jia">+</span>	
									
								</div>
								</td>
								<td class="cart-td-subtotal">
									<span class="price">${item.danjia}</span>
								</td>
								<td class="del1">
									<span class="del">删除</span>
								</td>
								
							</tr>
							<tr class="xiaoji1">
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td class="xiaoji2">
									<div class="subtotal-row">
									<span class="xiaoji">小计：</span>
									<span class="jiage1">${item.danjia}</span>
								</div>
								</td>
								<td></td>
								</tr></thead>
								`;
								
		}).join('');
		sjxr.innerHTML=reg;
		
	});
	
	


//windowend
}

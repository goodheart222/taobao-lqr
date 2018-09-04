$(function(){
	//导航城市切换
	$('.ci').mouseover(function(){
		$('.city').css('display','block');
	}).mouseout(function(){
		$('.city').css('display','none');
	});
	//导航我的淘宝
	$('.my').mouseover(function(){
		$('.load').css('display','block');
	}).mouseout(function(){
		$('.load').css('display','none');
	});
	//导航收藏夹
	$('.box').mouseover(function(){
		$('.shop').css('display','block');
	}).mouseout(function(){
		$('.shop').css('display','none');
	});
	//导航卖家中心
	$('.sale').mouseover(function(){
		$('.sale_c').css('display','block');
	}).mouseout(function(){
		$('.sale_c').css('display','none');
	});
	//导航客服中心
	$('.kefu').mouseover(function(){
		$('.kefu_c').css('display','block');
	}).mouseout(function(){
		$('.kefu_c').css('display','none');
	});
	//导航网站导航
	$('.dao').mouseover(function(){
		$('.dao_c,.sub,.tese,.app,.intro').css('display','block');
	}).mouseout(function(){
		$('.dao_c').css('display','none');
	});
	
	//遮罩
	$('.btn a').click(function(){
		$('.bar').css({width:$(document).width(),height:$(document).height()});
		$('.bar').show();
		$('.show').show();
	})
	$('.btn button').click(function(){
		$('.bar').fadeOut();
		$('.show').fadeOut();
	})
	//拖拽
	$('.show').mousedown(function(e){
		$(this).css('cursor','move');
		//获取鼠标与show不变的距离
		var x=e.pageX-$(this).offset().left;
		var y=e.pageY-$(this).offset().top;
		
		$(document).mousemove(function(ev){
			//获取移动的距离
			var ll=ev.pageX-x;
			var tt=ev.pageY-y;
			
			if(ll<=0){
				ll=0;
			}else if(ll>=$('body').width()-$('.show').width()-50){
				ll=$('body').width()-$('.show').width()-50;
			}
			if(tt<=0){
				tt=0;
			}else if(tt>=$('body').height()-$('.show').height()-60){
				tt=$('body').height()-$('.show').height()-60;
			}
			$('.show').css({left:ll,top:tt});
			
		})
	})
	//取消拖拽
	$(document).mouseup(function(){
		$('.show').css('cursor','');
		$(this).off('mousemove');
	})
	
	
	
	
})
window.onload=function(){
	var pattern=/^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/;
	
	//获取节点
	var user=document.getElementById('user');
	var non=document.getElementById('non');

	//user的失去焦点事件
	user.onblur=function(){
		//获取用户输入的值
		var v=this.value;
		
		
		//test() 方法
		if(pattern.test(v)){
			//显示正确
			non.style.display='block';
			non.innerHTML='手机号输入正确'
		}else{
			//显示不正确
			non.style.display='block';
			non.innerHTML='手机号输入错误'
		}
	}
	
	
}
	

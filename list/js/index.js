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
	
	//二级导航的hover效果
	$('.left .left_li li').mouseenter(function(){
		var a=$(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.cont div').eq(a).show().siblings().hide();
	}).mouseleave(function(){
		$(this).removeClass('hover')
		$('.cont div').hide();
	})
	
	$('.cont div').mouseenter(function(){
		var b=$(this).index();
		$(this).show().siblings().hide();
		$('.left li').eq(b).addClass('hover').siblings().removeClass('hover');
	}).mouseleave(function(){
		$(this).hide();
		$('.left li').removeClass('hover')
	})
	
	//选项卡
	$('.ul li').click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var c=$(this).index();
		$('.city1 .detail>div').eq(c).addClass('show').siblings().removeClass('show');
	})
	//选项卡嵌套1
	$('.diqu li').click(function(){
		$(this).addClass('selected2').siblings().removeClass('selected2');
		var d=$(this).index();
		$('.city1 .tup>div').eq(d).addClass('show2').siblings().removeClass('show2');
	})
	//选项卡嵌套2
	$('.band li').click(function(){
		$(this).addClass('selected3').siblings().removeClass('selected3');
		var d=$(this).index();
		$('.city1 .tup2>div').eq(d).addClass('show3').siblings().removeClass('show3');
	})
	//判断滚动显示楼层
	$(window).scroll(function(){
		var t=$(window).scrollTop();
		if(t>1370){
			$('.floor').show()
		}else if(t<1370){
			$('.floor').hide()
		}
	})
	//楼层
	$('.floor ul li').click(function(){
		var o=$(this).index();
		console.log(o);
		var top2=$('.floor1').eq(o).offset().top;
		console.log(top2);
		//为滚动设置动画
		$('body').animate({scrollTop:top2},500);
	})
	
	var heights=[];
	$('.floor1').each(function(){
		heights.push($(this).offset().top);
	})
	
	//判断高度找到对应的楼层 滚动事件
	$(window).scroll(function(){
		var top1=$(window).scrollTop();
		//console.log(top1);
		var index;
		for(var i=0;i<heights.length;i++){
			if(top1>heights[i]-30&&top1<heights[i+1]-30){
				index=i;
				$('.floor ul li').eq(index).addClass('show8').siblings().removeClass('show8');
			}else if(top1>heights[heights.length-1]-30){
				index=heights.length-1;
				$('.floor ul li').eq(index).addClass('show8').siblings().removeClass('show8');
			}
		}
	})
	
	
	
	
})
$(function(){
	//导航城市切换
	$('.ci').mouseover(function(){
		$('.city').css('display','block');
	}).mouseout(function(){
		$('.city').css('display','none');
	})
	//导航我的淘宝
	$('.my').mouseover(function(){
		$('.load').css('display','block');
	}).mouseout(function(){
		$('.load').css('display','none');
	})
	//导航收藏夹
	$('.box').mouseover(function(){
		$('.shop').css('display','block');
	}).mouseout(function(){
		$('.shop').css('display','none');
	})
	//导航卖家中心
	$('.sale').mouseover(function(){
		$('.sale_c').css('display','block');
	}).mouseout(function(){
		$('.sale_c').css('display','none');
	})
	//导航客服中心
	$('.kefu').mouseover(function(){
		$('.kefu_c').css('display','block');
	}).mouseout(function(){
		$('.kefu_c').css('display','none');
	})
	//导航网站导航
	$('.dao').mouseover(function(){
		$('.dao_c,.sub,.tese,.app,.intro').css('display','block');
	}).mouseout(function(){
		$('.dao_c').css('display','none');
	});
	//header中所有分类下拉
	$('.header_c ul li').eq(0).mouseenter(function(){
		$('.header_c ul li div').show();
		$('.header_c ul li span').css('background','url(../images/bg1.png) no-repeat -224px -8px');
	}).mouseleave(function(){
		$('.header_c ul li div').hide();
		$('.header_c ul li span').css('background','url(../images/bg1.png) no-repeat -224px -8px');
	})
	//放大镜
	$('.small').mousemove(function(e){
		$('.move,.big').show();
		
		var x=e.pageX-$(this).offset().left-$('.move').width()/2;
		var y=e.pageY-$(this).offset().top-$('.move').height()/2;
		
		if(x<=0){
			x=0;
		}else if(x>=$('.small').width()-$('.move').width()){
			x=$('.small').width()-$('.move').width();
		}
		
		if(y<=0){
			y=0;
		}else if(y>=$('.small').height()-$('.move').height()){
			y=$('.small').height()-$('.move').height();
		}
		
		$('.move').css({left:x,top:y});
		
		var scale=$('.big>img').width()/$('.small>img').width();
		
		$('.big').scrollLeft(x*scale);
		$('.big').scrollTop(y*scale);
		
		$('.big>img').attr('src',$('.small>img').attr('src'));
		
	}).mouseout(function(){
		$('.move,.big').hide();
	})
	
	$('.toggle li img').mouseenter(function(){
		$('.small>img').attr('src',$(this).attr('src'));
		
	})
	//价格区配送点击
	$('.delivery ul li').click(function(){
		$(this).toggleClass('tog');
	})
	//尺码点击边框变红 文字变红
	$('.size li').click(function(){
		$(this).toggleClass('togg').siblings().removeClass('togg');
	})
	//颜色点击边框变红
	$('.color li').click(function(){
		$(this).toggleClass('toggl').siblings().removeClass('toggl');
		$('.small>img').attr('src',$(this).find('img').attr('src'));
	})
	/*承诺部分鼠标滑过图片跳
	$('.pro li').mouseenter(function(){
		$(this).find('img').addClass('anima').siblings().removeClass('anima');
	})*/
	
	//数量加减
	$('.jia').click(function(){
		var num=$('.shu').html();
		num++;
		$('.shu').html(num);
		if(num>10){
			$(this).css('color','#999');
		}
	})
	$('.jian').click(function(){
		var num=$('.shu').html();
		num--;
		$('.shu').html(num);
		if(num<1){
			$(this).css('color','#999');
		}
	})
	//显示二维码
	$('.change .change_buy p').mouseenter(function(){
		$('.change .change_buy div').show();
	}).mouseleave(function(){
		$('.change .change_buy div').hide();
	})
	//显示二维码
	$('.change1 .change_buy p').mouseenter(function(){
		$('.change1 .change_buy div').show();
	}).mouseleave(function(){
		$('.change1 .change_buy div').hide();
	})
	
	//宝贝详情、评价切换
	$('.change_nav li').click(function(){
		$(this).addClass('click').siblings().removeClass('click');
		var p=$(this).index();
		$('.switch_ch>div').eq(p).addClass('click_c').siblings().removeClass('click_c')
	})
	
	$('.cla li:eq(0) span').click(function(){
		$('.none').toggleClass('nonee');
		$(this).html('+');
	})
	
	$('.phb ul li').mouseenter(function(){
		$(this).addClass('how').siblings().removeClass('how');
		var p=$(this).index();
		$('.phb_c>div').eq(p).addClass('sow').siblings().removeClass('sow')
	})
	//瀑布流
	/*$(window).scroll(function(){
		var h=$(document).scrollTop();
		if(h>500){
			Ajax('JSON').get('3.php',function(msg){
				
			})
		}
	})*/

	//公用部分轮播图
	var n=0;
	$('.kan .right').click(function(){
		var num2=$('.kan .bian span em').html();
		n++;
		if(n>2){n=0}
		num2++;
		if(num2>3){num2=1}
		$('.kan .bian span em').html(num2);
		$('.kan .tu>div').eq(n).addClass('nothide').siblings('div').removeClass('nothide');
	})
	
	$('.kan .left').click(function(){
		var num2=$('.kan .bian span em').html();
		n--;
		if(n<0){n=2}
		num2--;
		if(num2<1){num2=3}
		$('.kan .bian span em').html(num2);
		$('.kan .tu>div').eq(n).addClass('nothide').siblings('div').removeClass('nothide');
	})
	
	
	//买了
	var n1=0;
	$('.maile .right').click(function(){
		var num3=$('.maile .bian span em').html();
		n1++;
		if(n1>2){n1=0}
		num3++;
		if(num3>3){num3=1}
		$('.maile .bian span em').html(num3);
		$('.maile .tu>div').eq(n1).addClass('nothide').siblings('div').removeClass('nothide');
	})
	
	$('.maile .left').click(function(){
		var num3=$('.maile .bian span em').html();
		n1--;
		if(n1<0){n1=2}
		num3--;
		if(num3<1){num3=3}
		$('.maile .bian span em').html(num3);
		$('.maile .tu>div').eq(n1).addClass('nothide').siblings('div').removeClass('nothide');
	})
	
	//邻家
	var n2=0;
	$('.lin .right').click(function(){
		var num4=$('.lin .bian span em').html();
		n2++;
		if(n2>2){n2=0}
		num4++;
		if(num4>3){num4=1}
		$('.lin .bian span em').html(num4);
		$('.lin .tu>div').eq(n2).addClass('nothide').siblings('div').removeClass('nothide');
	})
	
	$('.lin .left').click(function(){
		var num4=$('.lin .bian span em').html();
		n2--;
		if(n2<0){n2=2}
		num4--;
		if(num4<1){num4=3}
		$('.lin .bian span em').html(num3);
		$('.lin .tu>div').eq(n2).addClass('nothide').siblings('div').removeClass('nothide');
	})
	
	//判断滚动距离 出现评论导航栏
	$(window).scroll(function(){
		var k=$(document).scrollTop();
		if(k>900){
			$('.change1').css('display','block');
		}else if(k<900){
			$('.change1').css('display','none');
		}
	})
	$('.nav_right>i').eq(0).mouseenter(function(){
		$(this).addClass('white').siblings().removeClass('white');
		$('.p1').show();
	}).mouseleave(function(){
		$(this).removeClass('white');
		$('.p1').hide();
	})
	
	
	$('.nav_right>i').eq(1).mouseenter(function(){
		$(this).addClass('white21').siblings().removeClass('white21');
	}).mouseleave(function(){
		$(this).removeClass('white21');
	})
	
	$('.nav_right>a>i').mouseenter(function(){
		$(this).addClass('white31').siblings().removeClass('white31');
	}).mouseleave(function(){
		$(this).removeClass('white31');
	})
	
	
	$('.nav_right>div').mouseenter(function(){
		$(this).find('i').addClass('white1').siblings().removeClass('white1');
		$('.p2').show();
		$(this).addClass('white2')
	}).mouseleave(function(){
		$(this).removeClass('white2');
		$(this).find('i').removeClass('white1');
		$('.p2').hide();
	})
	
	
	
	
	
})

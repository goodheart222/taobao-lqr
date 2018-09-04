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
	
	//logo和搜索--二维码关闭
	$('.ma button').click(function(){
		$('.ma').hide();
	});
	//logo和搜索--搜索框切换
	$('.sort li').eq(0).click(function(){
		$('.sort li').eq(1).removeClass('act1');
		$('.sort li').eq(2).removeClass('act1')
		$(this).addClass('act1');
		$('.search .detail').css('display','block');
		$('.search .tian').css('display','none');
		$('.search .shop1').css('display','none');
	});
	$('.sort li').eq(1).click(function(){
		$('.sort li').eq(0).removeClass('act1');
		$('.sort li').eq(2).removeClass('act1');
		$(this).addClass('act1');
		$('.search .detail').css('display','none');
		$('.search .shop1').css('display','none');
		$('.search .tian').css('display','block');
		
	});
	$('.sort li').eq(2).click(function(){
		$('.sort li').eq(0).removeClass('act1');
		$('.sort li').eq(1).removeClass('act1')
		$(this).addClass('act1');
		$('.search .detail').css('display','none');
		$('.search .tian').css('display','none');
		$('.search .shop1').css('display','block');
		
	});
	
	//选项卡、轮播图--选项卡
	$('.tab ul li').mouseenter(function(){
		$(this).addClass('act2').siblings().removeClass('act2');
		var index=$(this).index();
		$('.cont>div').eq(index).show().siblings().hide();
	}).mouseleave(function(){
		$(this).removeClass('act2');
		$('.cont>div').hide();
	});
	
	$('.tab .cont>div').mouseenter(function(){
		$(this).show();
		var index=$(this).index();
		$('.choose>ul>li').eq(index).addClass('act2')
	}).mouseleave(function(){
		$(this).hide();
		var index=$(this).index();
		$('.choose>ul>li').eq(index).removeClass('act2')
	});
	//选项卡、轮播图--轮播1
	var m=0;
	function run(){
		timer=setInterval(function(){
			m++;
			if(m>4){
				m=0;
			}
			$('.img li').eq(m).addClass('show2').siblings('li').removeClass('show2');
			$('.num li').eq(m).addClass('on').siblings('li').removeClass('on');
			
		},1000)		
	}
	run();
	
	$('.lun_img').mouseenter(function(){
		clearInterval(timer);
		$('.lr').show();
		
		$('.num li').mouseenter(function(){
			m=$(this).index();
			$('.img li').eq(m).addClass('show2').siblings('li').removeClass('show2');
			$('.num li').eq(m).addClass('on').siblings('li').removeClass('on');
		});
	}).mouseleave(function(){
		run();
		$('.lr').hide();
	})
	
	$('.lr .right').click(function(){
		m++;
		if(m>4){
			m=0;
		}
		$('.img li').eq(m).addClass('show2').siblings('li').removeClass('show2');
		$('.num li').eq(m).addClass('on').siblings('li').removeClass('on');
	});
	
	$('.lr .left').click(function(){
		m--;
		if(m<0){
			m=4;
		}
		$('.img li').eq(m).addClass('show2').siblings('li').removeClass('show2');
		$('.num li').eq(m).addClass('on').siblings('li').removeClass('on');
	});
	//选项卡、轮播图--轮播2
	var n=0;
	function run2(){
		timer2=setInterval(function(){
			n++;
			if(n>5){
				n=0;
			}
			$('.little_num i').html(n+1);
			$('.img_2 li').eq(n).addClass('show3').siblings('li').removeClass('show3');
			$('.num_2 li').eq(n).addClass('on2').siblings('li').removeClass('on2');
			
			
		},1500)		
	}
	run2();
	
	$('.lun_i').mouseenter(function(){
		clearInterval(timer2);
		$('.lr').show();
		
		$('.num_2 li').mouseenter(function(){
			n=$(this).index();
			$('.img_2 li').eq(n).addClass('show3').siblings('li').removeClass('show3');
			$('.num_2 li').eq(n).addClass('on2').siblings('li').removeClass('on2');
		});
	}).mouseleave(function(){
		run2();
		$('.lr').hide();
	})
	
	$('.lr .right').click(function(){
		n++;
		if(n>5){
			n=0;
		}
		$('.img_2 li').eq(n).addClass('show3').siblings('li').removeClass('show3');
		$('.num_2 li').eq(n).addClass('on2').siblings('li').removeClass('on2');
		$('.little_num i').html(n+1);
	});
	
	$('.lr .left').click(function(){
		n--;
		if(n<0){
			n=5;
		}
		$('.img_2 li').eq(n).addClass('show3').siblings('li').removeClass('show3');
		$('.num_2 li').eq(n).addClass('on2').siblings('li').removeClass('on2');
		$('.little_num i').html(n+1);
	});
	
	//选项卡、轮播图--//选项卡、轮播图--登录板块选项卡
	$('.gong ul li').mouseenter(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index3=$(this).index();
		
		$('.list div').eq(index3).show().siblings().hide();
	})
	//选项卡、轮播图--//选项卡、轮播图--登录板块选项卡2
	$('.first_l_t>li').eq(0).mouseenter(function(){
		$(this).addClass('selected1').siblings('li').removeClass('selected1');
		$('.first_l_t>li').eq(1).css('border-bottom','0.5px solid #f40')
		$('.first_l_t>li').eq(2).css('border-bottom','0.5px solid #f40')
		$('.first_l_t>li').eq(3).css('border-bottom','0.5px solid #f40')
		$('.first_l_c>div').eq(0).addClass('show5').siblings('div').removeClass('show5');
	}).mouseleave(function(){
		$(this).removeClass('selected1');
		$('.first_l_c>div').eq(0).removeClass('show5');
		$('.first_l_t>li').eq(1).css('border-bottom','');
		$('.first_l_t>li').eq(2).css('border-bottom','');
		$('.first_l_t>li').eq(3).css('border-bottom','');
	})
	
	$('.first_l_t>li').eq(1).mouseover(function(){
		$(this).addClass('selected1').siblings('li').removeClass('selected1');
		$('.first_l_t>li').eq(0).css('border-bottom','0.5px solid #f40')
		$('.first_l_t>li').eq(2).css('border-bottom','0.5px solid #f40')
		$('.first_l_t>li').eq(3).css('border-bottom','0.5px solid #f40')
		$('.first_l_c>div').eq(1).addClass('show5').siblings('div').removeClass('show5')
	}).mouseout(function(){
		$(this).removeClass('selected1');
		$('.first_l_t>li').eq(0).css('border-bottom','');
		$('.first_l_t>li').eq(2).css('border-bottom','');
		$('.first_l_t>li').eq(3).css('border-bottom','');
		$('.first_l_c>div').eq(1).removeClass('show5');
	})
	
	$('.first_l_t>li').eq(2).mouseenter(function(){
		$(this).addClass('selected1').siblings('li').removeClass('selected1');
		$('.first_l_t>li').eq(1).css('border-bottom','0.5px solid #f40')
		$('.first_l_t>li').eq(0).css('border-bottom','0.5px solid #f40')
		$('.first_l_t>li').eq(3).css('border-bottom','0.5px solid #f40')
		$('.first_l_c>div').eq(2).addClass('show5').siblings('div').removeClass('show5')
	}).mouseleave(function(){
		$(this).removeClass('selected1');
		$('.first_l_t>li').eq(1).css('border-bottom','');
		$('.first_l_t>li').eq(0).css('border-bottom','');
		$('.first_l_t>li').eq(3).css('border-bottom','');
		$('.first_l_c>div').eq(2).removeClass('show5')
	})
	
	$('.first_l_c>div').mouseenter(function(){
		$(this).addClass('show5');
		var l=$(this).index();
		$('.first_l_t>li').eq(l).addClass('selected1').siblings().css('border-bottom','0.5px solid #f40');
	}).mouseleave(function(){
		$(this).removeClass('show5');
	})
	
	//选项卡、轮播图--登录板块选项卡2嵌套
	$('.small_t li').mouseover(function(){
		$(this).addClass('colord').siblings().removeClass('colord');
		var k=$(this).index();
		$('.small_c div').eq(k).addClass('show6').siblings().removeClass('show6');
	})
	//选项卡、轮播图--登录板块选项卡2嵌套 关闭按钮
	$('.small_1 span').click(function(){
		$('.first_l_c>div').removeClass('show5');
		
		$('.first_l_t>li').eq(0).removeClass('selected1');
		$('.first_l_t>li').eq(1).css('borderBottom','');
		$('.first_l_t>li').eq(2).css('borderBottom','');
		$('.first_l_t>li').eq(3).css('borderBottom','');
	})
	
	//淘宝头条小轮播
	var t=0;
	$('.news_c div').eq(t).show()
	run1=setInterval(function(){
	t++;
	if(t>2){
		t=0;
	}
	$('.news_c div').eq(t).fadeIn().siblings().hide();
	},1500);
	
	//app显示二维码
	$('.apps li').mouseover(function(){
		$(this).find('div').css('display','block');
	}).mouseout(function(){
		$(this).find('div').css('display','none');
	})
	//生活研究所 鼠标hover
	$('.table div').mouseenter(function(){
		$(this).find('img').css('borderColor','#f40');
		$(this).find('h4').css('color','#f40');
	}).mouseleave(function(){
		$(this).find('img').css('borderColor','#13d0a1');
		$(this).find('h4').css('color','');
	})
	//有好货的二维码hover
	$('.good h3 div').mouseenter(function(){
		$(this).find('span').css('display','block');
	}).mouseleave(function(){
		$(this).find('span').css('display','none');
	})
	//有好货的商品hover
	$('.goods_detail').mouseenter(function(){
		$(this).find('div span').css('opacity','0.2');
		$(this).find('h2').css('color','#f40');
	}).mouseleave(function(){
		$(this).find('span').css('opacity','0.1');
		$(this).find('h2').css('color','#333');
	})
	$('.shopping .goods_detail').mouseenter(function(){
		$(this).find('h2').css('color','#f40');
	}).mouseleave(function(){
		$(this).find('h2').css('color','#999');
	})
	//淘抢购的商品hover
	$('.detail1').mouseenter(function(){
		$(this).find('h3').css('color','#f40');
	}).mouseleave(function(){
		$(this).find('h3').css('color','#333');
	})
	//倒计时
	function djs(){
		var a=new Date();
		var b=new Date('2018.06.29');
		var cha=b.getTime()-a.getTime();
		
		var hour=Math.floor(cha/(1000*60*60));
		cha=cha%(1000*60*60);
		var minute=Math.floor(cha/(1000*60));
		cha=cha%(1000*60);
		var second=Math.floor(cha/(1000));
		if(hour<10){
			hour='0'+hour;
		}
		if(minute<10){
			minute='0'+minute;
		}
		if(second<10){
			second='0'+second;
		}
		$('.h').html(hour);
		$('.m').html(minute);
		$('.s').html(second);
	}
	setInterval(function(){
		djs();
	},1000)
	
	//每日推荐的商品hover
	$('.thing_detail').mouseenter(function(){
		//$(this).find('div span').css('opacity','0.2');
		$(this).find('h2').css('color','#f40');
	}).mouseleave(function(){
		//$(this).find('div span').css('opacity','0.1');
		$(this).find('h2').css('color','#333');
	})
	
	//猜你喜欢 hover
	$('.like li').mouseenter(function(){
		$(this).find('div').css('display','block');
	}).mouseleave(function(){
		$(this).find('div').css('display','none');
	})
	//楼层
	$('.floor ul li').click(function(){
		var index=$(this).index();
		var top=$('.floor1').eq(index).offset().top;
		//为滚动设置动画
		$('html').animate({scrollTop:top-50},500);
	})
	
	var heights=[];
	$('.floor1').each(function(){
		heights.push($(this).offset().top);
	})
	
	//判断高度找到对应的楼层 滚动事件
	$(window).scroll(function(){
		var top1=$(window).scrollTop();
		
		var index;
		for(var i=0;i<heights.length;i++){
			if(top1>heights[i]-70&&top1<heights[i+1]-70){
				index=i;
				$('.floor ul li').eq(index).addClass('show8').siblings().removeClass('show8');
			}else if(top1>heights[heights.length-1]-70){
				index=heights.length-1;
				$('.floor ul li').eq(index).addClass('show8').siblings().removeClass('show8');
			}
		}
	})
	
	//滑动到一定位置显示搜索框
	$(window).scroll(function(){
		var y=$(window).scrollTop();
		if(y>250){
			$('.sear').css('display','block');
		}else if(y<250){
			$('.sear').css('display','none');
			
		}
	})
	
	
	
	
	
	
	
})
//登陆框拖动效果
$(function(){
	$('#login').mousedown(function(e){
		$(this).css('cursor','move');
		
		var x=e.pageX-$(this).offset().left;
		var y=e.pageY-$(this).offset().top;
		console.log(x,y);
		
		$(document).mousemove(function(ev){
			var ll=ev.pageX-x;
			var tt=ev.pageY-y;
			if(ll<=0){
				ll=0;
			}else if(ll>=$(document).width()-$('#login').width()-'50'){
				ll=$(document).width()-$('#login').width()-'50'
			}
			if(tt<=$('.main').offset().top){
				tt=$('.main').offset().top;
			}else if(tt>=$('.main').height()-$('#login').height()){
				tt=$('.main').height()-$('#login').height();
			}
			
			$('#login').css({left:ll,top:tt-'90'});
		})
	})
	$(document).mouseup(function(){
		$('#login').css('cursor','');
		$(this).off('mousemove');
	})
	
	

})


$(function() {
			$('#header').load('header.html');
			$('#footer').load('footer.html');
		})
	/*获取头部 尾部*/




/*边框动画*/
$(function(){
	$(".modt_li").mouseover(function(){
		$(this).find(".topLine,.bottomLine").stop().animate({"width":"379px"});
		$(this).find(".rightLine,.leftLine").stop().animate({"height":"309px"});
				
	})
	$(".modt_li").mouseout(function(){
		$(this).find(".topLine,.bottomLine").stop().animate({"width":"0px"});
		$(this).find(".rightLine,.leftLine").stop().animate({"height":"0px"});
	})
})
/*banner动画*/
$(document).ready(function(){
		  var slideShow=$(".banner")
		  ul=slideShow.find("ul") 
		  showNumber=slideShow.find(".show_nav span"),
		  oneHeight=slideShow.find("ul li").eq(0).height(); 
		  var timer=null; 
		  var iNow=0;  
		  
		  showNumber.on("click",function(){
		   $(this).addClass("active").siblings().removeClass("active");
		   var index=$(this).index(); 
		   iNow=index;
		   ul.animate({
		    "top":-oneHeight*iNow,
		   })
		  });
	
	function autoPlay(){
	   timer=setInterval(function(){  
	   iNow++;  
	   if(iNow>showNumber.length-1){ 
	    iNow=0;
	   }
	   showNumber.eq(iNow).trigger("click"); 
	   },3000)
	  }
	  autoPlay();
	 
	  slideShow.hover(
	   function(){
	    clearInterval(timer);
	   },autoPlay
	  );
	  
})

/*广告无缝轮播*/
	$(function(){
	$('.In_run').liMarquee({
		direction: 'up'
		});
	});
/*详细页*/
$(document).ready(function(){
	var number=$(".detail_list li").length;
	$(".detail_list").width(number*239)
	var count = $(".detail_list li").length -4; /* 显示 4 个 li标签内容 */
	var num=$(".detail_list li").length;
	var curIndex = 0;
	
	$('.scolbtn').click(function(){
		if( $(this).hasClass('disabled') ) return false;
		
		if ($(this).hasClass('btn_l')) --curIndex;
		else ++curIndex;
		
		if (num<=4) return false;
		
		$('.scolbtn').removeClass('disabled');
		if (curIndex == 0) $('.btn_l').addClass('disabled');
		if (curIndex == count-1) $('.btn_r').addClass('disabled');
		
		$(".detail_list").stop(false, true).animate({"marginLeft" : -curIndex*239 + "px"}, 600);
	});
})
/*我要留言按钮*/
$(document).ready(function(){
	 var scroll_offset=$(".online_form_title").offset()
	 $(".to_mes").click(function(){
		 $("html,body").animate({scrollTop:scroll_offset.top+130},500)
	 });
})

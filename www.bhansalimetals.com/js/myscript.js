$('a#top').click(function(){
     $('html, body').animate({scrollTop: '0px'}, 1000);
     return false;
});

// Superfish Menu Plugin
$(function(){
	$('ul.sf-menu').superfish();	
});

$(window).load(function() {
	// Grayscale 
	$('.flickrs img, .popular_posts img').greyScale({
	  // call the plugin with non-defult fadeTime (default: 400ms)
	  fadeTime: 100,
	  reverse: false
	});	
});

$(document).ready(function(){		
	//icon tabs
	$(".tab_content").hide();
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(1000);
		return false;
	});		
	
	//Featured posts
	$('#mycarousel').jcarousel({
		scroll: 1	
	});
	
	//Portfolio
	$('#portfoliocarousel').jcarousel({
		scroll: 1,
		initCallback: function(){myHover()}	
	});
	
	//Our Sponsors
	$('#oursponsors').jcarousel({
		scroll: 1	
	});
	
	//Team
	$('#team').jcarousel({
		scroll: 1	
	});
	
	
	//prettyPhoto
	$("a[data-rel^='prettyPhoto']").prettyPhoto(); 
	
	//Image hover
	$(".hover_img, .image_post").live('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.4},300);
		}
	);
	$(".hover_img, .image_post").live('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},300);
		}
	);
	//Iframe transparent
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
		
	//Testimonials scroll & Post_slider
	$('.flexslider').flexslider({
		controlNav: false
	});
			
	//Sponsors hover
	$('.sponsors li a').hover(
		function() {
		var src = $(this).find('img').attr("src").replace('.', '-hover.');
		$(this).find('img').attr("src", src);
		},
		function() {
		var src = $(this).find('img').attr("src").replace('-hover.', '.');
		$(this).find('img').attr("src", src);
	});
	
	
	var footblockheight = $('.footer_block').height();	
	$('.footer').css({'padding-top': footblockheight + 16 + 'px'});	
	$('.footer_block').css({'margin-bottom': - footblockheight + 14 + 'px'});	
	$('#top').css({'top': - footblockheight -16 - 60 + 'px'});
	
	//Flickr Integration
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=77716815@N03&lang=en-us&format=json&jsoncallback=?", function(data){
		$.each(data.items, function(i,item){
			if(i<=8){ // <— change this number to display more or less images
				$("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo(".FlickrImages ul")
				.wrap("<li><a href='" + item.link + "' target='_blank' title='Flickr'></a></li>");
			}
		});	
		//flickr hover
		$(".flickrs a, .popular_posts a").hover(function(){
			$(this).find('.gsWrapper').stop().animate({opacity:1})	
		},
			function(){
			$(this).find('.gsWrapper').stop().animate({opacity:0.6})	
		});	
    });	
	
	//Twitter Setup
	$(".tweet_block").tweet({
	  join_text: "auto",
	  username: "envato",
	  avatar_size: 0,
	  count: 3,
	  auto_join_text_default: "",
	  auto_join_text_ed: "",
	  auto_join_text_ing: "",
	  auto_join_text_reply: "",
	  auto_join_text_url: "",
	  loading_text: "loading tweets..."
	});	
	
	//toggle
	$(".toggle h3").eq(1).addClass("active");
	$(".toggle .toggle_cont").eq(1).show();

	$(".toggle h3").click(function(){
		$(this).next(".toggle_cont").slideToggle("slow")
		$(this).toggleClass("active");
	});
	
	//accordion
	$(".accordion h3").eq(1).addClass("active");
	$(".accordion .accord_cont").eq(1).show();

	$(".accordion h3").click(function(){
		$(this).next(".accord_cont").slideToggle("slow")
		.siblings(".accord_cont:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});	
	
	//tabs
	$(".tab_content_block").hide();
	$("ul.block_tabs li:first").addClass("active").show();
	$(".tab_content_block:first").show();
	$("ul.block_tabs li").click(function() {
		$("ul.block_tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content_block").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(1000);
		return false;
	});
		 	
	
	//Block hover_img links
	function myHover(){
		$(".hover_img .zoom, .hover_img .item_play, .hover_img .link").live('mouseover',function(){
				var myClass=$(this).attr('class');
				$(this).parent().find('span:not(.'+myClass+')').css({'background-position':'0 0'});
			}
		);
		$(".hover_img .zoom, .hover_img .item_play, .hover_img .link").live('mouseout',function(){
				var myClass=$(this).attr('class');
				$(this).parent().find('span:not(.'+myClass+')').css({'background-position':'0 -40px'});
			}
		);
		
	}
	myHover();
	
	
	//Slider hover
	/*function mysliderHover(){
		$(".camera_fakehover .camera_prev, .camera_fakehover .camera_next, .camera_fakehover .camera_caption").live('mouseover',function(){
				$(this).parent().find('.camera_commands').css({'display':'none'});
			}
		);
		$(".camera_fakehover .camera_prev, .camera_fakehover .camera_next, .camera_fakehover .camera_caption").live('mouseout',function(){
				$(this).parent().find('.camera_commands').css({'display':'block'});
			}
		);		
	}
	mysliderHover();*/
	
	
});











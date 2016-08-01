$(function(){
	var j_ourservice=$('.j_ourservice');
	var j_ourservice_list=$('.j_ourservice_list');
	var j_ourservice_list_img=$('.j_ourservice_list_img');
	var j_ourservice_list_column=$('.j_ourservice_list_column');
	var j_ourservice_list_text=$('.j_ourservice_list_text');
	var even=0;
	var height=0;
	//使图片和和文字同高
		for (var i = 0; i < j_ourservice.children().length; i++) {
		height=j_ourservice.children().eq(i).find('.j_ourservice_list_text').height();
		if (height<180) {
			height=180;
		} 
		j_ourservice.children().eq(i).find('.j_ourservice_list_column').css({'height':height,'background':'rgb(176,176,176)'});
		j_ourservice.children().eq(i).find('.j_ourservice_list_img').css({'height':height});
		}
		//偶数的文本向右对齐
	for (var i = 0; i < j_ourservice.children().length; i++) {
		if (i%2!=0) {
			even=i;
		}
	}
	j_ourservice.children().eq(even).addClass('j_ourservice_list_text_align_right');
	function browserRedirect() {

			var sUserAgent = navigator.userAgent.toLowerCase();

			var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";

			var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";

			var bIsMidp = sUserAgent.match(/midp/i) == "midp";

			var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

			var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";

			var bIsAndroid = sUserAgent.match(/android/i) == "android";

			var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";

			var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

			if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {

				//手机
				j_ourservice_list_img.children().children().eq(0).css('display','none');
//		$(this).children().children().eq(0).hide(350);
		j_ourservice_list_img.parent().find('.j_ourservice_list_text').css('color','#000000');
		j_ourservice_list_img.parent().find('.j_ourservice_list_column').css('background-color', '#CFDB00');

			} else {

				
	
	$(window).resize(function(){
  for (var i = 0; i < j_ourservice.children().length; i++) {
		height=j_ourservice.children().eq(i).find('.j_ourservice_list_text').height();
		j_ourservice.children().eq(i).find('.j_ourservice_list_column').css({'height':height,'background':'rgb(176,176,176)'});
		j_ourservice.children().eq(i).find('.j_ourservice_list_img').css({'height':height});
		}
});
	
	//改变图片颜色（换图）
	j_ourservice_list.hover(function(){
		$(this).children().children().children().eq(0).css('display','none');
		$(this).find('.j_ourservice_list_text').css('color','#000000');
		$(this).find('.j_ourservice_list_column').css('background-color', '#CFDB00');
	},function(){
		$(this).children().children().children().eq(0).css('display','block');
		$(this).find('.j_ourservice_list_column').css('background','rgb(176,176,176)');
		//离开整个块改变改变成灰色
		$(this).on('mouseleave',function(){
			$(this).find('.j_ourservice_list_text').css('color','rgb(176,176,176)');
		});
		//离开图片改变成灰色
//		$(this).parent().find('.j_ourservice_list_text').css('color','rgb(176,176,176)');
	});
				
			}
		}
		browserRedirect();
	
	
	
	
	
	
	
	
	
	
});

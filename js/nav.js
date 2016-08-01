$(
	function() {

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

				//手机列表
				var j_nativ_list = $('.j_nativ_list');
				var buttonnav = $('#buttonnav');
				buttonnav.on('touchstart', function() {
					j_nativ_list.slideToggle("normal");
				});

			} else {

				var nav = $('.j_nav');
				//复制导航列表，用表正则达式去除a标签,插入到导航列表前面（未实现）
				//	var text=$(".jupeng_nativ_list").clone();
				//	$(".jupeng_nativ_list").before($(".jupeng_nativ_list").clone());
				//渐显绿色块
				nav.children().css('height', '100%');
				nav.children().children().css('height', '100%');
				var nav_hover = nav.find('ul').eq(1).children();
				//	console.log(nav_hover);
				nav.children().eq(1).children().css({
					'height': '100%'
				});
				nav_hover.hover(function() {
					var idx = $(this).index();
					nav.children().eq(2).children().eq(idx).css({
						'background-color': '#cfdb00',
						'opacity': '0',
						'height': '100%'
					});
					nav.children().eq(2).children().eq(idx).animate({
						opacity: '1'
					}, 800)
				}, function() {
					var idx = $(this).index();
					nav.children().eq(2).children().eq(idx).css({
						'background-color': 'transparent'
					});
				});
			}
		}
		browserRedirect();
	}
);
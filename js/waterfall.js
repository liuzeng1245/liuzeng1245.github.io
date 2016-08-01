var imgs=$(".minp");

	var arr=[];

	for (var i=0; i<imgs.length; i++){

		arr.push(imgs.eq(i).attr("src"));
	}

	var index=0;

	for (var i=0; i<arr.length; i++){

		var img=new Image();
		img.src=arr[i];
		img.onload=function (){

			index++;
			var scale=index/arr.length;
			if (scale>0.9){
				$("#loading").hide();
				cb();
			}
		}
	}

	function cb(){
		var bodyWidth=$(window).width();

		var contentWidth=$(".z_waterfall ul").width();

		if (bodyWidth<=480){
			//手机
			var h1=0,h2=0;
			var arrH=[h1,h2];

			function appendImg(i,hn,num){
				var l=num*(contentWidth/arrH.length);
				var newImg=imgs.eq(i).clone();
				var li=$("<li class='list'><a class='min_img' href='###'><img src='"+newImg.attr("src")+"'/><div class='list_mask'><div class='mask_green_wrap'><div class='mask_green'><img src='../img/magnifier.png'><br><span>我是文字</span></div></div></div></a></li>");
					newli=li.clone();
					newli.css({
						left:l,
						top:hn,
						width:w
					});
					newli.appendTo(".z_waterfall ul");
//					$("#show ul").html(newli)
					return h=parseInt(newli.height())+20;
					
			}

			for (var i=0; i<imgs.length; i++){

				var w="50%";

				var min=Math.min(h1,h2);

				switch(min){
					case h1:
						var h=appendImg(i,h1,0);
						h1+=h;
						break;
					case h2:
						var h=appendImg(i,h2,1);
						h2+=h;
						break;
				}
			}

		}else{
			//桌面
			
			var h1=0,h2=0,h3=0,h4=0;
			var arrH=[h1,h2,h3,h4];

			function appendImg(i,hn,num){
				var l=num*(contentWidth/arrH.length);
//				console.log(imgs.eq(i).attr("src"))
				var newImg=imgs.eq(i).clone();
//				console.log(newImg.src)
				var li=$("<li class='list'><a class='min_img' href='###'><img src='"+newImg.attr("src")+"'/><div class='list_mask'><div class='mask_green_wrap'><div class='mask_green'><img src='../img/magnifier.png'><br><span>我是文字</span></div></div></div></a></li>");
				newli=li.clone();
//				console.log(newImg)
					newli.css({
						left:l,
						top:hn,
						width:w
					});
					
					newli.appendTo(".z_waterfall ul");
					newli.hover(function (){
						$(this).find(".list_mask").show();
						
					},function (){
						$(this).find(".list_mask").hide();
					})
//					$("#show ul").html(newli)
					return h=parseInt(newli.height())+20;
					
			}

			for (var i=0; i<imgs.length; i++){

				var w="25%";

				var min=Math.min(h1,h2,h3,h4);
				var max=Math.max(h1,h2,h3,h4);
						$(".z_waterfall ul").height(max)
				switch(min){
					case h1:
						var h=appendImg(i,h1,0);
						h1+=h;
						break;
					case h2:
						var h=appendImg(i,h2,1);
						h2+=h;
						break;
					case h3:
						var h=appendImg(i,h3,2);
						h3+=h;
						break;
					case h4:
						var h=appendImg(i,h4,3);
						h4+=h;
						break;
					
				
				}
			}
			var max=Math.max(h1,h2,h3,h4);
			$(".z_waterfall ul").height(max);
		}
	}
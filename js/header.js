$(function () {
	if ($(window).width() > 640) { 
		$(window).scroll(function () {
			if ($(this).scrollTop() > 10) { /* 要滑動到選單的距離 */
				$('header .menu').addClass('navfix'); /* 幫選單加上固定效果 */
				$('header .menu .logo').removeClass('hide');
			} else {
				$('header .menu').removeClass('navfix'); /* 移除選單固定效果 */
				$('header .menu.logo').addClass('hide');
			}
		});
	}

	$(".menu-toggle").click(function() {
		$(this).toggleClass('active');
		$(this).next(".menu").toggleClass('active');
		$('header .search').slideUp();
	});
	$('header .search-toggle').click(function(){
		$(this).next('.search').slideToggle();
		$('header .menu').removeClass('active');
	});

	if ($(window).width() < 641) { 
		$('header .menu .sub-toggle').click(function(){
			$(this).find('.sub-nav').slideToggle().parent().siblings().find('.sub-nav').slideUp();
		});
	}


});

$(function () {

	$(".Gosignup").click(function () {
		$(".signup_Zone").removeClass("hide");
	});

	$(".sendcodebtn").click(function () {
		$(".black_Zone1").removeClass("hide");
	});

	$(".changemailbtn").click(function () {
		$(".black_Zone3").removeClass("hide");
	});

	$(".gofinishphone").click(function () {
		$(".black_Zone1").addClass("hide");
		$(".black_Zone2").removeClass("hide");
	});

	$(".gofinishmail").click(function () {
		$(".black_Zone3").addClass("hide");
		$(".black_Zone4").removeClass("hide");
	});

	$(".close").click(function () {
		$(".black_Zone1").addClass("hide");
		$(".black_Zone2").addClass("hide");
		$(".black_Zone3").addClass("hide");
		$(".black_Zone4").addClass("hide");
	});

	$(".youtubeBtn").click(function () {
		$(".youtubeInput").removeClass("hide");
	});

	$(".Btn").click(function () {
		$(".BtnInput").removeClass("hide");
	});
});
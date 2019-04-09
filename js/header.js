$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) { /* 要滑動到選單的距離 */
			$('.m_nav').addClass('navfix'); /* 幫選單加上固定效果 */
			$('.m_nav .menu .logo').removeClass('hide');
		} else {
			$('.m_nav').removeClass('navfix'); /* 移除選單固定效果 */
			$('.m_nav .menu .logo').addClass('hide');
		}
	});
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
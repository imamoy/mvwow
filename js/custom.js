//影片留言
$(document).ready(function () {
	$('.messageBox').responsiveTabs({
		startCollapsed: 'accordion'
	});
});
//回應
$(document).ready(function () {
	$('.s_replies').hide();
	$('.mg_reply a').click(function () {
		$(this).parents('.messageBox').find('.s_replies').slideUp();
		$(this).removeClass('active');
		var a = $(this).parents('.cm_list').find('.s_replies').css('display');
		if (a == "none") {
			$(this).parents('.s_comment').next().slideDown();
			$(this).addClass('active');
		} else {
			$(this).parents('.s_comment').next().slideUp();
			$(this).removeClass('active');
		}
	});
});
$(document).ready(function(){

	const menuToggle = $('.nav__toggle');

	menuToggle.on('click', function() {
		$(this).toggleClass('nav__toggle_active');
		$('.wrapper').toggleClass('wrapper_translated');
		$('body').toggleClass('no-scroll');
	});
});
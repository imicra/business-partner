$(document).ready(function(){

	//Header Nav responsive
	$('.nav-toggle').click(function() {
	    $('.nav-toggle').toggleClass('open');
	    $('body').toggleClass('open');
		$('.main-navigation').toggleClass('open');
	});

	$(window).resize(function() {
		$('.main-navigation').attr('style', function(i, style) {
		    return style.replace(/display[^;]+;?/g, '');
		});
	});

	// Masked Input Plugin
	jQuery(function($){
	   $("#phone").mask("+7 (999) 999-99-99", { "autoclear": false, placeholder:" " });
	});

	//Details section in ABOUT US
	$('.details-btn a').click(function(e) {
		e.preventDefault();
		$('.details').slideToggle(300);
		$('.details-btn').toggleClass('expand');
	});

	$('.details a').fancybox({
	});

});
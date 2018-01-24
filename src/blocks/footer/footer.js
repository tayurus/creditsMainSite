$(document).ready(function(){
    //Click event to scroll to top
	$('.footer__button').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.footer__button').fadeIn();
    } else {
        $('.footer__button').fadeOut();
    }
});
})

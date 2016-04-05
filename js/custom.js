$(document).ready(function() {

  // Sticky Navigation
  $(window).scroll( function() {

			if ( $(this).scrollTop() >= $('.top-header').height() ) {
				$('.top-header.headhesive').addClass('headhesive--stick');
			} else {
				jQuery('.top-header.headhesive').removeClass('headhesive--stick');
			}
	});
  
  // Scroll Fade In
  $('.scroll-fade-in, .scroll-fade-in-late').viewportChecker({
    classToAdd: 'show',
    offset: 40
  });

  // $('.main-menu ul li a').hover(function () {
  //   $('#nav-container .window .inner').toggleClass('off');
  // });

  $('.main-nav li a.happy').hover(function () {
    $('.emoji-happy').toggleClass('emojify');
  });

  $('.main-nav li a.create').hover(function () {
    $('.emoji-create').toggleClass('emojify');
  });

  $('.main-nav li a.change').hover(function () {
    $('.emoji-change').toggleClass('emojify');
  });


  $('.main-menu li a.happy').hover(function () {
    $('.emoji-happy').toggleClass('emojify');
  });

  $('.main-menu li a.create').hover(function () {
    $('.emoji-create').toggleClass('emojify');
  });

  $('.main-menu li a.change').hover(function () {
    $('.emoji-change').toggleClass('emojify');
  });


  $('.menu-open').on('click', function(e) {

    e.stopPropagation();

    $('body').toggleClass('active');

    if( $('body').hasClass('active') ) {
        $('.open-close p').text('-');
    } else {
        $('.open-close p').text('+');
    }

  });

});

$(document).ready(function() {

  // Sticky Navigation
  $(window).scroll( function() {

			if ( $(this).scrollTop() >= $('header').height() ) {
				$('body').addClass('scrolled');
			} else {
				jQuery('body').removeClass('scrolled');
			}
		});

  // Scroll Fade In
  $('.scroll-fade-in, .scroll-fade-in-late').viewportChecker({
    classToAdd: 'show',
    offset: 40
  });


  $('#menu-open').on('click', function(e) {

    e.stopPropagation();

    $('body').toggleClass('active');

    if( $('body').hasClass('active') ) {
        $('.open-close p').text('Menu -');
    } else {
        $('.open-close p').text('Menu +');
    }

  });

});

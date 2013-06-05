 (function($) {
	$(document).ready( function() {

		function cikonssMenu() {
			if (matchMedia('screen and (max-width: 680px)').matches) {
				var trigger = $('.top-bar .item-first'),
					item = $('.navigation .menu a');

				$('.top-bar .menu').hide();
				trigger.addClass('closed');

				trigger.click( function(e) {
					$(this).toggleClass('closed');
					$(this).toggleClass('opened');

					if ( $(this).hasClass('opened') ) {
						$(this).next('.menu').slideDown(400);
					} else {
						$(this).next('.menu').slideUp(400);
					}
					e.preventDefault();
				});

				item.click( function() {
					$(this).parents('.menu').slideUp(400);
					$(this).parents('.navigation').find('.item-first').removeClass('opened').addClass('closed');
				});
			}
		}
		cikonssMenu();

	});
})(jQuery);
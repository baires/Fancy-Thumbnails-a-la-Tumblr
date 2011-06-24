jQuery(function($) {
	var lista = $('#main li')
	$(lista).prepend("<span></span>");// a–adir un <span> dinamicamente a cada elemento
	jQuery('.preload').preloadImages({
		showSpeed: 500,
		easing: 'easeOutQuad' // un simple preload para las imagenes
	});
});
(function($) {
	$.fn.preloadImages = function(options) {
		var defaults = {
			showSpeed: 500,
			easing: 'easeOutQuad'
		};
		var options = $.extend(defaults, options);
		return this.each(function() {
			var container = $(this);
			var image = container.find('img');
			$(image).css({
				"visibility": "hidden",
				"opacity": "0"
			});
			$(image).bind('load error', function() {
				$(this).css({
					"visibility": "visible"
				}).animate({
					opacity: "1"
				}, {
					duration: options.showSpeed,
					easing: options.easing
				}).parent(container).removeClass('preload');
			}).each(function() {
				if (this.complete || ($.browser.msie && parseInt($.browser.version) == 6)) {
					$(this).trigger('load');
				}
			});
		});
	}
})(jQuery);

Responsive = {
	horizontal_item_width: 21.8, // 20em width + 2 * (0.5em margin + 0.1em border + 0.3em padding) - must match CSS values for div.news-item.horizontal.

	init: function () {
		R = this;
		$(document).ready(function () {
			R.setTextSize();
			R.setDirection();
			$(window).resize(function () {
				R.setTextSize();
				R.setDirection();
			});
		});
	},

	setTextSize: function () {
		viewport = this.getWindowSize();
		if (viewport.h > 900 || viewport.w > 900) {
			// Large font size
			$('body').removeClass();
			$('body').addClass('large-text');
		} else if (viewport.h < 480 && viewport.w < 480) {
			// Small font size
			$('body').removeClass();
			$('body').addClass('small-text');
		} else {
			// Medium font size
			$('body').removeClass();
			$('body').addClass('medium-text');
		}
	},

	setDirection: function () {
		viewport = this.getWindowSize();
		if (viewport.h > viewport.w) {
			$('.news-item, #items').addClass('vertical');
			$('.news-item, #items').removeClass('horizontal');
			$('#items').width('auto');
			$('.news-item').css('height', 'auto');
		} else {
			$('.news-item, #items').addClass('horizontal');
			$('.news-item, #items').removeClass('vertical');
			width = this.horizontal_item_width * $('.news-item').length;
			$('#items').width((width) + 'em');
			header_height = parseInt($('h1').outerHeight()) + 35; // FIXME: Not optimal way of doing this. Unlimkely to work cross-browser.
			$('.news-item').css('max-height', viewport.h - header_height);
		}
	},

	getWindowSize: function () {
		h = window.innerHeight;
		w = window.innerWidth;
		return {'h': h, 'w': w};
	}
}.init();
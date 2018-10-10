jQuery(function() {
	jQuery('.gallery').gallery({
		slide: '.slide',
		activeClass: 'active',
		pagerClass: 'pagination',
		animDuration: 900,
		activeTimerClass : 'autoroation',
		effect: 'fade',
		speed: 700,
	});
	$('.left-effect').openclose({
		slider: '.slider',
		activeClass: 'active',
		opener: '.opener',
		effect: 'left'
	});
	$('.right-effect').openclose({
		slider: '.slider',
		activeClass: 'active',
		opener: '.opener',
		effect: 'right'
	});
	$('.fade-effect').openclose({
		slider: '.slider',
		activeClass: 'active',
		opener: '.opener',
		effect: 'fade'
	});
	$('.slide-effect').openclose({
		slider: '.slider',
		activeClass: 'active',
		opener: '.opener',
		effect: 'slide'
	});
});

;(function($) {
	'use strict';
	$.fn.gallery = function(options) {
		var settings = $.extend({
        slide: '.slide',
        activeClass: 'active',
        pagerClass: 'pagination',
        animDuration: 100,
        activeTimerClass : 'autoroation',
        effect: 'fade',
        speed: 5000,
    	}, options)


		return this.each(function(index, item) {
			var gallery = $(this);
			var slides = gallery.find(settings.slide);
			var activeClass = settings.activeClass;
			var btnNext = gallery.find('.next');
			var btnPrev = gallery.find('.prev');
			var btnStart = gallery.find('.start');
			var btnStop = gallery.find('.stop');
			var pager = gallery.find('ul');
			var currentIndex = 0;
			var timer = null;
			createPaging();
			var pagerList = pager.children('li');

			var firstSlide = slides.first(settings.slide);
			var firstItem = pagerList.first('li');
			firstSlide.addClass(settings.activeClass);
			firstItem.addClass(settings.activeClass);
			var activeSlide = slides.find(settings.activeClass);
			var activeItem = pagerList.find('.active');
			var item = pager.children('li');
			var slide = gallery.children(settings.slide);

			function createPaging(item) {
				slides.each(function(index) {
					item = $('<li></li>');
					item.attr('data-id', index);
					// console.log(item);
					pager.append(item);
				});
	 
				pager.addClass(settings.pagerClass);
			}

			function showSlide(index) {
				// slides.eq(index).stop().fadeIn();
				if ( settings.effect === 'fade') {
					slides.eq(index).stop().fadeIn(settings.speed, function () {
						console.log('next slide');
					});
				} else {
					slides.eq(index).show();
				}
			}

			function stopAnimation() {
				gallery.addClass('stopClass');
			}

			 function hideSlide() {
				// slides.stop().fadeOut();
				if ( settings.effect === 'fade') {
					slides.stop().fadeOut(settings.speed);
				} else {
					slides.hide();
				}
			 }

			function changeSlide(index) {
				slides.each(function(index) {
					slides.eq(index).removeClass(settings.activeClass);
					pagerList.eq(index).removeClass(settings.activeClass);
					hideSlide();
				});
				slides.eq(index).addClass(settings.activeClass);
				showSlide(index);
				pagerList.eq(index).addClass(settings.activeClass);
			}

			function nextSlide() {
				if (currentIndex < slides.length - 1) {
					currentIndex = currentIndex + 1;
				} else {
					currentIndex = 0;
				}
				changeSlide(currentIndex);
			}

			function prevSlide() {
				if (currentIndex > 0) {
					currentIndex = currentIndex - 1;
				} else {
					currentIndex = slides.length - 1;
				}

				changeSlide(currentIndex);
			}

			function startAutoPlay() {
				if (!gallery.hasClass(settings.activeTimerClass)) {
					gallery.addClass(settings.activeTimerClass);
					timer = setInterval(function() {
						nextSlide();
					}, settings.animDuration);
				}        
			}

			function stopAutoPlay() {
				gallery.removeClass(settings.activeTimerClass);
				clearInterval(timer);
			}

			function itemClick() {
				var index = event.target.dataset.id;
				changeSlide(index);
			}
			btnNext.on('click', nextSlide);
			btnPrev.on('click', prevSlide);
			btnStart.on('click', startAutoPlay);
			btnStop.on('click', stopAutoPlay);
			pager.on('click','li', itemClick);
		});
	};
}(jQuery));



;(function($){
	'use strict';
	$.fn.openclose = function(options) {
		var settings = $.extend({
			slider: '.slider',
			activeClass: '.active',
			opener: '.opener',
			effect: 'slide',
			animatDurfrom: 700,
			animatDurto: 700,
			speed: 600
		}, options)

		return this.each(function(){
			var block = $(this);
			var opener = block.find(settings.opener);
			var slider = block.find(settings.slider);
			var activeClass = 'active';
			var maxHeigh = 0;
			var effect = settings.effect 
			var effects = {
				'left': {
					show: function(slider) {
						slider.stop().animate({
							left: '0',
						},settings.animatDurto);
					},

					hide: function(slider) {
						slider.stop().animate({
							left: '-100%',
						},settings.animatDurfrom);
					}
				},
				'right': {
					show: function(slider) {
						slider.stop().animate({
							right: '0',
						},settings.animatDurto);
					},

					hide: function(slider) {
						slider.stop().animate({
							right: '-100%',
						},settings.animatDurfrom);
					}
				},
				'fade': {
					show: function(slider) {
						slider.stop().fadeIn(settings.speed);
					},

					hide: function(slider) {
						slider.stop().fadeOut(settings.speed);
					}
				},
				'slide': {
					show: function(slider) {
						slider.stop().slideDown(settings.animatDurto);
					},

					hide: function(slider) {
						slider.stop().slideUp(settings.animatDurfrom);
					}
				}

			}
			// findMaxHeight();
			function firstcond() {
				if ( settings.effect === 'left' ) {
					slider.show();
					slider.css({
						position: 'relative',
						left: '-100%'
					})
				} else if ( settings.effect === 'right' ) {
					slider.show();
					slider.css({
						position: 'relative',
						right: '-100%'
					})
				} else {
					slider.hide();
				}
			}
			
			function hideslider() {
				block.removeClass(settings.activeClass);
				effects[settings.effect].hide(slider);
			}

			function showslider() {
				block.addClass(settings.activeClass);
				effects[settings.effect].show(slider);
			}

			function findActive() {
				return block.hasClass(settings.activeClass);
			}

			function clickOpener() {
				event.preventDefault();
				if (findActive()) {
					hideslider();
				} else {
					showslider();            
				}
			}

			// function findMaxHeight() {
			// 	maxHeigh = slider.eq(0).outerHeight();
			// 	slider.each(function(){
			// 		if ( slider.outerHeight() > maxHeigh ) {
			// 			maxHeigh = slider.outerHeight();
			// 		}


			// 	});
			// 	maxHeigh = slider.outerHeight();
			// }

			
			firstcond();
			block.on('click', opener, clickOpener);
		})
	};
}(jQuery));
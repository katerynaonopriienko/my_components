/*
1. jQuery anchors (on fixed header)
2. jQuery plugin (options, callbacks)
3. Helpers
*/

jQuery(function() {
   //1
   var EXTRA_HEIGHT = 36;
   var activeClass = 'active';

   // jQuery('.nav').each(function() {
   //      var nav = jQuery(this);
   //      var items = nav.find('li');

   //      items.each(function() {
   //          var item = $(this);
   //          var link = item.find('a');
   //          var block = $(link.attr('href'));

   //          link.on('click', function(event) {
   //              var position = block.offset().top - EXTRA_HEIGHT;

   //              items.removeClass(activeClass);
   //              item.addClass(activeClass);

   //              // window.scrollTop
   //              $('body, html').stop().animate({
   //                  scrollTop: position
   //              });

   //              event.preventDefault();
   //          });
   //      });
   // });
    
    jQuery('.nav').each(function() {
        var nav = jQuery(this);
        var items = nav.find('li');

        nav.on('click', 'a', function(event) {
            var link = $(this);
            var item = link.closest('li');  
            var block = $(link.attr('href'));
            var position = block.offset().top - EXTRA_HEIGHT;

            items.removeClass(activeClass);
            item.addClass(activeClass);

            // window.scrollTop
            $('body, html').stop().animate({
                scrollTop: position
            });

            event.preventDefault();
        });
   }); 


   // 2
   jQuery('.menu1').colors({
        color: '#f00'
   });

   jQuery('.menu2').colors({
        color: 'green'
   });

   jQuery('.accordion0').accordion({
        animDuration: 300,
        onShowSlide: function() {
            console.log('Do something');
        }
   });

   jQuery('.accordion1').accordion({
        animDuration: 300
   });

   var acco = jQuery('.accordion1');
   var item0 = acco.find('.item').first(); 

   $('.start').on('click', function() {
        var api = jQuery('.accordion1').data('api');
        api.test();
        console.log(item0)
        api.show(item0)
   });
});

;(function($) {
    'use strict';    

    // {color: '#ccc'} <- {color: '#foo'}

    $.fn.colors = function(options) {
        var settings = $.extend({
            color: '#ccc'
        }, options)

        return this.each(function() {
            var menu = $(this); 
            var item = menu.find('li');

            menu.on('mouseenter', 'li', function() {
                $(this).css('color', settings.color);
            });

            menu.on('mouseleave', 'li', function() {
                $(this).css('color', ''); 
            })
        });
    };
}(jQuery));

;(function($) {
    'use strict';    

    $.fn.accordion = function(options) {
        var settings = $.extend({
            opener: '.opener',
            slider: '.slider',
            items: '.item',
            activeClass: 'active',
            animDuration: 700,
            onShowSlide: function() {},
            onHideSlide: function() {}
        }, options)

        return this.each(function(index) {
            var accordion = $(this); 
            var items = accordion.find(':has('+settings.slider+')');

            items.find(settings.slider).hide();
            accordion.attr('data-id', index);
            accordion.on('click', settings.opener, handlerClick);

            function handlerClick(event) {
                var opener = $(this);
                var item = opener.closest(settings.items);

                var activeItem = findActiveItem();

                if (!item.hasClass(settings.activeClass)) {
                    showSlide(item);
                    hideSlide(activeItem);
                }                 
            }

            function findActiveItem() {
                return items.filter('.' + settings.activeClass);
            }

            function findActiveSlider(item) {
                return item.find(settings.slider);
            }

            function showSlide(item) {
                item.addClass(settings.activeClass);
                findActiveSlider(item).slideDown(settings.animDuration, function() {
                    if (settings.onShowSlide && $.isFunction(settings.onShowSlide)) {
                        settings.onShowSlide(item);
                    }
                });
            }

            function hideSlide(item) {
                item.removeClass(settings.activeClass);
                findActiveSlider(item).slideUp(settings.animDuration, function() {
                    if (settings.onHideSlide && $.isFunction(settings.onHideSlide)) {
                        settings.onHideSlide(item);
                    }
                });
            }

            function test() {
                accordion.css('background-color', '#ccc');
            }

            accordion.data('api', {
                test: test,
                show: showSlide
            });
        });
    };
}(jQuery));
/*
1. jQuery Extend
2. jQuery plugin
3. Drag
*/

jQuery(function() {
  // 1

  var test1 = {
    name: 'Evgeniy'
  };

  var test2 = {
    name: 'Kate',
    age: 28
  };

  var test3 = {
    name: 'Olga'
  }

  var result1 = $.extend(test1, test2);
  var result2 = $.extend({}, test2);
  var result3 = $.extend({}, test2, test3);

  console.log('1', result1);
  console.log('2', result2);
  console.log('3', result3);

  // 2
  $('.blocks').maxHeight({
    color: '#cff'
  });

  // 3
  $('.container').drag({
    onMouseUp: function() {
      console.log('UP')
    }
  });

  ResponsiveHelper.addRange({
    '..768': {
          on: function() {
            var api = $('.container').data('api');
             api.destroy();
          },
          off: function() {
            $('.container').drag();
          }
      }
  });
});

;(function($) {
    $.fn.maxHeight = function(options) {
      var DEFAULTS_OPTIONS = {
          items: 'div',
          color: '#ccc'
      };

      var settings = $.extend(DEFAULTS_OPTIONS, options);

      return this.each(function() {
        var block = $(this);
        var divs = block.find(settings.items);
        var max = 0;
        var currentIndex;

        divs.each(function(index, element) {
          var div = $(element);
          if (div.height() > max) { 
            
            max = div.height();
            currentIndex = index;
          }
        });

        divs.eq(currentIndex).css('background-color', settings.color);
      });
    }
}(jQuery))

;(function($) {
    $.fn.drag = function(options) {
      var DEFAULTS_OPTIONS = {
          hand: '.hand',
          onMouseUp: function() {}
      };

      var settings = $.extend(DEFAULTS_OPTIONS, options);

      return this.each(function() {
        var container = $(this);
        var hand = container.find(settings.hand);
        var startX = 0;
        var startY = 0;
        var isDrag = false;

        function mousedownHandler(event) {
          isDrag = true;
          hand.css('background-color', '#f00');
          startX = event.pageX - hand.offset().left + container.offset().left;
          startY = event.pageY - hand.offset().top  + container.offset().top;
        }

        function mousemoveHandler(event) {
          if (isDrag) {
              var x = event.pageX - startX;
              var y = event.pageY - startY;

              if (x < 0) {
                  x = 0;
              }

              if (x > container.width() - hand.width()) {
                  x = container.width() - hand.width();
              }

              if (y < 0) {
                  y = 0;
              }

              if (y > container.height() - hand.height()) {
                  y = container.height() - hand.height();
              }

              hand.css({
                left: x,
                top: y
              });
          }
        }

        function mouseupHandler() {
          isDrag = false;
          hand.css('background-color', '');
          if (settings.onMouseUp && $.isFunction(settings.onMouseUp)) {
            settings.onMouseUp();
          }
        }

        function destroy() {
          isDrag = false;
          hand.css({backgroundColor: '', left: '',top: ''}).removeAttr('style');
          hand.off('mousedown', mousedownHandler);
          $(document).off('mousemove', mousemoveHandler);
          $(document).off('mouseup', mouseupHandler);
        };

        container.data('api', {
          destroy: destroy
        });

        hand.on('mousedown', mousedownHandler);
        $(document).on('mousemove', mousemoveHandler);
        $(document).on('mouseup', mouseupHandler);
      });
    }
}(jQuery));



/*
 * Responsive Layout helper
 */
ResponsiveHelper = (function($) {
    // init variables
    var handlers = [],
        prevWinWidth,
        win = $(window),
        nativeMatchMedia = false;

    // detect match media support
    if (window.matchMedia) {
        if (window.Window && window.matchMedia === Window.prototype.matchMedia) {
            nativeMatchMedia = true;
        } else if (window.matchMedia.toString().indexOf('native') > -1) {
            nativeMatchMedia = true;
        }
    }

    // prepare resize handler
    function resizeHandler() {
        var winWidth = win.width();
        if (winWidth !== prevWinWidth) {
            prevWinWidth = winWidth;

            // loop through range groups
            $.each(handlers, function(index, rangeObject) {
                // disable current active area if needed
                $.each(rangeObject.data, function(property, item) {
                    if (item.currentActive && !matchRange(item.range[0], item.range[1])) {
                        item.currentActive = false;
                        if (typeof item.disableCallback === 'function') {
                            item.disableCallback();
                        }
                    }
                });

                // enable areas that match current width
                $.each(rangeObject.data, function(property, item) {
                    if (!item.currentActive && matchRange(item.range[0], item.range[1])) {
                        // make callback
                        item.currentActive = true;
                        if (typeof item.enableCallback === 'function') {
                            item.enableCallback();
                        }
                    }
                });
            });
        }
    }
    win.bind('load resize orientationchange', resizeHandler);

    // test range
    function matchRange(r1, r2) {
        var mediaQueryString = '';
        if (r1 > 0) {
            mediaQueryString += '(min-width: ' + r1 + 'px)';
        }
        if (r2 < Infinity) {
            mediaQueryString += (mediaQueryString ? ' and ' : '') + '(max-width: ' + r2 + 'px)';
        }
        return matchQuery(mediaQueryString, r1, r2);
    }

    // media query function
    function matchQuery(query, r1, r2) {
        if (window.matchMedia && nativeMatchMedia) {
            return matchMedia(query).matches;
        } else if (window.styleMedia) {
            return styleMedia.matchMedium(query);
        } else if (window.media) {
            return media.matchMedium(query);
        } else {
            return prevWinWidth >= r1 && prevWinWidth <= r2;
        }
    }

    // range parser
    function parseRange(rangeStr) {
        var rangeData = rangeStr.split('..');
        var x1 = parseInt(rangeData[0], 10) || -Infinity;
        var x2 = parseInt(rangeData[1], 10) || Infinity;
        return [x1, x2].sort(function(a, b) {
            return a - b;
        });
    }

    // export public functions
    return {
        addRange: function(ranges) {
            // parse data and add items to collection
            var result = { data:{} };
            $.each(ranges, function(property, data) {
                result.data[property] = {
                    range: parseRange(property),
                    enableCallback: data.on,
                    disableCallback: data.off
                };
            });
            handlers.push(result);

            // call resizeHandler to recalculate all events
            prevWinWidth = null;
            resizeHandler();
        }
    };
}(jQuery)); 

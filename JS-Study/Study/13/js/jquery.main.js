/*

1. Keyup / mouseenter / mouseleave
2. AJAX
*/

jQuery(function() {
    // 1
    var block = $('.block-tank');
    var tank = block.find('.tank');
    var tankWidth = tank.width();
    var tankHeight = tank.height();
    var blockWidth = block.width();
    var blockHeight = block.height();
    var positionX = 0;
    var positionY = 0;
    var activeClass = 'hovered';

    block.on('mouseenter', function() {
        block.addClass(activeClass);
    });

    block.on('mouseleave', function() {
        block.removeClass(activeClass);
    });

    $(document).on('keyup', function(event) {
        if (block.hasClass(activeClass)) {
            var keyCode = event.which;

            if (keyCode === 39) {
                if (positionX < blockWidth - tankWidth) {
                    positionX += tankWidth;
                    tank.css('left', positionX);

                    // tank.stop().animate({
                    //     'left': positionX
                    // });
                }
            }

            if (keyCode === 37) {
                if (positionX > 0) {
                    positionX -= tankWidth;
                    tank.css('left', positionX);
                }
            }

            if (keyCode === 40) {
                if (positionY < blockHeight - tankHeight) {
                    positionY += tankHeight;
                    tank.css('top', positionY);
                }
            }

            if (keyCode === 38) {
                if (positionY > 0) {
                    positionY -= tankHeight;
                    tank.css('top', positionY);
                }
            }
        }
    });


    // 2 AJAX
    var buttonAjax = $('#ajax');
    var contentAjax = $('#content');
    var isLoaded = false

    buttonAjax.on('click', function() {
        if (!isLoaded) {
            $.ajax({
                url: buttonAjax.data('url'),
                type: 'get',
                dataType: 'html',
                success: function(data) {
                    isLoaded = true;
                    contentAjax.html(data);
                    console.log('data', data)
                }
            });
        }
        
    });

    // 3 OPen close ajax
    $('.open-close').each(function() {
        var block = $(this);
        var opener = block.find('.opener');
        var slider = block.find('.slider');
        var activeClass = 'active';
        var isLoaded = false

        opener.on('click', clickHandler);

        function ajaxCall(callback) {
            if (!isLoaded) {
                setTimeout(function() {
                    $.ajax({
                        url: block.data('url'),
                        type: 'get',
                        dataType: 'html',
                        success: function(data) {
                            isLoaded = true;
                            slider.html(data);

                            if (callback) {
                                callback();
                            }
                        }
                    });
                }, 2000);
            } else {
                if (callback) {
                    callback();
                }
            }
        }

        function clickHandler() {
            if (isActive()) {
                hide();
            } else {
                ajaxCall(function() {
                    show();    
                });
                          
            }        
        }

        function isActive() {
            return block.hasClass(activeClass);
        }

        function show() {
            block.addClass(activeClass);
            slider.show();
        }

        function hide() {
            block.removeClass(activeClass);
            slider.hide();
        }
    });
});
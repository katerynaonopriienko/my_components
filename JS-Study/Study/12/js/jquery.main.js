/*

1. Всплытие событий 
2. Делегирование native JS
3, Accordion jQuery
4. OpenClose с возможностью разных эффектов
*/

jQuery(function() {
    // 1
    var box = document.querySelector('.box');
    var cart = document.querySelector('.add');

    box.addEventListener('click', function() {
        console.log('Show Modal Window');
    })

    cart.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();    
        console.log('Add to cart');
    });


    // 2
    var menu = document.querySelector('.menu');

    menu.addEventListener('click', function(event) {
        // if (event.target.tagName.toLowerCase() === 'a') {
        //     console.log('Do something')
        // }
        // или
        if (event.target.className.indexOf('test') > -1) {
            console.log('Do something')
        }
    });

    // 3
    // 
    $('.accordion').each(function(index, item) {
        var accordion = $(this);
        var items = accordion.find(':has(.slider)');
        var activeClass = 'active';

        accordion.attr('data-id', index);
        accordion.on('click', '.opener', handlerClick);

        function handlerClick(event) {
            var opener = $(this);
            var item = opener.closest('.item');

            var activeItem = findActiveItem();

            if (!item.hasClass(activeClass)) {
                showSlide(item);
                hideSlide(activeItem);
            }                 
        }

        function findActiveItem() {
            // return items.filter('.active');
            return items.filter('.' + activeClass);
        }

        function findActiveSlider(item) {
            return item.find('.slider');
        }

        function showSlide(item) {
            item.addClass(activeClass);
            findActiveSlider(item).slideDown(400);

            // findActiveSlider(item).slideDown(400, function() {
            //     console.log('Call back')
            // }
        }

        function hideSlide(item) {
            item.removeClass(activeClass);
            findActiveSlider(item).slideUp(400);
        }
    });
    

    // var someVar = 'a';
    // var test = {
    //     a: {},
    //     b: {}
    // }


    // test[someVar]
    
    // 4
    
    $('.open-close').each(function() {
        var block = $(this);
        var opener = block.find('.opener');
        var slider = block.find('.slider');
        var activeClass = 'active';
        var effect = block.attr('data-effect') || 'none' // none - fade - slide

        var effects = {
            'none': {
                show: function(slider) {
                    slider.show();
                },

                hide: function(slider) {
                    slider.hide();
                }
            },

            'fade': {
                show: function(slider) {
                    slider.stop().fadeIn();
                },

                hide: function(slider) {
                    slider.stop().fadeOut();
                }
            },

            'slide': {
                show: function(slider) {
                    slider.stop().slideDown();
                },

                hide: function(slider) {
                    slider.stop().slideUp();
                }
            }
        }

        opener.on('click', clickHandler);

        function clickHandler() {
            if (isActive()) {
                hide();
            } else {
                show();            
            }        
        }

        function isActive() {
            return block.hasClass(activeClass);
        }

        function show() {
            block.addClass(activeClass);
            effects[effect].show(slider);
        }

        function hide() {
            block.removeClass(activeClass);
            effects[effect].hide(slider);
        }
    });

    // 5
    var buttonMove = $('.btn-move').css('position', 'relative');
    var buttonBack = $('.btn-back').hide();

    buttonMove.on('click', clickHandler1);

    function clickHandler1() {
        buttonMove.animate({
            left: 100
        }, 300, function() {
            buttonBack.fadeIn();
        })
    }

    buttonBack.on('click', clickHandler2);

    function clickHandler2() {
        buttonMove.animate({
            left: 0
        }, 300, function() {
            buttonBack.fadeOut();
        })
    }
});


var basePerson = {
    skills: {
        getName: function(name) {
            return 'Your skill is ' + name;
        }
    },
    address: {
        getName: function(name) {
            return 'You are live ' + name;
        }
    }
};

var type = 'skills'

console.log(basePerson[type].getName('Bob'))

// function doSomething(callback) {
//     console.log('Start #1');

//     if (typeof callback === 'function') {
//         callback();
//     }
// }

// function doSomething2() {
//     console.log('Start #2');
// }

// doSomething(doSomething2);


// .addEventLister('click', clickHandler) 
document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll('.accordion');

    for (var i = 0; i < accordions.length; i++) {
        var accordion = accordions[i];
        accordionInit(accordion);        
    }

    function accordionInit(accordion) {
        var items = accordion.querySelectorAll('.item');
        var links = accordion.querySelectorAll('.opener');
        var activeClass = 'active';

        function handleClick(target) {
            var item = target.closest('.item');

            if (item.classList.contains(activeClass)) {
                hideSlide(item);
                return;
            }

            if (findActiveItem()) {
                var activeItem = findActiveItem();
                hideSlide(activeItem);
                showSlide(item);        
            } else {
                showSlide(item);
            }
        }

        function findActiveItem() {
            return accordion.querySelector('.item.active');
        }

        function showSlide(item) {
            item.classList.add(activeClass);
        }

        function hideSlide(item) {
            item.classList.remove(activeClass);
        }

        accordion.addEventListener('click', function(event) {
            if (event.target.classList.contains('opener')) {
                handleClick(event.target);
            }
        });
    }




    function fixedButton1() {
        var btn = document.querySelector('.btn-go');

        function scrollHandler() {
            var scrollTop = window.pageYOffset;
            if (scrollTop > 300) {
                show();
            } else {
                hide();            
            }
        }

        function show() {
            btn.style.display = 'block';
        }

        function hide() {
            btn.style.display = 'none';
        }

        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
    }

    function fixedButton2() {
        var block = document.querySelector('.promo'); 
        var btn = document.querySelector('.btn-go');

        //console.log(parseFloat(getComputedStyle(block).height))

        function scrollHandler() {
            var scrollTop = window.pageYOffset;
            if (scrollTop > getCoords(block).top + block.clientHeight) {
                show();
            } else {
                hide();            
            }
        }

        function getCoords(elem) {
            return {
                top: elem.getBoundingClientRect().top + window.pageYOffset
            }
        }

        function show() {
            btn.style.display = 'block';
        }

        function hide() {
            btn.style.display = 'none';
        }

        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
    }

    function fixedButton3() {
        var block = document.querySelector('.promo-2');
        var fake = document.querySelector('.fake');

        function scrollHandler() {
            var scrollTop = window.pageYOffset;
            if (scrollTop > getCoords(fake).top) {
                show();
                fake.style.height = block.clientHeight + 'px';
            } else {
                hide();            
                fake.style.height = '';
            }
        }

        function getCoords(elem) {
            return {
                top: elem.getBoundingClientRect().top + window.pageYOffset
            }
        }

        function show() {
            block.classList.add('fixed');
        }

        function hide() {
            block.classList.remove('fixed');
        }

        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
    }

    // fixedButton1()
    fixedButton2();
    fixedButton3();
});

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (var i = 0; i < 5; i++) {
//     test(i)    
// }

// function test(num) {
//     setTimeout(function() {
//         console.log(num);
//     }, 3000)
// }
// 
for (var i = 0; i < 5; i++) {
    (function(num) {
        setTimeout(function() {
            console.log(num);
        }, 3000)
    }(i))
}

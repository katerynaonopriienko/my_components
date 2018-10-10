document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.getElementById('gallery');
    var btnNext = gallery.querySelector('.next');
    var btnPrev = gallery.querySelector('.prev');
    var btnStart = gallery.querySelector('.start');
    var btnStop = gallery.querySelector('.stop');
    var slides = gallery.querySelectorAll('.slide');
    var pager = gallery.querySelector('ul');
    var items;
    var currentIndex = 0;
    var timer = null;
    var activeTimerClass = 'autoroation';

    createPaging();
    items = pager.querySelectorAll('li');
    slides[0].classList.add('active');
    items[0].classList.add('active');
    
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

    function changeSlide(index) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            items[i].classList.remove('active');
        }
        slides[index].classList.add('active');
        items[index].classList.add('active');
    }

    function createPaging() {
        var item;

        for (var i = 0; i < slides.length; i++) {
            item = document.createElement('li');
            item.innerHTML = i + 1;
            item.setAttribute('data-id', i);
            pager.appendChild(item);
        }
    }

    function startAutoPlay() {
        if (!gallery.classList.contains(activeTimerClass)) {
            gallery.classList.add(activeTimerClass);
            timer = setInterval(function() {
                nextSlide();
            }, 1000);
        }        
    }

    function stopAutoPlay() {
        gallery.classList.remove(activeTimerClass);
        clearInterval(timer);
    }

    for (var k = 0; k < items.length; k++) {
        items[k].addEventListener('click', function(event) {
            var index = event.target.dataset.id;
            changeSlide(index);
        });
    }

    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);
    btnStart.addEventListener('click', startAutoPlay);
    btnStop.addEventListener('click', stopAutoPlay);
});
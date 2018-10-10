//jQuery || $

jQuery(function() {
    console.log($('#wrapper'))
    console.log($('form'))

    if ($('form').length) {
        $('form').addClass('some-class');    
    }

    // var form = document.querySelector('form');
    // console.log(form)
    // form.classList.add('some');

    console.log($('input[type="text"]'))
    console.log($(':text'));

    $('input[type="text"]').addClass('testclass');

    console.log($('.list'))
    var someIndex = 2;
    console.log($('[data-id="'+someIndex+'"]'));

    //var itemsList = $('.list').find('li');
    var itemsList = $('.list').children('li');

    itemsList.on('click', function(event) {
        // console.log($(event.target));
        // console.log($(event.currentTarget));
        var current = $(this);
        current.addClass('test')
    });

    //var firstItem = itemsList.eq(1);
    var firstItem = itemsList.first();
    var secondItem = firstItem.next();
    // next = nextAll = prev = prevAll 
    
    //var activeItem = itemsList.siblings('.active');
    var activeItem = itemsList.filter('.active');
    console.log('activeItem', activeItem)

    var listTest = $('#test-ul');

    var parentTest1 = listTest.parent();
    var parentTest2 = listTest.closest('.list');

    

    var block = $('.block');
    var blockHeader = block.find('header');

    var footer = $('<footer></footer>');
    //footer.text('Some text');
    footer.addClass('footer');
    footer.attr('data-id', 'newId');
    footer.html('<b>Some text</b>');
    
    footer.appendTo(block);
    //block.append(footer);
    
    //footer.prependTo(block);
    //block.prepend(footer)
    
    // footer.insertAfter(blockHeader)
    // blockHeader.after(footer)
    
    //footer.insertBefore(blockHeader)
    // blockHeader.before(footer)
    
    footer.removeAttr('data-id');

    var button = $('button');
    var section = $('section');

    section.hide();

    button.on('click', function() {
        if (section.hasClass('active')) {
            section.removeClass('active');
            section.stop().fadeOut();
        } else {
            section.addClass('active');
            section.stop().fadeIn();
        }
            
    })

    //section.remove();
    //section.detach();
    //
    console.log(section.outerHeight())
    console.log(section.css('height'))
    console.log(getComputedStyle(section[0]).height)

    var tab = $('.tab');
    var tabItems = tab.find('[data-id]');

    tab.on('click', '[data-id]', function() {
        console.log($(this).text())
    });
    
    // tabItems.on('click', function() {
    //     $(this).addClass('active');
    // }) 

    var newTab = $('<div data-id="4">Tab 4</div>');

    newTab.appendTo(tab);


    
});

// $(window).on('load', function() {

// });


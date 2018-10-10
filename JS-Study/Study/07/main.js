function filterByProp(array, prop) {
    if (Array.isArray(array)) {
        return array.sort(function(a, b) {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
            return 0
        })
    } else {
        // 1) - throw 'Array must be array';
        // 2) - throw new Error('Array must be array')
    }

}

function letterWord(a) {
    return a.charAt(0).toUpperCase() + a.slice(1,a.length-1) + a.charAt(a.length-1).toUpperCase();
 }

// расширить прототип
String.prototype.letterWord = function() {
    return this.charAt(0).toUpperCase() + this.slice(1,this.length-1) + this.charAt(this.length-1).toUpperCase();
}

 //console.log(letterWord('test test'))

 var str = 'opppo';


// console.log(str.letterWord())
// console.log(filterByProp({}, 'tst'))
// 
// 
// 
// 

window.addEventListener('DOMContentLoaded', function() {
    console.log('document', document)
    console.log('html', document.documentElement)
    console.log('body', document.body)
    console.log('children body', document.body.childNodes);
    console.log('children body', document.body.children)

    console.log('find id', wrapper)
    console.log('find id', document.getElementById('wrapper'))

    console.log('find tag', document.getElementsByTagName('header')[0]);
    console.log('find class', document.getElementsByClassName('header'));

    console.log('find all first', document.querySelector('.header'))
    console.log('find all first', document.querySelector('#wrapper'))
    console.log('find all first', document.querySelector('footer'))

    console.log('find all', document.querySelectorAll('.header'))

    var blocks = document.querySelectorAll('.block');

    for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        var opener = block.querySelector('.opener');
        var slider = block.querySelector('.slider');

        opener.setAttribute('data-id', i);

        console.log(opener.getAttribute('data-id'));
        console.log(opener.hasAttribute('data-id'));

        opener.removeAttribute('href');
    }

    var main = document.querySelector('main');
    //console.log(main.attributes.id) не обязятельно
    console.log(main.id)
    console.log(main.dataset)
    console.log(main.dataset.col)
    console.log(main.dataset.type)

    var list = document.querySelector('ul');
    console.log('find first', list.firstChild);
    console.log('find first', list.firstElementChild);

    console.log('find last', list.lastChild);
    console.log('find last', list.lastElementChild);

    console.log('find prev', list.previousSibling);
    console.log('find prev', list.previousElementSibling);

    console.log('find next', list.nextSibling);
    console.log('find next', list.nextElementSibling);

    var modal = document.createElement('div');
    // установить
    modal.innerHTML = 'Message';
    modal.id = 'modal-id';
    modal.className = 'modal-class'
    modal.style.position = 'fixed';
    modal.style.top = '50px';
    modal.style.left = '50px';
    modal.style.backgroundColor = 'blue';
    //modal.style.cssText = 'margin-top: 10px;padding-top: 10px';
    // прочитать
    // console.log(main.innerHTML)

    //document.body.appendChild(modal);


    var holder = document.querySelector('#holder');

    //holder.remove()
    //holder.parentNode.removeChild(holder);


    main.className += ' active';
    main.className = main.className.replace('main-test', '');
    console.log(main.className.indexOf('active') > -1)

    main.classList.add('new-active')
    main.classList.remove('new-active')
    console.log(main.classList.contains('new-active'));


    var button = document.querySelector('#test');
    var body = document.body;

    if (button) {
        button.addEventListener('click', function() {
            if (body.style.backgroundColor === 'rgb(204, 204, 204)') {
                body.style.backgroundColor = '';
            } else {
                body.style.backgroundColor = '#ccc';
            }
        });
    }

    var buttonMo = document.querySelector('#mo');
    var body = document.body;
    var activeClass = 'active';

    if (buttonMo) {
        buttonMo.addEventListener('click', function() {
            if (body.classList.contains(activeClass)) {
                body.classList.remove(activeClass);
                modal.remove();
            } else {
                body.classList.add(activeClass)
                body.appendChild(modal);
            }
        });
    }
})



var n1 = '10.2';
var n2 = '10px';
var n3 = 'p10';

console.log(+n1);
console.log(parseFloat(n1));
console.log(parseInt(n1));
console.log('====');
console.log(+n2);
console.log(parseFloat(n2));
console.log(parseInt(n2));
console.log('====');
console.log(+n3);
console.log(parseFloat(n3));
console.log(parseInt(n3));

var n4 = '10';
console.log('====');
console.log(isNaN(n4));
console.log('====');

//var n5 = ''; //equals 0
//var n5 = false; //equals 0
var n5 = true //equals 1
console.log(isNaN(n5));
console.log('====');

var n6 = Infinity;

function isNumber(num) {
    return isFinite(num) && !isNaN(parseFloat(num));
}

console.log('isNumber', isNumber(1))
console.log('isNumber', isNumber(0))
console.log('isNumber', isNumber(''))
console.log('isNumber', isNumber(false))
console.log('isNumber', isNumber(Infinity))
console.log('====');

console.log(typeof 1)
console.log(typeof '1')
console.log(typeof {})
console.log(typeof [])
console.log(typeof function() {})
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof new Date())
console.log('====');

console.log(Object.prototype.toString.call(1));
console.log(Object.prototype.toString.call('1'));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(function() {}));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(new Date()));

function checkType(value) {
    return Object.prototype.toString.call(value)
        .replace('[object ', '')
        .replace(']', '')
        .toLowerCase();
}

console.log('checkType', checkType([]))

if (checkType([]) === 'array') {
    console.log('Do something with Array')
}

console.log('====');

var n7 = 10.556343;

console.log(n7.toFixed(2))
console.log(Math.round(n7 * 100) / 100)

var n8 = 255;
console.log(n8.toString(16))

var rgba = "255, 197, 0";

function rgbaToHex(rgba) {
    return '#' + rgba
        .split(', ')
        .map(function(item) {
            var n = parseInt(item);
            // if (n === 0) {
            //     return '0' + n.toString(16);    
            // }

            // return n.toString(16);    
            return (n === 0) ? '0' + n.toString(16) : n.toString(16);
        })
        .join('');
}

console.log('rgbaToHex', '#ffc500', rgbaToHex(rgba));

String.prototype.rgbaToHex = function() {
    return '#' + this
        .split(', ')
        .map(function(item) {
            var n = parseInt(item);
            // if (n === 0) {
            //     return '0' + n.toString(16);    
            // }

            // return n.toString(16);    
            return (n === 0) ? '0' + n.toString(16) : n.toString(16);
        })
        .join('');
}


var rgba2 = "255, 255, 255";
console.log('prototype rgbaToHex', rgba2.rgbaToHex());







;(function() {
    var button = document.querySelector('button');
    var modal;
    var modalContent;
    var content;
    var activeClass = 'is-opened';

    function prepareModal() {
        modal = document.querySelector('#modal');
        content = document.getElementById(button.dataset.popup); 

        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal';
            modal.classList.add('modal');

            // if (content) {
            //     modal.innerHTML = prepareContent(contentText);
            // } else {
            //     modal.innerHTML = prepareContent('No contents');    
            // }
            // 
            modal.innerHTML = prepareContent(content ? content.innerHTML : 'No contents');
            document.body.appendChild(modal);
        }
    }

    function prepareContent(text) {
        return modalContent = 
            '<div class="modal-wrap">' +
            '    <div class="modal-cotent">'+text+'</div>' +
            '    <div class="modal-close">Close</div>' +
            ' </div>';
    }

    function showModal() {
        document.body.classList.add(activeClass);
        prepareModal();

        modal.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal-close')) {
                hideModal();                
            }
        });
    }

    function hideModal() {
        document.body.classList.remove(activeClass);
        modal.remove();
    }

    function isOpened() {
        return document.body.classList.contains(activeClass);
    }

    function hideModalEsc(event) {
        if (isOpened() && (event.which || event.keyCode) === 27) {
            hideModal();
        }

        // if (isOpened()) {
        //     if (event.which || event.keyCode) === 27) {
        //         hideModal();
        //     }
        // }
    }

    document.body.addEventListener('keyup', hideModalEsc);
    button.addEventListener('click', showModal);
}());

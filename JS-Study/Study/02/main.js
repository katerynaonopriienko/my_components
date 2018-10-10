// console.log(+'100.2')
// console.log(parseFloat('100.3'))
// console.log(parseInt('100.33'))


// var number = prompt('Enter Number');
// if (!isNaN(number)) {
//     console.log(parseFloat() + 10)    
// }


// var num = 426.92128998186875;
// console.log(num.toFixed(0+))


// var a = 10.5;
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.round(a));

//var obj = {};
// var obg = new Object();
// var obg = Object();
// 
// obj.old = 28;
// obj.name = 'Kate';
// 
// 
// var a = 10;
// var b = a;

// console.log(b)
// console.log(a)

// b = 20;

// console.log(b)
// console.log(a)

var obj = {
    old: 28,
    name: 'Kate',
    isMarried: false,
    hand: {
        size: 1,
        color: '#ccc'
    }
};

// var newObj = obj;

// newObj.old = 10;

// console.log('newObj', newObj)
// console.log('obj', obj)

console.log(obj)
// желательно
console.log(obj.name)

var key = 'name';
//var key = 'old';
console.log(obj[key])
// можно
console.log(obj['name'])

// как проверить наличиие
console.log(obj.hear);

if (!obj.hear) {
    obj.hear = 'blond';
}

// удалить свойство
// delete obj.hear;
// 
// очистить
// obj = {};

// console.log(obj);
// 
// перебор

//console.log(111, Object.keys(obj).length)

var count = 0;
for (var prop in obj) {
    count = count + 1;
    // просмотреть значение 
    console.log(obj[prop])
    // просмотреть ключ и значение 
    console.log(prop +':'+ obj[prop])

    if (prop === 'name') {
        obj[prop] = 'Olga';
        // break;
    }
}

//console.log(22, count)

// backend
var data = {
    layout: ['1', '2'],
    framework: ['1', '2'],
    testBlobHe: ['cdscsdcdscdscsdcs']
};

var dictionary = {
    layout: [],
    framework: []
};

// copy from backend
//dictionary = data;
for (var key in dictionary) {
    dictionary[key] = data[key];
}

//console.log(dictionary)
// или
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// и
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

if ('admin' === 'olga' && 10 === 40) {

}

// [<div></div>,
// <div></div>,
// <div></div>,
// <div></div>,
// <div></div>,
// <div></div>]

// if (blocks.length && block.hasClass('active')) {

// }
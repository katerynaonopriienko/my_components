//start
//анализ
// testFunc
// var newA = undefined

// testFunc();
// testFunc2();

//console.log(newA)

//'use strict';

// test = 'string';
// test = 'newstring';
// test = 10;

// var color = '#ccc',
//     text = 'dsdsd';
function someFunc() {
    var newVar = '10';
}

someFunc()
//
// or
;(function() {
    var a = 10;
}());

// function decloration
function testFunc() {
    console.log('testFunc1')
}
// or
// function expresion
var testFunc2 = function() {
    //console.log('testFunc2')   
};

var newA = 10;


// function getStr(name, age) {
//     var param1 = 'param' + name;
//     var param2 = 'param' + age;
//     return param1 + '&' + param2;
// }
function getStr(name, age, position) {
    var result = '';
    for (var i = 0; i < arguments.length; i++) {
        result += 'param=' + arguments[i] + '&'
    }
    return result.slice(0,-1)
}
function getStr(name, age) {
    arguments.join = [].join;
    return arguments.join('&')
}

var result = getStr('Kate', '29');
// param=Kate&param=29
console.log(result)


var button1 = document.querySelector('.button1');
var content1 = document.querySelector('.content1');

if (localStorage.getItem('name_status')) {
    content1.style.display = 'none';
}

button1.addEventListener('click', function() {
    content1.style.display = 'none';
    localStorage.setItem('name_status', true);
});

var obj = {status: true};
console.log('obj', obj)
console.log('obj_string', JSON.stringify(obj))

var arr = [
    {
        name: 10
    },
    {
        name: 20
    }
];

console.log('arr join', arr.join(','))
console.log('arr json stringify', JSON.stringify(arr))

// localStorage

//localStorage.setItem('name_status', true);
localStorage.setItem('name_button', JSON.stringify(obj));
localStorage.setItem('name_array', JSON.stringify(arr));

var status = localStorage.getItem('name_status');
var storageValueObj = localStorage.getItem('name_button');
var storageValueArr = localStorage.getItem('name_array');
console.log('storageValue', JSON.parse(storageValueObj))
console.log('storageValueArr', JSON.parse(storageValueArr))

// remove key name_status
setTimeout(function() {
    //localStorage.removeItem('name_status');
}, 2000);

// remove all keys
//localStorage.clear();

// sessionStorage
sessionStorage.setItem('session_name_button', true);

var button2 = document.querySelector('.button2');
var content2 = document.querySelector('.content2');

if (sessionStorage.getItem('session_name_status')) {
    content2.style.display = 'none';
}

button2.addEventListener('click', function() {
    content2.style.display = 'none';
    sessionStorage.setItem('session_name_status', true);
});

// cookie
Cookies.set('cookie_name_button', {name: 'name'});
console.log(Cookies.get('cookie_name_button'))
console.log(Cookies.getJSON('cookie_name_button'))


// 
var form = document.querySelector('form');
var inputs = form.querySelectorAll('input');

if (sessionStorage.getItem('form_data')) {
    var sessionData = JSON.parse(sessionStorage.getItem('form_data'));
    for (var key in sessionData) {
        form.querySelector('input[name="'+key+'"]').value = sessionData[key];
    }
}

for (var i = 0; i < inputs.length; i++) {
    var temp = {};
    (function(index) {
        inputs[index].addEventListener('change', function() {
            temp[inputs[index].name] = inputs[index].value;
            sessionStorage.setItem('form_data', JSON.stringify(temp));
        });
    }(i))        
}

form.addEventListener('submit', function(event) {
    // var temp = {};
    // for (var i = 0; i < inputs.length; i++) {
    //     temp[inputs[i].name] = inputs[i].value;
    // }

    sessionStorage.removeItem('form_data');
    event.preventDefault();
})
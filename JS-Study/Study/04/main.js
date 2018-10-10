var obj = {
    old: 28,
    name: 'Kate',
    isMarried: false
};

var body = document.body;

for (var key in obj) {
    var div = document.createElement('div');
    div.innerHTML = obj[key];
    //body.appendChild(div);
}

var str = 'test';
var num = 10;
var tes = {a:10};

// or
var str2 = new String('test');
var num2 = new Number(10);
var tes2 = new Object({a:10}); 
var arr = new Array();

console.log(str)
//console.log(num.__proto__)
console.log(tes)

console.log(str2)
console.log(num2)
console.log(tes2)
console.log(arr)

var obg3 = Object.create(null); // === {} == new Object()

obg3.name = '1';

// data base backend
// | id | name | old |
// | 1  | Kate | 28  |
// | 2  | Olga | 27  | 
var dataBase = [
    {id: 1, name: 'Kate', old: 28},
    {id: 2, name: 'Olga', old: 27}
];

for (var i = 0; i < dataBase.length; i++) {
    for (var key in dataBase[i]) {
        var div = document.createElement('div');
        div.innerHTML = dataBase[i][key];
        //body.appendChild(div);
    }    
}

var xhr = new XMLHttpRequest();

xhr.open('get', 'http://smd.co.ua/estimator/api/Category/GetAll.php', false);
xhr.onload = function() {
    // JSON.parse - форматирует JSON строку в  JAVASCRIPT Object
    var response = JSON.parse(xhr.responseText);
    var items = response.items;
    console.log('response', response)
    
    // JSON.stringify - форматирует JAVASCRIPT Object в JSON строку
    var jsonS = JSON.stringify(items)

    console.log('jsonS >>', jsonS)

    for (var i = 0; i < items.length; i++) {
        for (var key in items[i]) {
            var div = document.createElement('div');
            div.innerHTML = items[i][key];
            body.appendChild(div);
        }    
    }
};
xhr.send();

// or

fetch('http://smd.co.ua/estimator/api/Category/GetAll.php').then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('new request', json)
});

console.log('Time Start')
// запуск
var timerId = setTimeout(function() {
    console.log('Time End')
}, 2000);

// очистка
//clearTimeout(timerId);

// запуск
var count = 0;
var timeIdInterval = setInterval(function() {
    if (count < 4) {
        count = count + 1;
    } else {
        clearInterval(timeIdInterval);
    }
    
    //console.log(count);
}, 1000);

// очистка
//clearInterval(timeIdInterval);
//
var objM = {
    name: 'olay',
    age: 28,
    isStock: false,
    params: {
        a: 1,
        b: 1
    },
    names: ['Olay', 'Kate'],
    products: [
        { id: 1, name: '' },
        { id: 3, name: '' }
    ],
    content: null,
    greeting: function() {
        var name = this.name;
        return 'Привет' + ' ' + this.letterWord(name);
    },
    letterWord(a) {
        return a.charAt(0).toUpperCase() + a.slice(1,a.length-1) + a.charAt(a.length-1).toUpperCase();
     }
}

console.log(objM.greeting());

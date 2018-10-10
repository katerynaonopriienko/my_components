var sampleArray = ['one', 'tdfcdfv', 'ccdfvdf'];

var array1 = [];
var array2 = new Array();

var arrayLength1 = [].length;
var arrayLength2 = ['1', '2', '3'].length;

var arrayFind1 = sampleArray[0];
var arrayFind2 = sampleArray[sampleArray.length - 1];

// Array.isArray
// Array.isArray(sampleArray)
// 
// replace values
sampleArray[1] = 'test';
sampleArray[sampleArray.length - 1] = 'olla';


var nArra = [];
nArra[4] = 'test';

// ['undefined', 'undefined', 'undefined', 1000]
// [
//     0: '1',
//     1: '2'
// ]

// add to end array
sampleArray.push('green');
// remove last
//sampleArray.pop();
// add to start array
sampleArray.unshift('yellow');
// remove first
//sampleArray.shift();

// remove one element from index 1
sampleArray.splice(1, 1);
// add new element after index 1
sampleArray.splice(1, 0, 'blabla');


// ['aaaa', 'bbbbb', 'cccc'] 
// 
var example = [
    {id: 111111, name: 'Test 1', price: 100},
    {id: 222222, name: 'Test 2', price: 100},
    {id: 333333, name: 'Test 3', price: 20}
];

// <li id="111111">Test 1 - X</li>
// <li id="222222">Test 2 - X</li>
// <li id="333333">Test 3 - X</li>

// click where Id = 111111;
for (var i = 0, max = example.length; i < max; i++) {
    if (example[i].id === 111111) {
        example.splice(i, 1);
        break;
    }
}

// split
var names = 'катя, женя';
var namesArray = names.split(', ');

// join
var namesArray2 = ['Kate', 'Evgeniy', 'Olya'];
var namesStr = namesArray2.join(' / ');

// concat
var combineArrray = ['MMM', 'MMM'];
combineArrray = combineArrray.concat(namesArray2);
combineArrray = combineArrray.concat(sampleArray);

// reverse
var nReverse = namesArray2.reverse();





// sort
var sortNames = namesArray2.sort();
//console.log(sortNames)

var numbersArray = ['4', '22', '1', '3'];
var sortNumbers = numbersArray.sort(function(a, b) {
    var _a = +a;
    var _b = +b;

    return _a - _b;
});

var staffsrray = [
    {id: 1, name: 'Kate'},
    {id: 2, name: 'Olya'},
    {id: 3, name: 'Evgeniy'}
]

var sortStaffsrray = staffsrray.sort(function(a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0  
});


sampleArray.forEach(function(item, index, array) {
    // console.log(item)
    // if (index === 0) {
    //     console.log(item)
    // }
    // никакой разницы
    // console.log(1, sampleArray)
    // console.log(2, array)
});

var example = [
    {id: 111111, name: 'Test 1', isChecked: false, price: 100},
    {id: 222222, name: 'Test 2', isChecked: false, price: 50},
    {id: 333333, name: 'Test 3', isChecked: false, price: 20},
    {id: 4, name: 'Test 4', isChecked: false, price: 20},
    {id: 5, name: 'Test 5', isChecked: false, price: 76},
    {id: 6, name: 'Test 6', isChecked: false, price: 80},
    {id: 7, name: 'Test 7', isChecked: false, price: 10},
    {id: 7, name: 'Test 7', isChecked: false, price: 10}
];

// copy array and object
function copy(array) {
    var newTemp = [];

    for (var i = 0; i < array.length; i++) {
        var currentObject = array[i];
        var newObjTemp = {};
        for (var key in currentObject) {
            newObjTemp[key] = currentObject[key];
        }

        newTemp.push(newObjTemp);
    }

    return newTemp;
}

var copyArray = copy(example);

var filterArray = example.filter(function(item, index, array) {
    return item.price >= 50 && item.price <= 80;
    //return item.price === 100;
    //return item.id === 222222;
});

var mapArray = copyArray.map(function(item, index, array) {
    item.price = item.price - 10;
    return item;
});

var someArray = copyArray.some(function(item, index, array) {
    return item.isChecked;
});

var everyArray = copyArray.every(function(item, index, array) {
    return !item.isChecked;
});



function getUserInfo(name, age) {
    console.log(name, age)
    console.log(arguments[0])
}

getUserInfo('Kate', 28);

function getCartInfo(cart) {
    console.log(cart)
    console.log(arguments[0])
}

getCartInfo(example);


// var namesArray2 = ['Kate', 'Evgeniy', 'Olya'];
// var namesStr = namesArray2.join(' / ');
// 
// var names = 'катя, женя';
// var namesArray = names.split(', ');

// // join
// var namesArray2 = ['Kate', 'Evgeniy', 'Olya'];
// var namesStr = namesArray2.join(' / ');

function getSum(num1, num2) {
    var args = Array.prototype.slice.call(arguments);
    var newArray = args.map(function(item) {
        return item * 2;  
    }).join(' , ');

    //var a = newArray.join(' , ');

    return newArray;
    //return (num1 * 2) + ' , ' + (num2 * 2);
}

console.log(getSum(10, 10));


function getPhoneNumber(phone) {
    // перевод в строку
    // 1) '' + phone
    // 2) phone.toString()
    // 
    var phoneString = '' + phone;
    var phoneArray = phoneString.match(/\d{2}/g);
    var phone = phoneArray.join('-')

    return phone;

    //return ('' + phone).match(/\d{2}/g).join('-');
};

var formatted = getPhoneNumber(80505288);

console.log(formatted);
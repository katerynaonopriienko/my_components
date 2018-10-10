console.log('kate'.replace('a', 'o'));
console.log('kate'.indexOf('o') > -1 );
console.log('kate'.slice(1))
console.log('kate'.slice(0, 'kate'.length-1));

console.log(parseInt('10px'))
console.log(parseFloat('10px'))
console.log(+'10')
console.log(parseFloat('d10px'))

console.log(parseFloat('1.1'));
console.log(parseInt('1.1'));

console.log(+100.3333333333.toFixed(1))

var o1 = {
    name: 'test',
    age: 27,
    getName: function() {
        return this.name
    },
    getDoubleAge: function(num) {
        // num = undefined || 2;
        num = num || 2;
        // if (!num) {
        //     num = 2
        // }
        return this.age * num;
    }
};
var o2 = new Object();
var o3 = Object();

if (o1.name) {
    o1.name = o1.name.toUpperCase();
}

// age
//o1.age = 10;

//delete o1.name

for (var prop in o1) {
    console.log(prop + ':' + o1[prop])
}

// var a = ['a', 'b'];
// var b = [10, 10];
// var newStr = '';
// for (var i = 0; i < a.length; i++) {
//     newStr += a[i] + ',';
// }
var propName = 'name';
// сравнил - показал для изучения второго способоа получения значения
console.log(o1[propName] === o1.name);


console.log(o1.getDoubleAge(3))

var ages = ['30', '15', '20', '12'];
var persons = [
    {id: 1, age: 10, name: 'Ok'},
    {id: 2, age: 15, name: 'Ak'},
    {id: 3, age: 12, name: 'Jk'}
]

var ages2 = ages.sort(function(a, b) {
    return a - b;
})

var persons2 = persons.sort(function(a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0
})

// console.log(12,15,20,30)
// console.log(ages2)
//console.log(persons2)

function filterByProp(array, prop) {
    // a.name
    // a['name']
    if (Array.isArray(array)) {
        return array.sort(function(a, b) {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
            return 0
        })
    } else {
        //error
    }

}

console.log(filterByProp(persons, 'age'))


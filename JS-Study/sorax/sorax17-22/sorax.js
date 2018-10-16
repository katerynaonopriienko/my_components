
// var greet = function(){
//     return 'Hi' + ' ' + this.name;
// };

var greet = function(greeting){
    return greeting + ', ' + this.name;
};


var person = {
    name: 'Kate',
    greet: greet,
    _age: 29,
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value < 0 ? 0 : value > 122 ? 122 : value;
    }
    // greet: function() {
    //     return 'Hi' + ' ' + this.name;
    // }
};

var anotherPerson = {
    name: 'Kateryna',
    greet: greet,
};

console.log(person.greet('Hello'));

console.log(anotherPerson.greet('Hi'));

console.log(anotherPerson.greet.call(person, 'Alocha'));
console.log(anotherPerson.greet.apply(person, ['Alocha']));

var bound = greet.bind(anotherPerson);

console.log(bound('Hello there'));

console.log(person.age);

console.log((Object.getOwnPropertyDescriptor(person, 'name')));
console.log((Object.getOwnPropertyDescriptor(person, 'age')));

Object.defineProperty(person, 'gender', {
    value: 'female',
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(person.gender);

person.gender = 'male';
console.log(person.gender);

for ( prop in person ) {
    console.log(prop);
}

console.log(Object.keys(person));

var obj = {};

Object.preventExtensions(obj);

console.log(Object.isExtensible(obj));

// прототип person
var personCopy = Object.create(person);

console.log(personCopy.name);

var Person = {
    constructor: function(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet: function() {
        console.log('Hi, my name is' + this.name)
    }
};

// var person2 = {
//     name: 'Dima',
//     age: 32,
//     gender: 'male'
// };
//
// var person3 = {
//     name: 'Kolia',
//     age: 32,
//     gender: 'male'
// };
person2 = Object.create(Person).constructor('Dima', 32, 'male');
person3 = Object.create(Person).constructor('Kolia', 32, 'male');
person4 = Object.create(Person).constructor('Kateryna', 29, 'female');

console.log(person4.name);

console.log(Person.isPrototypeOf(person2));

var WebDeveloper = Object.create(Person);
// console.log(11111);
WebDeveloper.constructor = function(name, age, gender, skills) {
    Person.constructor.apply(this, arguments);
    this.skills = skills || [];
    return this;
};
console.log(WebDeveloper);
var developer = Object.create(WebDeveloper).constructor('Kateryna', 29, 'female', ['html', 'css', 'js'])

console.log(developer.skills);

WebDeveloper.develop = function() {
    return 'Working...';
};

console.log(developer.develop());

console.log(WebDeveloper);

// реализация классов
// контструктор это фун-ия , вызвана с new- ключевым словом, возвращает новый объект
var Per , per, anotherPer;

Per = function(name) {
    this.name = name;
};

per = new Per('Jack');

console.log(per.name);

anotherPer = new Per('Bruce');
console.log(anotherPer.name);

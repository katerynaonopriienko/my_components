var obj = {};

obj.katy = 29;
obj.katy = 29.5;
obj.age = 10;

// if (obj.age) {
//     obj.age = obj.age  + 10;
// }

if ('age' in obj) {
    obj.age = obj.age  + 10;
}

if (!obj.skills) {
     obj.skills = [];
}

obj.skills.push('js');
obj.skills.push('markkaer');

delete obj.age

obj = {};

// var someProp = 'age';
// obj[someProp]

// наследование объектов
var user1 = {
    name: 'Kate',
    position: 'front developer',
    age: 28
}

var user2 = {
    __proto__: user1
}

var user3 = {
    name: 'olya',
    __proto__: user2
}

// наличие собственного свойства у объекта если наследуемся
for (var prop in user3) {
    if (user3.hasOwnProperty(prop)) {
        //console.log(prop + ' : ' + user3[prop]);
    }
}

// задание query search
// location search ?name=evgeniy&age=39
function qs(prop) {
    //var str = '?name=evgeniy&age=39'
}

// qs('name') => 'evgeniy'

// контекст
var user = {
    name: 'Kate',
    greeting: function(callback) {
        var self = this;
        // или - селф просто название
        // var that = this;
        // var _this = this;
        //console.log(this)
        //console.log('Hello ' + this.name)

        header.innerHTML = 'Hello ' + self.name;

        setTimeout(function() {
            console.log(self)
            //header.innerHTML = 'Hello ' + self.name;
            //  или
            //document.getElementById('header').innerHTML = 'Hello ' + self.name;
            
            if (callback) {
                if (typeof callback === 'function') {
                    callback();
                } else {
                    throw new Error('Callback must be a function')
                }  
            }
            
        }, 1000);
    },

    // геттеры/сеттеры
    get getName() {
        return this.name;
    },

    // геттеры/сеттеры
    set getName(name) {
        this.name = name;
    }
}

user.greeting(function() {
    var button = document.createElement('button');

    button.innerHTML = 'Logout';

    header.appendChild(button);
});

// геттеры/сеттеры
user.getName = 'evg'
console.log(user.getName)


// наслдеование. определение общих методов
var roomUtils = {
    calcStaff: function() {
        return this.staff.length;
    },
    getStaffs: function() {
        return this.staff;
    },
    addNewStaff: function(name) {
        this.staff.push(name)
    }
}

var room1 = {
    title: 'Room 1',
    staff: ['user1', 'user2', 'user3'],
    __proto__: roomUtils
}

var room2 = {
    title: 'Room 2',
    staff: ['user1', 'user2'],
    __proto__: roomUtils
}

console.log(room1.calcStaff())
console.log(room1.getStaffs())
console.log(room1.addNewStaff('Kate'));
console.log(room1.getStaffs())
console.log(room1.calcStaff())
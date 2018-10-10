// задание query search
// location search 
function qs(pr) {
	var str = '?name=evgeniy&age=29';
	var a = str.replace('?', '');
	// console.log(a);
	var ar = a.split('&');
	// console.log(ar);
	var newObj = {};
	for (var i=0; i < ar.length; i++ ) {
		var prop = ar[i].split('=')[0];
		var value = ar[i].split('=')[1];
		newObj[prop] = value;
		// console.log(prop +':'+ newObj[prop])
		for (var prop in newObj) {
			if (prop === pr) {
				return newObj[prop];
			}
		}
	}
}

// qs();
// console.log(qs('age'));



  // Создать функцию serilaize - парсит объект. создает строку. Поле test в строку не добавлять (т.е. пропустить)

  var objText = {
	position: 'Front end developer',
	room: '302',
	test: 'some test'
}

function serilaize(obj) {
	var ar = [];
		for ( prop in obj ) {
			// console.log(111, prop);
			if ( prop = 'test' ) {
				delete obj[prop];
			} 
		}
		for ( prop in obj ) {
			// console.log(111, prop);
			ar.push(prop +':'+ obj[prop]);
		}

		var str = ar.join('&');
		// console.log(111,ar);
		// console.log(8,str);
}
// serilaize(objText);


// console.log(serilaize(objText)) => 'position=Front end developer&room=302'


  var staffs = [
	{
	   id: 1,
	   name: 'JS developer',
	   skills: [],
	   age: 29
	},
	{
	   id: 2,
	   name: 'QA',
	   skills: [],
	   age: 27
	},
	{
	   id: 3,
	   name: 'Markaper',
	   skills: [],
	   age: 29
	},
	{
	   id: 4,
	   name: 'JS team lead',
	   skills: [],
	   age: 34
	}
  ]

// создать массив имен
function createArrayNames(name) {
	var ar = [];
	for (var i = 0; i < staffs.length; i++) {
		for ( prop in staffs[i] ) {
			if ( prop === name ) {
				// console.log(222,staffs[i])
				ar.push(prop + ':' + staffs[i][prop]);
			}
		}
	}
	return ar;
}

// console.log(createArrayNames('name'));
// var newar = createArrayNames('name');

// console.log(4,newar);

// выбрать из массива имен только те. которые начинаются на 'JS'
function createArrayJSTeam(array , name) {
	var newAr = array.filter(function (item) {
		if ( item.indexOf(name) !== -1 ) {

			return item;
		} 
	});
	return newAr;
}

// console.log(createArrayJSTeam(newar, 'JS'));




var cars = [
	{
		id: 1,
		name: 'Audio',
		color: 'red',
		price: '20000$'
	},
	{
		id: 2,
		name: 'Daewoo',
		color: 'green',
		price: '2000$'
	},
	{
		id: 3,
		name: 'BMW',
		color: 'black',
		price: '23000$'
	},
	{
		id: 4,
		name: 'Hammer',
		color: 'black',
		price: '23000$'
	}
]
	
// получить данные конкретной машины по ID
function findCar(carscarId) {

	var newArray = cars.filter(function (item) {
		return item.id === carscarId;
	});
	return newArray;
}

// console.log(findCar(4));

// получить машины у которых черный цвет
function findCars(carColor) {
	var newArray = cars.filter(function (item) {
		return item.color === carColor;
	});
	return newArray;

}

// console.log(findCars('black'));


// стартовые данные - с ними нужно работать
var people = [
	{
		id: 1,
		name: 'Kate',
		room: '200'
	},
	{
		id: 2,
		name: 'Olga',
		room: '202'
	},
	{
		id: 3,
		name: 'Andy',
		room: '204'
	}
]

newPerson = {
	id: 4,
	name: 'Evgenij',
	room: '202'
}

// пишем функцию которая добавляет нового человека
function addNewPeople(obj) {
	people.push(obj);

	return people;
}

// console.log(addNewPeople(newPerson));


// пишем функцию которая удаляет человека по ID
function removePeople(peopleOd) {
	for (var i = 0; i < people.length; i++) {
		if ( people[i].id === peopleOd ) {
			// people.remove.people[i];
			people.splice(1, 1);
		}
	}
	return people;
}

// console.log(removePeople(3));

// пишем функцию которая показывает количество людей
function getTotalPeople(array) {
	return array.length;
}

// console.log(getTotalPeople(people));

// пишем функцию которая находит человека по ID и переводит его имя в верхний регистр
function updatePeopleName(peopleOd) {
	var newArray = people.filter(function (item) {
		if ( item.id === peopleOd ) {
			return item.name = item.name.toUpperCase();
		}
	});
	return newArray;
}

// console.log(updatePeopleName(2));

// пишем функцию которая находит людей по номеру комнаты
function findPeopleByRoom(room) {
	var newArray = people.filter(function (item) {
		return item.room === room;
	});
	return newArray;
}

// console.log(findPeopleByRoom('202'));

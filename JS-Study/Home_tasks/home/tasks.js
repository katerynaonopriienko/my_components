/*
 * Задча: 
 * функция должна вернуть слово, 
 * в котором первая и последня буква заглавные
 * Пример:
 * letterWord('greenpeace'); => GreenpeacE
 * letterWord('community'); => CommunitY
 */
 // var result = prompt("Enter text"); 
 // var a = result.length;
 // console.log(a);
 

 function letterWord(a) {
    return a.charAt(0).toUpperCase() + a.slice(1,a.length-1) + a.charAt(a.length-1).toUpperCase();
 }
 
 // console.log(letterWord('greenpeace'));
 

 function letterWord(text) {
    return text.charAt(0).toUpperCase() + text.slice(1,text.length-1) + text.charAt(text.length-1).toUpperCase();
 }
 
 // console.log(letterWord('community'));
 
 /*
 * Задча: 
 * функция должна вернуть отморматированный заголовок
 * Пример:
 * formatTitle('JUST 20'); => JUST-20
 * note: почитать replace
 */
 
 function formatTitle(title) {
    return title.replace(' ','-');
 }

 // console.log(formatTitle('JUST 20'));


/*
 * Задча: 
 * функция должна вернуть отформатированное число
 * от бекенда приходит 3 разных вида
 * число, строка, строка с символом валюты
 * необходимо определять с какими данными ты работаешь 
 * и выполнить нужные манипуляции
 * Пример:
 * formPrice('100') => 100
 * formPrice(100) => 100
 * formPrice('$100') => 100
 */
 
 // function formPrice(price) {
	// for (i=0; i<cart.length; i++) {
	// 	if (typeof(cart[i].price) === 'string') {
	// 		if (cart[i].price.indexOf('$') !== -1) {
	// 			cart[i].price = parseFloat(cart[i].price.replace('$',''));
	// 		} else {
	// 			cart[i].price = parseFloat(cart[i].price);
	// 		}	
	// 	}	
	// console.log(cart[i]);
	// }
 // }
 

// var cart = [
//     { id: 1, price: '100', name: 'Product 1' },
//     { id: 2, price: '220', name: 'Product 2' },
//     { id: 3, price: '330', name: 'Product 3' },
//     { id: 4, price: '30',  name: 'Product 4' },
//     { id: 5, price: '530', name: 'Product 5' }
// ];

/*
 * Задача:
 * Посчитать сумму товаров в корзине
 * Пример:
 * calcSumItmes(items);
 */
 
// function calcSumItems(cart) {
// 	var summ = 0;
// 	for ( i = 0; i < cart.length; i++) {
// 		summ += parseFloat(cart[i].price);
// 		console.log(summ);
// 	}
// 	return summ;
// }

function calcSumItems(cart) {
	var summ = 0;
	cart.map(function(item, index, array) {
		summ += parseFloat(item.price);
		// console.log(summ);
	});
	return summ;
}

// calcSumItems(cart);
// console.log(calcSumItems(cart));


/*
 * Задача:
 * Наити цену товара по имени, если такого нет сообщить об этом в консоле
 * Пример:
 * findPriceProduct(name);
 */
 
function findPriceProduct(name) {
	for (var i = 0, max = cart.length; i < max; i++) {
		if (cart[i].name === name) {
			return parseFloat(cart[i].price);
		}
	}
	alert( 'нет такого имени' );
}


 // function findPriceProduct(name) {
 // 	newPrice = 0;
	// cart.filter(function(item, index, array) {
	// 	if( item.name === name) {
	// 		newPrice = parseFloat(item.price);
	// 	}
	// });
	// return newPrice;
 // }
 
 // console.log(findPriceProduct('Product 5'));
 // findPriceProduct(name);

/*
 * Задача:
 * Удалить товар из корзины по Id, если такого Id нет сообщить об этом в консоле
 * Пример:
 * removeProduct(productId);
 */
 
 // function removeProduct(productId) {
	// var status = false;
	// for (var i = 0, max = cart.length; i < max; i++) {
	// 	if ( cart[i].id === productId) {
	// 		status = true;
	// 		cart.splice(i, 1);
	// 		break;
	// 	}
	// }
	// if ( status === false ){
	// 	alert( 'нет такого id' );
	// } else {
	// 	return cart;
	// }
 // }

 //  function removeProduct(productId) {
 //  	var status = false;
	// 	cart.map(function(item, index, array) {
	// 	if (item.id === productId) {
	// 		status = true;
	// 		// console.log(item.id);
	// 		cart.splice(i, 1);
	// 		break;
	// 	}
	// });
	// if ( status === false ){
	// 	alert( 'нет такого id' );
	// } else {
	// 	return cart;
	// }
 // }

// console.log(removeProduct(5));
// removeProduct(5);
// 
 /*
 * Задача:
 * Найти товары, которые стоят до 300 
 * Пример:
 * findProducts(range);
 */
 
function findProducts(range) {
	// range = 0;
	result = 0;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].price < range) {
			result += parseFloat(cart[i].price);
			console.log(result);
		}
	}
	return cart;
}

 // console.log(findProducts(300));
// findProducts(300);
 
/*
 * Задача:
 * Отсортировать товары от меньшего к большему
 * Пример:
 * sortProducts(items);
 */
 
 function sortProducts(items) {
 
 }
 
 /*
 * Задача:
 * Отобразить цифры в обратном порядке
 * Пример:
 * reverseNumber(987654321) => 123456789
 */
 var num = 987654321;
 
 // function reverseNumber(num) {
 // 	newNum = 0;
 // 	for (i=0; i < num.leight; i++) {
 // 		newNum = num
 // 	}
 // }


// 1. Написать функцию которая принимает 2 параметра (объект, ключ) и возвращает значения ключа
// 2. Если такого нет. Сообщение об ошибке
var person = {
    name: 'Kate',
    age: 27,
    position: 'Markup Developer',
    skills: ['html5', 'css3']
};
 

function getUserInfo(obj, prop) {
	'use strict';
	
	for (var prop in obj) {
		prop +':'+ obj[prop]
	}
	return obj;
}


function getUserInfo(obj, prop) {
	'use strict';
	
    return obj[prop];
}

// console.log(getUserInfo(person.position));


// 1. Создать массив месяцев
// 2. Отсортировать по приорити
// 3. По названию месяца получить посты

var obj = [
    {
        id: 1,
        name: 'Tets 1',
        date: 'february',
        priority: 2,
        posts: [
            { id: 100, name: 'Post Name 1', contemt: 'Lorem Ipsum' },
            { id: 101, name: 'Post Name 2', contemt: 'Lorem Ipsum' },
            { id: 102, name: 'Post Name 3', contemt: 'Lorem Ipsum' }
        ]
    },
    {
        id: 2,
        name: 'Tets 2',
        date: 'december',
        priority: 3,
        posts: [
            { id: 200, name: 'Post Name 4', contemt: 'Lorem Ipsum' },
            { id: 201, name: 'Post Name 5', contemt: 'Lorem Ipsum' },
            { id: 202, name: 'Post Name 6', contemt: 'Lorem Ipsum' }
        ]
    },
    {
        id: 3,
        name: 'Tets 3',
        date: 'january',
        priority: 1,
        posts: [
            { id: 300, name: 'Post Name 7', contemt: 'Lorem Ipsum' },
            { id: 301, name: 'Post Name 8', contemt: 'Lorem Ipsum' },
            { id: 302, name: 'Post Name 9', contemt: 'Lorem Ipsum' }
        ]
    }
]; 



function monthsList(array) {
	'use strict';

	var newTemp = [];

	for ( var i = 0; i < array.length; i++) {

		var currentObject = array[i];
		var newObjTemp = {};

		for ( var key in currentObject) {
			newObjTemp[key] = currentObject[key];
		}

		newTemp.push(newObjTemp.date);

	}
	return newTemp;
}

// var monthArray = console.log(monthsList(obj));

function monthsList(array) {
	'use strict';

	var newTemp = [];

	for ( var i = 0; i < array.length; i++) {

		var currentObject = array[i];

        var n = {};
        n.date = currentObject.date
        n.priority = currentObject.priority
        
        newTemp.push(currentObject.date)

	}
	return newTemp;
}

// var monthArray = console.log(1,monthsList(obj));

function sortMonthList(array, prop) {
	
	'use strict';

	if (Array.isArray(array)) {
        return array.sort(function(a, b) {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
            return 0
        })
    }
}

// console.log(sortMonthList(obj, 'priority'));


function findPosts(array, monthName) {

	'use strict';

	for ( var i = 0; i < array.length; i++) {
		if ( array[i].date === monthName ) {
			return array[i].posts;
		}
	}
	
}

// console.log(findPosts(obj, 'february'));


function findPosts(array, monthName) {

	'use strict';

	// for ( var i = 0; i < array.length; i++) {
	// 	if ( array[i].date === monthName ) {
	// 		return array[i].posts;
	// 	}
	// }
	var newArray = array.filter(function(item, index, array) {
        return item.date === monthName;
    });

    console.log('aaa', newArray[0].posts)

    return newArray[0].posts
}

// console.log(findPosts(obj, 'february'));

// Создать глобальный объект корзины
// Объект будет содержать свойство cart (массив)
// Массив БУДЕТ состоит из объектов
//  Первое свойство объекта - value - название продукта
//  Второе свойство объекта - date
// Объект будет содержать 4 метода
// - add - добавляет в массив значения
//     - добавляет только value
//     - date ставится автоматически в формате день-месяц-год часы:минунты:секунды
// - get - возваращает массив
// - calc - считает колличество элементов в массиве
// - clean - очищает массив
// [
// {
//  value: 'test',
//  date: '20-12-1988 20:20:20'
// }
// ]

// объект.add('Текст')
// создавать объект
// создать свойство value => 'Текст'
// создать свойство date
// добавить в массив

var objShop = {
	cartI : [],
	add: function(text) {
		var dateNow = new Date();
		dateNow.setDate(dateNow.getDate());
		var newDate = dateNow.getDate();
		var year = dateNow.getFullYear();
		var mounth = dateNow.getMonth();
		function getMounthName(mounth) {
		    var mounhNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

		    return mounhNames[mounth];
		}
		var newMounth = getMounthName(mounth);

		var hours = dateNow.getHours();
		var minutes = dateNow.getMinutes();
		var seconds = dateNow.getSeconds();
		// console.log('seconds', seconds);
		var format = newDate + '-' + newMounth + '-' + year + ' ' + hours + ':' + minutes + ':' + seconds;
		// console.log('format',format);
		var obj3 = {};
		obj3.value = text;
		obj3.date = format;
		// console.log(obj3.date)

		// return obj3;
		this.cartI.push(obj3);
		return this.cartI;
	},
	get: function () {
		this.add('ghghgh');
		return this.cartI;
	},
	calc: function () {
		return this.cartI.length;
		// console.log('array-lenght', cartI.length);
	},
	clean: function () {
		return this.cartI = [];
	}
	
}
// console.log(objShop);
console.log(objShop.add('dgfgf'));
// console.log(objShop.get());
objShop.calc();
objShop.get();
console.log(objShop.clean());

var dateNow = new Date();
var mounth = dateNow.getMonth();
function getMounthName(mounth) {
    var mounhNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    return mounhNames[mounth];
}

console.log(getMounthName(mounth));
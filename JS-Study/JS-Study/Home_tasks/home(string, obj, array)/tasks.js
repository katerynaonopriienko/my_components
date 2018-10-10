// Функция проверяет на спам в тексте
// предложение - Вышел заяц на крыльно навалить свое дерьмецо
// плохое слово - дерьмецо
// вернет true
// нет плохого слова вернет - false
function checkSpam(text) {
	// var text = text;
	var spam = 'дерьмецо';
	if ( text.indexOf(spam) !== -1 ) {
		return true;
	} else {

	return false;
	}
}

// console.log(checkSpam( 'Вышел заяц на крыльно навалить свое тра-та-та' ));

// Функция создаст объект из 2 массивов
var a = ['name', 'age', 'position'];
var b = ['Kate', '28', 'Front-end developer']
// вернет
// {
//     name: 'Kate',
//     age: '28',
//     position: 'Front-end developer'   
// }


function createModel(array1, array2) {

	var obj = {
	};
	for (var i = 0; i < array1.length; i++ ) { 
		obj[array1[i]] = array2[i];
	}
	return obj;
}

// createModel(a, b);
// console.log(createModel(a, b));

// Функция считает сумму у числовых свойствах объекта
var testObj = {
	sum: 100,
	name: 'Olten',
	calc: 200,
	item: '200',
	text: 'Lorem ipsum'
};

function calcSum(obj) {
	var result = 0;
	for (var prop in obj) {
		// if ( !isNaN(obj[prop]) ) {
		//     result += obj[prop];
		// }
		if ( (typeof(obj[prop])) === 'number' ) {
			result += obj[prop];
		}
	}
	return result;
}

// console.log(calcSum(testObj));

// Функция ищет большее значение в объекте
var testObg2 = {
	price1: 200,
	price2: 800,
	price3: 130,
	price4: 500,
};

// function findBigValue(obj) {
//     var result = 0;
//     var count = 0;
//     for (var prop in obj) {
//         count = count + 1;
//         result = Math.min(obj[prop]);
//     }
//     return result;
// }

// console.log(findBigValue(testObg2));

function findBigValue(obj) {
	var max = 0;
	for (var key in obj) {
		if (max < obj[key]) {
		max = obj[key];
		}
	}
	return max;
}

// console.log(findBigValue(testObg2));

// Функция считает сумму аргументов с разными количеством
// calcSumArguments(1, 2)
// calcSumArguments(3, 4, 10, 5, 1)


function calcSumArguments() {
	var summ = 0;
	for (var k = 0; k < arguments.length; k++ ) { 
		summ += arguments[k];
	}
	return summ;
}

// console.log(calcSumArguments(3, 4, 10, 5, 1));

// next --------------------------------------------------

/*
Написать простой UI канкульятор
Подзадачи
1) сделать проверку если ввели не числа
2) после подсчета очистить инпуты и вернуть селект в исходное состояние
<form>
	<input type="text" placeholder="Enter number 1">
	<input type="text" placeholder="Enter number 2">
	<select>
		<option>Please select method</option>
		<option>+</option>
		<option>-</option>
		<option>*</option>
		<option>/</option>
	</select>
	<button>Submit</button>
</form>

<div class="result">Result: </div>
*/
document.addEventListener('DOMContentLoaded', domLoaded);



function domLoaded() {
	calculateInit();
	productLoaded();
	dataArrayInit();
	opencloseInit();
	showPrice();
}

function calculateInit() {
	var form = document.querySelector('form');
	var select = form.querySelector('select');
	var index = select.selectedIndex;
	var option = select.options[index];
	var result = document.querySelector('.result');
	var inputs = form.querySelectorAll('.input');
	var button = form.querySelector('.button');
	var errorClass = 'error';
	var num1;
	var num2;


	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		input.setAttribute('data-id', i);
		input.addEventListener('blur', function(event) {
			if ( !isNaN(event.target.value) ) {
				console.log(event.target.value);
			}else {
				result.innerHTML = 'Введите число';
				event.target.classList.add(errorClass);
			}	
		});
	}
	function FormReset() {
		form.reset();
		if (form.classList.contains(errorClass)){
			form.classList.remove(errorClass);
		}
		result.innerHTML = 'Result:'
	}

	select.addEventListener('change', function(event) {
		var index = event.target.selectedIndex;
		var example;
		num1 = parseInt(form.querySelectorAll('.input')[0].value);
		num2 = parseInt(form.querySelectorAll('.input')[1].value);
		if (index === 1) {
			example = num1 + num2;
			// console.log(option);
			} else if (index === 2) {
				example = num1 - num2;
				// console.log(example);
				// console.log(option);
				} else if (index === 3) {
					example = num1 * num2;
					} else if (index === 4) {
						example = num1 / num2;
					}
			return result.innerHTML = example;

	});


	// function calculator(num1, num2, index) {
	// 	var index = event.target.selectedIndex;
	// 	num1 = parseInt(form.querySelectorAll('.input')[0].value);
	// 	num2 = parseInt(form.querySelectorAll('.input')[1].value);
	// 	var example;
	// 	switch(index) {
	// 		case '1':
	// 		example =+ num1 + num2;
	// 		break;
	// 		case '2':
	// 		example =+ num1 - num2;
	// 		break;
	// 		case '3':
	// 		example =+ num1 * num2;
	// 		break;
	// 		case '4':
	// 		example =+ num1 / num2;
	// 		break;   
	// 	}
	// 	return result.innerHTML = example;
	// }
	// select.addEventListener('change', calculator);
	function resetButton() {
		FormReset();
	}
	button.addEventListener('click', resetButton);

}


// next --------------------------------------------------

	// 3) 
	// Есть массив данных
	// Найти объект по ID и изменить в нем name
	// Только нужно создать копию, чтобы исходный массив был как сейчас, а новый уже был с изменными данными
	// (Так как объекты КОПИРУЮТСЯ По ССЫЛКЕ)

function coppyTask(){

	var data = [
		{
			"id": "Q_omud7oyxgh",
			"name": "Self inhabited property",
			"priority": 1
		},
		{
			"id": "Q_najoofpa3y",
			"name": "Liabilities with BJB",
			"priority": 2
		},
		{
			"id": "Q_mwdnxixxbq",
			"name": "Holiday property",
			"priority": 4
		}
	]

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

	var data2 = copy(data);

	console.log(data2);

	function changeName(array, idName, newnName) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].id === idName) {
				return array[i].name = newnName;
			}
		}
		return data2;
	}

	console.log(changeName(data2, 'Q_najoofpa3y', 'Valera'));
}

coppyTask();

// next --------------------------------------------------

// 5)
// Есть массив продуктов
// Есть массив связей - он содержит поле productId который ссылается на продукт
// Задача получить на выходе массив relations с новым полем productName т.е. взять productId сравнить с id producta и найти его имя
// Отрисовать на странице в обратном алфавитном порядке порядке

// document.addEventListener('DOMContentLoaded', productLoaded);

function productLoaded() {
	var body = document.body;
	var ul = body.querySelector('.first-list');
	var addArray = document.querySelector('.addArray');
	var products = [
		{
			"id": "P1510083488586",
			"name": "1E"
		},
		{
			"id": "P1510057858171",
			"name": "3A Account"
		},
		{
			"id": "PR_v1cwovtcxy",
			"name": "Adult Protection Law"
		},
		{
			"id": "P11",
			"name": "Advice Advanced"
		},
		{
			"id": "P14",
			"name": "Advice Basic"
		}
	];

	var relations = [
		{
			"id": "1",
			"productId": "P1510083488586"
		},
		{
			"id": "2",
			"productId": "P1510057858171"
		},
		{
			"id": "3",
			"productId": "PR_v1cwovtcxy"
		},
		{
			"id": "4",
			"productId": "P11"
		},
		{
			"id": "5",
			"productId": "P14"
		}
	];


	function addProductName(array1, array2) {
		for (var i = 0; i < array1.length; i++) {
			if (array1[i].id === array2[i].productId) {
				for (var key in array2[i]) {
					array2[i].productName = array1[i].name;
				}
			}
		}
		return array2;
	}
	// function reverseArray(array) {
	// 	for ( i = array.length-1, i>=0; i-- ) {

	// 	}
	// }
	function sortArray(array,prop) {
		'use strict';

		if (Array.isArray(array)) {
			return array.sort(function(a, b) {
				if (a[prop] < b[prop]) return 1;
				if (a[prop] > b[prop]) return -1;
				return 0
			})
		}
		return addArray.innerHTML = array;
	}
	// function addHtml (array) {
	// 	for (var i = 0; i < array.length; i++) {
	// 	    for (var key in array[i]) {
	// 	        var div = document.createElement('div');
	// 	        div.innerHTML = array[i][key];
	// 	        body.appendChild(div);
	// 	    }    
	// 	}
	// 	return addArray.innerHTML = relations;
	// }
	function addHtml (array) {
		for (var i = 0; i < array.length; i++) {
			for (var key in array[i]) {
				var li = document.createElement('li');
				li.innerHTML += [key] +':'+ array[i][key];
				ul.appendChild(li);
			}    
		}
	}
	addProductName(products, relations);
	sortArray(relations, 'productId');
	addHtml(relations);
}

// next --------------------------------------------------


// 1) 
// Есть массив данных
// Нужно достать категории, которые входят в приоритет больше 1 и меньше 4
// Отфильтровать по алфавиту
// Отрисовать на странице в виде списка <ul> <li>
// При клике на LI в каком-то диве (за списком или сверху) хочу видеть название категории по которой кликнули и его ID   




// document.addEventListener('DOMContentLoaded', domLoaded);

function dataArrayInit() {
	var body = document.body;
	var ul = body.querySelector('.list');
	var showArray = body.querySelector('.showArray');
	var activeClass = 'active';
	var data3 = [
		{
			"id": "Q_omud7oyxgh",
			"name": "Self inhabited property",
			"priority": 1
		},
		{
			"id": "Q_najoofpa3y",
			"name": "Liabilities with BJB",
			"priority": 2
		},
		{
			"id": "Q_mwdnxixxbq",
			"name": "Holiday property",
			"priority": 4
		},
		{
			"id": "Q_xv2a9apj2d",
			"name": "Reference date",
			"priority": 3
		},
		{
			"id": "Q_e5uibgi9xc",
			"name": "Other participations",
			"priority": 5
		},
		{
			"id": "Q_jsk87sanyd",
			"name": "Securities Income",
			"priority": 4
		},
		{
			"id": "Q_brwbesi07b",
			"name": "Purchases in pension fund",
			"priority": 1
		},
		{
			"id": "Q_ljt4s2f8xu",
			"name": "Siblings",
			"priority": 2
		},
		{
			"id": "Q_ngg5im7fi1",
			"name": "Retirement",
			"priority": 1
		}
	]
	// var array = array;
	// function listarray(array) {
	// 	for (var i = 0; i < array.length; i++) {
	// 		for (var key in array[i]) {
	// 			// if ( key != category ) {
	// 			showArray.innerHTML += [key] +':'+ array[i][key];
	// 			// }
	// 		}    
	// 	}
	// }

	function sortArray(array,prop) {
		'use strict';
		if (Array.isArray(array)) {
			return array.sort(function(a, b) {
				if (a[prop] > b[prop]) return 1;
				if (a[prop] < b[prop]) return -1;
				return 0
			})
		}
	}
	function filterArray(array,prop) {
		'use strict';
		if (Array.isArray(array)) {
			var filterArray = array.filter(function(item, index, array) {
				return item.priority >1 && item.priority < 4;
			})
		}
		return filterArray;
	}
	function createlist(array, category) {
		var item;
		var array = filterArray(data3);
		for (var i = 0; i < array.length; i++) {
			item = document.createElement('li');
			item.setAttribute('data-id', i);
			for (var key in array[i]) {
				if ( key === category ) {
					item.innerHTML += [key] +':'+ array[i][key];
					ul.appendChild(item);
				}
			}    
		}
	}
	function filterArray2(array,prop) {
		'use strict';
		for (var i = 0; i < array.length; i++) {
			for (var key in array[i]) {
				if ( key != prop ) {
					showArray.innerHTML += [key] +':'+ array[i][key] + '<br>';
				}
			}
			
		}
		return array.prop;
	}
	createlist(data3, 'priority');
	var items;
	items = ul.querySelectorAll('li');
	
	function ulInit() {
		var array = filterArray(data3);
		for (var k = 0; k < items.length; k++) {
			var item = items[k];
			item.addEventListener('click', function(event) {
				// for (var i = 0; i < array.length; i++) {
				// 	for (var key in array[i]) {
				// 		if ( event.target.classList.contains(activeClass) ) {
				// 			showArray.innerHTML += [key] +':'+ array[i][key] + '<br>';
				// 		}
				// 	}
				// }
				if (event.target.classList.contains('active')) {
					hideClass(event.target);
					return;
				}

				if (findActiveItem()) {
				var activeItem = findActiveItem();
				hideClass(activeItem);
				showClass(event.target);
				filterArray2(data3, 'priority');
				} else {
					showClass(event.target);
					createModel(items, array)
				} 
			});
		}
		function findActiveItem() {
			return ul.querySelector('li.active');
		}
		function showClass(item) {
			item.classList.add(activeClass);
		}
		function hideClass(item) {
			item.classList.remove(activeClass);
		}
	}
	ulInit(ul);
}

function opencloseInit() {
	var blocks = document.querySelectorAll('.block');
	var activeClass = 'active';

	for (var i = 0; i < blocks.length; i++) {
		var block = blocks[i];
		openclose(block);
	}

	function openclose(block) {
		var opener = block.querySelector('.opener');
		var slider = block.querySelector('.slider');

		function showSlide(block) {
			block.classList.add(activeClass);
		}

		function hideSlide(block) {
			block.classList.remove(activeClass);
		}

		opener.addEventListener('click', function(event) {
			event.preventDefault();
			if (block.classList.contains(activeClass)) {
				hideSlide(block);
			} else {
				showSlide(block);
			}
		});
	}
}




// 4)
// Есть 2 радиобаттона.
// При выборе меняется цена в блоке
// Если нужны какие-то аттрибуты или еще что-то, добавляй по возможности
// Предусмотреть вариант если один из радио будет чекнут

function showPrice() {
	var labels = document.querySelectorAll('label');
	var divPrice = document.querySelector('.price');
	var inputClass = 'input-radio';
	var radioinputs = document.querySelectorAll('input[type="radio"]');
	radioinputs[0].checked = true;
	for (var i = 0; i < radioinputs.length; i++) {
		var radio = radioinputs[i];
			radio.classList.add(inputClass);
			radio.setAttribute('name', 'radio');
			radio.setAttribute('id', i+1);
			console.log(radio);
			click();
		}

	for (var i = 0; i < labels.length; i++) {
		var label = labels[i];
		label.setAttribute('for', i+1);
		// console.log(label);
	}
	function click(target) {
		radio.addEventListener('change', function(event) {
			var target = event.target;
			divPrice.innerHTML = target.dataset.price;
			target.classList.add('active');
		});
	}
}
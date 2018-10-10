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
 
//  function formPrice(price) {
// 	for (i=0; i<cart.length; i++) {
// 		if (typeof(cart[i].price) === 'string') {
// 			if (cart[i].price.indexOf('$') !== -1) {
// 				cart[i].price = parseFloat(cart[i].price.replace('$',''));
// 			} else {
// 				cart[i].price = parseFloat(cart[i].price);
// 			}	
// 		}	
// 	console.log(cart[i]);
// 	}
//  }
 

// var cart = [
//     {id: 1, price: '100', name: 'Product 1'},
//     {id: 2, price: 220, name: 'Product 2'},
//     {id: 3, price: 330, name: 'Product 3'},
//     {id: 4, price: '$30',  name: 'Product 4'},
//     {id: 5, price: '530$', name: 'Product 5'},
//     {id: 6, price: '530$530', name: 'Product 6'}
// ];

// formPrice(cart);

var str = 'abcdefg';

 
function reverseStr(text) {

	var new_string = '';

	for ( i=text.length-1; i>=0; i--) {
		// console.log(text[i]);
		new_string = new_string + text[i];
	}
	console.log(new_string);
	
}

function reverseStr(text) {

	var new_string = '';

	for ( i=0; i<text.length; i++) {
		// console.log(text.length);
		new_string = new_string + text[text.length-1-i];
	}
	console.log(new_string);
	
}

// console.log(reverseStr(str));
reverseStr(str);




/*
 * Задача:
 * Посчитать сумму товаров в корзине
 * Пример:
 * calcSumItmes(items);
 */
 
 // function calcSumItems(items) {
        
 // }
 
/*
 * Задача:
 * Наити цену товара по имени, если такого нет сообщить об этом в консоле
 * Пример:
 * findPriceProduct(name);
 */
 
 // function findPriceProduct(name) {
        
 // }
 
/*
 * Задача:
 * Удалить товар из корзины по Id, если такого Id нет сообщить об этом в консоле
 * Пример:
 * removeProduct(productId);
 */
 
 // function removeProduct(productId) {
 
 // }
 
 /*
 * Задача:
 * Найти товары, которые стоят до 300 
 * Пример:
 * findProducts(range);
 */
 
 // function findProducts(range) {
 
 // }
 
 
/*
 * Задача:
 * Отсортировать товары от меньшего к большему
 * Пример:
 * sortProducts(items);
 */
 
 // function sortProducts(items) {
 
 // }
 
 /*
 * Задача:
 * Отобразить цифры в обратном порядке
 * Пример:
 * reverseNumber(987654321) => 123456789
 */
 
 // function reverseNumber(num) {
 
 // }


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
// console.log(a);-

function wordTransform( a ) {
    return a.charAt(0).toUpperCase() + a.slice(1,a.length-1) + a.charAt(a.length-1).toUpperCase();
}

console.log(wordTransform( 'greenpeace' ));

/*
* Задча:
* функция должна вернуть отморматированный заголовок
* Пример:
* formatTitle('JUST 20'); => JUST-20
* note: почитать replace
*/

function formatTitle( title ) {
    return title.replace(' ', '-');
}

console.log(formatTitle( 'JUST 20' ));

// Функция проверяет на спам в тексте
// предложение - Вышел заяц на крыльно навалить свое дерьмецо
// плохое слово - дерьмецо
// вернет true
// нет плохого слова вернет - false
function checkSpam(text) {
    var spam = 'дерьмецо';
    if ( ~text.indexOf( spam )  ) {
        return true;
    }
    return false;
}

console.log( checkSpam('Вышел заяц на крыльно навалить свое дерьмецо') );

function checkSpam2(text) {
    var spam = 'дерьмецо';
    if ( text.indexOf( spam ) !== -1 ) {
        return true;
    }
    return false;
}

console.log( checkSpam2('Вышел заяц на крыльно навалить свое дерьмецо') );

// Функция создаст объект из 2 массивов
// var a = ['name', 'age', 'position'];
// var b = ['Kate', '28', 'Front-end developer']
// вернет
// {
//     name: 'Kate',
//     age: '28',
//     position: 'Front-end developer'
// }
function createModel(arr1, arr2) {

}

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


var cart = [
    { id: 1, price: '100', name: 'Product 1' },
    { id: 2, price: '220', name: 'Product 2' },
    { id: 3, price: '330', name: 'Product 3' },
    { id: 4, price: '30',  name: 'Product 4' },
    { id: 5, price: '530', name: 'Product 5' }
];

/*
 * Задача:
 * Посчитать сумму товаров в корзине
 * Пример:
 * calcSumItmes(items);
 */

// function calcSumItems(cart) {
// 	var summ = 0;
// 	cart.map(function(item, index, array) {
// 		summ += parseFloat(item.price);
// 		// console.log(summ);
// 	});
// 	return summ;
// }

// calcSumItems(cart);
// console.log(calcSumItems(cart));


/*
 * Задача:
 * Наити цену товара по имени, если такого нет сообщить об этом в консоле
 * Пример:
 * findPriceProduct(name);
 */

/*
 * Задача:
 * Удалить товар из корзины по Id, если такого Id нет сообщить об этом в консоле
 * Пример:
 * removeProduct(productId);
 */


// * Задача:
// * Найти товары, которые стоят до 300
// * Пример:
// * findProducts(range);
// */


/*
 * Задача:
 * Отсортировать товары от меньшего к большему
 * Пример:
 * sortProducts(items);
 */

/*
* Задача:
* Отобразить цифры в обратном порядке
* Пример:
* reverseNumber(987654321) => 123456789
*/
// var num = 987654321;

// 1. Написать функцию которая принимает 2 параметра (объект, ключ) и возвращает значения ключа
// 2. Если такого нет. Сообщение об ошибке
var person = {
    name: 'Kate',
    age: 27,
    position: 'Markup Developer',
    skills: ['html5', 'css3']
};


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


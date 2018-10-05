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
var a = ['name', 'age', 'position'],
    b = ['Kate', '28', 'Front-end developer'];
// вернет
// {
//     name: 'Kate',
//     age: '28',
//     position: 'Front-end developer'
// }
function createModel(arr1, arr2) {
    var obj = {};
    for ( var i = 0; i < arr1.length; i++ ) {
        obj[arr1[i]] = arr2[i];
    }
    return obj;
}

console.log(createModel(a, b));

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

function formPrice( price ) {
    var a = price;
    if ( typeof a === 'string' ) {
         if ( a.indexOf('$') !== -1 ) {
             a = parseFloat(a.replace('$',''));
         } else {
             a = parseFloat(a);
         }
         return a
    } else {
        return parseFloat(a);
    }
}

console.log(formPrice('$100') );

var cart = [
    { id: 1, price: '100', name: 'Product 1' },
    { id: 2, price: '220', name: 'Product 2' },
    { id: 3, price: '530', name: 'Product 3' },
    { id: 4, price: '30',  name: 'Product 4' },
    { id: 5, price: '530', name: 'Product 5' }
];

/*
 * Задача:
 * Посчитать сумму товаров в корзине
 * Пример:
 * calcSumItmes(items);
 */

function cartSum(ar) {
    var sum = 0;
    ar.map(function(item, index, ar) {
        sum += parseFloat( item.price);
    });
    return sum;
}

console.log( cartSum(cart) );

/*
 * Задача:
 * Наити цену товара по имени, если такого нет сообщить об этом в консоле
 * Пример:
 * findPriceProduct(name);
 */

function findPriceProduct(name) {
    newPrice = 0;
    var ar = cart;
    if ( ar.length > 0 ) {
        ar.filter(function(item, index, ar) {
            if ( item.name === name ) {
                return newPrice =  parseFloat(item.price);
            }
        });
    }
    return newPrice;
}

console.log(findPriceProduct('Product 1'));

function findPriceProduct2(name) {
    for (var i = 0, max = cart.length; i < max; i++) {
        if (cart[i].name === name) {
            return parseFloat(cart[i].price);
        }
    }
    alert( 'нет такого имени' );
}

console.log(findPriceProduct2('Product 5'));
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


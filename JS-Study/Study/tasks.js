// Функция проверяет на спам в тексте
// предложение - Вышел заяц на крыльно навалить свое дерьмецо
// плохое слово - дерьмецо
// вернет true
// нет плохого слова вернет - false
function checkSpam(text) {
    
}

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

// Функция считает сумму у числовых свойствах объекта
var testObj = {
    sum: 100,
    name: 'Olten',
    calc: 200,
    text: 'Lorem ipsum'
};

function calcSum(obj) {

}

// Функция ищет большее значение в объекте
var testObg2 = {
    price1: 200,
    price2: 300,
    price3: 130
};

function findBigValue(obj) {

}

// Функция считает сумму аргументов с разными количеством
// calcSumArguments(1, 2)
// calcSumArguments(3, 4, 10, 5, 1)
function calcSumArguments() {

}

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

<div>Result: </div>
*/
function calclulator() {

function calcSumArguments() {
    console.log(arguments)
}

calcSumArguments(3, 4, 10, 5, 1);
// ============================================================ //

var data = [
	{
		id: 1,
		projectId: "PR_1",
		fileName: "image1.png"
	},
	{
		id: 2,
		projectId: "PR_2",
		fileName: "atlas.png"
	},
	{
		id: 3,
		projectId: "PR_1",
		fileName: "avatar.png"
	}
]
// написать функцию которая вернет строку = image1.png;avatar.png
// 1. найти нужные данные по projectId
// 2. сформировать строку

// copy array and object
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


function findKey(name) {
	// var aaa = data.filter(function (item){
	// 	return item.projectId === name;
	// });

	// var aaa1 = aaa.map(function(item){
	// 	return item.fileName;
	// })

	// var aaa2 = aaa1.join(';');


	var str = data2.filter(function (item){
		console.log(222, item)
		return item.projectId === name;
	}).map( function (item){
		console.log(422, item.fileName)
		return item.fileName;
	}).join(';');
	return str;

	

}


function findnewStr(name) {
	newStr = '';
	for (var i = 0, max = data2.length; i < max; i++) {
		if (data2[i].projectId === name) {
			newStr += data[i].fileName + ';';
		}
	}
	return newStr.slice(0, -1);

}


console.log(findKey('PR_1'));
// console.log(findnewStr('PR_1'));


// ============================================================ //

// строки category=cars&color=red&brand=audui
// написать функцию получить из строки объект данных
// var obj = {
//     category: "cars",
//     color: "red",
//     brand: audui
// }


function getObj(str) {
	var str2 = "category=cars&color=red&brand=audui";
	var newStr = str.replace(/=/g, ":");
	// str.replace("=", ":");
	// console.log(newStr);
	var newArray = newStr.split('&');
	// console.log(newArray);
	var newObj = {};
	for (var i=0; i < newArray.length; i++) {
        var prop = newArray[i].split(':')[0];
       	var value = newArray[i].split(':')[1];
	   	// console.log(prop);
	   	// console.log(value);
		newObj[prop] = value;
	}
	return newObj;
}

// console.log(getObj(str2));

// ============================================================ //

// написать функцию палиндром
// что это значит
// евгений -> палиндром йинегве - false
// анна    -> палиндром анна    - true

function polyndrom(name) {

	var aaa = name.split('').reverse().join('');
	// console.log('katu' === 'katu');
	// console.log(2, name , aaa)
	if (name === aaa) {
		return true
	} else {
		return false;
	}

	

	// return name === aaa

}

console.log(1, polyndrom('анна'));

// ============================================================ //

// написать функцию, которая трансформирует каждую вторую букву слова в верхний регистр
// водоканал -> вОдОкАнАл


function toLowercasestring(name) {
	var aaaa = name.split('');
	console.log(aaaa);
	
	for ( var i = 0; i < aaaa.length; i ++ ) {
		if (aaaa.indexOf(aaaa[i]) % 2 != 0) {
        aaaa[i] = aaaa[i].toUpperCase();
      }
	}
	return aaaa.join('');
}

console.log(toLowercasestring('водоканал'));
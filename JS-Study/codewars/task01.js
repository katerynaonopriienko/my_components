ar = ["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"];

// console.log(typeof ar)

// function longestConsec(strarr, k) {
//     var array = strarr,
//         n = k,
//         str;
//     if (Array.isArray(array) && n <= array.length) {
//         var longest = array.sort(function (a, b) {
//             return b.length - a.length;
//         });
//         longest.length = n;
//         console.log(222, longest);
//         str = longest.join('');
//     } else {
//         str = "''";
//     }
//     return str;
// }

function longestConsec(strarr, k) {
    var array = strarr,
        n = k,
        str = "";
    if (Array.isArray(array) && n <= array.length) {
        var longest = [];
        var maxLenght = array[0].length;
        for (var i = 0; i < array.length; i++) {
            if (array[i].length > maxLenght) {
                longest[i] = array[i +1];
                maxLenght = 0;
            }
            // longest.push(array[i]);
        }
        longest.length = n;
        str = longest.join('');
    } else {
        str = "";
    }
    return str;
}


console.log(longestConsec( ar, 2 ));

var s = "T $ # d @ e f g &"; //исходная строка
var a='#$@& '; //что нужно заменить,знаки пунктуации
var result = ""; // конечный результат

result = s.replace(new RegExp(a.split("").join('|\\'), "g"), "");

console.log(result.split(""));

function findmatches(str) {
    var newAr = str.toLowerCase().split(''),
        s = '';
    for (var i = 0; i < newAr.length; i++) {
        if (newAr.indexOf(newAr[i]) === newAr.lastIndexOf(newAr[i])) {
            s += '(';
        } else {
            s += ')';
        }
    }
    return s;
}
// Test.assertEquals(duplicateEncode("din"),"(((");
// Test.assertEquals(duplicateEncode("recede"),"()()()");
// Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
// Test.assertEquals(duplicateEncode("(( @"),"))((");


console.log( findmatches('Success'));

function noSpace(x){
    return str = x.replace(/ /g,'');
}

// const noSpace = x => x.replace(/ /g, "");

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

// Test.describe("Example tests",_=>{
//     Test.assertEquals(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
//     Test.assertEquals(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
//     Test.assertEquals(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');
// });

function findNeedle(haystack) {
    var str = '';
    var newAr = haystack.forEach(function(item, index) {
        if ( item === 'needle' ) {
            return str = 'found the needle at position' + ' ' + index;
        }
    });
    return str;
}

// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
// }

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

function removeChat(str) {
    return str.slice(1, str.length - 1);
};

// function removeChar(str) {
//     return str.slice(1, -1);
// }
//
// function removeChar(str){
//     return str.substring(1, str.length-1);
// };

const removeChar = str => str.slice(1,-1)

console.log(removeChat('eloquent'));

// Test.describe("Tests", function(){
//
//     Test.assertEquals(removeChar('eloquent'), 'loquen');
//     Test.assertEquals(removeChar('country'), 'ountr');
//     Test.assertEquals(removeChar('person'), 'erso');
//     Test.assertEquals(removeChar('place'), 'lac');
//
// });

function countSheeps(arrayOfSheep) {
    var newAr = arrayOfSheep.filter(function (item, index) {
        if (item === true) {
            return item === true;
        }
    });
    return newAr.length;
}

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
// }

// function countSheeps(arrayOfSheep) {
//     var num = 0;
//     for(i = 0; i < arrayOfSheep.length; i++) {
//         if(arrayOfSheep[i]) {
//             num += 1;
//         }
//     }
//     return num;
// }

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]));

var uniqueInOrder=function(iterable) {
    var a = iterable.split(''),
        ar = [],
        obj ={};
    console.log(a);
    for ( var i = 0; i < a.length; i++ ) {
        var str = a[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'));


function digitize(n) {
    var array = n.toString().split('').reverse();
    for ( var i = 0; i < array.length; i++ ) {
        if ( (typeof array[i]) === 'string' ) {
            array[i] = parseFloat(array[i]);
        }
    }
    return array;
}

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
// }

// Test.assertDeepEquals(digitize(35231),[1,3,2,5,3]);

console.log(digitize(35231));

function positiveSum(arr) {
    var sum = 0;
    var newar = arr.map(function(item, index){
        if ( item > 0 ) {
            sum += item;
        }
    });
    return sum;
}

// Test.assertEquals(positiveSum([1,2,3,4,5]),15);
// Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
// Test.assertEquals(positiveSum([]),0);
// Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
// Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);

console.log(positiveSum([1,2,3,4,5]));
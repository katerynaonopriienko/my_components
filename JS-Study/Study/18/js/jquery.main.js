console.log('========')
var str = 'product2, product1, product3';
var strToArray = str.split(', ');
var sortArray = strToArray.sort()
console.log('strToArray', strToArray)
console.log('========')
console.log('sortArray', sortArray);
console.log('========')
var arrayToStr = sortArray.join(', ');
console.log('sortArray', arrayToStr);
console.log('========')
var arrayStudents = [
    {
        name: 'name 1',
        group: '715',
        isSick: false
    },
    {
        name: 'name 2',
        group: '716',
        isSick: false
    },
    {
        name: 'name 3',
        group: '715',
        isSick: false
    },
    {
        name: 'name 4',
        group: '716',
        isSick: false
    }
];

var copy = function(array) {
    return JSON.parse(JSON.stringify(array));
}

var filterByGroup = arrayStudents.filter(function(item) {
    return item.group === '715';
});
console.log('filterByGroup', filterByGroup);

var mapStudents = copy(arrayStudents).map(function(item) {
    delete item.isSick;
    return item;
});

console.log('mapStudents', mapStudents)
console.log('arrayStudents origin', arrayStudents)

var mapStudentsName = copy(arrayStudents).map(function(item) {
    return item.name;
});

console.log('mapStudentsName', mapStudentsName)

console.log('========')
var str = '';
var str1 = new String();
var str2 = String();

var str3 = 'name';
var str4 = 'value';
var str5 = str3 + ' - ' + str4;
console.log(str5)
console.log('========')

var str6 = 'Lorem ipusm \ntest name';
console.log(str6)
console.log('========')
var str7 = 'Lorem ipusm \'test\' name';
console.log(str7)
console.log('========')
var str8 = 'lorem';
console.log('len ->', str8.length)
console.log('========')
console.log(2 > '42');
console.log('ваня' > 'вася')
console.log('н'.charCodeAt())
console.log('с'.charCodeAt())
console.log('========')
var obj = {};
var obj2 = new Object();
var obj3 = Object();

var obj4 = {
    name: 'name',
    age: 0,
    obg6: {
        name: '323',
        ong7: {
            name: 'cdscsdc'
        } 
    }
}

console.log(obj4.name);
console.log(obj4['name']);
console.log(obj4.position)
if (obj4.position) {

} else {
    console.log('Ok')
}

if ('position' in obj4) {

} else {
    console.log('Ok')
}

var obj5 = {};
obj5.name = 'name';
obj5.age = 0;
console.log('age' in obj5);


jQuery(function() {
    console.log( "ready!" );
});

$(document).ready(function() {
    console.log( "ready!" );
    ajaxForm();
    ajaxLinks();
    ajaxJSON();
});

function ajaxForm() {
    var form = $('form');
    var formAttr = form.attr('data-block');
    var content = $('[data-block="'+formAttr+'"]:not("form")');
    
    function onSubmit(event) {
        sendRequest(function(response){
            content.html(response);        
        });
        event.preventDefault();
    }

    function sendRequest(callback) {
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method') || 'get',
            data: form.serialize(),
            dataType: 'html',
            success: function(response) {
                callback(response);
            }
        });
    } 

    form.on('submit', onSubmit);
}

function ajaxLinks() {
    var body = $('body');
    var list = $('ul');
    var items = list.find('li');
    var cont = $('[data-block="ajax"]');
    var activeClass = 'active';
    var loadingClass = 'loading';

    items.eq(0).addClass(activeClass);
    var urlInit = items.eq(0).find('a').attr('href');

    sendRequest(urlInit, function(response) {
        cont.html(response);
    });

    function sendRequest(url, callback) {
        body.addClass(loadingClass);
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'html',
            success: function(response) {
                setTimeout(function() {
                    body.removeClass(loadingClass);
                    callback(response);
                }, 200)
            }
        });
    } 

    function refreshClasses(item) {
        items.removeClass(activeClass);
        item.addClass(activeClass);
    }

    function clickHandler(event) {
        var link = $(this);
        var item = link.closest('li');
        var url = link.attr('href');

        if (!item.hasClass(activeClass)) {
            sendRequest(url, function(response) {
                cont.html(response);
            });
        }
        refreshClasses(item);
        event.preventDefault();
    }

    list.on('click', 'a', clickHandler);
}

function ajaxJSON() {
    var block = $('[data-block="ajax-json"]');
    var url = block.data('path');

    function sendRequest(url, callback) {
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(response) {
                callback(response);
            }
        });
    } 

    sendRequest(url, function(response) {
        var template = tmpl("item_tmpl", { data: response });
        block.html(template);
    });
}

// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
(function(){
  var cache = {};
   
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
       
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
         
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
         
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
     
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

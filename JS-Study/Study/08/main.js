document.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() {
    var test = document.getElementById('test');
    var form = document.querySelector('form');
    var input = form.querySelector('.input');

    var button = document.querySelector('.button');

    var infos = document.querySelectorAll('.info');

    button.style.display = 'none';

    // console.log('type >> ', input.type)
    // console.log('placeholder >> ', input.placeholder)
    // console.log('value >> ', input.value)
    // console.log('title >> ', input.name)
    // input.value = 'Some value'

    var checkbox = form.querySelector('input[type="checkbox"]');
    // console.log('checkbox', checkbox);
    // console.log('checkbox is checked', checkbox.checked);
    //console.log(checkbox.value) -> on
    // rewrite state
    //checkbox.checked = true;

    var select = form.querySelector('select');
    var index = select.selectedIndex;
    var option = select.options[index];
    // var option = select.querySelectorAll('option')[index];
    //console.log(option.value); 
    //select.selectedIndex = 3

    // input.addEventListener('input', function(event) {
    //     // console.log(input)
    //     // console.log(event.target);
    //     test.innerHTML = input.value;
    // }); 

    // input.addEventListener('change', function(event) {
    //     test.innerHTML = input.value;
    // });
    
    // input.addEventListener('focus', function(event) {
    //     test.innerHTML = 'Focus Active';
    // }); 

    input.addEventListener('blur', function(event) {
        if (event.target.value.length > 4) {
            alert('Error Message');
            test.innerHTML= '';
        } else {
            test.innerHTML = event.target.value;    
        }
    }); 
    
    input.addEventListener('keyup', function(event) {
        if ((event.keyCode || event.which) === 13) {
            console.log('Enter')
        }
    });

    form.addEventListener('submit', function(event) {
        // console.log('AJAX Call');
        // console.log('Show Mesasge block');
        // event.preventDefault();

        // иди
        console.log('Show Mesasge block');
        event.preventDefault();
    });

    // button.addEventListener('click', function(event) {
    //     console.log('AJAX Call');
    //     console.log('Show Mesasge block');
    //     event.preventDefault();
    // });

    select.addEventListener('change', function(event) {
        // var index = event.target.selectedIndex;
        // var option = event.target.options[index];
        // var optionText = option.text
        // test.innerHTML = optionText;

        var index = event.target.selectedIndex;
        var option = event.target.options[index];
        var id = option.value;

        var block = document.getElementById(id);

        for (var i = 0; i < infos.length; i++) {
            var info = infos[i];
            info.style.display = 'none';
        }

        block.style.display = 'block';
    });

    checkbox.addEventListener('change', function(event) {
        if (event.target.checked) {
            button.style.display = 'inline-block';
        } else {
            button.style.display = 'none';
        }
    });
}


// calc
function calculator(num1, num2, action) {
    var result;

    switch(action) {
        case '+':
            result = num1 + num2;
            break;
    }

    return result;
}

function calculator2(num1, num2, action) {
    var obj = {
        '+': function() {
            return num1 + num2;
        }
    };

    return obj[action]();
}

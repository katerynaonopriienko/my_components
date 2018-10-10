jQuery(function() {
	initgallery();
	calculateInit();
	productLoaded();
	showPrice();
	dataArray();
});


function initgallery() {
	$('.gallery').each(function(index, item) {
		var gallery = $(this);
		var slides = gallery.find('.slide');
		var activeClass = 'active';
		var btnNext = gallery.find('.next');
		var btnPrev = gallery.find('.prev');
		var btnStart = gallery.find('.start');
		var btnStop = gallery.find('.stop');
		var pager = gallery.find('ul');
		var currentIndex = 0;
		var timer = null;
		var activeTimerClass = 'autoroation';

		createPaging();
		var pagerList = pager.children('li');

		var firstSlide = slides.first('.slide');
		var firstItem = pagerList.first('li');
		firstSlide.addClass(activeClass);
		firstItem.addClass(activeClass);
		var activeSlide = slides.find('.active');
		var activeItem = pagerList.find('.active');
		var item = pager.children('li');
		var slide = gallery.children('.slide');
		// console.log(item);

		function createPaging(item) {
			// var item;
			slides.each(function(index) {
				// slides.eq(i) = i;
				item = $('<li></li>');
				item.attr('data-id', index);
				// console.log(item);
				pager.append(item);
			});
 
			// for (var i = 0; i < slides.length; i++) {
			// }
			pager.addClass('pagination');
		}

		// function findActiveSlide() {
		// 	return slides.filter('.' + activeClass);
		// }
		// console.log(findActiveSlide());

		function showSlide(index) {
			// slide.addClass(activeClass);
			slides.eq(index).stop().fadeIn();
		}

		 function hideSlide() {
		 	// slide.removeClass(activeClass);
			slides.stop().fadeOut();
		 }

		function changeSlide(index) {
			slides.each(function(index) {
				slides.eq(index).removeClass(activeClass);
				pagerList.eq(index).removeClass(activeClass);
				hideSlide();
			});
			// for (var i = 0; i < slides.length; i++) {
			// 	slides.eq(i).removeClass(activeClass);
			// 	pagerList.eq(i).removeClass(activeClass);
			// }
			slides.eq(index).addClass(activeClass);
			showSlide(index);
			pagerList.eq(index).addClass(activeClass);
		}

		function nextSlide() {
			if (currentIndex < slides.length - 1) {
				currentIndex = currentIndex + 1;
			} else {
				currentIndex = 0;
			}
			changeSlide(currentIndex);
		}

		function prevSlide() {
			if (currentIndex > 0) {
				currentIndex = currentIndex - 1;
			} else {
				currentIndex = slides.length - 1;
			}

			changeSlide(currentIndex);
		}

		function startAutoPlay() {
			if (!gallery.hasClass(activeTimerClass)) {
				gallery.addClass(activeTimerClass);
				timer = setInterval(function() {
					nextSlide();
				}, 1000);
			}        
		}

		function stopAutoPlay() {
			gallery.removeClass(activeTimerClass);
			clearInterval(timer);
		}

		function itemClick() {
			// pagerList.each(function(index) {
			// 	pagerList.eq(index).on('click', function(event) {
			// 	var index = event.target.dataset.id;
			// 	changeSlide(index);
			// });
			// pager.on('click', function(event) {
				// var target = event.target;
				// var li = target.closest('li');
				// if (!li) return;
				var index = event.target.dataset.id;
				changeSlide(index);
			// });
		}

		btnNext.on('click', nextSlide);
		btnPrev.on('click', prevSlide);
		btnStart.on('click', startAutoPlay);
		btnStop.on('click', stopAutoPlay);
		pager.on('click', 'li',itemClick);
	}); 
}

function calculateInit() {
	$('.form').each(function(index, item) {
		var form = $(this);
		// console.log(form);
		var select = form.find('select');
		var index = select.selectedIndex;
		// var option = select.options.eq(index);

		var result = $('.result');
		var inputs = form.find('.input');
		// var input = form.find('.input');
		var button = form.find('.button');
		var errorClass = 'error';
		var num1;
		var num2;

		inputs.each(function (index){
			// FormReset();
			input = inputs.eq(index);
			// console.log(2222, input);
			// input.attr('data-id', index);
			input.on('change', function(index){
				var num = parseFloat(jQuery(this).val());

				// console.log(5555, +input.val())
				if ( !isNaN(num) ) {
					// console.log(num)
				} else {
					result.text('Введите число');
					jQuery(this).addClass(errorClass);
				}	
			});
		});



		var options = select.children('option');
		options.each(function (index){
			option = options.eq(index);
			option.attr('value', index);
		});
		select.on('change', function(event) {
			var index = + $(this).val();
			// console.log(index);
			var example = 0;
			num1 = parseInt(form.find('.input')[0].value);
			// console.log(num1);
			num2 = parseInt(form.find('.input')[1].value);
			// console.log(num2);

			console.log('index', index)
			if (index === 1) {
				example += num1 + num2;
			} 
			if (index === 2) {
				example += num1 - num2;
			} 
			if (index === 3) {
				example += num1 * num2;
			} 
			if (index === 4) {
				// console.log( '1111', num1, num2)
				example += num1 / num2;
			}
			// switch(index) {
			// 	case '1':
			// 		example = num1 + num2;
			// 	break;
			// 	case '2':
			// 		example = num1 - num2;
			// 	break;
			// 	case '3':
			// 		example = num1 * num2;
			// 	break;
			// 	case '4':
			// 		example = num1 / num2;
			// 	break;   
			// }
				result.html(example);
			// console.log(example);
		});

		function FormReset() {
			form.trigger( 'reset' );
			if (inputs.hasClass(errorClass)){
				inputs.remove(errorClass);
			}
			inputs.removeClass(errorClass);
			result.html('Result:')
		}
		function resetButton() {
			event.preventDefault();
			FormReset();
		}
		button.on('click', resetButton);

	});
}


// next --------------------------------------------------

function productLoaded() {
	var body = jQuery('body');
	var productblock = body.find('.product-block');
	var ul = productblock.find('.first-list');
	var addArray = productblock.find('.addArray');
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
		// console.log(11111, array2);
		return array2;
	}

	function sortArray(array,prop) {
		'use strict';

		if (Array.isArray(array)) {
			return array.sort(function(a, b) {
				if (a[prop] < b[prop]) return 1;
				if (a[prop] > b[prop]) return -1;
				return 0
			})
		}
		// console.log(22222, array);
		return array;
	}
	// console.log(111111, relations);
	
	function addHtml(array) {
		for (var i = 0; i < array.length; i++) {
			console.log(array[i]);
			// var value = array[i];
			for (var key in array[i]) {
				var li = $('<li></li>');
				// console.log('key', key)
				// console.log('key-name', array[i][key])
				li.text([key] +':'+ array[i][key]);
				ul.append(li);
			}    
		}
	}
	addProductName(products, relations);
	sortArray(relations, 'id');
	addHtml(relations);
}

// next --------------------------------------------------

function showPrice() {
	var holder = jQuery('.radio-block');
	var input = holder.find('input[type="radio"]');
	var label = holder.find('label');
	var priceHolder =  holder.find('.price');
	input.attr('name', 'radio');
	label.each(function (index){
		jQuery(this).attr('for', index);
	});
	function click () {
		input.each(function (index){
			var radio = input.eq(index);
			jQuery(this).attr('id', index);
			jQuery(this).attr('value', radio.data('price'));
			var result = radio.val();
			radio.on('change', function(event){
				if ( ('index:checked').length) {
					// console.log(radio.val());
					priceHolder.html(result);
				} else {
					return priceHolder.html('');
				}
			});
		});
	}
	click();
}


// next --------------------------------------------------

// 1) 
// Есть массив данных
// Нужно достать категории, которые входят в приоритет больше 1 и меньше 4
// Отфильтровать по алфавиту
// Отрисовать на странице в виде списка <ul> <li>
// При клике на LI в каком-то диве (за списком или сверху) хочу видеть название категории по которой кликнули и его ID   


function dataArray() {
	var body = jQuery('body');
	var ul = body.find('.list');
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

	var newDataAr = data3.filter( function(item, index, array) {
		return item.priority > 1 && item.priority < 4;
	});
	// console.log(111, newDataAr);

	function addHtml(array, category) {
		for (var i = 0; i < array.length; i++) {
			// console.log(array[i]);
			var li = $('<li></li>');
			li.attr( 'id', array[i]);
			for (var key in array[i]) {
				if ( key === category ) {
					li.text([key] +':'+ array[i][key]);
					ul.append(li);
				}
				if ( key === 'id' ) {
					li.attr( 'id', array[i][key]);
				}
				if ( key === 'name') {
					li.attr( 'name', array[i][key]);
				}
			}    
		}
	}
	addHtml(newDataAr, 'priority');
}

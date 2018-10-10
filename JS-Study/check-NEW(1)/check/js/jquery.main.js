jQuery(function() {
	checkboxChange();
});


function checkboxChange() {
	var holder = jQuery('.checkbox-holder');
	var input = holder.find('input[type="checkbox"]');

	function onInit() {
		input.attr('name', 'checkbox');
		input.attr('checked', true);
		toogleClass(input, true);
	}

	function arrCheckedInput() {
		return input.filter(function(i, elem) {
			return jQuery(elem).is(':checked')
		});
	}

	function toogleClass($inputArr, isActive) {
		$inputArr.each(function() {
			holder[isActive ? 'addClass' : 'removeClass'](jQuery(this).data('active'));
		});
		holder.data('active', isActive);
	}

	function dissabledInput($arr, isDissabled) {
		return $arr.attr('disabled', isDissabled);
	}

	function disabledBlocks() {
		var isDissabled = arrCheckedInput().length === 1;

		dissabledInput((isDissabled ? arrCheckedInput() : input), isDissabled)
	}

	function onChange() {
		toogleClass(arrCheckedInput(), true);
		toogleClass(input.not(arrCheckedInput()), false);
		disabledBlocks();
	}


	onInit();
	holder.on('change', 'input[type="checkbox"]', onChange);

}

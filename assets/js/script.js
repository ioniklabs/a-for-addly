function random_number(min, max) {
	min = typeof(max) == 'undefined' ? 9999 : max;
	max = typeof(max) == 'undefined' ? 999999 : max;
	return Math.floor(Math.random() * (max - min + 1) + min);
};

$(document).ready(function() {

	var $template = $('.template');

	$('.render-equation').each(function(i) {
		var $this = $(this),
			index = i+1;
		var $equation = $template.clone();
		var sum_a = random_number(),
			sum_b = random_number(),
			$sum_a = $equation.find('.sum-a'),
			$sum_b = $equation.find('.sum-b'),
			$index = $equation.find('.index');
		$sum_a.text(sum_a);
		$sum_b.text(sum_b);
		$index.text(index);
		$this.html($equation);
	});
});
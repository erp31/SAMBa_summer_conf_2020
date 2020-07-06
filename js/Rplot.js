(function($) {
    $(document).ready(function() {
	
	$('#Rplot').scianimator({
	    'images': ['/home/erp31/Documents/PhD/SAMBa_summer_conf_2020/Rplot1.png', '/home/erp31/Documents/PhD/SAMBa_summer_conf_2020/Rplot2.png', '/home/erp31/Documents/PhD/SAMBa_summer_conf_2020/Rplot3.png', '/home/erp31/Documents/PhD/SAMBa_summer_conf_2020/Rplot4.png', '/home/erp31/Documents/PhD/SAMBa_summer_conf_2020/Rplot5.png'],
	    'width': 480,
	    'delay': 500,
	    'loopMode': 'loop'
	});
	$('#Rplot').scianimator('play');
    });
})(jQuery);

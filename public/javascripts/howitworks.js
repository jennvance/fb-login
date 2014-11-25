$(document).on('ready', function(){

	// $('#scrollone').on('click', function(e){
	// 	e.preventDefault();
	// 	$('html, body').animate({
	// 		scrollTop: $('#slidetwo').offset().top
	// 	}, 1000);
	// });

	// $('#scrolltwo').on('click', function(e){
	// 	e.preventDefault();
	// 	$('html, body').animate({
	// 		scrollTop: $('#slidethree').offset().top
	// 	}, 1000);
	// });

	// $('#scrollthree').on('click', function(e){
	// 	e.preventDefault();
	// 	$('html, body').animate({
	// 		scrollTop: $('#slidefour').offset().top
	// 	}, 1000);
	// });

	// $('#scrollfour').on('click', function(e){
	// 	e.preventDefault();
	// 	$('html, body').animate({
	// 		scrollTop: $('#slidefive').offset().top
	// 	}, 1000);
	// });

	$('a[href^=#]').on('click', function(event) {
	    var nextID = $(this).attr('href');
	    var target = $(nextID);
	    //conditional not used in this particular page, but necessary in other/similar situations
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

});

$("document").ready(function() {



	/*============================================
	NAVIGATION and SIZING
	==============================================*/

	$('body').scrollspy({ target: '.navigation' })

	// Remove min-height on iOS after slideshow initialization
	var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
	if(iOS){
    	function iosVhHeightBug() {
        	var height = $(window).height();
        	$(".slidepage").css('min-height', height);
        	$('.vertical-center').css('margin-top', height/2);
    	}
    	iosVhHeightBug();
    	$(window).bind('resize', iosVhHeightBug);
	}

	$('.scroll').click(function(evt) {
		evt.preventDefault();
		var arr = $(this).attr('href').split('#');
		if (arr[1]) {
			var section = arr[1];
			$('html, body').animate({
	        	scrollTop: $("." + section).offset().top
	        }, 1000);
		}
	});

	/*============================================
	MENU
	==============================================*/
	$('#menuswitcher').click(function(el) {
		el.preventDefault();
		var navigation = $('.navigation')
		var buttonspan = $('#menuswitcher span')
		var menu = $('#menu')
		if (navigation.is(":visible")) {
			// navigation.hide({duration: 500, easign: 'easeOutExpo'});
			navigation.animate({
				height:"toggle"
			}, {duration: 300});
			buttonspan.removeClass('fa-times')
			buttonspan.addClass('fa-bars')
			menu.removeClass('solid-background')
		} else {
			buttonspan.removeClass('fa-bars')
			buttonspan.addClass('fa-times')
			menu.addClass('solid-background')
			// navigation.show({duration: 500, easign: 'easeOutExpo', direction: "down"})
			navigation.animate({
				height:"toggle"
			}, {duration: 300});


		}
	})


	/*============================================
	Gallery
	==============================================*/

	$('#gallery-container').css({visibility:'visible'});

	$('#filter-gallery a').click(function(e){
		e.preventDefault();

		$('#filter-gallery li').removeClass('active');
		$(this).parent('li').addClass('active');

		var category = $(this).attr('data-filter');

		$('.gallery-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
			else{
				$(this).addClass('filtered');
			}
		});
	});

	$('.gallery-item').click(function(e) {
		e.preventDefault();

		var imageUrl = $(this).attr('data-image-url');

		var img = $("<img />").attr('src', imageUrl).attr('class', 'img-responsive').load(function() {
			if (this.complete) {
				$('#modalImage .modal-body').html(img);
			}
		}).error(function() {
			$('#modalImage .modal-body').html('<div class="alert alert-danger">Error loading image.</div>');
		});
	});
})

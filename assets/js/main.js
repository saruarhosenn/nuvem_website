$(document).ready(function () {

	// Sticky Menu
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("header").addClass('sticky-menu');
		} else {
			$("header").removeClass('sticky-menu');
		}
	});


	// Toggle Menu
	$(".open-menu-btn").click(function () {
		$(".main-menu").toggleClass("menu-open");
	});

	// Toggle Seach Box
	$('.header-search-wrapper .search-main').click(function () {
		$('.search-form-main').toggleClass('active-search');
		$('.search-form-main .search-field').focus();
	});

	// Owl Carousel Slider
	$('.owl-carousel').owlCarousel({
		center: false,
		items: 1,
		autoplay: true,
		dots: false,
		autoplayTimeout: 3000,
		loop: true,
		margin: 20,
		nav: true,
		responsive: {
			576: {
				items: 2,
			},
			992: {
				items: 3,
			},
		}
	});

	// Wow JS 
	new WOW().init();

});

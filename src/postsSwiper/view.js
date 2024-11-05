
jQuery(function ($) {
	$('.uni_slots__swiper').each(function (index, element) {
		const swiperCurrent = $(this)
		const swiperArgs = {
			slidesPerView: swiperCurrent.data('count'),
      lazy: true,
			spaceBetween: swiperCurrent.data('space'),
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				768: {
					slidesPerView: swiperCurrent.data('count') - 2,
					spaceBetween: 16
				},
				1124: {
					slidesPerView: swiperCurrent.data('count') - 1,
					spaceBetween:  16
				},
				1366: {
					slidesPerView: swiperCurrent.data('count'),
					spaceBetween: swiperCurrent.data('space')
				}
			}
		};

		new Swiper(`#${swiperCurrent.attr('id')}`, swiperArgs);

	});
});

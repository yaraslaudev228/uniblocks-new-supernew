const swiper = new Swiper('.uni_bannerSwiper', {
	slidesPerView: 1
})
jQuery(function ($) {

	const uniBanner = $('.uni_bannerSwiper')
	uniBanner.each(function () {
		const heightForMobile = $(this).data('height')
		if(window.innerWidth < 768) {

			$(this).css('height', heightForMobile)
		}
	})

	const bannerImages = $('.bannerImage')
	bannerImages.each(function () {
		const heightForMobile = $(this).data('height')
	  if(window.innerWidth < 768) {
			$(this).css('height', heightForMobile)
		}
	})

})


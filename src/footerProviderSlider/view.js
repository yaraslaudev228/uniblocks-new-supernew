
const swiperContainer = document.querySelectorAll('.footer_provider')
if(swiperContainer) {
	swiperContainer.forEach((el) => {
		const swiperArgs =  {
			slidesPerView: "auto",
			spaceBetween: 16
		}
		if(el.dataset.nav === 'true' ) {
			swiperArgs.navigation = {
				nextEl: ".footer_provider_swiper-button-next",
				prevEl: ".footer_provider_swiper-button-prev",
			}
		}
		console.log(swiperArgs)
		new Swiper(`.${el.classList[0]}`, swiperArgs);
	})
}



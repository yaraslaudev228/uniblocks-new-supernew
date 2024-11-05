jQuery(function ($) {
  const counter = $('.uni_sports_swiper')

  new Swiper('.uni_sports_swiper', {
    slidesPerView: counter.data('count'),
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1240: {
        slidesPerView: 3
      },
      1660: {
        slidesPerView: 4
      }
    }
  })

})

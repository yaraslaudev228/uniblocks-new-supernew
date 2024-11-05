
jQuery(function ($) {
	const faqItems = $('.uni_faq__item')
	faqItems.click(function () {
		$(this).toggleClass('uni_faq__item-active')
	})
})

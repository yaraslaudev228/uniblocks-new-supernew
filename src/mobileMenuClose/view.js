jQuery(function ($) {
	const menuMobileTrigger = $('.uni__mobile_menu_trigger')
	const menuMobileAside = $('.uni_mobile__aside')
	const close = menuMobileAside.find('.close')

	menuMobileTrigger.click(function () {
		$(this).addClass('active')
		menuMobileAside.addClass('active')
	})
	close.click(function () {
		menuMobileAside.removeClass('active')
		menuMobileTrigger.removeClass('active')
	})
})

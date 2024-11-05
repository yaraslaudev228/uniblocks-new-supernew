jQuery(function ($) {
	const menuMobileTrigger = $('.uni__mobile_menu_trigger')
	const menuMobileAside = $('.uni_mobile__aside')
	menuMobileTrigger.click(function () {
		$(this).addClass('active')
		menuMobileAside.addClass('active')
	})
})

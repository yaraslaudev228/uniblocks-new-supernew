jQuery(function ($) {
	const burgerWrapper = $('.uni_burger')
	burgerWrapper.each(function () {
		const burgerWrapperCurrent = $(this)
		const burgerOpener = burgerWrapperCurrent.find('.uni_burger__icon')
		const sidebarOfBurger = $('.uni_burger__aside')

		const closeSidebar = sidebarOfBurger.find('.uni_btn__close-burger')

		burgerOpener.click(function () {
			sidebarOfBurger.toggleClass('uni_burger__aside-active')
		})

		closeSidebar.click(function () {
			sidebarOfBurger.removeClass('uni_burger__aside-active')
		})

	})

})




jQuery(function ($) {
	const langsDropdown = $('.uni_langs_list')
	langsDropdown.each(function () {
		const currentLangDropdown = $(this)
		const langsList = currentLangDropdown.find('.uni_langs__dropdown')
		const currentLang = currentLangDropdown.find('.uni_current_lang')
		currentLang.click(function () {
			 langsList.toggleClass('uni_langs__dropdown_active')
		})
	})
})

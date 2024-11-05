buttonBurgerTrigger = document.querySelector(
	".uni_burger_mobile__trigger",
);
const uniWrapHeaderMobile = document.querySelector(
	".uni_header__wrap_in_mobile",
);

if (buttonBurgerTrigger) {
	buttonBurgerTrigger.addEventListener("click", () => {
		uniWrapHeaderMobile.classList.toggle("active");
	});
}

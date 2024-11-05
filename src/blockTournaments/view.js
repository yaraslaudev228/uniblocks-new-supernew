/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
// console.log( 'Hello World! (from create-block-uni-blocks block)' );
/* eslint-enable no-console */
let promoBlocks = document.querySelectorAll(".promo-block");
promoBlocks.forEach((item) => {
	var today = new Date();
	let dayEdit = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
	const deadline = today.setDate(today.getDate() + dayEdit);
	// id таймера
	let timerId = null;
	// склонение числительных

	function declensionNum(num, words) {
		return words[
			num % 100 > 4 && num % 100 < 20
				? 2
				: [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
		];
	}
	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
		const diff = deadline - new Date();
		if (diff <= 0) {
			clearInterval(timerId);
		}
		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		$days.textContent = days < 10 ? "0" + days : days;
		$hours.textContent = hours < 10 ? "0" + hours : hours;
		$minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
		$seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
		$days.dataset.title = declensionNum(days, ["days", "day", "days"]);
		$hours.dataset.title = declensionNum(hours, ["hour", "hours", "hour"]);
		$minutes.dataset.title = declensionNum(minutes, ["min", "min", "min"]);
		$seconds.dataset.title = declensionNum(seconds, ["sec", "sec", "sec"]);
	}

	// получаем элементы, содержащие компоненты даты
	const $days = item.querySelector(".timer__days");
	const $hours = item.querySelector(".timer__hours");
	const $minutes = item.querySelector(".timer__minutes");
	const $seconds = item.querySelector(".timer__seconds");
	// вызываем функцию countdownTimer
	countdownTimer();
	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000);
});

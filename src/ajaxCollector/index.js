export default function AjaxCollector({action, data, setDataCallback}) {
	jQuery(function ($) {
		const $jqXhr = $.get('/wp-admin/admin-ajax.php', {
			action: action,
			data: data
		})
		$jqXhr.done((function (response) {
			setDataCallback(JSON.parse(response))
		}))
	})
}

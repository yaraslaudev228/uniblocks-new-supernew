<?php
add_action('wp_ajax_nopriv_uni_get_sports_for_swiper', 'swiper_sports_callback');
add_action('wp_ajax_uni_get_sports_for_swiper', 'swiper_sports_callback');
function swiper_sports_callback()
{
	$date_now = date('Y-m-d', time() - 86400 * 3);
	$date_after = date('Y-m-d', time() + 86400 * 3);
	$request_url = "https://n1bet.com/api/v2/matches?bettable=true&limit=3&match_status=1&match_status=0&sort_by=tournament.priority%3Aasc&sort_by=start_time%3Aasc&sort_by=bets_count%3Adesc&sport_type=regular&start_from=" . $date_now . "T11%3A16%3A55.512Z&start_to=" . $date_after . "T11%3A16%3A55.512Z";
	$response = wp_remote_get($request_url, [
		'timeout' => 150
	]);
	$response_code = wp_remote_retrieve_response_code($response);
	if ( $response_code === 200 ) {
		echo wp_remote_retrieve_body($response);
	}
	wp_die();
}

add_action('wp_ajax_uni_get_inplay_sports', function () {
	$request_url = "https://n1bet.com/api/v2/matches?bettable=true&limit=5&match_status=1&max_per_sport=5&sort_by=tournament.sport.priority%3Aasc&sort_by=tournament.sport.id%3Aasc&sort_by=start_time%3Aasc&sport_type=regular&type=match";
	$response = wp_remote_get($request_url, [
		'timeout' => 150
	]);
	$response_code = wp_remote_retrieve_response_code($response);
	if ( $response_code === 200 ) {
		echo wp_remote_retrieve_body($response);
	}
	wp_die();


});

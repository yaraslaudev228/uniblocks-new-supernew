<?php
add_action('wp_ajax_uni_set_header_for_front', function () {
	update_option('is_showed_in_front', $_POST['showInFront']);
	echo get_option('is_showed_in_front');
	wp_die();
});

add_action('wp_ajax_uni_get_header_for_front', function () {
	echo get_option('is_showed_in_front');
	wp_die();
});

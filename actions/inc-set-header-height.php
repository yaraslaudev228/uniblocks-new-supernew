<?php
add_action('wp_ajax_uni_set_header_height', function () {
	update_option('header_height', $_POST['headerHeight']);
	echo 'updated header_height';
	wp_die();
});
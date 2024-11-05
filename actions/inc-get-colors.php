<?php
add_action('wp_ajax_uni_get_colors', function () {
	echo json_encode([
		[
			'color' => get_option('body_bg'),
			'name' => 'Body Background'
		],
		[
			'color' => get_option('header_bg'),
			'name' => 'Header Background'
		],
		[
			'color' => get_option('footer_bg'),
			'name' => 'Footer Background'
		],
		[
			'color' => get_option('sidebar_bg'),
			'name' => 'Sidebar Background'
		],
		[
			'color' => get_option('heading_colors'),
			'name' => 'Heading Color'
		],
		[
			'color' => get_option('content_colors'),
			'name' => 'Content Color'
		],
		[
			'color' => get_option('content_a_colors'),
			'name' => 'Link content color'
		],
		[
			'color' => get_option('copyright_color_footer'),
			'name' => 'Footer Copyright color'
		],

	], JSON_THROW_ON_ERROR);
	wp_die();
});

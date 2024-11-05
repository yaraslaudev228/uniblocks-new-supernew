<?php

add_action('wp_ajax_uni_get_posts', function () {

	$posts = get_posts([
		'numberposts' => $_GET['perPage'],
		'post_status' => 'publish',
		'orderby' => 'rand',

	]);
	if($posts) {
		$postsJson = [];
		foreach($posts as $post) {
			$postsJson[] = [
				'title' => $post->post_title,
				'url' => get_the_permalink($post->ID),
				'image' => get_the_post_thumbnail_url($post->ID),

			];
		}
		echo json_encode($postsJson, JSON_THROW_ON_ERROR);
	}

	wp_die();
});
<?php
add_action('wp_ajax_uni_search_for_pages', function () {
	$response = [];
	$query = new WP_Query([
		'posts_per_page' => -1,
		'post_type' => ['post', 'page'],
		's' => $_GET['searchQuery']
	]);
	if ( $query->have_posts() ) {
		foreach ($query->posts as $post) {
			setup_postdata($post);
			$response[] = ['title' => $post->post_title, 'id' => $post->ID];
		}
	}
  echo json_encode($response);

	wp_die();
});
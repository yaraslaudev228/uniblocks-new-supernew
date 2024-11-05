<?php
add_action('wp_ajax_uni_collect_comments', function () {
	$comments_args = [
 		'orderby' => 'date',
		'order' => 'DESC',
		'number' => ''
	];
	$comments = get_comments(apply_filters('uni_comments_args', $comments_args));
	if(!empty($comments)) {
		$comments = array_map(function ($comment) {
      $comment->rating = get_comment_meta($comment->comment_ID, 'rating', true);
			return $comment;
		}, $comments);
	}
	echo json_encode($comments);
	wp_die();
});
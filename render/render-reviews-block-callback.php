<?php

function render_reviews_block_callback( $attributes, $content )
{
	// Начинаем с копирования структуры вашего блока
	$output = '<div class="uni_comments" style="gap: ' . esc_attr($attributes['commentsGap']) . '">';
	$comments_args = [
		'orderby' => 'date',
		'order' => 'DESC',
		'number' => ''
	];
	$comments = get_comments(apply_filters('uni_comments_args', $comments_args));
	if ( !empty($comments) ) {
		$comments = array_map(function ( $comment ) {
			$comment = (array)$comment;
			$comment['rating'] = get_comment_meta($comment['comment_ID'], 'rating', true);
			return $comment;
		}, $comments);
	}


	// Заголовок блока
	$output .= '<div class="comments_title uni_section__title" style="color: ' . esc_attr($attributes['commentTitleColor'] ?? '') . ';
	 font-size: ' . esc_attr($attributes['commentTitleFontSize'] ?? '') . '">';
	$output .= $attributes['commentsTitle'];
	$output .= '</div>';

	// Список комментариев
	if ( is_array($attributes['commentsList']) && !empty($attributes['commentsList']) ) {
		foreach ($comments as $index => $comment) {
			$output .= '<div class="uni_comment" style="background: ' . esc_attr($attributes['commentsBackground']) . '; color: ' . esc_attr($attributes['commentsColor']) . '; border-radius: ' . esc_attr($attributes['commentsBradius']) . '; padding: ' . esc_attr($attributes['commentsPadding']) . '">';

			// Имя автора комментария
			$output .= '<div class="uni_comment_name" style="font-size: ' . esc_attr($attributes['commentsTitleFsize']) . '">';
			$output .= esc_html($comment['comment_author']);
			$output .= '</div>';

			// Рейтинг (звезды)
			if ( !empty($comment['rating']) ) {
				$output .= '<div class="rating" style="color: ' . esc_attr($attributes['commentsStarsColor']) . '">';
				for ($i = 0; $i < $comment['rating']; $i++) {
					$output .= '★'; // замените на ваш HTML для звезд
				}
				$output .= '</div>';
			}

			// Дата комментария
			if ( !empty($attributes['isDateRevealed']) ) {
				$output .= '<div class="uni_comment_date">';
				$output .= esc_html($comment['comment_date']);
				$output .= '</div>';
			}

			// Тело комментария
			$output .= '<div class="uni_comment_body" style="font-size: ' . esc_attr($attributes['commentsBodyFsize']) . '">';
			$output .= esc_html($comment['comment_content']);
			$output .= '</div>';

			$output .= '</div>';
		}
	}

	$output .= '</div>';

	return $output;
}
<?php
add_action('wp_head', function () {
	echo get_option('google_meta') ?
		'<meta name="google-site-verification" content="' . get_option('google_meta') . '" />' : '';

}, 5);
add_action('wp_footer', function () {
	echo get_option('yandex_metrix') ?: '';
});

add_filter( 'render_block', 'modify_image_block_lazyload', 10, 2 );

function modify_image_block_lazyload( $block_content, $block ) {
	if ( $block['blockName'] === 'core/image' ) {
		if ( ! empty( $block_content ) ) {
			// Wrap the content in a full HTML document
			$html = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body>' . $block_content . '</body></html>';

			// Create a new DOMDocument and load the HTML
			$dom = new DOMDocument();
			libxml_use_internal_errors(true); // Suppress parsing errors
			$dom->loadHTML( $html, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD );
			libxml_clear_errors();

			// Get all image elements
			$imgs = $dom->getElementsByTagName('img');

			foreach ( $imgs as $img ) {

				// Replace 'src' with 'data-src'
				if ( $img->hasAttribute( 'src' ) ) {
					$src = $img->getAttribute( 'src' );
					$img->setAttribute( 'data-src', $src );
					$img->setAttribute( 'src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==' );
				}

				// Replace 'srcset' with 'data-srcset'
				if ( $img->hasAttribute( 'srcset' ) ) {
					$srcset = $img->getAttribute( 'srcset' );
					$img->setAttribute( 'data-srcset', $srcset );
					$img->removeAttribute( 'srcset' );
				}

				// Add 'lazyload' to the class attribute
				if ( $img->hasAttribute( 'class' ) ) {
					$classes = $img->getAttribute( 'class' );
					if ( strpos( $classes, 'lazyload' ) === false ) {
						$classes .= ' lazyload';
						$img->setAttribute( 'class', $classes );
					}
				} else {
					$img->setAttribute( 'class', 'lazyload' );
				}
			}

			// Save the modified HTML
			$modified_html = $dom->saveHTML();

			// Extract the content inside the <body> tag
			$start = strpos( $modified_html, '<body>' ) + 6;
			$end = strpos( $modified_html, '</body>' );
			$block_content = substr( $modified_html, $start, $end - $start );
		}
	}
	return $block_content;
}
<?php

add_action('wp_enqueue_scripts', function () {
	$handle = 'uni-custom-colors';
	$body_background = get_option('body_bg');
	$header_background = get_option('header_bg');
	$aside_background = get_option('sidebar_bg');
	$content_color = get_option('content_colors');
	$heading_color = get_option('heading_colors');
	$footer_color = get_option('footer_bg');
	$content_a_color = get_option('content_a_colors');
	$container_padding = get_option('container_padding');
	$aside_width_left = get_option('site_show_sidebar') !== 'false' ? get_option('left_sidebar_width') : "";
	$aside_width_right = get_option('site_show_right_sidebar') !== 'false' ? get_option('right_sidebar_width') : "";
    $is_header_sticky = get_option('is_header_sticky') !== 'false';

	$container_all_padding = get_option('container_all_padding');
	$is_left_sidebar_fixed = get_option('is_left_sidebar_fixed') !== 'false';
	$is_right_sidebar_fixed = get_option('is_righ_sidebar_fixed') !== 'false';
    $header_height = get_option('header_height');
	$importFonts = get_option('fonts_import');
	$fontFamily = get_option('fonts_activate');
    $fontSize = get_option('content_font_size');
	$leftSidebarBorder = get_option('left_sidebar_border');
	$rightSidebarBorder = get_option('right_sidebar_border');
     $is_footer_sized = get_option('is_footer_sized') !== 'false';
	$copyright_color_footer = get_option('copyright_color_footer');
	$tableBg = get_option('table_background');
	$tableHeadBg = get_option('table_head_background');
	$tableHeadColor = get_option('table_head_color');
	$tableBorder = get_option('table_border');
	$tablePadding = get_option('table_td_padding');
	$tableBorderColor = get_option('table_border_color');
	$mobile_menu_width = get_option('mobile_menu_width');
	$mobile_menu_bg = get_option('mobile_menu_bg');
	$mobile_menu_close_color = get_option('mobile_menu_close_color');

 	$styles = "
 	$importFonts;
 	* {
 	font-family: $fontFamily;
 	}
	body {
		background: $body_background;

	}
	.uni_site__wrapper {
	  padding: $container_all_padding
	}
	.uni_main__wrapper {
		padding: $container_padding;
	    flex-grow: 1;
     	flex-basis: calc(100%" . ($aside_width_left ? " - $aside_width_left" : "" ) . ($aside_width_right ? " - $aside_width_right" : "" ). ");
     	max-width: calc(100%" . ($aside_width_left ? " - $aside_width_left" : "" ) . ($aside_width_right ? " - $aside_width_right" : "" ). ");
	}
	@media (max-width: 1240px) {
	.uni_main__wrapper {
		max-width: 100%;
		flex-basis: calc(100%" . ($aside_width_left ? " - $aside_width_left" : "" ) . ");
     	max-width: calc(100%" . ($aside_width_left ? " - $aside_width_left" : "" ) .  ");
	}

	}
	@media (max-width: 1124px) {
	.uni_main__wrapper {
		max-width: 100%;
		flex-basis: 100%;
	}

	}
	.uni_sidebar {
		background: $aside_background;

	}
	.uni_sidebar__left {
	" . ($is_left_sidebar_fixed ? "position: fixed; top: 0; left: 0; height: 100vh; z-index: 160; overflow-y: scroll;" : "") . "
		flex-basis: $aside_width_left;
    width: $aside_width_left;
    ". ($leftSidebarBorder ? "border: $leftSidebarBorder;" : "") . "
		" . ($is_header_sticky && $is_left_sidebar_fixed ? "top: calc($header_height + 1rem); height: calc(100vh - $header_height);": "") . "
	}
	.uni_sidebar_right {
	 " . ($is_right_sidebar_fixed ? "position: fixed; top: 0; right: 0; height: 100vh; z-index: 160; overflow-y: scroll" : "") . "
		flex-basis: $aside_width_right;
		min-width: $aside_width_right;
		". ($rightSidebarBorder ? "border: $rightSidebarBorder;" : "") . "
		" . ($is_header_sticky && $is_right_sidebar_fixed ? "top: calc($header_height + 1rem) ": "") . "
	}
	.uni_header {
		background: $header_background;
		position: " . ($is_header_sticky ? 'sticky' : 'static') . ";
		top: 0;
		z-index: 100
	}

	.uni_wrap_for__mobile.uni_header__collection {
	background: $header_background;
	}
	.uni_section p, .uni_section ul, .uni_section ol, .uni_burger_mobile__trigger {
	  color: $content_color;
    font-size: $fontSize;
	}
	.uni_section h1, .uni_section h2, .uni_section h3, .uni_section h4, .uni_section h5 {
		  color: $heading_color;
	}
	.uni_section td, .uni_section th {
		  color: $content_color;
		  font-size: $fontSize;
	}
	.yoast-breadcrumbs  {

      color: $content_color;

	}
	.yoast-breadcrumbs a {
     color: $content_a_color
	}
	.yoast-breadcrumbs .breadcrumb_last {
		color: $content_color;
	}

	.uni_footer {
		background: $footer_color;
		position: relative;
	}
	" . ($is_footer_sized ? "
	.uni_footer:before, .uni_footer:after {
    content: '';
    display: block;
    width: 100%;
    top: 0;
    position: absolute;
    background: $footer_color;
    height: 100%;
    z-index: 150;

	}
	.uni_footer:before {
	left: -100%;
	}
	.uni_footer:after {
	right: -100%;
	}" : "") . "
	.uni_section p > a, .uni_section td > a, .uni_section li > a  {
	  color: $content_a_color;
	}
	.uni_btn__signup {
    background: $content_a_color;
	}
  .uni_copyright {
  color: $copyright_color_footer
  }
  .uni_section table  {
		border-collapse: collapse;
		background: $tableBg;
		width: 100%;
	}
	.uni_section thead th {
		background: $tableHeadBg;
		color: $tableHeadColor;
			padding: $tablePadding;
	}
	.uni_section td {
		border-collapse: collapse;
		border: $tableBorder solid $tableBorderColor;
		padding: $tablePadding
	}
	.uni_iframe .iframe {
		background: $header_background
	}
	.uni_mobile__aside {
 		background: $mobile_menu_bg;
 		width: $mobile_menu_width;
	}

	";
	 if(get_option('is_header_fixed_setting')) {
		 $styles .= "
		  .uni_header {
		  position: fixed;
		  left: " . ($aside_width_left ?: '0') . ",
		  top: 0;
		  }
		 ";
	 }
	wp_register_style($handle, false);
	wp_add_inline_style($handle, $styles);
	wp_enqueue_style($handle);
});

add_action('admin_footer', function () {
	?>
	<style>
		.editor-styles-wrapper {
			background: <?php echo get_option('body_bg') ?>
		}

		.editor-styles-wrapper h1, .editor-styles-wrapper h2, .editor-styles-wrapper h3, .editor-styles-wrapper h4, .editor-styles-wrapper h5 {
			color: <?php echo get_option('heading_colors') ?>;
		}

		.editor-styles-wrapper p, .editor-styles-wrapper li, .editor-styles-wrapper td, .editor-styles-wrapper th {
			color: <?php echo get_option('content_colors') ?>;
		}

		[data-widget-area-id="footer"] {
			background: <?php echo get_option('footer_bg'); ?>;
		}

		[data-widget-area-id="sidebar-2"], [data-widget-area-id="sidebar-1"] {
			background: <?php echo get_option('sidebar_bg');?>;
		}
		[data-widget-area-id="popup-1"] {
			background: #fff;
		}
		[data-widget-area-id="header-1"] {
			background: <?php echo get_option('header_bg'); ?>;
		}
		[data-widget-area-id="mobile-menu-1"] {
			background: <?php echo get_option('mobile_menu_bg') ?>
		}
		.wp-block[data-type="core/widget-area"] {
			max-width: 100%;
		}

		.blocks-widgets-container .editor-styles-wrapper {
			max-width: 100%;
		}
	</style>
	<?php
});

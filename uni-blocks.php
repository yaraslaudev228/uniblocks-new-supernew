<?php
/**
 * Plugin Name:       Our Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       our-blocks
 *
 * @package CreateBlock
 */

if ( !defined('ABSPATH') ) {
	exit; // Exit if accessed directly.
}

define("MEMCACHED_HOST", "memcached");

if ( !function_exists('mass_require') ) {
	function mass_require( $path )
	{

		$files = glob($path);

		if ( $files ) {
			foreach ($files as $file) {
				require_once $file;
			}
		}
	}
}

if ( function_exists('mass_require') ) {

	mass_require(plugin_dir_path(__FILE__) . 'actions/*.php');
	mass_require(plugin_dir_path(__FILE__) . 'customFields/*.php');
	mass_require(plugin_dir_path(__FILE__) . 'render/*.php');
}
add_action('wp_enqueue_scripts', function () {
	wp_enqueue_script('lazysizes', plugin_dir_url(__FILE__) . 'assets/js/lazy-load.js', [], null, true);

});
add_action('after_setup_theme', function () {
	add_action('admin_enqueue_scripts', function () {
		wp_enqueue_style('blocks-style', plugin_dir_url(__FILE__) . '/adminStyles/style.css');
	});

	add_action('widgets_init', 'uni_register_sidebar');
	function uni_register_sidebar()
	{
		register_sidebar([
			'name' => sprintf(__('Header %d'), 1),
			'id' => 'header-1',
			'before_widget' => '<div id="%1$s" class="uni_header_widget %2$s">',
			'after_widget' => "</div>\n",
			'before_title' => '<div class="widgettitle">',
			'after_title' => "</div>\n",
		]);

		register_sidebar([
			'name' => sprintf(__('Mobile-menu %d'), 1),
			'id' => 'mobile-menu-1',
			'before_widget' => '<div id="%1$s" class="mobile-menu-widget %2$s">',
			'after_widget' => "</div>\n",
			'before_title' => '<div class="widgettitle">',
			'after_title' => "</div>\n",
		]);


		register_sidebar(array(
			'name' => sprintf(__('Sidebar %d'), 1),
			'id' => "sidebar-1",
			'description' => '',
			'class' => '',
			'before_widget' => '<div id="%1$s" class="uni_widget_left_sidebar %2$s">',
			'after_widget' => "</div>\n",
			'before_title' => '<div class="widgettitle">',
			'after_title' => "</div>\n",

		));

		register_sidebar(array(
			'name' => sprintf(__('Sidebar %d'), 2),
			'id' => "sidebar-2",
			'description' => '',
			'class' => '',
			'before_widget' => '<div id="%1$s" class="uni_widget_right_sidebar %2$s">',
			'after_widget' => "</div>\n",
			'before_title' => '<div class="widgettitle">',
			'after_title' => "</div>\n",

		));

		register_sidebar(array(
			'name' => sprintf(__('Burger %d'), 1),
			'id' => "burger-1",
			'description' => '',
			'class' => '',
			'before_widget' => '<div id="%1$s" class="uni_widget_burger_sidebar %2$s">',
			'after_widget' => "</div>\n",
			'before_title' => '<div class="widgettitle">',
			'after_title' => "</div>\n",

		));


		register_sidebar(
			array(
				'name' => sprintf(__('Footer %d'), 1),
				'id' => "footer",
				'description' => '',
				'class' => '',
				'before_widget' => '<div id="%1$s" class="uni_widget_footer %2$s">',
				'after_widget' => "</div>\n",
				'before_title' => '<div class="widgettitle">',
				'after_title' => "</div>\n",

			)
		);

		register_sidebar(
			array(
				'name' => sprintf(__('page404 %d'), 1),
				'id' => "page404",
				'description' => '',
				'class' => '',
				'before_widget' => '<div id="%1$s" class="uni_widget_404 %2$s">',
				'after_widget' => "</div>\n",
				'before_title' => '<div class="widgettitle">',
				'after_title' => "</div>\n",
			)
		);
	}

});

function uni_theme_blocks_categories( $block_categories, $editor_context )
{
	$block_categories[] = array(
		'slug' => 'unitheme',
		'title' => __('N1 Unitheme blocks', 'unitheme'),
		'icon' => null,
	);

	$block_categories[] = array(
		'slug' => 'unicollections',
		'title' => __('N1 Unitheme Collections', 'unitheme'),
		'icon' => null,
	);

	return $block_categories;
}

add_filter('block_categories_all', 'uni_theme_blocks_categories', 10, 2);

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function uni_blocks_uni_blocks_block_init()
{
	register_block_type(__DIR__ . '/build/promo');
	register_block_type(__DIR__ . '/build/posts', [
		'render_callback' => 'render_slots_callback'
	]);
	register_block_type(__DIR__ . '/build/postsSwiper', [
		'render_callback' => 'render_slots_swiper_callback'
	]);
	register_block_type(__DIR__ . '/build/promoColumn');

	register_block_type(__DIR__ . '/build/faq');
	register_block_type(__DIR__ . '/build/topBanner');
	register_block_type(__DIR__ . '/build/contactForm');
	register_block_type(__DIR__ . '/build/burgerMenu');
	register_block_type(__DIR__ . '/build/blockWinners');
	register_block_type(__DIR__ . '/build/bannerWithForm');
	register_block_type(__DIR__ . '/build/langsDropdown');
	register_block_type(__DIR__ . '/build/footerProviders');
	register_block_type(__DIR__ . '/build/menuBlock');
	register_block_type(__DIR__ . '/build/blockTournaments');
	register_block_type(__DIR__ . '/build/blockPopUp');
	register_block_type(__DIR__ . '/build/blockCollections');
	register_block_type(__DIR__ . '/build/sportsBlockSlider',[
		'render_callback' => 'render_sports_block_slider_callback'
	]);
	register_block_type(__DIR__ . '/build/sportsInplay', [
		'render_callback' => 'render_sports_inplay_callback'
	]);
	register_block_type(__DIR__ . '/build/footerProviderSlider');
	register_block_type(__DIR__ . '/build/blockProsCons');
	register_block_type(__DIR__ . '/build/sportsMenu');
	register_block_type(__DIR__ . '/build/betSlipBlock');
	register_block_type(__DIR__ . '/build/multiIcons');
	register_block_type(__DIR__ . '/build/collections/bannerWithHeaderCollection');
	register_block_type(__DIR__ . '/build/collections/headerCollection');
	register_block_type(__DIR__ . '/build/collections/headerCollectionLogoCenter');
	register_block_type(__DIR__ . '/build/collections/bodyBannerWithSlotsCollection');
	register_block_type(__DIR__ . '/build/collections/sidebarLukkiCollection');
	register_block_type(__DIR__ . '/build/collections/slotsPackCollection');
	register_block_type(__DIR__ . '/build/collections/headerCollectionWithBurger');
	register_block_type(__DIR__ . '/build/collections/footerCollection');
	register_block_type(__DIR__ . '/build/collections/footerRowCollection');
	register_block_type(__DIR__ . '/build/collections/footerTwoRowsCollection');
	register_block_type(__DIR__ . '/build/collections/footerBetCollection');
	register_block_type(__DIR__ . '/build/collections/categoriesCollection');
	register_block_type(__DIR__ . '/build/containerBlock');
	register_block_type(__DIR__ . '/build/reviewsBlock', [
		'render_callback' => 'render_reviews_block_callback'
	]);
	register_block_type(__DIR__ . '/build/swiperBanner', [
		'render_callback' => 'render_swiper_banner_block'
	]);
	register_block_type(__DIR__ . '/build/mobileMenuBlock');
	register_block_type(__DIR__ . '/build/mobileMenuClose');
	register_block_type(__DIR__ . '/build/singleHeader');
	register_block_type(__DIR__ . '/build/jooPromotions');
	register_block_type(__DIR__ . '/build/mini_form');
	register_block_type(__DIR__ . '/build/promo-slider');
	register_block_type(__DIR__ . '/build/rocket-block');
	register_block_type(__DIR__ . '/build/sport-slider', [
		'render_callback' => 'render_sport_slider_callback'
	]);
	register_block_type(__DIR__ . '/build/ann-promo-slider', [
		'render_callback' => 'render_ann_promo_slider'
	]);


}


add_action('init', 'uni_blocks_uni_blocks_block_init');

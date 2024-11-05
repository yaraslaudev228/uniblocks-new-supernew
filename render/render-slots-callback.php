<?php


function render_slots_callback( $attributes, $content )
{
	ob_start();
	if ( class_exists('Memcached') ) {
		$mc = new App\Memcached\MemCached();
		$cache_key = '_slots_grid_' . md5(serialize($attributes));
		$mc->delete($cache_key);
		$cached_output = $mc->get($cache_key);
		if ( $cached_output ) {
			return $cached_output;
		}
	}
 
	$slots = $attributes['slots'];
	$blockPropsClass = 'wp-block-uni-slots uni_slots';
	$blockPropsStyle = sprintf(
		'display: grid; grid-template-columns: repeat(%d, 1fr); gap: %s;',
		$attributes['slotsPerRow'],
		$attributes['slotsGap']
	);

	?>
	<div class="<?php echo esc_attr($blockPropsClass); ?>" style="<?php echo esc_attr($blockPropsStyle); ?>">
		<?php foreach ($slots as $index => $slot) :
			?>
			<div class="uni_slot swiper-slide">
				<div class="uni_slot__image"
				     style="height: <?php echo esc_attr($attributes['slotsImageHeight']); ?>; border-radius: <?php echo esc_attr($attributes['slotsBorderRadius']); ?>;"
				     title="<?php echo esc_attr($slot['title']); ?>">
					<img class="lazyload slot__image" data-src="<?php echo esc_url($slot['image']); ?>" alt=""
					     style="border-radius: <?php echo esc_attr($attributes['slotsBorderRadius']); ?>">
					<div class="uni_slot__overlay uni_banner__overlay"
					     style="border-radius: <?php echo esc_attr($attributes['slotsBorderRadius']); ?>;"></div>
					<div class="uni_slot__caption">
						<?php if ( !$attributes['isTitleUnderImage'] ) : ?>
							<a href="<?php echo esc_url($slot['url']); ?>"
							   class="uni_slot__title"><?php echo esc_html($slot['title']); ?></a>
						<?php endif; ?>
						<a href="/goto" class="uni_slot__play"
						   style="background: <?php echo esc_attr($attributes['playBtnBackground']); ?>;">
							<i class="fa fa-play"></i>
						</a>
						<a href="<?php echo esc_url($slot['url']); ?>"
						   style="color: <?php echo esc_attr($attributes['slotsInnerTextColor']); ?>;">
							<?php echo esc_html($attributes['demoText']); ?>
						</a>
					</div>
				</div>
				<?php if ( $attributes['isTitleUnderImage'] ) : ?>
					<a href="<?php echo esc_url($slot['url']); ?>"
					   class="uni_slot__title"><?php echo esc_html($slot['title']); ?></a>
				<?php endif; ?>
			</div>
		<?php endforeach; ?>
	</div>

	<?php
	if ( isset($attributes['mediaQueries']) ) { ?>
		<style>
			.uni_slots {
			<?php
					 foreach($attributes['mediaQueries'] as $query) { ?>
			@media (max-width: <?php echo $query['query'] ?>px) {
				grid-template-columns: repeat(<?php echo $query['size'] ?>, 1fr) !important;
			} <?php
			} ?>
			}
		</style>
		<?php
	}
	$output = ob_get_clean();
	if ( class_exists('Memcached') ) {
		$mc->set($cache_key, $output, 1 * HOUR_IN_SECONDS);
	}

	return $output;
}
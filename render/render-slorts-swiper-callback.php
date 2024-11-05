<?php
function render_slots_swiper_callback( $attributes, $content )
{
	if(class_exists('MemCached')) {
	$mc = new App\Memcached\MemCached();
	$cache_key = '_slots_swiper_' . md5(serialize($attributes));
	$cached_output = $mc->get($cache_key);
		if ( $cached_output ) {
			return $cached_output;
		}
	}

	ob_start();
	$slots = $attributes['slots'];
	$blockPropsId = 'uni_slots-' . $attributes['slotsPerRow'];
	$blockPropsDataCount = $attributes['slotsPerRow'];
	$blockPropsDataSpace = $attributes['slotsGap'];

	?>
	<div id="<?php echo esc_attr($blockPropsId); ?>" class="uni_slots__swiper uni_slots swiper"
	     data-count="<?php echo esc_attr($blockPropsDataCount); ?>"
	     data-space="<?php echo esc_attr($blockPropsDataSpace); ?>">
		<div class="swiper-wrapper">
			<?php foreach ($slots as $index => $slot) :

				?>
				<div class="uni_slot swiper-slide">
					<div class="uni_slot__image lazyload"
					     style="height: <?php echo esc_attr($attributes['slotsImageHeight']); ?>;
						     border-radius: <?php echo esc_attr($attributes['slotsBorderRadius']); ?>;"
					     title="<?php echo esc_attr($slot['title']); ?>">
						<img data-src="<?php echo esc_url($slot['image']); ?>"
						     style="border-radius: <?php echo esc_attr($attributes['slotsBorderRadius']); ?>;"
						     class="slot__image lazyload" alt="<?php echo esc_attr($slot['title']); ?>"/>
						<div class="uni_slot__overlay uni_banner__overlay"
						     style="border-radius: <?php echo esc_attr($attributes['slotsBorderRadius']); ?>;"></div>
						<div class="uni_slot__caption">
							<?php if ( !$attributes['isTitleUnderImage'] ) : ?>
								<a href="#"
								   style="color: <?php echo esc_attr($attributes['slotsTitleColor'] ?? $attributes['slotsInnerTextColor']); ?>"
								   class="uni_slot__title"><?php echo esc_html($slot['title']); ?></a>
							<?php endif; ?>
							<a href="/goto" class="uni_slot__play"
							   style="background: <?php echo esc_attr($attributes['playBtnBackground']); ?>;">
								<i class="fa fa-play"></i>
							</a>
							<a href="<?php echo esc_url($slot['url']); ?>"
							   style="color: <?php echo esc_attr($attributes['slotsInnerTextColor']); ?>">
								<?php echo esc_html($attributes['demoText']); ?>
							</a>
						</div>
					</div>
					<?php if ( $attributes['isTitleUnderImage'] ) : ?>
						<a href="<?php echo esc_url($slot['url']); ?>"
						   style="color: <?php echo esc_attr($attributes['slotsTitleColor']); ?>"
						   class="uni_slot__title"><?php echo esc_html($slot['title']); ?></a>
					<?php endif; ?>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
	<?php
	$output = ob_get_clean();
	if(class_exists('Memcached')) {
		$mc->set($cache_key, $output, 1 * HOUR_IN_SECONDS);
	}

	return $output;
}
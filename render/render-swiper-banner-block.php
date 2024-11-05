<?php
function countClampValue( $value )
{
	return ( (int)$value - ( (int)$value / 100 * 20 ) ) . 'px';
}

function get_flex_alignment( $alignment )
{

	switch ($alignment) {
		case "left" :
			$alignment = "flex-start";
			break;
		case "right" :
			$alignment = "flex-end";
			break;
		default:
			$alignment = "center";
	}

	return $alignment; // замените на вашу логику
}

function render_swiper_banner_block( $attributes, $content )
{
	ob_start();
	$titleFontSize = countClampValue($attributes['titleFontSize']);
	$descriptionFontSize = countClampValue($attributes['descriptionFontSize']);
	?>
	<section <?php echo get_block_wrapper_attributes(); ?>>
		<div class="uni_bannerSwiper swiper" data-height="<?php echo esc_attr($attributes['blockHeightMobile']); ?>"
		     style="height: <?php echo esc_attr($attributes['blockHeight']); ?>;">
			<div class="swiper-wrapper">
				<?php foreach ($attributes['banners'] as $index => $item) : ?>
					<div class="bannerImage swiper-slide" style="
						align-items: flex-start;
						background-position: center;
						border-radius: <?php echo esc_attr($attributes['bannerBorderRadius']); ?>;
						border: <?php echo isset($attributes['bannerBorder']) && isset($attributes['bannerBorder']['color']) && $attributes['bannerBorder']['style']  ? esc_attr("{$attributes['bannerBorder']['width']} {$attributes['bannerBorder']['color']} {$attributes['bannerBorder']['style']}") : '0'; ?>;
						height: <?php echo esc_attr($attributes['blockHeight']); ?>;"
					     key="<?php echo $index; ?>" data-height="<?php echo esc_attr($attributes['blockHeightMobile']); ?>">
						<?php if ( !$item['title'] && !$item['description'] && !$item['button'] && !$item['content_after_button'] ) : ?>
							<a href="/goto" target="<?php echo esc_attr($attributes['target']); ?>" class="overlayButton"></a>
						<?php endif; ?>
						<picture class="imageOverlay lazyload"
						         style="border-radius: <?php echo esc_attr($attributes['bannerBorderRadius']); ?>;">
							<?php if ( $item['mobileImage'] ) : ?>
								<source media="(max-width: 768px)" srcset="<?php echo esc_url($item['mobileImage']['url']); ?>">
							<?php endif; ?>
							<img style="border-radius: <?php echo esc_attr($attributes['bannerBorderRadius']); ?>;"
							     data-src="<?php echo esc_url($item['image']['url']); ?>" class="lazyload" alt="">
						</picture>
						<div class="caption" style="
							align-items: <?php echo esc_attr(get_flex_alignment($attributes['captionAlign'])); ?>;
							gap: <?php echo esc_attr($attributes['captionGap']); ?>;
							text-align: <?php echo esc_attr($attributes['captionAlign']); ?>;
							padding: <?php echo esc_attr("{$attributes['captionPaddingY']} {$attributes['captionPaddingX']}"); ?>;
							max-width: <?php echo $attributes['captionMaxWidth'] ?? '' ?>;
							margin: <?php echo isset($attributes['captionMaxWidth']) ? '0 auto' : ''; ?>;">
							<?php if ( $item['title'] ) : ?>
								<div class="title"
								     style="color: <?php echo esc_attr($attributes['titleColor']); ?>; font-size: clamp(<?php echo esc_attr($titleFontSize); ?>, 1vw, <?php echo esc_attr($attributes['titleFontSize']); ?>);">
									<?php echo esc_html($item['title']); ?>
								</div>
							<?php endif; ?>
							<?php if ( $item['description'] ) : ?>
								<div class="description"
								     style="color: <?php echo esc_attr($attributes['descriptionColor']); ?>; font-size: clamp(<?php echo esc_attr($descriptionFontSize); ?>, 1vw, <?php echo esc_attr($attributes['descriptionFontSize']); ?>);">
									<?php echo esc_html($item['description']); ?>
								</div>
							<?php endif; ?>
							<?php if ( $item['button'] ) : ?>
								<a class="btn" href="/goto" target="<?php echo esc_attr($attributes['target'] ?? ''); ?>" style="
									border-radius: <?php echo esc_attr($attributes['buttonBorderRadius']); ?>;
									color: <?php echo esc_attr($attributes['buttonColor']); ?>;
									background: <?php echo esc_attr($attributes['buttonBackground']); ?>;
									padding: <?php echo esc_attr("{$attributes['buttonPaddingY']} {$attributes['buttonPaddingX']}"); ?>;">
									<?php echo esc_html($item['button']); ?>
								</a>
							<?php endif; ?>
							<?php if ( $item['content_after_button'] ) : ?>
								<div class="content_after_button"
								     style="color: <?php echo esc_attr($attributes['contentAfterColor']); ?>; font-size: <?php echo esc_attr($attributes['contentMoreFontSize']); ?>;">
									<?php echo esc_html($item['content_after_button']); ?>
								</div>
							<?php endif; ?>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
	<?php
	return ob_get_clean();
}
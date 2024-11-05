<?php

function render_ann_promo_slider($attributes, $content) {
	ob_start();

	$promotions = $attributes['items'] ?? [];

	?>

	<div class="swiper ann-promotions-swiper">
	<div class="swiper-wrapper">

	<?php
		foreach($promotions as $promotion) {
			$parentStyles = 'background: url(' .  ($promotion['img']['url'] ?? '') . ') no-repeat;';
			$parentStyles.= 'background-size: cover;';
			$parentStyles.= 'border-radius:' . $attributes['blocksBorderRadius'] . ';';
			$parentStyles.= 'height: ' . $attributes['blocksHeight'] . ';';

			// var_dump($parentStyles);
	?>

		<div class="swiper-slide" style="<?php echo $parentStyles ?>">
			<div><?php echo $promotion['title'] ?></div>
		</div>

	<?php
		}
	?>
		
	</div>
	</div>

	<?

	return ob_get_clean();
}

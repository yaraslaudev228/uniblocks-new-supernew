<?php
function render_sports_block_slider_callback( $attributes, $content )
{
	if(class_exists('Memcached')) {
		$mc = new \App\Memcached\MemCached();
		$cache_key = '_sport_slider_' . md5(serialize($attributes));
		$cached_output = $mc->get($cache_key);
		if ( $cached_output ) {
			return $cached_output;
		}
	}

	ob_start();
	$date_now = date('Y-m-d', time() - 86400 * 3);
	$date_after = date('Y-m-d', time() + 86400 * 3);
	$request_url = "https://n1bet.com/api/v2/matches?bettable=true&limit=10&match_status=1&match_status=0&sort_by=tournament.priority%3Aasc&sort_by=start_time%3Aasc&sort_by=bets_count%3Adesc&sport_type=regular&start_from=" . $date_now . "T11%3A16%3A55.512Z&start_to=" . $date_after . "T11%3A16%3A55.512Z";
	$response = wp_remote_get($request_url, [
		'timeout' => 150
	]);
	$response_code = wp_remote_retrieve_response_code($response);
	if ( $response_code === 200 ) {
		$attributes['sportsData'] = json_decode(wp_remote_retrieve_body($response), true, 512, JSON_THROW_ON_ERROR);
	} ?>
	<div class="uni_sports_swiper swiper" data-count="<?php echo esc_attr($attributes['slidesCount']); ?>">
		<div class="swiper-wrapper">
			<?php foreach ($attributes['sportsData']['data'] as $index => $item) : ?>
				<div class="uni_sports_item swiper-slide"
				     style="background: <?php echo esc_attr($attributes['itemBackground']); ?>; border-radius: <?php echo esc_attr($attributes['itemBorderRadius']); ?>px;"
				>
					<div class="item_head"
					     style="background: <?php echo esc_attr($attributes['itemHeaderBackground']); ?>; color: <?php echo esc_attr($attributes['itemHeaderColor']); ?>;">
						<div class="tournament"><?php echo esc_html($item['tournament']['name']); ?></div>
						<div class="start"><?php echo esc_html(formatDate($item['start_time'])); ?></div>
					</div>
					<div class="item_body">
						<!-- Home competitor -->
						<div class="competitor">
							<?php if ( !empty($item['competitors']['home']['logo']) ) : ?>
								<div class="logo"
								     style="background: <?php echo esc_attr($attributes['homeCompetitorBackground']); ?> url(<?php echo esc_url($item['competitors']['home']['logo']); ?>) no-repeat center center; background-size: contain;"></div>
							<?php endif; ?>
							<div class="name"
							     style="color: <?php echo esc_attr($attributes['fontColor']); ?>;"><?php echo esc_html($item['competitors']['home']['name']); ?></div>
						</div>
						<!-- Away competitor -->
						<div class="competitor">
							<?php if ( !empty($item['competitors']['away']['logo']) ) : ?>
								<div class="logo"
								     style="background: <?php echo esc_attr($attributes['awayCompetitorBackground']); ?> url(<?php echo esc_url($item['competitors']['away']['logo']); ?>) no-repeat center center; background-size: contain;"></div>
							<?php endif; ?>
							<div class="name"
							     style="color: <?php echo esc_attr($attributes['fontColor']); ?>;"><?php echo esc_html($item['competitors']['away']['name']); ?></div>
						</div>
					</div>
					<div class="item_footer">
						<?php if ( !empty($item['main_market']['outcomes']) ) : ?>
							<?php foreach ($item['main_market']['outcomes'] as $key => $outcome) : ?>
								<div class="outcome"
								     style="background: <?php echo esc_attr($attributes['itemOutcomeBackground']); ?>; color: <?php echo esc_attr($attributes['outcomeColor']); ?>; border-radius: <?php echo esc_attr($attributes['outcomesBorderRadius']); ?>px;">
									<span
										class="outcome_name"><?php echo esc_html($outcome['name'] === 'draw' ? 'X' : $outcome['name']); ?>:</span>
									<span
										class="outcome_odds"><strong><?php echo esc_html($outcome['odds'] ? $outcome['odds'] / 1000 : ''); ?></strong></span>
								</div>
							<?php endforeach; ?>
						<?php endif; ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
	<?php
	$output = ob_get_clean();
	if(class_exists('Memcached')) {
		$mc->set($cache_key, $output, 2 * HOUR_IN_SECONDS);
	}
	return $output;
}


function formatDate( $timestamp )
{
	return date('d M Y', strtotime($timestamp));
}
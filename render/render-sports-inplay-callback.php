<?php
function render_sports_inplay_callback( $attributes, $content )
{
	ob_start();

	$attributes['sportsData'] = get_transient('_sports_inplay');
	if(!$attributes['sportsData']) {
		$request_url = "https://n1bet.com/api/v2/matches?bettable=true&limit=15&match_status=1&max_per_sport=5&sort_by=tournament.sport.priority%3Aasc&sort_by=tournament.sport.id%3Aasc&sort_by=start_time%3Aasc&sport_type=regular&type=match";
		$response = wp_remote_get($request_url, [
			'timeout' => 150
		]);
		$response_code = wp_remote_retrieve_response_code($response);
		if ( $response_code === 200 ) {
	     $attributes['sportsData'] = json_decode(wp_remote_retrieve_body($response), true, 512, JSON_THROW_ON_ERROR);
			 set_transient('_sports_inplay', $attributes['sportsData'], 2 * HOUR_IN_SECONDS);

		}
	}

	?>
	<div <?php echo get_block_wrapper_attributes(); ?>>
		<?php foreach ($attributes['sportsData']['data'] as $index => $item) : ?>
			<div class="match match-row"
			     style="background: <?php echo esc_attr($attributes['matchRowBackground']); ?>;">
				<div class="match-header match-row__header"
				     style="background: <?php echo esc_attr($attributes['matchRowHeaderBackground']); ?>;">
					<div class="row-first">
						<a href="/goto" class="cup"
						   style="color: <?php echo esc_attr($attributes['matchTournamentNameColor']); ?>;">
							<?php echo esc_html($item['tournament']['name']); ?>
						</a>
						<div class="competitors"></div>
						<div class="score"></div>
					</div>
					<div class="icon-market"></div>
					<div class="row-outcomes">
						<div class="market outcomes__market header-outcomes__market">
							<div class="outcome">1</div>
							<div class="outcome">X</div>
							<div class="outcome">2</div>
						</div>
						<div class="market outcomes__market">
							<div class="outcome secondary-outcome"><?php echo esc_html($attributes['under']); ?></div>
							<div class="outcome secondary-outcome"><?php echo esc_html($attributes['total']); ?></div>
							<div class="outcome secondary-outcome"><?php echo esc_html($attributes['over']); ?></div>
						</div>
					</div>
					<div class="avialable-markets"></div>
				</div>
				<div class="match-body">
					<div class="row-first">
						<div class="time">
							<?php echo !empty($item['statistics']['clock']['match_time']) ? esc_html($item['statistics']['clock']['match_time']) : ''; ?>
						</div>
						<div class="competitors">
							<div class="home competitors__home">
								<a href="/goto" class="wrap">
									<span class="logo"
									      style="background: <?php echo !empty($item['competitors']['home']['logo']) ? '#222 url(' . esc_url($item['competitors']['home']['logo']) . ') no-repeat center center' : '#222'; ?>; background-size: contain;"></span>
									<span class="name comp__name"
									      style="color: <?php echo esc_attr($attributes['matchCompetitorsColor']); ?>;">
                                        <?php echo esc_html($item['competitors']['home']['name']); ?>
                                    </span>
								</a>
								<div class="score">
									<?php if ( !empty($item['statistics']['period_score']) ) {
										foreach ($item['statistics']['period_score'] as $key => $score) {
											echo '<span class="per-score"  >' . esc_html($score['home']) . '</span>';
										}
									} ?>
									<span class="total-score">
                                        <?php echo !empty($item['statistics']['total_score']['home']) ? esc_html($item['statistics']['total_score']['home']) : ''; ?>
                                    </span>
								</div>
							</div>
							<div class="away competitors__away">
								<a href="/goto" class="wrap">
									<span class="logo"
									      style="background: <?php echo !empty($item['competitors']['away']['logo']) ? '#efefef url(' . esc_url($item['competitors']['away']['logo']) . ') no-repeat center center' : '#efefef'; ?>; background-size: contain;"></span>
									<span class="name comp__name"
									      style="color: <?php echo esc_attr($attributes['matchCompetitorsColor']); ?>;">
                                        <?php echo esc_html($item['competitors']['away']['name']); ?>
                                    </span>
								</a>
								<div class="score">
									<?php if ( !empty($item['statistics']['period_score']) ) {
										foreach ($item['statistics']['period_score'] as $key => $score) {
											echo '<span class="per-score">' . esc_html($score['away']) . '</span>';
										}
									} ?>
									<span class="total-score">
                                        <?php echo !empty($item['statistics']['total_score']['away']) ? esc_html($item['statistics']['total_score']['away']) : ''; ?>
                                    </span>
								</div>
							</div>
						</div>
					</div>
					<div class="icon-market">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						     class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
							<path
								d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
						</svg>
					</div>
					<div class="row-outcomes">
						<div class="market outcomes__market">
							<?php if ( !empty($item['main_market']['outcomes']) ) {
								foreach ($item['main_market']['outcomes'] as $key => $outcome) {
									echo '<div class="outcome" style="background: ' . esc_attr($attributes['matchOutcomeBackground']) . '; color: ' . esc_attr($attributes['matchOutcomesColor']) . ';">
                                        <a href="/goto" style="color: ' . esc_attr($attributes['matchOutcomesColor']) . ';">
                                            ' . esc_html((int)$outcome['odds'] / 1000) . '
                                        </a>
                                    </div>';
								}
							} ?>
						</div>
						<div class="market outcomes__market">
							<?php if ( !empty($item['secondary_market']['outcomes']) ) {
								foreach ($item['secondary_market']['outcomes'] as $key => $outcome) {
									echo '<div class="outcome secondary-outcome" style="background: ' . esc_attr($attributes['matchOutcomeBackground']) . '; color: ' . esc_attr($attributes['matchOutcomesColor']) . ';">
                                        <a href="/goto" style="color: ' . esc_attr($attributes['matchOutcomesColor']) . ';">
                                            ' . esc_html((int)$outcome['odds'] / 1000) . '
                                        </a>
                                    </div>';
								}
							} ?>
						</div>
					</div>
					<div class="avialable-markets" style="color: <?php echo esc_attr($attributes['matchMarketsColor']); ?>;">
						<?php echo esc_html($item['available_markets']); ?>
					</div>
				</div>
				<a href="/goto"
				   style="background: <?php echo esc_attr($attributes['matchShowTopMarketsBackground']); ?>; color: <?php echo esc_attr($attributes['matchShowTopMarketsColor']); ?>;"
				   class="match-btn show-top-markets"><?php echo esc_html($attributes['showTopMarkets']); ?></a>
			</div>
		<?php endforeach; ?>
	</div>
	<?php
	return ob_get_clean();
}
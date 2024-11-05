<?php
function render_sport_slider_callback( $attributes, $content )
{
	if ( class_exists('Memcached') ) {
		$mc = new \App\Memcached\MemCached();
		$cache_key = '_sport_slider' . md5(serialize($attributes));
		$cached_output = $mc->get($cache_key);

		if ( $cached_output ) {
			return $cached_output;
		}
	}
	ob_start();
	$username = 'admin';
	$password = 'MinskSeo';
	$credentials = base64_encode($username . ':' . $password);
	$sports = wp_remote_get(site_url() . '/wp-admin/admin-ajax.php?action=uni_get_sports_for_swiper', [
		'headers' => [
			'Authorization' => 'Basic ' . $credentials
		]
	]);
	$response_code = wp_remote_retrieve_response_code($sports);
	if ( $response_code === 200 ) {
		$sports = wp_remote_retrieve_body($sports);
		$sports = json_decode($sports, false, 512, JSON_THROW_ON_ERROR);
	}

	if ( property_exists($sports, 'data') ) { ?>
		<section class="uni__sports-fullwidth">
			<?php
			foreach ($sports->data as $sport) {
				?>
				<div class="sport"
				     style="background: <?php echo $attributes['itemBackground'] ?? '' ?>;
					     color: <?php echo $attributes['itemHeaderColor'] ?? '' ?>;
					     border-radius: <?php echo $attributes['itemBorderRadius'] ?? '' ?>;">
					<div
						class="tournament"
						style="background: <?php echo $attributes['itemHeaderBackground'] ?? "" ?>;
							color: <?php echo $attributes['itemHeaderColor'] ?? ''; ?>;
							border-radius: <?php echo isset($attributes['itemBorderRadius']) ? $attributes['itemBorderRadius'] . ' ' . $attributes['itemBorderRadius'] . ' 0 ' . ' 0' : '0' ?> ;
							">
						<a href="/goto" class="name" style="color: <?php echo $attributes['itemHeaderColor'] ?? '' ?>;">
							<svg class="media-item media-item--icon"
							     fill="<?php echo $attributes['itemHeaderColor'] ?? '' ?>"
							     width="16" height="16"
							>
								<use href="#<?php echo $sport->tournament->sport->name ?>"/>
							</svg> <?php echo $sport->tournament->name ?></a>
						<div class="date"><?php
							$date = new DateTime($sport->start_time);
							echo $date->format('d M y');
							?></div>
					</div>
					<a href="/goto" class="image">
						<?php
						$int = random_int(1, 4);
						if ( file_exists(get_template_directory() . '/assets/img/' . strtolower($sport->tournament->sport->name) . '-' . $int . '.jpg') ) {
							?>
							<img
								src="<?php echo get_template_directory_uri() . '/assets/img/' . strtolower($sport->tournament->sport->name) . '-' . $int . '.jpg' ?>"
								width="100%" height="200" alt="">
							<?php
						}
						?>
					</a>
					<div class="body">
						<div class="competitor">
							<a href="/goto" class="logo"
							   style="background:<?php echo $sport->competitors->home->logo ? $attributes['homeCompetitorBackground'] . ' url(' . $sport->competitors->home->logo . ') no-repeat center center' : '' ?>;
								   background-size: contain;
								   ">
							</a>
							<a href="/goto" class="name"
							   style="color: <?php echo $attributes['itemHeaderColor'] ?? '' ?>;"><?php echo $sport->competitors->home->name ?></a>
						</div>
						<div class="competitor">
							<a href="/goto" class="logo"
							   style="background:<?php echo $sport->competitors->away->logo ? $attributes['awayCompetitorBackground'] . ' url(' . $sport->competitors->away->logo . ') no-repeat center center' : '' ?>;
								   background-size: contain;
								   ">
							</a>
							<a href="/goto" style="color: <?php echo $attributes['itemHeaderColor'] ?? '' ?>;"
							   class="name"><?php echo $sport->competitors->away->name ?>
							</a>
						</div>
					</div>
					<div class="footer">
						<?php
						if ( $sport->main_market->outcomes ) {
							foreach ($sport->main_market->outcomes as $outcome) {
								?>
								<div class="outcome__item"
								     style="background: <?php echo $attributes['itemOutcomeBackground'] ?? '' ?>;
									     color: <?php echo $attributes['outcomeColor'] ?? '' ?>;
									     border-radius: <?php echo $attributes['outcomesBorderRadius'] ?? '' ?>
									     ">
							<span class="outcome_name">
								<?php echo $outcome->name === 'draw' ? 'X' : $outcome->name; ?>
							</span>
									<span class="outcome_odds">
								<strong><?php echo $outcome->odds ? $outcome->odds / 1000 : "" ?></strong>
				      </span>
								</div>
								<?php
							}
						}
						?>
					</div>

				</div>
				<?php

			} ?>
		</section>
		<?php
	}
	$output = ob_get_clean();
	if ( class_exists('Memcached') ) {
		$mc->set($cache_key, $output, 2 * HOUR_IN_SECONDS);
	}
	return $output;
}

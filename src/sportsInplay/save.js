import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';


export default function save({attributes}) {
	const blockProps = useBlockProps.save();


	return (
		<div {...blockProps}>
			{
				attributes.sportsData.map((item, index) => (
					<div className="match match-row"
							 style={{
								 background: attributes.matchRowBackground
							 }}
							 key={index}>
						<div className="match-header match-row__header"
								 style={{
									 background: attributes.matchRowHeaderBackground
								 }}
						>
							<div className="row-first">
								<a href="#" className="cup" style={{
									color: attributes.matchTournamentNameColor
								}}>
									{item.tournament.name}</a>
								<div className="competitors"/>
								<div className="score"/>
							</div>
							<div className="icon-market"/>
							<div className="row-outcomes">

								<div className="market outcomes__market header-outcomes__market">
									<div className="outcome">1</div>
									<div className="outcome">X</div>
									<div className="outcome">2</div>
								</div>
								<div className="market outcomes__market">
									<div className="outcome secondary-outcome"
									>{attributes.under}
									</div>
									<div className="outcome secondary-outcome"
									>{attributes.total}
									</div>
									<div className="outcome secondary-outcome"
									>{attributes.over}
									</div>
								</div>

							</div>
							<div className="avialable-markets">
							</div>
						</div>
						<div className="match-body">
							<div className="row-first">
								<div className="time">
									{item.statistics.clock ? item.statistics.clock.match_time : ""}
								</div>

								<div className="competitors">
									<div className="home competitors__home">
										<a href="/goto" className="wrap">
											<span className="logo" style={{
												background: item.competitors.home.logo ? `#222 url(${item.competitors.home.logo}) no-repeat center center` : "#222",
												backgroundSize: "contain"
											}}/>
 											<span className="name comp__name"
														style={{
															color: attributes.matchCompetitorsColor
														}}
											>{
												item.competitors.home.name
											}</span>
										</a>
										<div className="score">
											{
												!item.statistics.period_score ? "" : item.statistics.period_score.map((score, key) => (
													<span className="per-score" key={key}>{score.home}</span>
												))
											}
											<span className="total-score">{
												!item.statistics.total_score ? "" : item.statistics.total_score.home
											}</span>
										</div>
									</div>
									<div className="away competitors__away">
										<a href="/goto" className="wrap">
											<span className="logo" style={{
												background: item.competitors.away.logo ? `#efefef url(${item.competitors.away.logo}) no-repeat center center` : "#efefef",
												backgroundSize: "contain"
											}}/>
											<span className="name comp__name" style={{
												color: attributes.matchCompetitorsColor
											}}>{
												item.competitors.away.name
											}</span>
										</a>
										<div className="score">
											{
												!item.statistics.period_score ? "" : item.statistics.period_score.map((score, key) => (
													<span className="per-score" key={key}>{score.away}</span>
												))
											}

											<span className="total-score">{
												!item.statistics.total_score ? "" : item.statistics.total_score.away
											}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="icon-market">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
										 className="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
									<path
										d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
								</svg>
							</div>
							<div className="row-outcomes">

								<div className="market outcomes__market">
									{
										!item.main_market ? "" : item.main_market.outcomes.map((outcome, key) => (
											<div className="outcome" style={
												{
													background: attributes.matchOutcomeBackground,
													color: attributes.matchOutcomesColor
												}
											}>
												<a href="/goto" style={{
													color: attributes.matchOutcomesColor
												}}>
													{
														outcome ? outcome.odds / 1000 : ""
													}</a>
											</div>
										))
									}
								</div>
								<div className="market outcomes__market">
									{
										!item.secondary_market ? "" : item.secondary_market.outcomes.map((outcome, key) => (
											<div className="outcome secondary-outcome" style={
												{
													background: attributes.matchOutcomeBackground,
													color: attributes.matchOutcomesColor
												}
											}>
												<a href="/goto" style={{
													color: attributes.matchOutcomesColor
												}}>
													{outcome ? outcome.odds / 1000 : ""}
												</a>
											</div>
										))
									}

								</div>
							</div>
							<div className="avialable-markets"
									 style={
										 {color: attributes.matchMarketsColor}
									 }
							>{
								item.available_markets ? item.available_markets : ""
							}</div>
						</div>

						<a href="/goto"
							 style={{
								 background: attributes.matchShowTopMarketsBackground,
								 color: attributes.matchShowTopMarketsColor
							 }}
							 className="match-btn show-top-markets">{attributes.showTopMarkets}</a>

					</div>
				))
			}
		</div>

	)

}

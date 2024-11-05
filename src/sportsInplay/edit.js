import {useBlockProps, InspectorControls, RichText} from '@wordpress/block-editor';
import './editor.scss';
import {useEffect} from "@wordpress/element";

import {
	PanelBody
} from "@wordpress/components";

import {
	SimpleColorSelector,

} from '../blocksRegularComponents'

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()

	useEffect(() => {
		jQuery(function ($) {
			$.get('/wp-admin/admin-ajax.php', {
				action: 'uni_get_inplay_sports'
			}).done(function (response) {
				const data = JSON.parse(response).data
				const newData = data.map((item) => {
					if (item.main_market && item.main_market.outcomes && item.main_market.outcomes.length === 2) {
						item.main_market.outcomes.splice(1, 0, {
							odds: ""
						})
					}
					if (item.secondary_market && item.secondary_market.outcomes.length === 2) {
						item.secondary_market.outcomes.splice(1, 0, {
							odds: ""
						})
					}
					return item
				})
				setAttributes({sportsData: newData})
			})
		})
	}, [])

	blockProps.className = blockProps.className + ' uni_sports_table'
	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						<h3>Color settings for matches</h3>
						{
							SimpleColorSelector(
								attributes.matchRowBackground,
								'matchRowBackground',
								setAttributes,
								'Match row background'
							)
						}
						{
							SimpleColorSelector(
								attributes.matchRowHeaderBackground,
								'matchRowHeaderBackground',
								setAttributes,
								'Match row header background'
							)
						}
						{
							SimpleColorSelector(
								attributes.matchTournamentNameColor,
								"matchTournamentNameColor",
								setAttributes,
								"Match Cup Name font color"
							)
						}

						{
							SimpleColorSelector(
								attributes.matchCompetitorsColor,
								'matchCompetitorsColor',
								setAttributes,
								'Match Competitors font color'
							)
						}

						{
							SimpleColorSelector(
								attributes.matchMarketsColor,
								'matchMarketsColor',
								setAttributes,
								'Match show markets counter'
							)
						}

					</PanelBody>
					<PanelBody>
						<h3>Match outcomes settings</h3>
						{
							SimpleColorSelector(
								attributes.matchOutcomeBackground,
								'matchOutcomeBackground',
								setAttributes,
								'Match outcome background'
							)
						}
						{
							SimpleColorSelector(
								attributes.matchOutcomesColor,
								'matchOutcomesColor',
								setAttributes,
								'Match outcomes font color'
							)
						}

					</PanelBody>
					<PanelBody>
						<h3>Show Top Markets Settings</h3>
						{
							SimpleColorSelector(
								attributes.matchShowTopMarketsBackground,
								'matchShowTopMarketsBackground',
								setAttributes,
								'Match Show Top Markets Background'
							)
						}
						{
							SimpleColorSelector(
								attributes.matchShowTopMarketsColor,
								'matchShowTopMarketsColor',
								setAttributes,
								"Match show top markets record color"
							)
						}
					</PanelBody>
				</InspectorControls>
			}
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
											 contentEditable={true}
											 onBlur={(e) => setAttributes({under: e.target.innerText})}
									>{attributes.under}
									</div>
									<div className="outcome secondary-outcome"
											 contentEditable={true}
											 onBlur={(e) => setAttributes({total: e.target.innerText})}
									>{attributes.total}
									</div>
									<div className="outcome secondary-outcome"
											 contentEditable={true}
											 onBlur={(e) => setAttributes({over: e.target.innerText})}
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
										<a href="#" className="wrap">
											<img src={item.competitors.home.logo} alt={item.competitors.home.name}/>
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
										<a href="#" className="wrap">
											<img src={item.competitors.away.logo} alt={item.competitors.away.name}/>
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

								<div className="market outcomes__market"
								>
									{
										!item.main_market  ? "" : item.main_market.outcomes.map((outcome, key) => (
											<div className="outcome" style={
												{
													background: attributes.matchOutcomeBackground,
													color: attributes.matchOutcomesColor
												}
											}>
												<a href="#" style={{
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
												<a href="#" style={{
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

						<a href="#"
							 style={{
								 background: attributes.matchShowTopMarketsBackground,
								 color: attributes.matchShowTopMarketsColor
							 }}
							 contentEditable={true}
							 onBlur={(e) => setAttributes({showTopMarkets: e.target.innerText})}
							 className="match-btn show-top-markets">{
							attributes.showTopMarkets
						}</a>

					</div>
				))
			}
		</div>

	);
}

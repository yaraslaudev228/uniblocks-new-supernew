import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';


export default function save({attributes}) {
	return;
	const blockProps = useBlockProps.save();

	const formatDate = (dateString) => {
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		const date = new Date(dateString);

		const day = date.getDate(); // Get the day as a number (1-31)
		const monthIndex = date.getMonth(); // Get the month as a number (0-11)
		const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

		return `${day} ${months[monthIndex]} ${year}`;
	}
	return (
		<div {...blockProps}>
			<div className={'uni_sports_swiper swiper'} data-count = {attributes.slidesCount}>
			<div className={'swiper-wrapper'}>
			{
				attributes.sportsData.map((item, index) => (
					<div className={'uni_sports_item swiper-slide'}
							 style={{
								 background: attributes.itemBackground,
								 borderRadius: attributes.itemBorderRadius
							 }}
							 key={index}>
						<div className="item_head" style={
							{
								background: attributes.itemHeaderBackground,
								color: attributes.itemHeaderColor
							}
						}>
							<div className="tournament">
								{item.tournament.name}
							</div>
							<div className="start">
								{formatDate(item.start_time)}
							</div>
						</div>

						<div className="item_body">
							<div className={'competitor'}>
								<div className="logo" style={{
									background: item.competitors.home.logo ? `${attributes.homeCompetitorBackground} url(${item.competitors.home.logo}) no-repeat center center` : "",
									backgroundSize: 'contain'
								}}>

								</div>
								<div className="name"
										 style={{
											 color: attributes.fontColor
										 }}>{item.competitors.home.name}</div>
							</div>

							<div className={'competitor'}>
								<div className="logo"
										 style={{
											 background: item.competitors.away.logo ? `${attributes.awayCompetitorBackground} url(${item.competitors.away.logo}) no-repeat center center` : "",
											 backgroundSize: 'contain'
										 }}
								>
								</div>
								<div className="name"
										 style={{
											 color: attributes.fontColor
										 }}
								>{item.competitors.away.name}</div>
							</div>

						</div>
						<div className="item_footer">
							{
								!item.main_market.outcomes ? "" : item.main_market.outcomes.map((outcome, key) => (
									<div className={"outcome"} key={key} style={{
										background: attributes.itemOutcomeBackground,
										color: attributes.outcomeColor,
										borderRadius: attributes.outcomesBorderRadius
									}}>
										<span className="outcome_name">{outcome.name === 'draw' ? 'X' : outcome.name}:</span>
										<span className="outcome_odds"><strong>{outcome.odds ? outcome.odds / 1000 : ''}</strong>
										</span>
									</div>
								))
							}
						</div>
					</div>
				))
			}
			</div>
		</div>
		</div>
	)

}

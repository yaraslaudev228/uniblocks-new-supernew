import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import './editor.scss';

import {
	PanelBody
} from "@wordpress/components";
import {useEffect} from "@wordpress/element";
import {
	SimpleColorSelector,
	SimpleAlignmentSelector,
	SimpleAttributeSet,
	SimpleMediaUpload,
	SimpleBorderControl,
	SimpleHeightControl
} from '../blocksRegularComponents'

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()

	useEffect(() => {
		jQuery(function ($) {
			$.get('/wp-admin/admin-ajax.php', {
				action: 'uni_get_sports_for_swiper'
			}).done(function (response) {
				const data = JSON.parse(response).data
				setAttributes({sportsData: data})
			})
		})
	}, [])


	const formatDate = (dateString) => {
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		const date = new Date(dateString);

		const day = date.getDate(); // Get the day as a number (1-31)
		const monthIndex = date.getMonth(); // Get the month as a number (0-11)
		const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

		return `${day} ${months[monthIndex]} ${year}`;
	}


	blockProps.className = blockProps.className + ' uni_sports_swiper'
	blockProps.style = {
		gridTemplateColumns: `repeat(${attributes.slidesCount }, 1fr)`
	}
	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						<h3>Settings for sports slider block</h3>
						{
							SimpleAttributeSet(
								attributes.slidesCount,
								'slidesCount',
								setAttributes,
								'Slides Count',
								'number'
							)
						}
						{
							SimpleColorSelector(
								attributes.itemBackground,
								'itemBackground',
								setAttributes,
								'Sport item Background'
							)
						}
						{
							SimpleColorSelector(
								attributes.fontColor,
								'fontColor',
								setAttributes,
								'Font color for elements'
							)
						}
						{
							SimpleHeightControl(
								attributes.itemBorderRadius,
								'itemBorderRadius',
								setAttributes,
								'Items border radius'
							)
						}
						{
							SimpleHeightControl(
								attributes.outcomesBorderRadius,
								'outcomesBorderRadius',
								setAttributes,
								'Outcomes border radius'
							)
						}


					</PanelBody>
					<PanelBody>
						<h3>Header color scheme</h3>
						{
							SimpleColorSelector(
								attributes.itemHeaderBackground,
								'itemHeaderBackground',
								setAttributes,
								'Header Background'
							)
						}
						{
							SimpleColorSelector(
								attributes.itemHeaderColor,
								'itemHeaderColor',
								setAttributes,
								'Header Color'
							)
						}
					</PanelBody>
					<PanelBody>
						<h3>Outcome color settings</h3>
						{
							SimpleColorSelector(
								attributes.itemOutcomeBackground,
								'itemOutcomeBackground',
								setAttributes,
								'Outcomes Background'
							)
						}
						{
							SimpleColorSelector(
								attributes.outcomeColor,
								'outcomeColor',
								setAttributes,
								'Outcomes Color'
							)
						}
					</PanelBody>
					<PanelBody>
						<h3>Competitors background</h3>
						{
							SimpleColorSelector(
								attributes.homeCompetitorBackground,
								'homeCompetitorBackground',
								setAttributes,
								'Home competitor background'
							)
						}
						{
							SimpleColorSelector(
								attributes.awayCompetitorBackground,
								'awayCompetitorBackground',
								setAttributes,
								'Away competitor background'
							)
						}
					</PanelBody>
				</InspectorControls>
			}
			{
				attributes.sportsData.map((item, index) => (
					<div className={'uni_sports_item'}
							 style={{
								 background: attributes.itemBackground,
								 borderRadius: attributes.itemBorderRadius,

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
								!item.main_market ? "" : item.main_market.outcomes.map((outcome, key) => (
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

	);
}

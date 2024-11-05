import {useBlockProps, InspectorControls, RichText} from '@wordpress/block-editor';
import {
	PanelBody,
} from '@wordpress/components'
import {
	SimpleTip,
	SimpleHeightControl,
	SimpleColorSelector,
	SimpleBorderControl,
} from '../blocksRegularComponents'

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	blockProps.className += '  uni_bet_slip'

	return (

		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						<h3>Overall settings</h3>
						{
							SimpleTip('Borders color')
						}
						{
							SimpleBorderControl(
								'borders',
								attributes.borders,
								setAttributes,
								'Borders colors'
							)
						}
					</PanelBody>
					<PanelBody>
						<h3>Block Head settings</h3>

						{
							SimpleTip('Passive tab background')
						}
						{
							SimpleColorSelector(
								attributes.passiveTabBackground,
								'passiveTabBackground',
								setAttributes,
								'Background for non active tab'
							)
						}
						{
							SimpleTip('Passive tab Color')
						}
						{
							SimpleColorSelector(
								attributes.passiveTabColor,
								'passiveTabColor',
								setAttributes,
								'Color for non active tab'
							)
						}
						{
							SimpleTip('Active tab background')
						}
						{
							SimpleColorSelector(
								attributes.activeTabBackground,
								'activeTabBackground',
								setAttributes,
								'Background for active tab'
							)
						}
						{
							SimpleTip('Active tab Color')
						}
						{
							SimpleColorSelector(
								attributes.activeTabColor,
								'activeTabColor',
								setAttributes,
								'Color for active tab'
							)
						}
					</PanelBody>
					<PanelBody>
						<h3>Body Settings</h3>
						{
							SimpleTip('Body Background')
						}
						{
							SimpleColorSelector(
								attributes.bodyBackground,
								'bodyBackground',
								setAttributes,
								'Body Background'
							)
						}
						{
							SimpleTip('Body Font Color')
						}
						{
							SimpleColorSelector(
								attributes.bodyFontColor,
								'bodyFontColor',
								setAttributes,
								'Body Color'
							)
						}
					</PanelBody>
					<PanelBody>
						<h3>Footer Settings</h3>
						{
							SimpleTip('Footer Background')
						}
						{
							SimpleColorSelector(
								attributes.footerBackground,
								'footerBackground',
								setAttributes,
								'Footer Background'
							)
						}
						{
							SimpleColorSelector(
								attributes.footerColor,
								'footerColor',
								setAttributes,
								'Footer Color'
							)
						}
					</PanelBody>
					<PanelBody>
						<h3>Button settings</h3>
						{
							SimpleTip('Button Background')
						}
						{
							SimpleColorSelector(
								attributes.buttonBackground,
								'buttonBackground',
								setAttributes,
								'Button Background'
							)
						}
						{
							SimpleTip('Button Background')
						}
						{
							SimpleColorSelector(
								attributes.buttonColor,
								'buttonColor',
								setAttributes,
								'Button Color'
							)
						}
						{
							SimpleHeightControl(
								attributes.buttonBorderRadius,
								'buttonBorderRadius',
								setAttributes,
								'Скругляшки кнопки'
							)
						}
					</PanelBody>
				</InspectorControls>
			}
			<div className="bet_slip__head" style={{
				borderBottom: `${attributes.borders.width} ${attributes.borders.style} ${attributes.borders.color}`
			}}>
				<div className="tab active"
						 style={{
							 background: attributes.activeTabBackground,
							 color: attributes.activeTabColor
						 }}
				>
					<svg
						style={{
							color: attributes.activeTabColor
						}}
						id="betslip" fill = "currentColor" width={22} height={22} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.5 7h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1zm-2 4h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1zm13-9h-17a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .8.4l2.9-2.3L9 21.4a.5.5 0 0 0 .6 0l2.4-1.8 2.4 1.8a.5.5 0 0 0 .6 0l2.3-1.8 2.9 2.3a.5.5 0 0 0 .8-.4v-19a.5.5 0 0 0-.5-.5zM20 20.5l-2.4-1.9a.5.5 0 0 0-.6 0l-2.3 1.8-2.4-1.8a.5.5 0 0 0-.6 0l-2.4 1.8L7 18.6a.5.5 0 0 0-.6 0L4 20.5V3h16v17.5zM7.5 15h9a.5.5 0 1 0 0-1h-9a.5.5 0 0 0 0 1z"/>
					</svg>
					<RichText
						tagName={'span'}
						onChange={(content) => setAttributes({betSlipTab: content})}
						value={attributes.betSlipTab}
					/>
				</div>
				<div className="tab" style={{
					background: attributes.passiveTabBackground,
					color: attributes.passiveTabColor
				}}>
					<svg id="my-bets" fill = "currentColor"  width={22} height={22} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.875 7.084h5.25a.375.375 0 0 0 0-.75h-5.25a.375.375 0 0 0 0 .75zm5.25 2.25h-1.5a.375.375 0 0 0 0 .75h1.5a.375.375 0 0 0 0-.75zm0 3h-1.5a.375.375 0 1 0 0 .75h1.5a.375.375 0 0 0 0-.75zm3-9H5.874a.375.375 0 0 0-.375.374v2.626H2.875a.375.375 0 0 0-.375.375v8.25a1.877 1.877 0 0 0 1.874 1.875H14.5a3.003 3.003 0 0 0 3-3V3.708a.375.375 0 0 0-.375-.375zM5.5 14.958a1.125 1.125 0 1 1-2.25 0V7.084H5.5v7.875zm11.25-1.125a2.253 2.253 0 0 1-2.25 2.25H5.866c.237-.314.384-.7.384-1.125V4.083h10.5v9.75zm-7.875-3.75h1.5a.375.375 0 0 0 0-.75h-1.5a.375.375 0 0 0 0 .75zm0 3h1.5a.375.375 0 1 0 0-.75h-1.5a.375.375 0 0 0 0 .75z"/>
					</svg>
					<RichText
						tagName={'span'}
						onChange={(content) => setAttributes({myBetsTab: content})}
						value={attributes.myBetsTab}
					/>
				</div>
			</div>
			<div className="bet_slip__body" style={{
				borderBottom: `${attributes.borders.width} ${attributes.borders.style} ${attributes.borders.color}`,
				background: attributes.bodyBackground,
				color: attributes.bodyFontColor
			}}>
				<svg id="betslip-icon" fill = "currentColor"  viewBox="0 0 24 24"
						 xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.5 7h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1zm-2 4h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1zm13-9h-17a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .8.4l2.9-2.3L9 21.4a.5.5 0 0 0 .6 0l2.4-1.8 2.4 1.8a.5.5 0 0 0 .6 0l2.3-1.8 2.9 2.3a.5.5 0 0 0 .8-.4v-19a.5.5 0 0 0-.5-.5zM20 20.5l-2.4-1.9a.5.5 0 0 0-.6 0l-2.3 1.8-2.4-1.8a.5.5 0 0 0-.6 0l-2.4 1.8L7 18.6a.5.5 0 0 0-.6 0L4 20.5V3h16v17.5zM7.5 15h9a.5.5 0 1 0 0-1h-9a.5.5 0 0 0 0 1z"/>
				</svg>
				<RichText
					tagName={'div'}
					className={'body_text'}
					value={attributes.bodyText}
					onChange={(content) => setAttributes({bodyText: content})}
				/>
			</div>
			<div className="bet_slip__footer"
					 style={{
						 background: attributes.footerBackground,
						 color: attributes.footerColor
					 }}
			>
				<div className="row">
					<span
						contentEditable
						onBlur={(e) => setAttributes({stake: e.target.innerText})}
					>{attributes.stake}</span>
					<div className="inputLike" style={{
						background: attributes.passiveTabBackground,
						color: attributes.passiveTabColor
					}}>
					<span
								contentEditable={true}
								onBlur={(e) => setAttributes({currency: e.target.innerText})}
								>{attributes.currency}</span> <b>0.00</b></div>
				</div>
				<div className="row" >
					<span

						contentEditable
						onBlur={(e) => setAttributes({odds: e.target.innerText})}
					>{attributes.odds}</span>
					<b>0.00</b>
				</div>
				<div className="row">
					<span
						contentEditable
						onBlur={(e) => setAttributes({possibleWinings: e.target.innerText})}
					>{attributes.possibleWinings}</span>
					<b>0.00</b>
				</div>
				<span className="btn"
							contentEditable
							onBlur={(e) => setAttributes({buttonText: e.target.innerText})}
							style={{
								borderRadius: attributes.buttonBorderRadius,
								background: attributes.buttonBackground,
								color: attributes.buttonColor,
							}}>{attributes.buttonText}</span>
			</div>

		</div>

	);
}

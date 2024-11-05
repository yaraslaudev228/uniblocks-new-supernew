import {useBlockProps, RichText, InspectorControls, InspectorAdvancedControls} from '@wordpress/block-editor';
import {
	PanelBody, Flex, FlexItem
} from '@wordpress/components'
import metadata from './block.json'

import {updateBlockInArray,
	SimpleAddBlockInArray,
	SimpleRemoveButton,
	SimpleBorderControl,
	SimpleTip,
	SimpleHeightControl,
	SimpleColorSelector
} from '../blocksRegularComponents'
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	blockProps.className += " uni_sports__items"
	return (

		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						{
							SimpleColorSelector(
								attributes.buttonsBackground,
								'buttonsBackground',
								setAttributes,
								'Цвет кнопки меню'

							)
						}
						{
							SimpleTip('Border bottom for elements')
						}
						{
							SimpleBorderControl(
								'sportsItemsBorder',
								attributes.sportsItemsBorder,
								setAttributes,
								'Border for items'
							)
						}
						{
							SimpleTip('Padding for buttons Y and X')
						}
						{
							SimpleHeightControl(
								attributes.sportsItemsPaddingY,
								'sportsItemsPaddingY',
								setAttributes,
								'Padding Y (top-bottom)'
							)
						}
						{
							SimpleHeightControl(
								attributes.sportsItemsPaddingX,
								'sportsItemsPaddingX',
								setAttributes,
								'Padding X (left-right)'
							)
						}
						{
							SimpleTip('Color font')
						}
						{
							SimpleColorSelector(
								attributes.sportsItemsColor,
								'sportsItemsColor',
								setAttributes,
								'Font color'
							)
						}
						{
							SimpleColorSelector(
								attributes.sportsItemsCounterColor,
								'sportsItemsCounterColor',
								setAttributes,
								'Counter color'
							)
						}
						{
							SimpleTip('Font-size for elements')
						}
						{
							SimpleHeightControl(
								attributes.sportsItemsFontSize,
								'sportsItemsFontSize',
								setAttributes,
								'Font-size for sport name'
							)
						}
						{
							SimpleHeightControl(
						 		attributes.sportsItemsCounterFontSize,
								'sportsItemsCounterFontSize',
								setAttributes,
								'Counter font size'
							)
						}

					</PanelBody>
				</InspectorControls>
			}
			{
				<InspectorAdvancedControls>
					<PanelBody>
						{SimpleTip('List for tags icons')}
						<Flex wrap gap = "5px">
						{
							!attributes.sportsMenuItems ? "" : attributes.sportsMenuItems.map((el, index) => (
								<FlexItem style = {{background: '#efefef'}}>{el.icon}</FlexItem>
							))
						}</Flex>
					</PanelBody>
				</InspectorAdvancedControls>
			}
			{
				!attributes.sportsMenuItems ? "" : attributes.sportsMenuItems.map((item, index) => (
					<div key={index} className={'uni_sport_menu__item'}
					 style={
						 {
							 borderWidth: `0 0 ${attributes.sportsItemsBorder.width}`,
							 borderColor: attributes.sportsItemsBorder.color,
							 borderStyle: attributes.sportsItemsBorder.style,
							 padding: `${attributes.sportsItemsPaddingY} ${attributes.sportsItemsPaddingX}`,
							 background: attributes.buttonsBackground
						 }
					 }
					>
						<div className="icon">
						 	<span
								contentEditable
								onBlur={(e) =>
							 updateBlockInArray(
								 'sportsMenuItems',
								 attributes.sportsMenuItems,
								 index,
								 'icon',
								 e.target.innerText,
								 setAttributes
							 )
							 }
								className="iconName"
								style={{
									color: attributes.sportsItemsColor
								}}
							>{item.icon}
							 </span>
							<RichText
								value={item.name}
								tagName={'span'}
								onChange={(content) => updateBlockInArray(
									'sportsMenuItems',
									attributes.sportsMenuItems,
									index,
									'name',
									content,
									setAttributes
								)}
								style={{
									color: attributes.sportsItemsColor,
									fontSize: attributes.sportsItemsFontSize
								}}
							/>
						</div>
						<div
							contentEditable
							onBlur={(e) => updateBlockInArray(
								'sportsMenuItems',
								attributes.sportsMenuItems,
								index,
								'counter',
								Number(e.target.innerText),
								setAttributes
							)}
							className="counter"
						 style={{
							 color: attributes.sportsItemsCounterColor,
							 fontSize: attributes.sportsItemsCounterFontSize
						 }}
						>
							{item.counter}
						</div>
						{
							SimpleRemoveButton(
								'sportsMenuItems',
								attributes.sportsMenuItems,
								index,
								setAttributes
							)
						}
					</div>
				))
			}
			{
				SimpleAddBlockInArray(
				'sportsMenuItems',
				attributes.sportsMenuItems,
				metadata.attributes.sportsMenuItems.default[0],
				setAttributes,
				'add-sport-item',
				'+ Add sport item'

			)}

		</div>

	);
}

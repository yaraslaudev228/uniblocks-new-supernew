import {useBlockProps, RichText} from '@wordpress/block-editor';
import {SimpleRemoveButton, updateBlockInArray} from "../blocksRegularComponents";
export default function save({attributes}) {

	const blockProps = useBlockProps.save();
	blockProps.className = blockProps.className + ' uni_sports_menu'
	return (

		<div {...blockProps}>
			{
				!attributes.sportsMenuItems ? "" : attributes.sportsMenuItems.map((item, index) => (
					<a href = {attributes.sportsUrl} key={index} className={'uni_sport_menu__item'}
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
							<svg className="media-item media-item--icon"
									 style={{
										 color: attributes.sportsItemsColor
									 }}
							>
								<use href={item.icon} xlinkHref={item.icon}/>
							</svg>
							<RichText.Content
								value={item.name}
								tagName={'span'}
								style={{
									color: attributes.sportsItemsColor,
									fontSize: attributes.sportsItemsFontSize
								}}
							/>
						</div>
						<div
							className="counter"
							style={{
								color: attributes.sportsItemsCounterColor,
								fontSize: attributes.sportsItemsCounterFontSize
							}}
						>
							{item.counter}
						</div>
					</a>
				))
			}
		</div>

	)

}

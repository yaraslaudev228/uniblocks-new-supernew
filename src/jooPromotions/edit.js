import {
	useBlockProps, RichText,
} from '@wordpress/block-editor';


import {

	updateBlockInArray,
	SimpleAddBlockInArray,
	SimpleRemoveButton,


} from '../blocksRegularComponents'

import './editor.scss';
import metadata from './block.json';

import {useState} from '@wordpress/element'
import Inspector from "./inspector";

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	const [isItemSelected, setItemSelected] = useState({index: null})
	console.log(isItemSelected)

	return (
		<div  {...blockProps}>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				isItemSelected={isItemSelected}/>

			<div className="uni_promotions_list" style={{
				gap: attributes.gapBetween
			}}>
				{
					attributes.promoBlocks && attributes.promoBlocks.map((item, index) => (

							<div key={index}
									 onClick={(e) => {
										 setItemSelected({index: index, value: item.block_columns})
									 }}
									 className={'uni_promotion_bg_image uni_promotion_bg_image-'
										 + (item.block_align ? item.block_align : attributes.align) + " "
										 + (isItemSelected.index !== null && isItemSelected.index === index ? "uni_item__selected" : "")
									 }
									 style={
										 {
											 background: 'url(' + item.block_image.url + ') no-repeat',
											 backgroundSize: 'cover',
											 backgroundPosition: 'center',
											 minHeight: attributes.blocksHeight,
											 flexBasis: (100 / Number(item.block_columns) - 6) + '%',
											 flexGrow: '1',
											 borderRadius: attributes.blocksBorderRadius,
											 color: attributes.captionColor
										 }
									 }>

								{
									item.block_alt_image && (
										<img
											src={item.block_alt_image.url}
											style={{
												position: 'absolute',
												top: item.block_alt_position_top,
												left: item.block_alt_position_left,
												zIndex: '15',
												height: item.block_alt_image_height
											}}

										/>
									)

								}
								<div className="uni_promotion__overlay" style={{
									background: item.block_caption_background ? item.block_caption_background : attributes.captionBackground,
									borderRadius: attributes.blocksBorderRadius
								}}/>
								<div className="uni_promotion__caption">
									<RichText
										className={'uni_label'}
										tagName={'div'}
										value={item.block_label}
										placeholder={'...Лейба'}
										style={{
											background: item.block_label_bg,
											color: item.block_label_color,
											padding: attributes.block_label_padding,
											borderRadius: attributes.block_label_border_radius,
											fontSize: attributes.block_label_fontsize
										}}
										onChange={(newLabel) => updateBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											index,
											'block_label',
											newLabel,
											setAttributes
										)}
									/>
									<RichText
										className={'uni_title'}
										tagName="div" // The tag type of the RichText container.
										value={item.block_title} // The content value bound to this RichText.
										onChange={(newTitle) => updateBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											index,
											'block_title',
											newTitle,
											setAttributes
										)}
										style={{
											fontSize: attributes.titleFontSize
										}}
										placeholder="Enter title here..." // Optional: Placeholder text.
									/>

									<RichText

										tagName={'div'}
										className={'uni_description'}
										value={item.block_description}
										onChange={(content) => {
											updateBlockInArray(
												'promoBlocks',
												attributes.promoBlocks,
												index,
												'block_description',
												content,
												setAttributes
											)
										}}
										style={{
											fontSize: attributes.bodyFontSize
										}}
									/>

									<a href={item.block_url} className="uni_btn uni_btn__signup"
										 contentEditable={true}
										 onMouseUp={
											 (e) => {
												 console.log(window.getSelection().toString())
											 }
										 }
										 style={{
											 background: attributes.buttonBackground,
											 color: attributes.buttonColor,
											 borderRadius: attributes.buttonsBorderRadius
										 }}
										 onBlur={(e) => {
											 updateBlockInArray(
												 'promoBlocks',
												 attributes.promoBlocks,
												 index,
												 'block_button',
												 e.target.innerText,
												 setAttributes
											 )
										 }}
									>{item.block_button}</a>
									<RichText
										tagName={'div'}
										className={'uni_terms'}
										placeholder={"Enter your value..."}
										value={item.block_bonus_terms}
										onChange={(content) => updateBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											index,
											'block_bonus_terms',
											content,
											setAttributes
										)}
										style={{
											fontSize: attributes.bottomFontSize
										}}
									/>

								</div>
								{SimpleRemoveButton('promoBlocks', attributes.promoBlocks, index, setAttributes)}

							</div>
						)
					)
				}

			</div>
			{
				SimpleAddBlockInArray(
					'promoBlocks',
					attributes.promoBlocks,
					metadata.attributes.promoBlocks.default[0],
					setAttributes,
					'uni_promotion uni_promotion_add',
					'+ Add promotion'
				)
			}

		</div>
	);
}

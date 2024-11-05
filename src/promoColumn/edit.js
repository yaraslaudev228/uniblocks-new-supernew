import {
	useBlockProps, RichText,

} from '@wordpress/block-editor';


import {

	updateBlockInArray,
	SimpleAddBlockInArray,
	SimpleRemoveButton,
	SimpleMediaUploadInArrayElement,

} from "../blocksRegularComponents";
import Inspector from "./inspector";
import './editor.scss';
import metadata from './block.json';

import {useState} from '@wordpress/element'

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	const [selectedBlock, setSelectedBlock] = useState(null)

	return (
		<div  {...blockProps}>
	   <Inspector selectedBlock = {selectedBlock}  setAttributes={setAttributes} attributes={attributes}/>

			<div className="uni_promotions_list column_type"
					 style={{
						 display: "flex",
						 gap: attributes.promotionsGap,
						 flexWrap: "wrap",
						 maxWidth: attributes.blocksContainerWidth,
						 margin: "0 auto",
					 }}
			>
				{
					!attributes.promoBlocks ? '' : attributes.promoBlocks.map((item, index) => (
						<div key={index}
								 className={
									 "uni_promotion uni_promotion_align-" +
									 (item.block_align ? item.block_align : attributes.align) + " " +
									 (selectedBlock && selectedBlock === index ? "uni_item__selected" : "")
								 }
								 style={{
									 flexBasis: `calc(100%/${item.block_size ? item.block_size : 3} - ${attributes.promotionsGap ? attributes.promotionsGap : '1rem'})`,
									 flexGrow: item.is_block_grow ? '1' : 'unset',
									 borderRadius: attributes.promotionsBorderRadius ? attributes.promotionsBorderRadius : '0',
									 flexDirection: attributes.columnDirection + (item.block_flex_direction ? '-reverse' : ''),
									 display: 'flex'
								 }}
								 onClick={(e) => {
									 if (e.currentTarget.classList.contains('uni_promotion')) {
										 setSelectedBlock(index)
									 } else {
										 setSelectedBlock(null)
									 }
								 }}
						>
							<img src={item.block_image.url}
									 style={
										 {
											 width: item.block_image_height ? item.block_image_height : attributes.promotionsImageWidth,
											 borderRadius: `${attributes.promotionsBorderRadius} ${attributes.promotionsBorderRadius} 0 0`,
											 minHeight: item.block_image_height ? item.block_image_height : attributes.promotionsImagesHeight
										 }
									 }
									 alt=""/>
							<div className="uni_promotion__caption uni_promotion_column"
									 style={{
										 background: attributes.captionBackground,
										 borderRadius: `0 0 ${attributes.promotionsBorderRadius} ${attributes.promotionsBorderRadius}`,
										 color: attributes.captionColor
									 }}
							>
								{
									SimpleMediaUploadInArrayElement(
										'promoBlocks',
										attributes.promoBlocks,
										index,
										'block_image',
										setAttributes
									)
								}

								<RichText
									className={'uni_title'}
									tagName="div" // The tag type of the RichText container.
									value={item.block_title} // The content value bound to this RichText.
									onChange={(newTitle) => {
										updateBlockInArray('promoBlocks', attributes.promoBlocks, index, 'block_title', newTitle, setAttributes)

									}}
									style={{
										color: attributes.captionTitleColor,
										fontSize: attributes.titleFontSize
									}}
									placeholder="Enter title here..." // Optional: Placeholder text.
								/>
								<RichText
									onChange={(content) =>
										updateBlockInArray('promoBlocks', attributes.promoBlocks, index, 'block_description', content, setAttributes)
									}
									tagName={'div'}
									className={'uni_description'}
									value={item.block_description}
									style={
										{
											fontSize: attributes.bodyFontSize
										}
									}
								/>

								<a href={item.block_url} className="uni_btn uni_btn__signup"
									 contentEditable={true}
									 style={{
										 background: attributes.buttonBackground,
										 color: attributes.buttonColor,
										 borderRadius: attributes.buttonBorderRadius
									 }}
									 onBlur={(e) => {
										 updateBlockInArray('promoBlocks', attributes.promoBlocks, index, 'block_button', e.target.innerText, setAttributes)
									 }}
								>{item.block_button}</a>
							</div>
							{
								SimpleRemoveButton('promoBlocks', attributes.promoBlocks, index, setAttributes)
							}
						</div>
					))
				}
				{
					SimpleAddBlockInArray(
						'promoBlocks',
						attributes.promoBlocks,
						metadata.attributes.promoBlocks.default[0],
						setAttributes,
						'uni_btn uni_add_block',
						'+ Add promoblock'
					)
				}
			</div>
		</div>
	);
}

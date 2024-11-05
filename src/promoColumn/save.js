import {useBlockProps, RichText} from '@wordpress/block-editor';

export default function save({attributes}) {

	const items = attributes.promoBlocks
	const blockProps = useBlockProps.save()
	blockProps.className = blockProps.className + ' uni_promotions_list_column'
	blockProps.style = {
		display: 'flex',
		flexWrap: 'wrap',
		gap: attributes.promotionsGap,
		maxWidth: attributes.blocksContainerWidth,
		margin: "0 auto"
	}
	return (
		<div {...blockProps}>
			{items.map((item, index) => (
				<div key={index} className="uni_promotion_column"
						 style={{
							 flexBasis: `calc(100%/${item.block_size ? item.block_size : 3} - ${attributes.promotionsGap ? attributes.promotionsGap : '1rem'})`,
							 flexGrow: item.is_block_grow ? '1' : 'unset',
							 borderRadius: `${attributes.promotionsBorderRadius}`,
							 flexDirection: attributes.columnDirection + (item.block_flex_direction ? '-reverse' : ''),
							 alignItems: attributes.columnDirection === 'row' ? 'center' : '',
							 textAlign: attributes.align,
							 justifyContent: attributes.columnDirection === 'row' ? 'space-between' : '',
							 display: 'flex',
							 background: attributes.captionBackground,
						 }}>
					{
						item.block_image.url && (
							<img src={item.block_image.url}
									 style={{
										 height: item.block_image_height ? item.block_image_height : attributes.promotionsImagesHeight,
										 width: item.block_image_width ? item.block_image_width : attributes.promotionsImageWidth
									 }}
									 alt={item.block_title}/>)
					}


					<div
						className={'uni_promotion__caption uni_promotion__caption-' + (item.block_align ? item.block_align : attributes.align)}
						style={{
							background: attributes.captionBackground,
							color: attributes.captionColor,
							borderRadius: `0 0 ${attributes.promotionsBorderRadius} ${attributes.promotionsBorderRadius}`,
							flexGrow: attributes.columnDirection  === 'row' ? '1' : '0'

						}}>
						<div className="uni_promotion__caption_splitter" style={{
							boxShadow: '0 0 10px  ' + attributes.promotionsShadowHeight + ' ' + attributes.captionBackground,
							height: attributes.promotionsShadowHeight,
							background: attributes.captionBackground,
							display: 'block',
							marginTop: '0',
							width: '100%',
							boxSizing: 'border-box',
						}}/>
						{
							item.block_title && (
								<RichText.Content
									tagName="div" // The tag type to wrap the content.
									className="uni_title"
									value={item.block_title} // The RichText content.
									style={{
										color: attributes.captionTitleColor,
										fontSize: attributes.titleFontSize
									}}
								/>
							)
						}
						{
							item.block_description && (
								<RichText.Content
									tagName={'div'}
									className={'uni_description'}
									value={item.block_description}
									style={
										{
											fontSize: attributes.bodyFontSize
										}
									}
								/>
							)
						}
						<a href={item.block_url} onClick={item.target} className="uni_btn uni_btn__signup"
							 style={{
								 background: attributes.buttonBackground,
								 color: attributes.buttonColor,
								 borderRadius: attributes.buttonBorderRadius
							 }}>
							{item.block_button}
						</a>
					</div>
				</div>
			))}
		</div>

	);
}

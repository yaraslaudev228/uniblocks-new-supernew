import {useBlockProps, RichText} from '@wordpress/block-editor';
import {updateBlockInArray} from "../blocksRegularComponents";

export default function save({attributes}) {

	const {promoBlocks, align} = attributes

	const blockProps = useBlockProps.save()
	blockProps.className = blockProps.className + ' uni_promotions_list'
 	blockProps.style = {
		gap: attributes.gapBetween
	}

	return (
		<div  {...blockProps}>
			{promoBlocks.map((item, index) => (
				<div key={index}
						 className={'uni_promotion uni_promotion_align_' + (item.block_align ? item.block_align : align)}
						 style={
							 {
								 flexBasis: (100 / Number(item.block_columns) - attributes.gapBetween) + '%',
								 flexGrow: '1',
								 background: item.block_image.url !== '' ? 'url(' + item.block_image.url + ') no-repeat' : '',
								 backgroundSize: 'auto',
								 backgroundPosition: 'center',
								 minHeight: attributes.blocksHeight,
								 borderRadius: attributes.blocksBorderRadius,
								 color: attributes.captionColor,

							 }
						 }>
					{
						!item.block_button && (
							<a href={item.block_url} onClick={item.block_target} className="overlayButton"/>
						)
					}

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
					<div className="uni_promotion__overlay uni_banner__overlay" style={{
						background: item.block_caption_background ? item.block_caption_background : attributes.captionBackground,
						borderRadius: attributes.blocksBorderRadius
					}}/>
					<div className="uni_promotion__caption">
						{
							item.block_label && (
								<RichText.Content
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
								/>
							)
						}
						{
							item.block_title && (
								<div className="uni_title"
										 style={{
											 fontSize: attributes.titleFontSize
										 }}
								>
									<RichText.Content
										value={item.block_title}
										tagName={''}
									/>
								</div>
							)
						}


						{item.block_description && (
							<div className="uni_description"
									 style={{
										 fontSize: attributes.bodyFontSize
									 }}
							>
								<RichText.Content
									value={item.block_description}
									tagName={''}
								/>

							</div>
						)}
						{
							item.block_button && (
								<a href={item.block_url} onClick={item.block_target} className="uni_btn uni_btn__signup" style={{
									background: attributes.buttonBackground,
									borderRadius: attributes.buttonsBorderRadius,
									color: attributes.buttonColor
								}}>
									{item.block_button}
								</a>
							)
						}
						{
							item.block_bonus_terms && <RichText.Content
								tagName={'div'}
								className={'uni_terms'}
								style={{
									fontSize: attributes.bottomFontSize
								}}
								value={item.block_bonus_terms}
							/>
						}


					</div>


				</div>
			))}
		</div>

	);
}

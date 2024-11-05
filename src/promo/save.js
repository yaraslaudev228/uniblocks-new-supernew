import {useBlockProps, RichText} from '@wordpress/block-editor';
import {updateBlockInArray} from "../blocksRegularComponents";

export default function save({attributes}) {

	const {promoBlocks, align} = attributes

	const blockProps = useBlockProps.save()
	blockProps.className = blockProps.className + ' uni_promotions_list'
	blockProps.style = {
		margin: attributes.blockMargin,
		maxWidth: attributes.blockMaxWidth
	}

	return (
		<div  {...blockProps}>
			{promoBlocks.map((item, index) => (
				<div key={index}
						 className={'uni_promotion uni_promotion_align_' + (item.block_align ? item.block_align : align)}
						 style={
							 {
								 flexBasis: 'calc(' + (100 / Number(item.block_columns) + '% - 1rem)'),
								 flexGrow: attributes.isGrow ? '1' : '0',
								 background: item.block_image.url !== '' ? 'url(' + item.block_image.url + ') no-repeat' : '',
								 backgroundSize: 'cover',
								 backgroundPosition: 'center',
								 minHeight: attributes.blocksHeight,
								 borderRadius: attributes.blocksBorderRadius,
								 overflow: 'hidden',
								 color: attributes.captionColor
							 }
						 }>
					{
						!item.block_button && (
							<a href={item.block_url} onClick={item.block_target} className="overlayButton"/>
						)
					}
					{
						item.block_top_title && (
							<RichText.Content
								tagName={'div'}
								className={'uni_promotion_top_text'}
								value={item.block_top_title}
								style={{
									fontSize: attributes.upperFontSize
								}}
							/>
						)
					}
					{
						item.block_alt_image ?
							<img
								src={item.block_alt_image.url}
								style={{
									position: 'absolute',
									top: item.block_alt_position_top,
									left: item.block_alt_position_left,
									zIndex: '15'
								}}
								alt={''}
							/>
							: ""
					}
					<div className="uni_promotion__overlay uni_banner__overlay" style={{
						background: item.block_caption_background ? item.block_caption_background : attributes.captionBackground,
						borderRadius: attributes.blocksBorderRadius
					}}/>
					<div className="uni_promotion__caption">
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
							item.block_promocode && (
								<RichText.Content
									value={item.block_promocode}
									tagName={'a'}
									style={{
										background: attributes.promocodeBackground,
										color: attributes.promocodeColor,
										padding: attributes.promocodePadding,
										borderRadius: attributes.promocodeBradius,
										fontSize: attributes.promocodeFontSize
									}}
									href = {item.block_url}
								/>
							)
						}
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


					</div>

					{
						item.block_bonus_terms ? <RichText.Content
							tagName={'div'}
							className={'uni_promotion_terms'}
							style={{
								fontSize: attributes.bottomFontSize
							}}
							value={item.block_bonus_terms}
						/> : ""
					}
				</div>
			))}
		</div>

	);
}

import {
	useBlockProps, RichText, InnerBlocks
} from '@wordpress/block-editor';
import './editor.scss';
import {getFlexAlignment, SimpleRemoveButton} from '../Service/index'

import Inspector from "./inspector";
import {useState} from "react";

import {SimpleAddBlockInArray, SimpleMediaUploadInArrayElement, updateBlockInArray} from "../Service";
import metadata from './block.json'

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	const [selectedBanner, setSelectedBanner] = useState(0)

	return (
		<div  {...blockProps}>

			<Inspector
				setAttributes={setAttributes}
				attributes={attributes}
				selectedBanner = {	selectedBanner }
			/>
			<div className={'uni_bannerSwiper'}>
				{
					selectedBanner !== false && attributes.banners[selectedBanner] && (
						<div className={'uni_banner_element'} style={{
							border: attributes.bannerBorder ?
								`${attributes.bannerBorder.width}
								${attributes.bannerBorder.color}
								${attributes.bannerBorder.style}` : 0,
							borderRadius: attributes.bannerBorderRadius
						}}>
							<SimpleMediaUploadInArrayElement
								attributeName={'banners'}
								currentArray={attributes.banners}
								blockIndex={selectedBanner}
								fieldName={'image'}
								setAttributesCallback={setAttributes}
								label={'Фон баннера'}
							/>
							<div className={'bannerImage'} style={{
								background: `url(${attributes.banners[selectedBanner].image.url}) no-repeat`,
								backgroundSize: 'cover',
								height: attributes.blockHeight,
								alignItems: 'flex-start',
								borderRadius: attributes.bannerBorderRadius
							}}>

								<div className={'caption'}
								 style={{
									 alignItems: getFlexAlignment(attributes.captionAlign),
									 gap: attributes.captionGap,
									 padding: `${attributes.captionPaddingY} ${attributes.captionPaddingX}`,
									 width: attributes.captionMaxWidth ? attributes.captionMaxWidth : '',
									 margin: attributes.captionMaxWidth ? '0 auto' : '',
									 textAlign: attributes.captionAlign
								 }}
								>
									<RichText
										style={{
											color: attributes.titleColor,
											fontSize: attributes.titleFontSize
										}}
									tagName={'div'}
									value={attributes.banners[selectedBanner].title}
									className={'title'}
									onChange={(content) => updateBlockInArray(
										'banners',
										attributes.banners,
										selectedBanner,
										'title',
										content,
										setAttributes
									)}
									/>
									<RichText
										style={{
											color: attributes.descriptionColor,
											fontSize: attributes.descriptionFontSize
										}}
										tagName={'div'}
										value={attributes.banners[selectedBanner].description}
										className={'description'}
										onChange={(content) => updateBlockInArray(
											'banners',
											attributes.banners,
											selectedBanner,
											'description',
											content,
											setAttributes
										)}
									/>
									<RichText
										style={{
											borderRadius: attributes.buttonBorderRadius,
											color: attributes.buttonColor,
											background: attributes.buttonBackground,
											padding: `${attributes.buttonPaddingY} ${attributes.buttonPaddingX}`

										}}
									tagName={'div'}
									className={'btn'}
									value={attributes.banners[selectedBanner].button}
									onChange={(text) => updateBlockInArray(
										'banners',
										attributes.banners,
										selectedBanner,
										'button',
										text,
										setAttributes
									)}
									/>
									<RichText
										style={{
											color: attributes.contentAfterColor,
											fontSize: attributes.contentMoreFontSize,

										}}
										tagName={'div'}
										value={attributes.banners[selectedBanner].content_after_button}
										className={'content_after_button'}
										placeholder={'...Если нужно еще описание - пиши'}
										onChange={(content) => updateBlockInArray(
											'banners',
											attributes.banners,
											selectedBanner,
											'content_after_button',
											content,
											setAttributes
										)}
									/>
								</div>

							</div>

						</div>
					)
				}
				<div className="uni_banner_thumbs">
					{
						attributes.banners.map((item, index) => (
							<div className={'thumb ' + (index === selectedBanner ? 'thumb-selected' : '') } key={index}
									 onClick={(e) => setSelectedBanner(index)}>
								<img src={item.image.url} width={140} height={140} alt=""/>
								<SimpleRemoveButton
								 attributeName={'banners'}
								 currentArray={attributes.banners}
								 setAttributesCallback={setAttributes}
								 blockIndex={index}
								/>
							</div>
						))
					}
					<SimpleAddBlockInArray
						attributeName={'banners'}
						currentArray={attributes.banners}
					 	blockObject={metadata.attributes.banners.default[0]}
						setAttributesCallback={setAttributes}
						className={'banner-add'}
						text={'+ Добавить баннер'}
					/>
				</div>

			</div>

		</div>

	);
}

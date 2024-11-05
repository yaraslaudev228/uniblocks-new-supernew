import {useBlockProps, RichText, InnerBlocks} from '@wordpress/block-editor';
import {getFlexAlignment} from '../Service/index'
export default function save({attributes}) {
  return;
	const blockProps = useBlockProps.save()
	const countClampValue = (value) => {
		return  (parseInt(value) - (parseInt(value)/100 * 20))  + 'px'
	}
  const titleFontSize = countClampValue(attributes.titleFontSize)
	const descriptionFontSize = countClampValue(attributes.descriptionFontSize)

	return (
		<section {...blockProps}>
 		 	 <div className="uni_bannerSwiper swiper" data-height = {attributes.blockHeightMobile} style={
				 {
					 height: attributes.blockHeight,

				 }
			 }>
				 <div className="swiper-wrapper">
					 { attributes.banners.map((item, index) => (
						 <div className="bannerImage swiper-slide" style={{
							 alignItems: 'flex-start',
							 backgroundPosition: 'center',
							 borderRadius: attributes.bannerBorderRadius,
							 border: attributes.bannerBorder ?
								 `${attributes.bannerBorder.width}
								${attributes.bannerBorder.color}
								${attributes.bannerBorder.style}` : 0,
							 height: attributes.blockHeight
						 }} key={index} data-height = {attributes.blockHeightMobile}>
							 {
								 !item.title && !item.description && !item.buttom && !item.content_after_button && (
									 <a href = "/goto" onClick={attributes.target} className={'overlayButton'}/>
								 )
							 }
							 <picture className={'imageOverlay'} style={{
								 borderRadius: attributes.bannerBorderRadius,
							 }}>
								 {
									 item.mobileImage && (
										 <source media = "(max-width: 768px)" srcSet={ item.mobileImage.url}/>
									 )
								 }
								 <img style={{
									 borderRadius: attributes.bannerBorderRadius,
								 }} src={item.image.url} alt=""/>
							 </picture>
							 <div className="caption"
										style={{
											alignItems:  getFlexAlignment(attributes.captionAlign),
											gap: attributes.captionGap,
											textAlign: attributes.captionAlign,
											padding: `${attributes.captionPaddingY} ${attributes.captionPaddingX}`,
											maxWidth: attributes.captionMaxWidth ? attributes.captionMaxWidth : '',
											margin: attributes.captionMaxWidth ? '0 auto' : ''
										}}
							 >
								 {item.title && (
									 <RichText.Content
										 style={{
											 color: attributes.titleColor,
											 fontSize: `clamp(${titleFontSize},  1vw, ${attributes.titleFontSize})`
										 }}
										 tagName={'div'}
										 value={item.title}
										 className={'title'}

									 />
								 )}
								 {
									 item.description && (
										 <RichText.Content
											 style={{
												 color: attributes.descriptionColor,
												 fontSize: `clamp(${descriptionFontSize}, 1vw, ${attributes.descriptionFontSize})`
											 }}
											 tagName={'div'}
											 value={item.description}
											 className={'description'}

										 />
									 )
								 }
								 {
									 item.button && (
										 <RichText.Content
											 style={{
												 borderRadius: attributes.buttonBorderRadius,
												 color: attributes.buttonColor,
												 background: attributes.buttonBackground,
												 padding: `${attributes.buttonPaddingY} ${attributes.buttonPaddingX}`

											 }}
											 tagName={'a'}
											 onClick={attributes.target}
											 className={'btn'}
											 href = "/goto"
											 value={item.button}
										 />
									 )
								 }
								 {
									 item.content_after_button && (
										 <RichText.Content
											 style={{
												 color: attributes.contentAfterColor,
												 fontSize: attributes.contentMoreFontSize,
											 }}
											 tagName={'div'}
											 value={item.content_after_button}
											 className={'content_after_button'}


										 />
									 )
								 }
							 </div>

						 </div>
					 ))}
				 </div>
			 </div>
		</section>
	);
}

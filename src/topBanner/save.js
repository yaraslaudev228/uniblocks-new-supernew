import {useBlockProps, RichText} from '@wordpress/block-editor';
import {getFlexAlignment} from "../Service";

export default function save({attributes}) {

	const blockProps = useBlockProps.save()
	blockProps.className += ' uni_banner'
	blockProps.style = {
		margin: attributes.bannerMargin
	}

	return (
		<section {...blockProps}>
			<div className={"uni_banner_inner uni_banner_" + attributes.align}
					 style={
						 {
							 background: attributes.block_image.url ? 'url(' + attributes.block_image.url + ') no-repeat' : "",
							 backgroundSize: 'cover',
							 borderRadius: attributes.bannerBorderRadius ? attributes.bannerBorderRadius : '0',
							 height: attributes.bannerHeight,
							 padding: attributes.bannerInnerPaddingY + ' ' + attributes.bannerInnerPaddingX
						 }
					 }
			>
				{!attributes.block_button && (
					<a href="/goto" className="overlayButton"
						 onClick={attributes.buttonTarget}
					/>
				)

				}
				<div className="uni_overlay uni_banner__overlay" style={{
					background: attributes.overlayColor,
					borderRadius: attributes.bannerBorderRadius ? attributes.bannerBorderRadius : '0'
				}}/>
				<div className="uni_banner__caption" style={
					{
						background: attributes.captionBackground,
						textAlign: attributes.captionAlign,
						alignItems: getFlexAlignment(attributes.captionAlign),
						padding: attributes.captionPadding,
						borderRadius: attributes.captionBradius
					}
				}>
					<RichText.Content
						tagName="div" // The tag type to wrap the content.
						className="uni_title"
						value={attributes.block_title} // The RichText content.
						style={{
							fontSize: attributes.captionFirstFontSize
						}}
					/>
					<div className="uni_big_description" style={{
						fontSize: attributes.captionSecondFontSize
					}}>
						<RichText.Content
							value={attributes.block_description}
							tagName={''}

						/>
					</div>
					<div className="uni_description" style={{
						fontSize: attributes.captionThirdFontSize
					}}>
						<RichText.Content

							value={attributes.block_more_description}
							tagName={''}
						/>
					</div>
					{
						attributes.block_button && (
							<a href="/goto" className="uni_btn uni_btn__signup"
								 onClick={attributes.buttonTarget}
								 style={{
									 background: attributes.buttonBackground,
									 color: attributes.buttonColor,
									 borderRadius: attributes.buttonBorderRadius,
									 padding: `${attributes.buttonPaddingY} ${attributes.buttonPaddingX}`,
									 fontSize: attributes.buttonFontSize
								 }}>
								{attributes.block_button}
							</a>
						)
					}

					{
						attributes.block_under_description && (
							<RichText.Content
								className={'uni_more_description'}
								value={attributes.block_under_description}
								tagName={'div'}
								style={{
									fontSize: attributes.captionFourthFontSize
								}}
							/>
						)
					}
				</div>
			</div>

		</section>
	);
}

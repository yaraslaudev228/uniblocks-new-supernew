import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	blockProps.className += " uni_banner";
	blockProps.style = {
		margin: attributes.bannerMargin,
	};
	let captionAlign;
	switch (attributes.captionAlign) {
		case "left":
			captionAlign = "flex-start";
			break;
		case "right":
			captionAlign = "flex-end";
			break;
		case "center":
			captionAlign = "center";
			break;
	}
	return (
		<section {...blockProps}>
			<div
				className={"uni_banner_inner uni_banner_" + attributes.align}
				style={{
					background: attributes.block_image.url
						? "url(" + attributes.block_image.url + ") no-repeat"
						: "",
					backgroundSize: "cover",
					borderRadius: attributes.bannerBorderRadius
						? attributes.bannerBorderRadius
						: "0",
					height: attributes.bannerHeight,
					padding:
						attributes.bannerInnerPaddingY +
						" " +
						attributes.bannerInnerPaddingX,
				}}
			>
				<div
					className="uni_overlay uni_banner__overlay"
					style={{
						background: attributes.overlayColor,
						borderRadius: attributes.bannerBorderRadius
							? attributes.bannerBorderRadius
							: "0",
					}}
				/>
				<div
					className="uni_banner__caption"
					style={{
						background: attributes.captionBackground,
						textAlign: attributes.captionAlign,
						alignItems: captionAlign,
						padding: attributes.captionPadding,
						borderRadius: attributes.captionBradius,
					}}
				>
					<RichText.Content
						tagName="div" // The tag type to wrap the content.
						className="uni_title"
						value={attributes.block_title} // The RichText content.
						style={{
							fontSize: attributes.captionFirstFontSize,
						}}
					/>
					<div
						className="uni_big_description"
						style={{
							fontSize: attributes.captionSecondFontSize,
							color: attributes.block_description_Color,
						}}
					>
						<RichText.Content
							value={attributes.block_description}
							tagName={""}
						/>
					</div>
					<div
						className="uni_description"
						style={{
							fontSize: attributes.captionThirdFontSize,
							color: attributes.block_more_description_Color,
						}}
					>
						<RichText.Content
							value={attributes.block_more_description}
							tagName={""}
						/>
					</div>
					<a
						href="/goto"
						className="uni_btn uni_btn__signup"
						style={{
							background: attributes.buttonBackground,
							color: attributes.buttonColor,
							borderRadius: attributes.buttonBorderRadius,
							padding: `${attributes.buttonPaddingY} ${attributes.buttonPaddingX}`,
							fontSize: attributes.buttonFontSize,
						}}
					>
						{attributes.block_button}
					</a>
					{attributes.block_under_description && (
						<RichText.Content
							className={"uni_more_description"}
							value={attributes.block_under_description}
							tagName={"div"}
							style={{
								fontSize: attributes.captionFourthFontSize,
								color: attributes.block_under_description_Color,
							}}
						/>
					)}
				</div>
			</div>
		</section>
	);
}

import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";
import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

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
		<div {...blockProps}>
			<Inspector setAttributes={setAttributes} attributes={attributes} />
			<section className="uni_banner">
				<div
					className={"uni_banner__inner uni_banner_" + attributes.align}
					style={{
						background: attributes.block_image.url
							? "url(" + attributes.block_image.url + ") no-repeat"
							: "",
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: attributes.bannerHeight,
						borderRadius: attributes.bannerBorderRadius
							? attributes.bannerBorderRadius
							: "0",
						padding:
							attributes.bannerInnerPaddingY +
							" " +
							attributes.bannerInnerPaddingX,
					}}
				>
					<div
						className="uni_banner__overlay"
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
						<RichText
							className={"uni_title"}
							tagName="div" // The tag type of the RichText container.
							value={attributes.block_title} // The content value bound to this RichText.
							onChange={(newTitle) => {
								setAttributes({ block_title: newTitle });
							}}
							style={{
								fontSize: attributes.captionFirstFontSize,
							}}
							placeholder="Самый высокий заголовок..." // Optional: Placeholder text.
						/>
						<RichText
							className={"uni_description"}
							placeholder={"Средненький заголовок"}
							value={attributes.block_description}
							tagName={"div"}
							onChange={(text) => {
								setAttributes({ block_description: text });
							}}
							style={{
								fontSize: attributes.captionSecondFontSize,
								color: attributes.block_description_Color,
							}}
						/>
						<RichText
							placeholder={"Еще чуть чуть описания..."}
							className={"uni_more_description"}
							value={attributes.block_more_description}
							tagName={"div"}
							onChange={(text) => {
								setAttributes({ block_more_description: text });
							}}
							style={{
								fontSize: attributes.captionThirdFontSize,
								color: attributes.block_more_description_Color,
							}}
						/>

						<a
							href=""
							className="uni_btn uni_btn__signup"
							contentEditable={true}
							style={{
								background: attributes.buttonBackground,
								color: attributes.buttonColor,
								borderRadius: attributes.buttonBorderRadius,
								padding: `${attributes.buttonPaddingY} ${attributes.buttonPaddingX}`,
								fontSize: attributes.buttonFontSize,
							}}
							onBlur={(e) => {
								setAttributes({ block_button: e.target.innerText });
							}}
						>
							{attributes.block_button}
						</a>
						<RichText
							className={"uni_more_description"}
							placeholder={"Введи что-нибудь..."}
							value={attributes.block_under_description}
							tagName={"div"}
							onChange={(text) => {
								setAttributes({ block_under_description: text });
							}}
							style={{
								fontSize: attributes.captionFourthFontSize,
								color: attributes.block_under_description_Color,
							}}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}


import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		bannerPaddings,
		registr_title,
		registr_welcome,
		privacy_policy,
		get_bonus,
		registr_image,
		blocksBackground,
		alignment,
		buttonColor,
		buttonBackground,
		bannerMargins,
		inputPassword,
		inputEmail,
		inputBorder,
		inputPadding,
		inputPlaceholderColor,
		inputBorderRadius,
		inputBackground,
		buttonBorderRadius,
		bannerFormWidth,
		titleFontSize,
		subTitleFontSize,
		inputFontSize,
		bannerFormBorderRadius
	} = attributes;

	const blockProps = useBlockProps.save();
  blockProps.style = {
		margin: bannerMargins
	}
	return (
		<div {...blockProps}>
			<section
				className={"uni_section uni_banner_with_form align-" + alignment }
				style={{
					background: `url(${registr_image.url}) no-repeat center center`,
					backgroundSize: "cover",
					padding: bannerPaddings
				}}
			>
				<form className="uni_form"
							style={{
								maxWidth: bannerFormWidth,
								background: blocksBackground,
								borderRadius: bannerFormBorderRadius
							}}
				>
					<RichText.Content
						tagName={'div'}
						className={'uni_form__register_title'}
 						value={registr_title}
						style={{
							fontSize: titleFontSize
						}}
					/>
					<RichText.Content
						tagName={'div'}
						className={'uni_form__register_description'}
						value={registr_welcome}
						style={{
							fontSize: subTitleFontSize
						}}
					/>
					<RichText.Content
						tagName={'a'}
						className={'uni_input'}
						href = "/goto"
						value={inputEmail}
						style={
							{
								fontSize: inputFontSize,
								border: `${inputBorder.color} solid ${inputBorder.width}`,
								padding: inputPadding,
								borderRadius: inputBorderRadius,
								color: inputPlaceholderColor,
								background: inputBackground
							}
						}
					/>
					<RichText.Content
						tagName={'a'}
						className={'uni_input'}
 						value={inputPassword}
						href = "/goto"
						style={
							{
								fontSize: inputFontSize,
								border: `${inputBorder.color} solid ${inputBorder.width}`,
								padding: inputPadding,
								borderRadius: inputBorderRadius,
								color: inputPlaceholderColor,
								background: inputBackground
							}
						}
					/>
					<div className={'uni_checkbox_row'}>
						<input type="checkbox" name="" id=""/>
						<RichText.Content
							href={"/goto"}
							value={privacy_policy}
 							tagName={'a'}
						/>
					</div>
					<a href={'/goto'}
						className="uni_btn"
						style={{
							background: buttonBackground,
							color: buttonColor,
							borderRadius: buttonBorderRadius
						}}
					>
						{get_bonus}
					</a>
				</form>

			</section>

		</div>
	);
}

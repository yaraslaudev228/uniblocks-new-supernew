import {
	useBlockProps,
	InspectorControls, RichText
} from "@wordpress/block-editor";

import {
	PanelBody
} from "@wordpress/components";
import {
	SimpleColorSelector,
	SimpleAlignmentSelector,
	SimpleAttributeSet,
	SimpleMediaUpload,
	SimpleBorderControl,
	SimpleHeightControl
} from '../blocksRegularComponents'



import "./editor.scss";

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps();

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


	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						<h3>Overall block Banner with form settings</h3>

						{
							SimpleMediaUpload(
								'registr_image',
								registr_image,
								setAttributes,
								'Background image'
							)
						}
						{
							SimpleAttributeSet(
								bannerPaddings,
								'bannerPaddings',
								setAttributes,
								'Banner Paddings'
							)
						}
						{
							SimpleHeightControl(
								titleFontSize,
								'titleFontSize',
								setAttributes,
								'Title font size'
							)
						}
						{
							SimpleHeightControl(
								subTitleFontSize,
								'subTitleFontSize',
								setAttributes,
								'Sub Title font size'
							)
						}
						{
							SimpleHeightControl(
								bannerFormWidth,
								'bannerFormWidth',
								setAttributes,
								'Form width'
							)
						}
						{
							SimpleHeightControl(
								bannerFormBorderRadius,
								'bannerFormBorderRadius',
								setAttributes,
								'Form Border Radius'
							)
						}
						{
							SimpleHeightControl(
								inputFontSize,
								'inputFontSize',
								setAttributes,
								'Input Font Size'
							)
						}
						{
							SimpleAlignmentSelector(
								alignment,
								'alignment',
								setAttributes,
								'Form alignment'
							)
						}
						{
							SimpleAttributeSet(
								bannerMargins,
								'bannerMargins',
								setAttributes,
								'Banner Margins'
							)
						}
						{
							SimpleColorSelector(
								blocksBackground,
								'blocksBackground',
								setAttributes,
								'Form Background'
							)
						}
						{
							SimpleColorSelector(
								buttonBackground,
								'buttonBackground',
								setAttributes,
								'Button Background'
							)
						}

						{
							SimpleColorSelector(
								buttonColor,
								'buttonColor',
								setAttributes,
								'Button Color'
							)
						}
						{
							SimpleAttributeSet(
								buttonBorderRadius,
								'buttonBorderRadius',
								setAttributes,
								'Button Border Radius'
							)
						}
						{
							SimpleBorderControl(
								'inputBorder',
								inputBorder,
								setAttributes,
								'Input Border'
							)
						}
						{
							SimpleAttributeSet(
								inputPadding,
								'inputPadding',
								setAttributes,
								'Input padding'
							)
						}
						{
							SimpleAttributeSet(
								inputBorderRadius,
								'inputBorderRadius',
								setAttributes,
								'Input border radius'
							)
						}
						{
							SimpleColorSelector(
								inputPlaceholderColor,
								'inputPlaceholderColor',
								setAttributes,
								'Input placeholder color'
							)
						}
						{
							SimpleColorSelector(
								inputBackground,
								'inputBackground',
								setAttributes,
								'Input background'
							)
						}

					</PanelBody>
				</InspectorControls>
			}

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
						<RichText
							tagName={'div'}
							className={'uni_form__register_title'}
							onChange={(content) => setAttributes({registr_title: content})}
							value={registr_title}
							style={{
								fontSize: titleFontSize
							}}
						/>
						<RichText
							tagName={'div'}
							className={'uni_form__register_description'}
							value={registr_welcome}
							onChange={(content) => setAttributes({registr_welcome: content})}
							style={{
								fontSize: subTitleFontSize
							}}
						/>
						<RichText
							tagName={'div'}
							className={'uni_input'}
							onChange={(content) => setAttributes({inputEmail: content})}
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
						<RichText
							tagName={'div'}
							className={'uni_input'}
							onChange={(content) => setAttributes({inputEmail: content})}
							value={inputPassword}
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
							<RichText
								value={privacy_policy}
								onChange={(content) => setAttributes({privacy_policy: content})}
								tagName={'a'}
							/>
						</div>
						<a
							className="uni_btn"
							contentEditable={true}
							onBlur={(e) =>
								setAttributes({get_bonus: e.target.innerText})
							}
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

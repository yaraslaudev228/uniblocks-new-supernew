import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, Popover } from "@wordpress/components";

import "./editor.scss";
import metadata from "./block.json";
import {
	SimpleMediaUploadMulti,
	SimpleHeightControl,
	SimpleColorPallete,
	SimpleRemoveButton,
	SimpleTip,
	SimpleColorSelector,
	SimpleMediaUpload,
} from "../blocksRegularComponents";
import { useState } from "react";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const [isModalCalled, setModalCalled] = useState(false);
	const {
		title_providers,
		title_games,
		providers,
		image_provider_height,
		border_block,
		blocksBackground,
		title_fs,
		color_title,
		text_fs,
		color_text,
		linkBackground,
	} = attributes;

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					{SimpleTip("Button Settings")}
					{SimpleColorSelector(
						attributes.buttonColor,
						"buttonColor",
						setAttributes,
						"Button Dropdown Color",
					)}
					{SimpleColorSelector(
						attributes.buttonBackgroundColor,
						"buttonBackgroundColor",
						setAttributes,
						"Button Dropdown Background",
					)}
					{SimpleHeightControl(
						attributes.buttonPaddingY,
						"buttonPaddingY",
						setAttributes,
						"Button Padding Y",
					)}
					{SimpleHeightControl(
						attributes.buttonPaddingX,
						"buttonPaddingX",
						setAttributes,
						"Button Padding X",
					)}
					{SimpleHeightControl(
						attributes.buttonBorderRadius,
						"buttonBorderRadius",
						setAttributes,
						"Button Border Radius",
					)}
				</PanelBody>
				<PanelBody>
					{SimpleTip("Modal Settings")}

					<h3>Modal Block Background</h3>
					{SimpleColorPallete(
						blocksBackground,
						"blocksBackground",
						setAttributes,
					)}
					<h3>Upper Buttons font Color</h3>
					{SimpleColorPallete(color_title, "color_title", setAttributes)}

					<h3>Color name Provider</h3>
					{SimpleColorPallete(color_text, "color_text", setAttributes)}

					<h3>Background for Provider</h3>
					{SimpleColorPallete(linkBackground, "linkBackground", setAttributes)}
				</PanelBody>
				<PanelBody>
					{SimpleTip("Settings for buttons")}
					{SimpleHeightControl(
						title_fs,
						"title_fs",
						setAttributes,
						"Upper buttons font size",
					)}

					{SimpleHeightControl(
						border_block,
						"border_block",
						setAttributes,
						"All Elements Border Radius",
					)}

					{SimpleHeightControl(
						image_provider_height,
						"image_provider_height",
						setAttributes,
						"Provider Image size",
					)}

					{SimpleHeightControl(
						text_fs,
						"text_fs",
						setAttributes,
						"Provider name font size",
						"string",
					)}
				</PanelBody>
			</InspectorControls>

			<div className="buttonWrap">
				<div
					onClick={() => {
						if (isModalCalled) {
							setModalCalled(false);
						} else {
							setModalCalled(true);
						}
					}}
					className="uni_button__provider"
					style={{
						background: attributes.buttonBackgroundColor,
						color: attributes.buttonColor,
						padding: `${attributes.buttonPaddingY} ${attributes.buttonPaddingX}`,
						borderRadius: attributes.buttonBorderRadius,
					}}
				>
					<div className={"uni_button__content"}>
						<RichText
							tagName={"div"}
							value={title_providers}
							onChange={(content) =>
								setAttributes({ title_providers: content })
							}
						/>
						{attributes.buttonDropdownIcon.url ? (
							<img
								src={attributes.buttonDropdownIcon.url}
								width={22}
								height={22}
								alt=""
							/>
						) : (
							""
						)}
					</div>

					{SimpleMediaUpload(
						"buttonDropdownIcon",
						attributes.buttonDropdownIcon,
						setAttributes,
						"",
					)}
				</div>
			</div>

			{isModalCalled && (
				<Popover>
					<div
						className="modal__content-wrapper"
						style={{
							borderRadius: border_block,
							background: blocksBackground,
						}}
					>
						<div className="search-modal-tabs">
							<div
								className="search-modal-tabs__wrapper"
								style={{
									background: blocksBackground,
									borderRadius: border_block,
								}}
							>
								<RichText
									className="search-modal-tabs__tab"
									style={{
										fontSize: title_fs,
										color: color_title,
									}}
									tagName="a"
									value={title_games}
									onChange={(content) =>
										setAttributes({ title_games: content })
									}
								/>

								<RichText
									className="search-modal-tabs__tab--active"
									style={{
										borderRadius: border_block,
										fontSize: title_fs,
										color: color_title,
										backgroundColor: blocksBackground,
									}}
									tagName="a"
									value={title_providers}
									onChange={(content) =>
										setAttributes({ title_providers: content })
									}
								/>
							</div>
						</div>
						<div className="dropped-providers">
							{providers.map((item, index) =>
								item.url ? (
									<a
										className="link-provider"
										key={index}
										style={{
											borderRadius: border_block,
											background: linkBackground,
										}}
									>
										<img
											className="image-provider"
											src={item.url}
											alt={item.alt}
											style={{
												height: image_provider_height,
											}}
										/>
										<span
											className="title-provider"
											style={{
												fontSize: text_fs,
												color: color_text,
											}}
										>
											{item.title}
										</span>
										{SimpleRemoveButton(
											"providers",
											providers,
											index,
											setAttributes,
										)}
									</a>
								) : (
									""
								),
							)}
							<div
								className="link-provider"
								style={{
									borderRadius: border_block,
									background: linkBackground,
								}}
							>
								{SimpleMediaUploadMulti(
									"providers",
									providers,
									setAttributes,
									" + Add providers",
								)}
							</div>
						</div>
					</div>
				</Popover>
			)}
		</div>
	);
}

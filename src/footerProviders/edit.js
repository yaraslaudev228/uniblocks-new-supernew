/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	AlignmentToolbar,
	InspectorControls,
	HeightControl,
	InspectorAdvancedControls,
} from "@wordpress/block-editor";

import {
	Flex,
	TextControl,
	PanelBody,
	ColorIndicator,
	ColorPalette,
} from "@wordpress/components";

import { useState } from "@wordpress/element";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import metadata from "./block.json";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const {
		providersBlocks,
		providerBackground,
		heightImageProvider,
		heightBlockProvider,
		widthBlockProvider,
		border_block,
		alignment,
		paddingElement,
	} = attributes;

	const [color, setColor] = useState(null);

	const onSelectImage = (media) => {
		const updatedBlocks = [...providersBlocks];

		media.forEach((element) => {
			let block_image = element.url;
			updatedBlocks.push({
				block_image: block_image,
			});
		});

		setAttributes({ providersBlocks: updatedBlocks });
	};
	const deleteProvider = (index) => {
		const updatedBlocks = [...providersBlocks];
		updatedBlocks.splice(index, 1);
		setAttributes({ providersBlocks: updatedBlocks });
	};
	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? "none" : newAlignment,
		});
	};

	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						<Flex>
							ALIGN CONTENT
							<AlignmentToolbar
								value={alignment}
								onChange={onChangeAlignment}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<ColorIndicator colorValue={providerBackground} />
							<TextControl
								label="Background element"
								value={providerBackground}
								onChange={(color) =>
									setAttributes({ providerBackground: color })
								}
							/>
						</Flex>
					</PanelBody>

					<PanelBody>
						<Flex>
							<HeightControl
								label="Height element"
								value={heightBlockProvider}
								onChange={(value) =>
									setAttributes({ heightBlockProvider: value })
								}
							/>
						</Flex>
					</PanelBody>

					<PanelBody>
						<Flex>
							<HeightControl
								label="Width element"
								value={widthBlockProvider}
								onChange={(value) =>
									setAttributes({ widthBlockProvider: value })
								}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<HeightControl
								label="Height Image Element"
								value={heightImageProvider}
								onChange={(value) =>
									setAttributes({ heightImageProvider: value })
								}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<TextControl
								label="Border element"
								value={border_block}
								onChange={(value) => setAttributes({ border_block: value })}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<TextControl
								label="Padding element"
								value={paddingElement}
								onChange={(value) => setAttributes({ paddingElement: value })}
							/>
						</Flex>
					</PanelBody>
				</InspectorControls>
			}
			{
				<InspectorAdvancedControls>
					<PanelBody>
						<ColorPalette
							value={color}
							enableAlpha={true}
							onChange={(color) => {
								setColor(color);
							}}
						/>
					</PanelBody>
				</InspectorAdvancedControls>
			}

			<div
				className="wr_editorProv"
				style={{
					justifyContent: alignment,
				}}
			>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => {
							onSelectImage(media);
						}}
						allowedTypes={["image"]}
						multiple={true}
						value={attributes.block_image}
						render={({ open }) => (
							<div className="uni_upload_mage" onClick={open}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									fill="currentColor"
									className="bi bi-image"
									viewBox="0 0 16 16"
								>
									<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
									<path
										fill-rule="evenodd"
										d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
									/>
								</svg>
								{!attributes.block_image ? "" : ""}
							</div>
						)}
					/>
				</MediaUploadCheck>

				{providersBlocks.map((item, index) =>
					item.block_image ? (
						<a
							key={index}
							className={"uni_provider uni_provider_admin"}
							style={{
								background: providerBackground,
								borderRadius: border_block,
								height: heightBlockProvider,
								width: widthBlockProvider,
								padding: paddingElement,
							}}
						>
							<img
								src={item.block_image}
								style={{
									height: heightImageProvider,
								}}
							/>

							<div
								className="uni_provider uniProviderDelete"
								onClick={(e) => {
									deleteProvider(index);
								}}
							>
								x
							</div>
						</a>
					) : (
						""
					),
				)}
			</div>
		</div>
	);
}

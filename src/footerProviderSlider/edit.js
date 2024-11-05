import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	RichText,
	InspectorControls,
	HeightControl,
	InspectorAdvancedControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import {
	Flex,
	TextControl,
	PanelBody,
	ColorIndicator,
	ColorPalette,
	FontSizePicker,
} from "@wordpress/components";

import {useState} from "@wordpress/element";

import "./editor.scss";
import {SimpleCheckbox, SimpleHeightControl} from "../Service";

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps();

	const {
		providersBlocks,
		providerBackground,
		heightImageProvider,
		heightBlockProvider,
		widthBlockProvider,
		border_block,
		title,
		paddingElement,
		alignment,
	} = attributes;

	const [color, setColor] = useState(null);
	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? "none" : newAlignment,
		});
	};
	const onSelectImage = (media) => {
		const updatedBlocks = [...providersBlocks];

		media.forEach((element) => {
			let block_image = element.url;
			updatedBlocks.push({
				block_image: block_image,
			});
		});

		setAttributes({providersBlocks: updatedBlocks});
	};
	const deleteProvider = (index) => {
		const updatedBlocks = [...providersBlocks];
		updatedBlocks.splice(index, 1);
		setAttributes({providersBlocks: updatedBlocks});
	};

	const onChangeText = (value) => {
		setAttributes({
			title: value,
		});
	};
	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						<div className="title-content">FONT SIZE TITLE</div>
						<Flex>
							<SimpleHeightControl
							 	value={attributes.fontSize}
								attributeName={'fontSize'}
								setAttributesCallback={setAttributes}
								label={'Размер Шрифта заголовка'}
							/>
						</Flex>
						<SimpleCheckbox
							value={attributes.showButtons}
							attributeName={'showButtons'}
							label={'Показать кнопки управления?'}
							setAttributesCallback={setAttributes}
							help={'Уберет/покажет кнопки управления слайдером'}
						/>
						<SimpleCheckbox
							value={attributes.isGrayScale}
							attributeName={'isGrayScale'}
							label={'Обесцветить?'}
							setAttributesCallback={setAttributes}
							help={'Обесцветит картинки'}
						/>
					</PanelBody>
					<PanelBody>
						<Flex>
							<TextControl
								label="Padding element"
								value={paddingElement}
								onChange={(value) => setAttributes({paddingElement: value})}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<ColorIndicator colorValue={providerBackground}/>
							<TextControl
								label="Background element"
								value={providerBackground}
								onChange={(color) =>
									setAttributes({providerBackground: color})
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
									setAttributes({heightBlockProvider: value})
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
									setAttributes({widthBlockProvider: value})
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
									setAttributes({heightImageProvider: value})
								}
							/>
						</Flex>
					</PanelBody>
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
							<TextControl
								label="Border element"
								value={border_block}
								onChange={(value) => setAttributes({border_block: value})}
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
				<div className="footer_provider swiper">
					<div className="section-title">
						<RichText
							className="wr_title_uni-win"
							tagName="div"
							value={title}
							style={{
								color: attributes.color,
								fontSize: attributes.fontSize
							}}
							onChange={(e) => onChangeText(e)}
						/>

						<div className="section-title-controls">
							<div className="wr-next-prev-btn">
								<div
									className="swiper-button-next"
									style={{
										color: attributes.color,
									}}
								/>

								<div
									className="swiper-button-prev"
									style={{
										color: attributes.color,
									}}
								/>
							</div>
						</div>
					</div>

					<div
						className="swiper-wrapper"
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
								render={({open}) => (
									<div className="uni_upload_mage" onClick={open}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="36"
											height="36"
											fill="currentColor"
											className="bi bi-image"
											viewBox="0 0 16 16"
										>
											<path
												d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
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
											borderRadius: border_block,
											width: "100%",
											filter: attributes.isGrayScale ? "grayscale(1)" : "grayscale(0)"
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
			</div>
		</div>
	);
}

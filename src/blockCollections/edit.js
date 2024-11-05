import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import "./editor.scss";
import metadata from "./block.json";
import {
	SimpleHeightControl,
	SimpleAddBlockInArray,
	SimpleRemoveButton,
	SimpleMediaUploadInArrayElement,
	updateBlockInArray,
	SimpleCheckbox,
	SimpleTip,
	SimpleColorSelector,
	SimpleGradientPicker,
	SimpleAlignmentSelector,
} from "../blocksRegularComponents";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const {
		border_block,
		blocksBackground,
		title_collections,
		collections,
		color_title_collection,
		fs_title_collection,
		color_name_collection,
		fs_name_collection,
		height_image,
		alignSwiper,
		count,
		direction_img,
	} = attributes;

	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						{SimpleTip("Collections Color scheme")}

						{SimpleGradientPicker(
							blocksBackground,
							"blocksBackground",
							setAttributes,
							"Elements gradients Background",
						)}

						{SimpleColorSelector(
							color_name_collection,
							"color_name_collection",
							setAttributes,
							"Elements color",
						)}
						{SimpleAlignmentSelector(
							alignSwiper,
							"alignSwiper",
							setAttributes,
							"Расположение элементов",
						)}
						{SimpleColorSelector(
							color_title_collection,
							"color_title_collection",
							setAttributes,
							"Title font color",
						)}
					</PanelBody>
					<PanelBody>
						{SimpleTip("Size of fonts and blocks + border radius settings")}
						{SimpleHeightControl(
							attributes.elements_gap,
							"elements_gap",
							setAttributes,
							"Gap inside element",
						)}
						{SimpleHeightControl(
							fs_title_collection,
							"fs_title_collection",
							setAttributes,
							"Font size title collections",
							"string",
						)}
						{SimpleHeightControl(
							fs_name_collection,
							"fs_name_collection",
							setAttributes,
							"Font size element",
							"string",
						)}

						{SimpleHeightControl(
							border_block,
							"border_block",
							setAttributes,
							"Element border radius",
							"string",
						)}
						{SimpleHeightControl(
							height_image,
							"height_image",
							setAttributes,
							"Height image element",
							"string",
						)}
						{SimpleHeightControl(
							count,
							"count",
							setAttributes,
							"Number of elements in a row",
							"number",
						)}
					</PanelBody>
					<PanelBody>
						{SimpleCheckbox(
							direction_img,
							"direction_img",
							setAttributes,
							"Image position in the element",
							"row or column?",
						)}
					</PanelBody>
				</InspectorControls>
			}
			<section>
				<div className="uni_collection swiper">
					<div className="section-title">
						<RichText
							value={title_collections}
							className={"title_collections"}
							style={{
								color: color_title_collection,
								fontSize: fs_title_collection,
							}}
							tagName="div"
							onChange={(content) =>
								setAttributes({ title_collections: content })
							}
						/>

						<div className="collections-title-controls">
							<div className="wr-next-prev-btn-collection">
								<div
									className="swiper-button-next"
									style={{
										color: blocksBackground,
									}}
								/>

								<div
									className="swiper-button-prev"
									style={{
										color: blocksBackground,
									}}
								/>
							</div>
						</div>
					</div>

					<div
						className="swiper-wrapper"
						style={{
							justifyContent: alignSwiper,
						}}
					>
						{collections.map((item, index) => (
							<a
								href="/goto"
								className="swiper-slide"
								key={index}
								style={{
									background: blocksBackground,
									borderRadius: border_block,
									width: count,
									flexDirection: direction_img ? "row" : "column",
									gap: attributes.elements_gap,
								}}
							>
								{SimpleMediaUploadInArrayElement(
									"collections",
									collections,
									index,
									"image_collection",
									setAttributes,
								)}
								{item.image_collection ? (
									<img
										src={item.image_collection.url}
										alt=""
										style={{
											borderRadius: border_block,
											height: height_image,
										}}
									/>
								) : (
									""
								)}
								<div className="uni_collection_wr_description">
									<RichText
										value={item.name_collection}
										className={"name_collection"}
										tagName={"div"}
										style={{
											color: color_name_collection,
											fontSize: fs_name_collection,
										}}
										onChange={(content) => {
											updateBlockInArray(
												"collections",
												collections,
												index,
												"name_collection",
												content,
												setAttributes,
											);
										}}
									/>
								</div>
								{SimpleRemoveButton(
									"collections",
									collections,
									index,
									setAttributes,
								)}
							</a>
						))}
						{SimpleAddBlockInArray(
							"collections",
							collections,
							metadata.attributes.collections.default[0],
							setAttributes,
							"add_element_collection",
							"+ Add element",
						)}
					</div>
				</div>
			</section>
		</div>
	);
}

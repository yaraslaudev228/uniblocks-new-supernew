/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save({ attributes }) {
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

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="footer_provider swiper" data-nav = {attributes.showButtons}>
				<div className="section-title">
					<RichText.Content
						className="wr_title_uni-win"
						tagName="div"
						value={title}
						style={{
							color: attributes.color,
							fontSize: attributes.fontSize
						}}
					/>
					{
						attributes.showButtons && (
							<div className="section-title-controls">
								<div className="wr-next-prev-btn">
									<div
										className="footer_provider_swiper-button-next swiper-button-next"
										style={{
											color: attributes.color,
										}}
									/>
									<div
										className="footer_provider_swiper-button-prev swiper-button-prev"
										style={{
											color: attributes.color,
										}}
									/>
								</div>
							</div>
						)
					}
				</div>

				<div
					className="swiper-wrapper"
					style={{
						justifyContent: alignment,
					}}
				>
					{providersBlocks.map((item, index) =>
						item.block_image ? (
							<a
								href="/goto"
								key={index}
								className={"uni_provider swiper-slide"}
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
										width: widthBlockProvider,
										borderRadius: border_block,
										height: heightImageProvider,
										filter: attributes.isGrayScale ? "grayscale(1)" : "grayscale(0)"
									}}
									alt=""
								/>
							</a>
						) : (
							""
						),
					)}
				</div>
			</div>
		</div>
	);
}

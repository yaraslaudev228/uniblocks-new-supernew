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
		alignment,
		paddingElement,
	} = attributes;

	const blockProps = useBlockProps.save();

	blockProps.style = {
		justifyContent: alignment,
	};

	return (
		<div {...blockProps}>
			{providersBlocks.map((item, index) =>
				item.block_image ? (
					<a
						href="/goto"
						key={index}
						className={"uni_provider"}
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
							alt=""
						/>
					</a>
				) : (
					""
				),
			)}
		</div>
	);
}

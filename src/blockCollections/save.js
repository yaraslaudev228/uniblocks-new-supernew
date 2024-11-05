import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		title_collections,
		collections,
		border_block,
		blocksBackground,
		color_title_collection,
		fs_title_collection,
		color_name_collection,
		fs_name_collection,
		height_image,
		count,
		alignSwiper,
		direction_img,
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<section>
				<div className="uni_collection swiper">
					<div className="section-title">
						<RichText.Content
							value={title_collections}
							className={"title_collections"}
							style={{
								color: color_title_collection,
								fontSize: fs_title_collection,
							}}
							tagName="div"
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
									<RichText.Content
										style={{
											color: color_name_collection,
											fontSize: fs_name_collection,
										}}
										value={item.name_collection}
										className={"name_collection"}
										tagName={"div"}
									/>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

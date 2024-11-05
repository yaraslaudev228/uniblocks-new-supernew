import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		winners,
		biggestWins,
		latestWins,
		blocksBackground,
		border_block,

		fs_title_winners,
		fs_sum_winners,
		fs_game_winners,
		color_title_winners,
		color_sum_winners,
		color_game_winners,
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="uni_winner swiper">

				<div className="swiper-wrapper">
					{winners.map((item, index) => (
						<div
							className="swiper-slide"
							key={index}
							style={{
								background: blocksBackground,
								borderRadius: border_block,
								padding: attributes.itemsPadding
							}}
						>
							{item.image ? (
								<img
									src={item.image.url}
									alt=""
									style={{
										borderRadius: border_block,
									}}
								/>
							) : (
								""
							)}
							<div className="uni_winner_wr_description" style={{
								display: 'flex',
								flexDirection: attributes.elementsDirection,

								alignItems: attributes.elementsDirection === 'row' ? 'center' : 'flex-start'
							}}>
								<RichText.Content
									value={item.name}
									className={"title_winners"}
									tagName={"div"}
									style={{
										color: color_title_winners,
										fontSize: fs_title_winners,
									}}
								/>
								<RichText.Content
									value={item.sum}
									className={"sum_winners"}
									tagName={"div"}
									style={{
										color: color_sum_winners,
										fontSize: fs_sum_winners,
									}}
								/>
								<RichText.Content
									value={item.title}
									className={"game_title_wiiner"}
									tagName={"div"}
									style={{
										color: color_game_winners,
										fontSize: fs_game_winners,
									}}
								/>
								<a href="/goto" className={'uni_overlay__button'}/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

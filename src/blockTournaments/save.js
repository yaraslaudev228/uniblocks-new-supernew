
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		tournaments,
		title_section,
		alignment,
		align,
		heightBlock,
		color_title_tour,
		color_prize_tour,
		color_text_tour,
		color_button,
		button_fs,
		color_button_bg,
		title_fs,
		text_fs,
		prize_fs,
		border_block,
		title_section_fs,
		count_block,
	} = attributes;

	const blockProps = useBlockProps.save();

	blockProps.style = {
		justifyContent: alignment,
	};

	return (
		<div {...blockProps}>
			<section className="section section-promotions">
				<RichText.Content
					className={`title-tournaments ${align}`}
					value={title_section}
					style={{
						color: attributes.color,
						fontSize: title_section_fs,
						textAlign: align,
					}}
					tagName="div"
				/>

				<div className="promo-block__wrap">
					{tournaments.map((item, index) => (
						<div
							className="promo-block"
							key={index}
							style={{
								height: heightBlock,
								flexBasis: `calc(100%/${count_block} - 1rem)`,
								borderRadius: border_block,
								background: "url(" + item.image_tour.url + ") no-repeat",
								backgroundSize: 'cover'
							}}
						>


							<div className={`promo-block__info ${alignment}`}>
								<RichText.Content
									className="home-promo__bonus"
									value={item.title_tour}
									style={{
										color: color_title_tour,
										fontSize: title_fs,
									}}
									tagName="div"
								/>
								<RichText.Content
									className="promo-block__prize"
									value={item.prize_tour}
									style={{
										color: color_prize_tour,
										fontSize: prize_fs,
									}}
									tagName="div"
								/>
								<RichText.Content
									className="home-promo__game"
									value={item.text_tour}
									style={{
										color: color_text_tour,
										fontSize: text_fs,
									}}
									tagName="div"
								/>
								<div className="timer__items">
									<div
										className="timer__item timer__days"
										style={{
											color: color_text_tour,
											fontSize: text_fs,
											background: attributes.timer_items_background,
											borderRadius: attributes.timer_items_border_radius
										}}
									>
										50
									</div>
									<div
										className="timer__item timer__hours"
										style={{
											color: color_text_tour,
											fontSize: text_fs,
											background: attributes.timer_items_background,
											borderRadius: attributes.timer_items_border_radius
										}}
									>
										00
									</div>
									<div
										className="timer__item timer__minutes"
										style={{
											color: color_text_tour,
											fontSize: text_fs,
											background: attributes.timer_items_background,
											borderRadius: attributes.timer_items_border_radius
										}}
									>
										00
									</div>
									<div
										className="timer__item timer__seconds"
										style={{
											color: color_text_tour,
											fontSize: text_fs,
											background: attributes.timer_items_background,
											borderRadius: attributes.timer_items_border_radius
										}}
									>
										00
									</div>
								</div>
								<div className="promo-block__buttons">
									<a
										className="custom-btn"
										href="/goto"
										style={{
											color: color_button,
											background: color_button_bg,
											borderRadius: border_block,
											fontSize: button_fs,
										}}
									>
										{item.get_tour}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

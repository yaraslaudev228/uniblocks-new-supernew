import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		title_providers,
		title_games,
		providers,
		image_provider_height,
		border_block,
		blocksBackground,
		linkBackground,
		title_fs,
		color_title,
		text_fs,
		color_text,
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div
				className="button-provider"
				style={{
					background: attributes.buttonBackgroundColor,
					color: attributes.buttonColor,
					padding: `${attributes.buttonPaddingY} ${attributes.buttonPaddingX}`,
					borderRadius: attributes.buttonBorderRadius,
				}}
			>
				<RichText.Content value={title_providers} />
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
			<div className="providers-drop">
				<div className="modal__backdrop"></div>
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
								background: linkBackground,
								borderRadius: border_block,
							}}
						>
							<RichText.Content
								href="/goto"
								className="search-modal-tabs__tab"
								style={{
									fontSize: title_fs,
									color: color_title,
								}}
								tagName="a"
								value={title_games}
							/>
							<RichText.Content
								href="/goto"
								className="search-modal-tabs__tab--active"
								style={{
									borderRadius: border_block,
									fontSize: title_fs,
									color: color_title,
									backgroundColor: blocksBackground,
								}}
								tagName="a"
								value={title_providers}
							/>
						</div>
						<button
							className="modal__close-button"
							style={{
								background: linkBackground,
							}}
						>
							<i
								className="fa-solid fa-xmark"
								style={{
									color: color_title,
								}}
							/>
						</button>
					</div>
					<div className="dropped-providers">
						{providers.map((item, index) =>
							item.url ? (
								<a
									href="/goto"
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
										alt=""
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

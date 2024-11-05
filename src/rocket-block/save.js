import {useBlockProps, RichText} from '@wordpress/block-editor';
import {SimpleMediaUpload} from "../Service";

export default function save({attributes}) {
	const bannerStyles = {}
	if (attributes.background) {
		bannerStyles.background = `url(${attributes.background.url}) no-repeat`
		bannerStyles.backgroundSize = 'cover'
		bannerStyles.backgroundPosition = 'center'
	}
	if (attributes.padding) {
		bannerStyles.padding = attributes.padding
	}
	if(attributes.borderRadius) {
		bannerStyles.borderRadius = attributes.borderRadius
	}

	const blockProps = useBlockProps.save();
  blockProps.className = 'uni-block-rocket-banner'
	blockProps.style = bannerStyles
	return (<div {...blockProps}>

			<div className="caption">
				<RichText.Content
					tagName={'div'}
					className={'title'}
					value={attributes.bigTitle.title}
 					style={{
						fontSize: attributes.bigTitle.size,
						color: attributes.bigTitle.color,
						lineHeight: attributes.bigTitle.lineHeight
					}}
				/>
				<RichText.Content
					tagName={'div'}
					value={attributes.description.title}
 					style={{
						fontSize: attributes.description.size,
						color: attributes.description.color,
						lineHeight: attributes.description.lineHeight
					}}
				/>
				<RichText.Content
					tagName={'a'}
					href={"/goto"}
					className={'uni-btn'}
					value={attributes.button.title}
 					style={{
						fontSize: attributes.button.size,
						color: attributes.button.color,
						lineHeight: attributes.button.lineHeight,
						padding: attributes.button.padding,
						background: attributes.button.background,
						borderRadius: attributes.button.borderRadius
					}}
				/>
			</div>
			<div className="uni_blocks__list" onClick={() => setSelectedPart('blocks')}>
				<div className="block" style={{
					background: attributes.blocks.background,
					backdropFilter: `blur(${attributes.blocks.blur})`,
					padding: attributes.blocks.padding,
					borderRadius: attributes.blocks.borderRadius
				}}>
					<RichText.Content
						tagName={'div'}
						className={'title'}
						value={attributes.blockVipTitle.title}
						style={{
							fontSize: attributes.blockVipTitle.size,
							lineHeight: attributes.blockVipTitle.lineHeight,
							color: attributes.blockVipTitle.color
						}}
 					/>
					<RichText.Content
						tagName={'div'}
						className={'title'}
						value={attributes.blockVipDescription.title}
						style={{
							fontSize: attributes.blockVipDescription.size,
							color: attributes.blockVipDescription.color,
							lineHeight: attributes.blockVipDescription.lineHeight
						}}
 					/>

					{
						attributes.blockVipImage && (
							<a href="/goto" className={'label'} style={{
								position: 'absolute',
								top: attributes.blockVipImagePosition.top,
								left: attributes.blockVipImagePosition.left,
								right: attributes.blockVipImagePosition.right,
								bottom: attributes.blockVipImagePosition.bottom
							}}>
								<img src={attributes.blockVipImage.url}
										 width={120}
										 height={120}
										 alt="Label"
								/>
							</a>
						)
					}
				</div>
				<div className="block" style={{
					background: attributes.blocks.background,
					backdropFilter: `blur(${attributes.blocks.blur})`,
					padding: attributes.blocks.padding,
					borderRadius: attributes.blocks.borderRadius
				}}>
					<RichText.Content
						tagName={'div'}
						className={'title'}
						value={attributes.blockTournamentsTitle.title}
						style={{
							fontSize: attributes.blockTournamentsTitle.size,
							lineHeight: attributes.blockTournamentsTitle.lineHeight,
							color: attributes.blockTournamentsTitle.color
						}}
 					/>
					<RichText.Content
						tagName={'div'}
						className={'title'}
						value={attributes.blockTournamentsDescription.title}
						style={{
							fontSize: attributes.blockTournamentsDescription.size,
							color: attributes.blockTournamentsDescription.color,
							lineHeight: attributes.blockTournamentsDescription.lineHeight
						}}
 					/>

					{
						attributes.blockTournamentsImage && (
							<a href="/goto" className={'label'} style={{
								position: 'absolute',
								top: attributes.blockTournamentsImagePosition.top,
								left: attributes.blockTournamentsImagePosition.left,
								right: attributes.blockTournamentsImagePosition.right,
								bottom: attributes.blockTournamentsImagePosition.bottom
							}}>
								<img src={attributes.blockTournamentsImage.url}
										 width={120}
										 height={120}
										 alt="Label"
								/>
							</a>
						)
					}
				</div>
			</div>

	</div>)
}

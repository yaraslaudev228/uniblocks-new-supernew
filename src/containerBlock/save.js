import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';


export default function save({attributes}) {
	const blockProps = useBlockProps.save();
	const containerBackground = {
		backgroundColor: `${attributes.backgroundColor}`,
		backgroundImage: `url(${attributes.backgroundImage.url})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		minHeight: attributes.containerHeight ? attributes.containerHeight : 'auto',
		borderRadius: attributes.outerBorderRadius,
		backgroundPosition: 'center'

	}
	if(attributes.backgroundGradient) {
		containerBackground.backgroundImage = attributes.backgroundGradient
	}

	return (

		<div {...blockProps}>
			<section className={'uni_container_section'}
							 style={containerBackground }
			>
			<div className="uni_container" style={
				{
					maxWidth: attributes.containerSize,
					width: '100%',
					margin: '0 auto',
					background: attributes.innerBackgroundColor,
					borderRadius: attributes.innerBorderRadius,
					padding: `${attributes.containerPaddingY} ${attributes.containerPaddingX}`
				}
			}
			>

				<InnerBlocks.Content/>
			</div>
			</section>


		</div>
	)

}

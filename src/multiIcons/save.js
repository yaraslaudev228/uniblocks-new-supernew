
import {useBlockProps} from '@wordpress/block-editor';


export default function save({attributes}) {

	const blockProps = useBlockProps.save();
	blockProps.className = blockProps.className + ' uni_icons__list'
	let justifycontent
	switch (attributes.iconsJustify) {
		case 'left' :
			justifycontent = 'flex-start'
			break
		case 'right':
			justifycontent = 'flex-end'
			break
		case 'center' :
			justifycontent = 'center'
			break
	}
	blockProps.style = {
		justifyContent: justifycontent,
		gap: attributes.iconsGap
	}
	return (

		<div {...blockProps}>
			{
				attributes.icons.length !== 0 ? attributes.icons.map((icon, index) => (
					<a href={'/goto'} className={'uni_icon'} key={index} style={{
						background: attributes.iconsBackground,
						padding: attributes.iconsPadding,
						borderRadius: attributes.iconsBorderRadius
					}}>
						<img src={icon.url} width={attributes.iconsWidth} height={attributes.iconsHeight} alt={icon.alt}/>
		 			</a>
				)) : ""
			}
		</div>

	)

}

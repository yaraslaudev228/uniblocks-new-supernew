import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';


export default function save({attributes}) {
	const blockProps = useBlockProps.save();
	blockProps.className = blockProps.className + ' uni_header__collection-w-burger'
 	blockProps.style = {
		position: attributes.isAbsolute ? 'absolute' : 'static',
		top: "0",
		left: "0",
		minHeight: attributes.headerHeight,
		padding: `0 ${attributes.headerPadding}`

	}
	return (

		<div {...blockProps}>

			<InnerBlocks.Content/>
		</div>
	)

}

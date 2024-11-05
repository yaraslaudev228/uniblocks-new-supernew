import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';


export default function save({attributes}) {
	const blockProps = useBlockProps.save();
	blockProps.style = {
		borderRadius: attributes.blockBorderRadius,
		padding: attributes.blockPadding,
		background: attributes.background
	}
	return (

		<div {...blockProps}>

			<InnerBlocks.Content/>
		</div>
	)

}

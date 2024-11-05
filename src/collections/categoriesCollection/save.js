import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';


export default function save() {
	const blockProps = useBlockProps.save();
	blockProps.className += " uni_categories__collection"
	return (

		<div {...blockProps}>
					<InnerBlocks.Content/>
		</div>
	)

}

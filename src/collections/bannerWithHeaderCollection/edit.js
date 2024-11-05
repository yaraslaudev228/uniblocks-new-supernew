import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	blockProps.className = blockProps.className + ' '
	return (
		<div {...blockProps}>
			<InnerBlocks
				template={
					[
						['uni-blocks/header-collection', {}],
						['uni-blocks/banner-top', {}],
					]
				}
			/>
		</div>

	);
}

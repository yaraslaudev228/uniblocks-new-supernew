import {useBlockProps, InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import {
	SimpleColorSelector,
	SimpleAttributeSet,
	SimpleHeightControl,
	SimpleCheckbox,
	SimpleTip
} from '../../blocksRegularComponents'
import {PanelBody} from '@wordpress/components'
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()

	return (
		<div {...blockProps}>

			<InnerBlocks
				template={
					[
						['uni-blocks/heading-with-button', {content: "Featured"}],
						['create-block/uni-posts-swiper', {}],
						['uni-blocks/heading-with-button', {content: "Featured"}],
						['create-block/uni-posts', {}],
						['uni-blocks/heading-with-button', {content: "Featured"}],
						['create-block/uni-posts-swiper', {}],
					]
				}
			/>
		</div>

	);
}

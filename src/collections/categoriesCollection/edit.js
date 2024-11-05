import {useBlockProps, InnerBlocks, BlockControls} from '@wordpress/block-editor';
import {ToolbarGroup, ToolbarButton, Flex} from '@wordpress/components'
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
  blockProps.className += " uni_categories__collection"
	return (
		<div {...blockProps}>
			<InnerBlocks
				template={
					[
						[
							'uni-blocks/menu-block', {
							menuItemsWidth: "80%",
							menuItems: attributes.categories,
							menuItemsGap: "1rem"
						}
						],
						[
							'uni-blocks/menu-block', {
							menuItemsWidth: "20%",
							menuItems: attributes.searchButton
						}
						],
						[
							'uni-blocks/block-popup', {}
						]

					]
				}
			/>
		</div>

	);
}

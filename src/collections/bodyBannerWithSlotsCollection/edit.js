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
						['uni-blocks/banner-on-top', {}],
						['uni-blocks/heading-with-button', {content: "Popular slots"}],
						['create-block/uni-posts-swiper', {}],
						['uni-blocks/heading-with-button', {content: "Featured slots"}],
						['create-block/uni-posts-swiper', {}],
						['uni-blocks/heading-with-button', {content: "Promotions"}],
						['uni-blocks/promo', {
							promoBlocks: [
								{
									"block_image": "http://localhost/wp-content/uploads/2024/02/Screenshot_1058.png",
									"block_title": "Bonus title",
									"block_description": "Describe your block here",
									"block_button": "Get bonus",
									"block_url": "/goto",
									"block_columns": "2"
								},
								{
									"block_image": "http://localhost/wp-content/uploads/2024/02/Screenshot_1058.png",
									"block_title": "Bonus title",
									"block_description": "Describe your block here",
									"block_button": "Get bonus",
									"block_url": "/goto",
									"block_columns": "2"
								},
								{
									"block_image": "http://localhost/wp-content/uploads/2024/02/Screenshot_1058.png",
									"block_title": "Bonus title",
									"block_description": "Describe your block here",
									"block_button": "Get bonus",
									"block_url": "/goto",
									"block_columns": "1"
								}
							]
						}]
					]
				}
			/>
		</div>

	);
}

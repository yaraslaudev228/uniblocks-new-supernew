import {useBlockProps, InnerBlocks, BlockControls} from '@wordpress/block-editor';
import {ToolbarGroup, ToolbarButton, Flex} from '@wordpress/components'
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()


	return (
		<div {...blockProps}>

			<InnerBlocks
				template={
					[
						[
							'core/image', {}
						],
						[
							'uni-blocks/menu-block', {
							menuItemsGap: "1rem",
							menuItemsAlignment: "center",
							menuItemsWidth: "100%",
							menuItems: [
								{
									"name": "Login",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								},
								{
									"name": "Sign Up",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								},
								{
									"name": "Sign Up",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								},
								{
									"name": "Sign Up",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								}
							]
						}
						],
						[
							'uni-blocks/footer-providers', {
							alignment: 'center',
							providerBackground: "transparent",
							widthBlockProvider: "155px",
							heightBlockProvider: "56px",
							title: ""
						}
						],
						[
							'uni-blocks/menu-block', {
							menuItemsGap: "1rem",
							menuItemsAlignment: "center",
							menuItemsWidth: "100%",
							menuItems: [
								{
									"name": "Login",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								},
								{
									"name": "Sign Up",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								},
								{
									"name": "Sign Up",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								},
								{
									"name": "Sign Up",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								}
							]
						}
						]
					]
				}
			/>
		</div>

	);
}

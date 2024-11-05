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
						['core/image', {
							url: "/wp-content/uploads/2024/02/logo.svg",
							href: "/"
						}],
						['uni-blocks/menu-block', {
							menuDirection: "vertical",
							menuItems: [
								{
									"name": "Login",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "#163779",
									"align": "center",
									"flexGrow": "unset"
								},
								{
									"name": "Sign Up",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "#bb9b49",
									"align": "center",
									"flexGrow": "unset"
								}
							]
						}],
						['core/separator', {
							style: {
								opacity: '.3'
							}
						}],
						[
							'uni-blocks/menu-block', {
							menuDirection: "vertical",
							menuItems: [
								{
									"name": "Stay Casino",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "",
									"align": "left",
									"flexGrow": "unset"
								},
								{
									"name": "Games",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "",
									"align": "left",
									"flexGrow": "unset"
								},
								{
									"name": "Bonus",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "",
									"align": "left",
									"flexGrow": "unset"
								},
								{
									"name": "Login",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "",
									"align": "left",
									"flexGrow": "unset"
								}
							]
						}
						],
						['core/separator', {
							style: {
								background: "#fff"
							}
						}],
						[
							'uni-blocks/menu-block', {
							menuDirection: "vertical",
							menuItems: [
								{
									"name": "Stay Casino",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "",
									"align": "left",
									"flexGrow": "unset"
								},
								{
									"name": "Games",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "",
									"align": "left",
									"flexGrow": "unset"
								},
								{
									"name": "Bonus",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "",
									"align": "left",
									"flexGrow": "unset"
								},
								{
									"name": "Login",
									"url": "/goto",
									"icon": "",
									"color": "#fff",
									"background": "",
									"align": "left",
									"flexGrow": "unset"
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

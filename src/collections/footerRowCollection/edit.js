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
						['core/columns', {}, [
							['core/column', {
								width: '30%'
							}, [
								[
									'core/image', {}
								],
								[
									'core/paragraph',
									{ content: "This website is for entertainment purposes only. We are not responsible for incorrect information on bonuses, offers and promotions on this website. We always recommend that the player examines the conditions and double-check the bonus directly on the casino companies website. Gambling can be addictive, please play responsibly. Strictly 18+."}
								],
								[
									'core/paragraph',
									{content: 'Copyright © 2023 SlotsPeak.com. All rights reserved'}
								],
								[
									'uni-blocks/footer-providers',
									{
										title: '',
										providerBackground: "transparent",
										heightImageProvider: "auto",
										heightBlockProvider: "auto",
										widthBlockProvider: "auto"
									}
								]
							]
							],
							['core/column', {width: '68%'}, [
								['core/columns', {}, [
									['core/column', {width: '33%'}, [
										['core/paragraph', {content: 'Quick Links',placeholder: 'Quick Menu'}],
										[
											'uni-blocks/menu-block', {
											menuDirection: "vertical",
											menuItemsGap: "1rem",
											menuItemsAlignment: "left",
											menuItemsWidth: "100%",
											menuItems: [
												{
													"name": "Login",
													"url": "/goto",
													"icon": "",
													"color": "",
													"background": "",
													"align": "left",
													"flexGrow": false,
													"padding": "0",
												},
												{
													"name": "Sign Up",
													"url": "/goto",
													"icon": "",
													"color": "",
													"background": "",
													"align": "left",
													"flexGrow": false,
													"padding": "0",
												},
												{
													"name": "Sign Up",
													"url": "/goto",
													"icon": "",
													"color": "",
													"background": "",
													"align": "left",
													"flexGrow": false,
													"padding": "0",
												},
												{
													"name": "Sign Up",
													"url": "/goto",
													"icon": "",
													"color": "",
													"background": "",
													"align": "left",
													"flexGrow": false,
													"padding": "0",
												}
											]
										}
										],
									]
									],
									['core/column', {width: '33%'}, [
										['core/paragraph', { content: 'Contact Us',placeholder: 'Contact Us'}],
										[
											'uni-blocks/menu-block', {
											menuDirection: "vertical",
											menuItemsGap: "1rem",
											menuItemsAlignment: "left",
											menuItemsWidth: "100%",
											menuItems: [
												{
													"name": "Login",
													"url": "/goto",
													"icon": "",
													"color": "",
													"background": "",
													"align": "left",
													"flexGrow": false,
													"padding": "0",
												},
											]
										}
										],
									]
									],
									['core/column', {width: '33%'}, [
										['core/paragraph', {content: 'Contact Us', placeholder: 'Contact Us'}],
										[
											'uni-blocks/menu-block', {
											menuDirection: "vertical",
											menuItemsGap: "1rem",
											menuItemsAlignment: "left",
											menuItemsWidth: "100%",
											menuItems: [
												{
													"name": "Terms And Conditions",
													"url": "/goto",
													"icon": "",
													"color": "",
													"background": "",
													"align": "left",
													"flexGrow": false,
													"padding": "0",
												},
												{
													"name": "Support",
													"url": "/goto",
													"icon": "",
													"color": "",
													"background": "",
													"align": "left",
													"flexGrow": false,
													"padding": "0",
												},

											]
										}
										],
									]
									],

								]
								]
							]
							],

						]
						]
					]

				}
			/>
		</div>

	);
}

import {useBlockProps, InnerBlocks, BlockControls, InspectorControls} from '@wordpress/block-editor';
import {ToolbarGroup, ToolbarButton, Flex, PanelBody} from '@wordpress/components'
import './editor.scss';
import {SimpleHeightControl, SimpleTip} from '../../blocksRegularComponents'

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	blockProps.className += ' uni_bet_footer__collection'
	blockProps.style = {
		padding: attributes.footerPaddingY + ' ' + attributes.footerPaddingX
	}

	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						{
							SimpleTip('Footer Paddings')
						}
						{
							SimpleHeightControl(
								attributes.footerPaddingY,
								'footerPaddingY',
								setAttributes,
								'Padding Y for collection'
							)
						}
						{
							SimpleHeightControl(
								attributes.footerPaddingX,
								'footerPaddingX',
								setAttributes,
								'Padding X for collection'
							)
						}
					</PanelBody>
				</InspectorControls>
			}
			<InnerBlocks
				template={
					[
						['core/columns', {}, [
							['core/column', {
								width: '30%'
							},
								[
									[
										'core/image', {}
									]
								]
							],
							['core/column', {width: '68%'},
								[
									['uni-blocks/multi-icons', {}]
								]
							]
						],
						],
						['core/paragraph',
							{content: "<strong>Welcome to site</strong><br/>Sports Betting and Lotto games in Malawi. Welcome to our online betting portal, where we are proud"}
						],
						['core/columns', {}, [
							['core/column', {width: '100%'},
								[
									['core/paragraph', {content: "<strong>Menu Name</strong>"}],
									[
										'uni-blocks/menu-block', {
										menuItemsGap: "1rem",
										menuItemsAlignment: "left",
										menuDirection: "vertical",
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
									]
								]
							]

						]],
						['core/columns', {}, [
							['core/column', {width: '100%'},
								[
									['core/paragraph', {content: "<strong>Menu Name</strong>"}],
									[
										'uni-blocks/menu-block', {
										menuItemsGap: "1rem",
										menuItemsAlignment: "left",
										menuDirection: "vertical",
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
									]
								]
							]

						]]
					]
				}
			/>
		</div>

	);
}

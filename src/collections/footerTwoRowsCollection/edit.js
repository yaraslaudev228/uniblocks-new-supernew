import {useBlockProps, InnerBlocks, InspectorControls, BlockControls} from '@wordpress/block-editor';
import {PanelBody} from '@wordpress/components'
import {SimpleHeightControl, SimpleColorSelector} from "../../blocksRegularComponents";
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
 	blockProps.style = {
		borderRadius: attributes.blockBorderRadius,
		padding: attributes.blockPadding,
		background: attributes.background
	}

	return (
		<div {...blockProps}>
 		  <InspectorControls>
				<PanelBody>
					{
						SimpleHeightControl(
							attributes.blockPadding,
							'blockPadding',
							setAttributes,
							'Отступы для блока'
						)
					}
					{
						SimpleHeightControl(
							attributes.blockBorderRadius,
							'blockBorderRadius',
							setAttributes,
							'Скругляшки для блока'
						)
					}
					{
						SimpleColorSelector(
							attributes.background,
							'background',
							setAttributes,
							'Фон блока'
						)
					}
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				template={
					[
						['core/columns', {},
							[
								['core/column', {}, [
									['core/image'],
								]],
								['core/column', {}, [
									['core/paragraph', {content: 'Top 10 online casinos'}],
									['core/paragraph', {content: 'When it comes to gambling with cryptocurrency, there are a few things that you need to keep in mind. First and foremost, you need to make sure that you are playing at a reputable and trustworthy casino. There are a lot of scammers out there who are looking to take advantage of people who are new to the world of crypto gambling. That is why it is important to do your research and only play at casinos that have a good reputation.'}],
								]],
								['core/column', {}, [
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
								]],
							]
						],
						['core/columns', {},
							[
								['core/column', {width: '19%'}, [
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
								]],
								['core/column', {width: '19%'}, [
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
								]],
								['core/column', {width: '19%'}, [
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
								]],
								['core/column', {width: '19%'}, [
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
								]],
								['core/column', {width: '19%'}, [
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
								]],

							]
						]
					]

				}
			/>
		</div>

	);
}

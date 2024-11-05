import {useBlockProps, InnerBlocks, BlockControls, InspectorControls} from '@wordpress/block-editor';
import {ToolbarGroup, ToolbarButton, Flex, PanelBody, CheckboxControl} from '@wordpress/components'
import {
	SimpleTip,
	SimpleHeightControl,
	SimpleAttributeSet,
	SimpleColorSelector,
	SimpleCheckbox
} from '../../blocksRegularComponents'
import './editor.scss';
import {useEffect, useState} from '@wordpress/element'

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	const [showInFront, setShowInFront] = useState(attributes.showInFront);

	useEffect(() => {
		setHeaderHeight(attributes.headerHeight)
		getFrontAttribute()
	}, [attributes.headerHeight, attributes.showInFront])


	const getFrontAttribute = () => {
		jQuery.ajax({
			url: '/wp-admin/admin-ajax.php',
			method: 'GET',
			data: {
				action: 'uni_get_header_for_front',
			},
			success: function (response) {
				setAttributes({showInFront: Boolean(response)});
			},
			error: function (error) {
				console.error('Error fetching front attribute:', error);
			}
		});
	};

	const setFrontAttribute = (checked) => {
		jQuery.ajax({
			url: '/wp-admin/admin-ajax.php',
			method: 'POST',
			data: {
				action: 'uni_set_header_for_front',
				showInFront: checked
			},
			success: function (response) {

				setAttributes({showInFront: Boolean(response)});
			},
			error: function (error) {
				console.error('Error setting front attribute:', error);
			}
		});
	};

	const setHeaderHeight = (value) => {
		jQuery(function ($) {
			$.post('/wp-admin/admin-ajax.php', {
				action: 'uni_set_header_height',
				headerHeight: value
			}).done(function (response) {
				console.log(response)
			})
		})
	}
	blockProps.className = blockProps.className + ' uni_header_logo_center'
	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						{SimpleTip('Show header in front page')}
						<CheckboxControl
							checked={showInFront}
							onChange={(checked) => {
								setShowInFront(checked);
								setAttributes({showInFront: checked});
								setFrontAttribute(checked);
							}}
							label={'Show header in front-page'}
							help={'If checked will show this header at front page (do not use when your frontpage header in banner)'}
						/>
						{
							SimpleTip('Check if want to place it inside banner')
						}
						{
							SimpleCheckbox(
								attributes.isAbsolute,
								'isAbsolute',
								setAttributes,
								'Will be in top on banner',
								'If you want to place it in banner correctly - check it'
							)
						}
						{
							SimpleTip('Is this header gonna be mobile menu?')
						}
						{
							SimpleCheckbox(
								attributes.isMenuMobile,
								'isMenuMobile',
								setAttributes,
								'Check if you want this header in mobile',
								'Will transfrom to sidebar in mobile resolutions'
							)
						}
						{
							SimpleHeightControl(
								attributes.headerPadding,
								'headerPadding',
								setAttributes,
								'Header padding left-right'
							)
						}
						{
							SimpleHeightControl(
								attributes.headerHeight,
								'headerHeight',
								setAttributes,
								'Header height'
							)
						}
					</PanelBody>

				</InspectorControls>
			}

			<InnerBlocks
				template={
					[['core/columns', {}, [
						['core/column', {
						width: '33%',
						verticalAlignment: 'center'
						}, [
							["uni-blocks/burger-aside", {}],
						]],
						['core/column', {
							width: '33%',
							verticalAlignment: 'center'
						}, [
							['core/image'],
						]],
						['core/column', {
							width: '33%',
							verticalAlignment: 'center'
						}, [
							[
								'uni-blocks/menu-block', {
								menuItemsGap: "1rem",
								menuItemsAlignment: "right",
								flexGrowAll: false,
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
									}
								]
							}
							]
						]],
					]]]
				}

			/>
		</div>

	);
}

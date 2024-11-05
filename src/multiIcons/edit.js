import {useBlockProps, InspectorControls, BlockControls} from '@wordpress/block-editor';
import {
	PanelBody, ToolbarGroup, ToolbarButton
} from '@wordpress/components'
import {SimpleMediaUploadMulti, SimpleTip, SimpleHeightControl, SimpleRemoveButton, SimpleAlignmentSelector, SimpleColorSelector} from "../blocksRegularComponents";

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	blockProps.className += " uni_icons__list"
	let justifycontent
	switch (attributes.iconsJustify) {
		case 'left' :
			justifycontent = 'flex-start'
			break
		case 'right':
			justifycontent = 'flex-end'
			break
		case 'center' :
			justifycontent = 'center'
			break
	}
	blockProps.style = {
		justifyContent: justifycontent,
		gap: attributes.iconsGap
	}
	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						{
							SimpleTip('Size of icons')
						}
						{
							SimpleHeightControl(
								attributes.iconsWidth,
								'iconsWidth',
								setAttributes,
								'Icons Width'
							)
						}
						{
							SimpleHeightControl(
								attributes.iconsHeight,
								'iconsHeight',
								setAttributes,
								'Icons Height'
							)
						}
						{
							SimpleHeightControl(
								attributes.iconsGap,
								'iconsGap',
								setAttributes,
								'Отступ между иконками'
							)
						}
						{
							SimpleHeightControl(
								attributes.iconsPadding,
								'iconsPadding',
								setAttributes,
								'Отступы изнутри для иконок'
							)
						}
						{
							SimpleColorSelector(
								attributes.iconsBackground,
								'iconsBackground',
								setAttributes,
								'Фон для иконок'
							)
						}
						{
							SimpleHeightControl(
								attributes.iconsBorderRadius,
								'iconsBorderRadius',
								setAttributes,
								'Скругление для иконок'
							)
						}
					</PanelBody>
				</InspectorControls>
			}
			{
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton>
							{
								SimpleMediaUploadMulti(
									'icons',
									attributes.icons,
									setAttributes,
									'Upload Icons'
								)
							}
						</ToolbarButton>
						<ToolbarButton>
							{
								SimpleAlignmentSelector(
									attributes.iconsJustify,
									'iconsJustify',
									setAttributes,
									'Align Icons'
								)
							}
						</ToolbarButton>
					</ToolbarGroup>
				</BlockControls>
			}

			{
				attributes.icons.length !== 0 ? attributes.icons.map((icon, index) => (
					<div className={'uni_icon'} style={
						{

							background: attributes.iconsBackground,
							padding: attributes.iconsPadding,
							borderRadius: attributes.iconsBorderRadius
						}
					} key={index}>
						<img src={icon.url} width={attributes.iconsWidth} height={attributes.iconsHeight} alt={icon.alt}/>
						{
							SimpleRemoveButton(
								'icons',
								attributes.icons,
								index,
								setAttributes
							)
						}
					</div>
				)) : 	SimpleMediaUploadMulti(
					'icons',
					attributes.icons,
					setAttributes,
					'Upload Icons'
				)
			}


		</div>

	);
}

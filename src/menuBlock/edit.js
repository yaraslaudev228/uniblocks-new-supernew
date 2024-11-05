import {
	useBlockProps, RichText
} from '@wordpress/block-editor';


import {
	SimpleMediaUploadInArrayElement,
	SimpleAddBlockInArray,
	updateBlockInArray,
	SimpleRemoveButton
} from '../blocksRegularComponents'

import './editor.scss';
import metadata from './block.json';

import {useState} from '@wordpress/element'
import Inspector from "./inspector";

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()

	const [isElementSelected, setElementSelected] = useState({
		index: null
	})

	blockProps.className = blockProps.className + ' uni_menu_items'
	blockProps.className = blockProps.className + ' menu_items menu_items-' + attributes.menuDirection
	blockProps.className += ' menu_items_align_' + attributes.menuItemsAlignment
	blockProps.style = {
		gap: attributes.menuItemsGap,
		margin: attributes.menuItemsMargin,
		maxWidth: attributes.menuItemsWidth,
		flexBasis: attributes.menuItemsWidth,
		background: attributes.menuItemsBlockBackground,
		padding: attributes.menuItemsBlockPadding,
		borderRadius: attributes.menuItemsBlockBorderRadius
	}
	const handleElementClick = (e, index) => {
		if (e.currentTarget.classList.contains('uni_menu_item')) {
			setElementSelected({index: index})
		}
	}

	return (
		<div  {...blockProps}>
			<Inspector
				setAttributes={setAttributes}
				attributes={attributes}
				isElementSelected={isElementSelected}
			/>
			{
				!attributes.menuItems ? '' : attributes.menuItems.map((item, index) => (

					<a key={index}
						 className={'uni_menu_item ' + (isElementSelected.index === index ? "uni_item uni_item__selected" : "")}
						 style={{
							 background: item.background ? item.background : attributes.menuItemsBackground,
							 padding: item.padding ? item.padding : attributes.menuItemsPadding,
							 color: item.color ? item.color : attributes.menuItemsColor,
							 borderRadius: item.borderRadius !== "" ? item.borderRadius : attributes.itemsBorderRadius,
							 flexGrow: item.flexGrow ? '1' : attributes.flexGrowAll,
							 minWidth: item.width ? item.width : attributes.itemsWidth,
							 flexDirection: item.direction ? item.direction : attributes.itemsInnerDirection,
							 boxShadow: item.boxShadow ? item.boxShadow : '',
							 border: `${item.border ? item.border.width + ' ' + (item.border.style ? item.border.style : "") + ' ' + item.border.color : "0"}`
						 }} onClick={(e) => handleElementClick(e, index)}>
						{
							SimpleMediaUploadInArrayElement(
								'menuItems',
								attributes.menuItems,
								index,
								'icon',
								setAttributes,
								''
							)
						}
						{item.icon ? <img src={item.icon.url} width={item.iconSize ? item.iconSize : attributes.menuItemsIconSize}
																	height={item.iconSize ? item.iconSize : attributes.menuItemsIconSize} alt={item.name}/> : ''}
						<RichText
							className={'title'}
							tagName="div"
							value={item.name}
							onChange={(newTitle) => updateBlockInArray('menuItems', attributes.menuItems, index, 'name', newTitle, setAttributes)}
							placeholder="..."
							style={{
								fontSize: attributes.itemsFontSize
							}}
						/>
						{
							SimpleRemoveButton(
								'menuItems',
								attributes.menuItems,
								index,
								setAttributes
							)
						}
					</a>
				))
			}
			{
				SimpleAddBlockInArray(
					'menuItems',
					attributes.menuItems,
					metadata.attributes.menuItems.default[0],
					setAttributes,
					'add',
					'+ Add'
				)
			}

		</div>
	);
}

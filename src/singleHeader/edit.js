import {__} from '@wordpress/i18n';
import InspectorSettings from "./inspector";
import {useBlockProps, RichText, InnerBlocks} from '@wordpress/block-editor';
import './editor.scss';
import {
	AddItemToArray,
	MediaUploadToArrayItem,
	SingleMediaUpload,
	UpdateItemFieldInArray
} from "../components";

import metadata from './block.json'
import {SimpleRemoveButton} from "../Service";
import {useState} from "react";

export default function Edit({attributes, setAttributes}) {
	const [selectedParentElement, setSelectedParentElement] = useState(null)
	const [selectedElement, setSelectedElement] = useState({
		type: null,
		index: null
	})

	return (
		<header {...useBlockProps()}>
			<InspectorSettings attributes={attributes}
												 setAttributes={setAttributes}
												 selectedParentElement={selectedParentElement}
												 selectedElement={selectedElement}
			/>
			<div className="logo_wrap">
				{
					attributes.isBurger ?
						<InnerBlocks
							allowedBlocks={['uni-blocks/burger-aside', {}]}
						/>
						: <InnerBlocks
						 	allowedBlocks={['uni-blocks/mobile-trigger', {}]}
						/>
				}

				<SingleMediaUpload
					currentState={attributes.logo}
					attributeName={'logo'}
					setAttributes={setAttributes}
					label={'Лого'}
				/>
				<div className="logo" onClick={() => {
					setSelectedParentElement('logo')
				}}
						 style={{
							 border: selectedParentElement === 'logo' ? '1px solid #00a0d2' : 'unset'
						 }}
				>
					<img src={attributes.logo.url} width={attributes.logoWidth} height={attributes.logoHeight} alt=""/>
				</div>
				<div className="menu_items"
						 style={{
							 gap: attributes.menuItemsGap,
							 border: selectedParentElement === 'menuItems' ? '1px solid #00a0d2' : 'unset'
						 }}
						 onClick={() => {
							 setSelectedParentElement('menuItems')
						 }}>
					{attributes.menuItems.map((item, index) => (
						<div className={'item'} key={index}
								 onClick={() => {
									 setSelectedElement({type: 'menuItems', index: index})
								 }}
								 style={{
									 background: item.background ? item.background : attributes.menuItemsBackground,
									 color: item.color ? item.color : attributes.menuItemsColor,
									 padding: item.padding ? item.padding : attributes.menuItemsPadding,
									 borderRadius: item.borderRadius ? item.borderRadius : attributes.menuItemsBorderRadius,
									 fontSize: item.fontSize ? item.fontSize : attributes.menuItemsFontSize, 
                   width: attributes.menuItemsWidth,
									 border: item.border && item.border.width ?
										 `${item.border.width} ${item.border.style} ${item.border.color}` :
										 `${attributes.menuItemsBorder.width} ${attributes.menuItemsBorder.style} ${attributes.menuItemsBorder.color}`
								 }}
						>
							<MediaUploadToArrayItem
								currentState={attributes.menuItems}
								attributeName={'menuItems'}
								setAttributes={setAttributes}
								label={''}
								field={'icon'}
								index={index}
							/>
							{
								item.icon && item.icon.url && (
									<img src={item.icon.url} width={item.iconSize ? item.iconSize : attributes.menuItemsIconSize} height={item.iconSize ? item.iconSize : attributes.menuItemsIconsSize} alt={item.name}/>
								)
							}
							<RichText
								value={item.name}
								onChange={(text) => UpdateItemFieldInArray(
									attributes.menuItems,
									'menuItems',
									'name',
									index,
									text,
									setAttributes
								)}
							/>
							<SimpleRemoveButton
								currentArray={attributes.menuItems}
								attributeName={'menuItems'}
								blockIndex={index}
								setAttributesCallback={setAttributes}
							/>
						</div>
					))}
					<AddItemToArray
						currentArray={attributes.menuItems}
						attributeName={'menuItems'}
						itemToAdd={metadata.attributes.menuItems.default[0]}
						setAttributes={setAttributes}
						classname={'add'}
						text={'+ Меню'}
					/>
				</div>
			</div>
			<div className="buttons"
					 style={{
						 gap: attributes.buttonsGap,
						 border: selectedParentElement === 'buttons' ? '1px solid #00a0d2' : 'unset'
					 }}
					 onClick={() => setSelectedParentElement('buttons')}>
				{
					attributes.buttons.map((item, index) => (
						<div className={'btn'} key={index} style={{
							background: item.background ? item.background : attributes.buttonsBackground,
							color: item.color ? item.color : attributes.buttonsColor,
							padding: item.padding ? item.padding : attributes.buttonsPadding,
							borderRadius: item.borderRadius ? item.borderRadius : attributes.buttonsBorderRadius,
							fontSize: item.fontSize ? item.fontSize : attributes.buttonsFontSize,
              width: attributes.buttonsWidth, textAlign: attributes.buttonsAlign,
							border: item.border && item.border.width ?
								`${item.border.width} ${item.border.style} ${item.border.color}` :
								`${attributes.buttonsBorder.width} ${attributes.buttonsBorder.style} ${attributes.buttonsBorder.color}`
						}}
						onClick={() => setSelectedElement({type: 'buttons', index: index})}
						>
							<MediaUploadToArrayItem
								currentState={attributes.buttons}
								attributeName={'buttons'}
								setAttributes={setAttributes}
								label={''}
								field={'icon'}
								index={index}
							/>
							{
								item.icon && item.icon.url && (
									<img src={item.icon.url} width={item.iconSize ? item.iconSize : attributes.buttonsIconsSize} height={item.iconSize ? item.iconSize : attributes.buttonsIconsSize} alt={item.name}/>
								)
							}
							<RichText
								value={item.name}
								onChange={(text) => UpdateItemFieldInArray(
									attributes.buttons,
									'buttons',
									'name',
									index,
									text,
									setAttributes
								)}
							/>
							<SimpleRemoveButton
								currentArray={attributes.buttons}
								attributeName={'buttons'}
								blockIndex={index}
								setAttributesCallback={setAttributes}
							/>
						</div>
					))
				}
				<AddItemToArray
					currentArray={attributes.buttons}
					attributeName={'buttons'}
					setAttributes={setAttributes}
					classname={'add'}
					text={'+ Кнопка'}
					itemToAdd={metadata.attributes.buttons.default[0]}
				/>
			</div>

		</header>
	);
}

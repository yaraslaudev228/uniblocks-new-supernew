import {
	useBlockProps, RichText,
	InspectorControls, BlockControls
} from '@wordpress/block-editor';

import {
	PanelBody, Flex, ToolbarGroup, ToolbarButton
} from '@wordpress/components'

import {
	SimpleColorSelector,
	SimpleAlignmentSelector,
	updateBlockInArray,
	SimpleAddBlockInArray,
	SimpleRemoveButton,
	SimpleMediaUploadInArrayElement,
	SimpleAttributeSet,
	AttributeSetForBlockInArray,
	AlignmentSetForBlockInArray,
	SimpleGradientPicker,
	ColorSelectorSetForBlockInArray,
	SimpleHeightControl,
	SimpleTip

} from '../blocksRegularComponents'
import {SimpleCheckbox} from "../Service";

import './editor.scss';
import metadata from './block.json';

import {useEffect, useState} from '@wordpress/element'

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	const [isItemSelected, setItemSelected] = useState({index: null})


	return (
		<div  {...blockProps}>
			{
				isItemSelected.index !== null && attributes.promoBlocks[isItemSelected.index] && (
					<BlockControls>
						<ToolbarGroup>
							<ToolbarButton>
								<Flex>
									{
										SimpleMediaUploadInArrayElement(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_image',
											setAttributes,
											'Background Image'
										)
									}
								</Flex>
							</ToolbarButton>
						</ToolbarGroup>
						<ToolbarGroup>
							<ToolbarButton>
								<Flex>
									{
										SimpleMediaUploadInArrayElement(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_alt_image',
											setAttributes,
											'Additional Image'
										)
									}

								</Flex>
							</ToolbarButton>
						</ToolbarGroup>
					</BlockControls>
				)
			}
			{
				<InspectorControls>
					<div className={'single__inspector_item'}>
						{
							isItemSelected.index !== null && attributes.promoBlocks[isItemSelected.index] && (
								<PanelBody>
									<h3>Настройка блока №<b>{Number(isItemSelected.index) + 1}</b></h3>
									{
										AttributeSetForBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_columns',
											setAttributes,
											'Размер блока',
											'number'
										)
									}
									{
										AttributeSetForBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_url',
											setAttributes,
											'Ссылка блока'

										)
									}
									{
										AttributeSetForBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_target',
											setAttributes,
											'Цель блока'

										)
									}
									{
										AttributeSetForBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_alt_position_top',
											setAttributes,
											'Доп картинка Y координаты'
										)
									}

									{
										AttributeSetForBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_alt_position_left',
											setAttributes,
											'Доп картинка X координаты'
										)
									}
									{
										ColorSelectorSetForBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_caption_background',
											setAttributes,
											'Фон оврелея'
										)

									}
									{
										AlignmentSetForBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_align',
											setAttributes,
											'Алигн блока'
										)
									}

								</PanelBody>
							)
						}
					</div>
					<PanelBody>
						<h2>Настройки промокода</h2>
						{SimpleColorSelector(
							attributes.promocodeBackground,
							'promocodeBackground',
							setAttributes,
							'Фон промокода'
						)}
						{
							SimpleColorSelector(
							attributes.promocodeColor,
							'promocodeColor',
							setAttributes,
							'Цвет промокода'
						)
						}
						{
							SimpleHeightControl(
								attributes.promocodeBradius,
								'promocodeBradius',
								setAttributes,
								'Скругляшики промокода'
							)
						}
						{
							SimpleAttributeSet(
								attributes.promocodePadding,
								'promocodePadding',
								setAttributes,
								'Отступы промокода'
							)
						}
						{
							SimpleHeightControl(
								attributes.promocodeFontSize,
								'promocodeFontSize',
								setAttributes,
								'Размер шрифта'
							)
						}


					</PanelBody>
					<PanelBody>
						<SimpleCheckbox
						 value={attributes.isGrow}
						 attributeName={'isGrow'}
						 setAttributesCallback={setAttributes}
						 label={'Вырастить все блоки?'}
						 help={'Заполнит пустое пространство шириной блока'}
						/>
						{SimpleTip('Размеры шрифтов')}
						{
							SimpleHeightControl(
								attributes.blockMaxWidth,
								'blockMaxWidth',
								setAttributes,
								'Макс ширина блоков'
							)
						}
						{
							SimpleAttributeSet(
								attributes.blockMargin,
								'blockMargin',
								setAttributes,
								'Маргины (отступы внешние)'
							)
						}
						{
							SimpleHeightControl(
								attributes.titleFontSize,
								'titleFontSize',
								setAttributes,
								'Размер заголовка'
							)
						}
						{
							SimpleHeightControl(
								attributes.bodyFontSize,
								'bodyFontSize',
								setAttributes,
								'Размер описание'
							)
						}
						{
							SimpleHeightControl(
								attributes.upperFontSize,
								'upperFontSize',
								setAttributes,
								'Верхний текст размер'
							)
						}
						{
							SimpleHeightControl(
								attributes.bottomFontSize,
								'bottomFontSize',
								setAttributes,
								'Нижний текст размер'
							)
						}
						{SimpleTip('Text alignment')}
						{
							SimpleAlignmentSelector(
								attributes.align,
								'align',
								setAttributes,
								'Алигн для всех'
							)
						}
						{SimpleTip('Цветовая схема')}
						{
							SimpleColorSelector(
								attributes.captionColor,
								'captionColor',
								setAttributes,
								'Цвет шрифта содержимого'
							)
						}
						{
							SimpleColorSelector(
								attributes.captionBackground,
								'captionBackground',
								setAttributes,
								'Фон оверлея'
							)
						}
						{
							SimpleGradientPicker(
								attributes.captionBackground,
								'captionBackground',
								setAttributes,
								'Фон оверлея градиент'
							)
						}
						{
							SimpleColorSelector(
								attributes.buttonBackground,
								'buttonBackground',
								setAttributes,
								'Фон кнопки'
							)
						}

						{
							SimpleColorSelector(
								attributes.buttonColor,
								'buttonColor',
								setAttributes,
								'Цвет шрифта кнопки'
							)
						}
						{SimpleTip('Настройки кнопки')}
						{
							SimpleAttributeSet(
								attributes.buttonsBorderRadius,
								'buttonsBorderRadius',
								setAttributes,
								'Скругляшки для кнопок'
							)
						}
						{
							SimpleAttributeSet(
								attributes.blocksHeight,
								'blocksHeight',
								setAttributes,
								'Высота всех блоков'
							)
						}
						{
							SimpleAttributeSet(
								attributes.blocksBorderRadius,
								'blocksBorderRadius',
								setAttributes,
								'Скругляшки для всех блоков'
							)
						}

					</PanelBody>

				</InspectorControls>
			}


			<div className="uni_promotions_list" style={{
				margin: attributes.blockMargin,
				maxWidth: attributes.blockMaxWidth
			}}>
				{
					!attributes.promoBlocks ? '' : attributes.promoBlocks.map((item, index) => (

							<div key={index}
									 onClick={(e) => {
										 setItemSelected({index: index, value: item.block_columns})
									 }}
									 className={'uni_promotion_bg_image uni_promotion_bg_image-'
										 + (item.block_align ? item.block_align : attributes.align) + " "
										 + (isItemSelected.index && isItemSelected.index === index ? "uni_item__selected" : "")
									 }
									 style={
										 {
											 background: 'url(' + item.block_image.url + ') no-repeat',
											 backgroundSize: 'cover',
											 backgroundPosition: 'center',
											 minHeight: attributes.blocksHeight,
											 flexBasis: 'calc(' + (100 / Number(item.block_columns)  + '% - 1rem'),
											 flexGrow: attributes.isGrow ? '1' : '0',
											 borderRadius: attributes.blocksBorderRadius,
											 color: attributes.captionColor
										 }
									 }>

								<RichText
									tagName={'div'}
									className={'uni_promotion_top_text'}
									placeholder={"Enter your value..."}
									value={item.block_top_title}
									onChange={(content) => updateBlockInArray(
										'promoBlocks',
										attributes.promoBlocks,
										index,
										'block_top_title',
										content,
										setAttributes
									)}
									style={{
										fontSize: attributes.upperFontSize
									}}
								/>
								{
									item.block_alt_image ?

										<img

											src={item.block_alt_image.url}
											style={{
												position: 'absolute',
												top: item.block_alt_position_top,
												left: item.block_alt_position_left,
												zIndex: '15'
											}}

										/>
										: ""
								}
								<div className="uni_promotion__overlay" style={{
									background: item.block_caption_background ? item.block_caption_background : attributes.captionBackground,
									borderRadius: attributes.blocksBorderRadius
								}}/>
								<div className="uni_promotion__caption">


									<RichText
										className={'uni_title'}
										tagName="div" // The tag type of the RichText container.
										value={item.block_title} // The content value bound to this RichText.
										onChange={(newTitle) => updateBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											index,
											'block_title',
											newTitle,
											setAttributes
										)}
										style={{
											fontSize: attributes.titleFontSize
										}}
										placeholder="Enter title here..." // Optional: Placeholder text.
									/>

									<RichText
										tagName={'div'}
										className={'uni_description'}
										value={item.block_description}
										onChange={(content) => {
											updateBlockInArray(
												'promoBlocks',
												attributes.promoBlocks,
												index,
												'block_description',
												content,
												setAttributes
											)
										}}
										style={{
											fontSize: attributes.bodyFontSize
										}}
									/>
									<RichText
									  value={item.block_promocode}
										style={{
											background: attributes.promocodeBackground,
											color: attributes.promocodeColor,
											padding: attributes.promocodePadding,
											borderRadius: attributes.promocodeBradius,
											fontSize: attributes.promocodeFontSize
										}}
										placeholder={'Если надо промокод...'}
										onChange={(text) => updateBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											index,
											'block_promocode',
											text,
											setAttributes
										)}
									/>

									<a href={item.block_url} className="uni_btn uni_btn__signup"
										 contentEditable={true}
										 onMouseUp={
											 (e) => {
												 console.log(window.getSelection().toString())
											 }
										 }
										 style={{
											 background: attributes.buttonBackground,
											 color: attributes.buttonColor,
											 borderRadius: attributes.buttonsBorderRadius
										 }}
										 onBlur={(e) => {
											 updateBlockInArray(
												 'promoBlocks',
												 attributes.promoBlocks,
												 index,
												 'block_button',
												 e.target.innerText,
												 setAttributes
											 )
										 }}
									>{item.block_button}</a>


								</div>
								{SimpleRemoveButton('promoBlocks', attributes.promoBlocks, index, setAttributes)}
								<RichText
									tagName={'div'}
									className={'uni_promotion_terms'}
									placeholder={"Enter your value..."}
									value={item.block_bonus_terms}
									onChange={(content) => updateBlockInArray(
										'promoBlocks',
										attributes.promoBlocks,
										index,
										'block_bonus_terms',
										content,
										setAttributes
									)}
									style={{
										fontSize: attributes.bottomFontSize
									}}
								/>
							</div>
						)
					)
				}

			</div>
			{
				SimpleAddBlockInArray(
					'promoBlocks',
					attributes.promoBlocks,
					metadata.attributes.promoBlocks.default[0],
					setAttributes,
					'uni_promotion uni_promotion_add',
					'+ Add promotion'
				)
			}

		</div>
	);
}

import {
	InspectorControls, BlockControls
} from '@wordpress/block-editor';
import {
	AlignmentSetForBlockInArray,
	AttributeSetForBlockInArray,
	ColorSelectorSetForBlockInArray,
	SimpleAlignmentSelector, SimpleAttributeSet,
	SimpleColorSelector,
	SimpleGradientPicker,
	SimpleHeightControl,
	SimpleMediaUploadInArrayElement,
	SimpleTip
} from "../blocksRegularComponents";
import {
	SingleSizeControl
} from "../components";
import {
	PanelBody, Flex, ToolbarGroup, ToolbarButton
} from '@wordpress/components'
import {HeightControlForArray, updateBlockInArray} from "../Service";

export default function Inspector({isItemSelected, setAttributes, attributes}) {
	return (
		<>
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
											'Фон блока'
										)
									}
								</Flex>
							</ToolbarButton>
							<ToolbarButton onClick={(e) => updateBlockInArray(
								'promoBlocks',
								attributes.promoBlocks,
								isItemSelected.index,
								'block_image',
								{url: null, id: null},
								setAttributes
							)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
										 className="bi bi-trash3-fill" viewBox="0 0 16 16">
									<path
										d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
								</svg>
								Удалить Фон</ToolbarButton>
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
											'Доп картинка'
										)
									}

								</Flex>
							</ToolbarButton>
							<ToolbarButton onClick={(e) => updateBlockInArray(
								'promoBlocks',
								attributes.promoBlocks,
								isItemSelected.index,
								'block_alt_image',
								{url: null, id: null},
								setAttributes
							)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
										 className="bi bi-trash3-fill" viewBox="0 0 16 16">
									<path
										d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
								</svg>
								Удалить доп картинку</ToolbarButton>
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
									<HeightControlForArray
										currentState={attributes.promoBlocks}
										arrayAttributeName={'promoBlocks'}
										setAttributesCallback={setAttributes}
										indexToUpdate={isItemSelected.index}
										fieldToUpdate={'block_alt_image_height'}
										label={'Размер доп картинки'}
									/>
									{
										ColorSelectorSetForBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_label_bg',
											setAttributes,
											'Фон лейбы'
										)

									}
									{
										ColorSelectorSetForBlockInArray(
											'promoBlocks',
											attributes.promoBlocks,
											isItemSelected.index,
											'block_label_color',
											setAttributes,
											'Цвет шрифта лейбы'
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
						<SingleSizeControl
						attributeName={'gapBetween'}
						currentState={attributes.gapBetween}
						label={'Отступы между блоками'}
						setAttributes={setAttributes}

						/>

						{
							SimpleAttributeSet(
								attributes.block_label_padding,
								'block_label_padding',
								setAttributes,
								'Отступы лейбы'
							)
						}
						{
							SimpleAttributeSet(
								attributes.block_label_border_radius,
								'block_label_border_radius',
								setAttributes,
								'Скругляшки лейбы'
							)
						}
						{
							SimpleHeightControl(
								attributes.block_label_fontsize,
								'block_label_fontsize',
								setAttributes,
								'Шрифт лейбы'
							)
						}
						{SimpleTip('Размеры шрифтов')}
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
		</>


	)
}

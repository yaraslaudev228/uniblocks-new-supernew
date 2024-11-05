import {
	AlignmentSetForBlockInArray,
	AttributeSetForBlockInArray, CheckboxSetForBlockInArray,
	SimpleAlignmentSelector,
	SimpleColorSelector,
	SimpleHeightControl,
	SimpleTip,
	SimpleDirectionButtons
} from "../blocksRegularComponents";
import {
	PanelBody
} from '@wordpress/components'
import {

	InspectorControls
} from '@wordpress/block-editor';
import {ArrayItemDirection, HeightControlForArray} from "../Service";


export default function Inspector({selectedBlock, attributes, setAttributes}) {
	return (
		<InspectorControls>
			{
				selectedBlock !== false && attributes.promoBlocks[selectedBlock] && (
					<PanelBody>
						<div className="single__inspector_item">
							<h3>Настройки для конкретного блока №{selectedBlock + 1}</h3>
							{
								CheckboxSetForBlockInArray(
									'promoBlocks',
									attributes.promoBlocks,
									selectedBlock,
									'block_flex_direction',
									setAttributes,
									'Реверсировать?',
									'Поменяет местами картинку и текст'
								)
							}

							{
								AttributeSetForBlockInArray(
									'promoBlocks',
									attributes.promoBlocks,
									selectedBlock,
									'block_size',
									setAttributes,
									'Block size',
									'number'
								)
							}
							{
								AttributeSetForBlockInArray(
									'promoBlocks',
									attributes.promoBlocks,
									selectedBlock,
									'target',
									setAttributes,
									'Цель промоушена',
									'text'
								)
							}
							{
								AttributeSetForBlockInArray(
									'promoBlocks',
									attributes.promoBlocks,
									selectedBlock,
									'block_image_height',
									setAttributes,
									'Image height',
									'text'
								)
							}
							{
								AlignmentSetForBlockInArray(
									'promoBlocks',
									attributes.promoBlocks,
									selectedBlock,
									'block_align',
									setAttributes,
									'Current block align'
								)
							}
							{
								CheckboxSetForBlockInArray(
									'promoBlocks',
									attributes.promoBlocks,
									selectedBlock,
									'is_block_grow',
									setAttributes,
									'Grow block for fullwidth',
									'If you want it full width - check this'
								)
							}
						</div>
					</PanelBody>
				)

			}
			<PanelBody>
				{
					SimpleTip('Настройки блока промоушн')
				}
				{
					SimpleAlignmentSelector(attributes.align, 'align', setAttributes, 'Расположение элементов лево/центр/право')
				}
				{
					SimpleDirectionButtons(
						attributes.columnDirection,
						'columnDirection',
						'column',
						'row',
						setAttributes,
						'Направление бонуса'
					)
				}
				{
					SimpleHeightControl(
						attributes.blocksContainerWidth,
						'blocksContainerWidth',
						setAttributes,
						'Ширина контейнера блоков'
					)
				}
				{
					SimpleHeightControl(
						attributes.titleFontSize,
						'titleFontSize',
						setAttributes,
						'Размер шрифта заголовка бонуса'
					)
				}
				{
					SimpleHeightControl(
						attributes.bodyFontSize,
						'bodyFontSize',
						setAttributes,
						'Размер шрифта тела бонуса'
					)
				}
				{
					SimpleHeightControl(
						attributes.buttonBorderRadius,
						'buttonBorderRadius',
						setAttributes,
						'Скругление кнопки (для всех)'
					)
				}
				{
					SimpleHeightControl(
						attributes.promotionsGap,
						'promotionsGap',
						setAttributes,
						'Отступ между промоушенами'
					)
				}
				{
					SimpleHeightControl(
						attributes.promotionsBorderRadius,
						'promotionsBorderRadius',
						setAttributes,
						'Скругление углов промоушена'
					)
				}
				{
					SimpleHeightControl(
						attributes.promotionsImageWidth,
						'promotionsImageWidth',
						setAttributes,
						'Ширина изображения (актуально для горизонтальных)'
					)
				}
				{
					SimpleHeightControl(
						attributes.promotionsImagesHeight,
						'promotionsImagesHeight',
						setAttributes,
						'Высота изображения промоушена'
					)
				}
				{
					SimpleHeightControl(
						attributes.promotionsShadowHeight,
						'promotionsShadowHeight',
						setAttributes,
						'Высота тенюшки между картинкой и текстом'
					)
				}
			</PanelBody>
			<PanelBody>
				{SimpleTip('Цветовая схема промоушена')}
				{
					SimpleColorSelector(attributes.captionBackground, 'captionBackground', setAttributes, 'Цвет тела')
				}
				{
					SimpleColorSelector(attributes.buttonBackground, 'buttonBackground', setAttributes, 'Цвет кнопки')
				}
				{
					SimpleColorSelector(attributes.buttonColor, 'buttonColor', setAttributes, 'Цвет шрифта кнопки')
				}

				{
					SimpleColorSelector(
						attributes.captionColor,
						'captionColor',
						setAttributes,
						'Цвет шрифта для всех блоков'
					)
				}
				{
					SimpleColorSelector(
						attributes.captionTitleColor,
						'captionTitleColor',
						setAttributes,
						'Цвет заголовков всех промоушенов'
					)
				}

			</PanelBody>

		</InspectorControls>
	)
}

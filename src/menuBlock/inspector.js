import {
	AlignmentControl, InspectorControls
} from '@wordpress/block-editor';

import {
	Flex, PanelBody, CheckboxControl
} from '@wordpress/components'

import {
	BorderControlForArray, ColorControlForArray, HeightControlForArray,
	SimpleAlignmentSelector,
	SimpleAttributeSet,
	SimpleBorderControl,
	SimpleColorSelector,
	SimpleDirectionButtons, SimpleHeightControl,
	SimpleTip, TextControlForArray, updateBlockInArray
} from "../blocksRegularComponents";
import {ArrayItemDirection, SimpleCheckbox, MenuTextCollector} from '../Service/index'
import {ArrayColorSelector} from "../components";


export default function Inspector({attributes, setAttributes, isElementSelected}) {
	return (
		<InspectorControls>
      <MenuTextCollector
       attributeName={'menuItems'}
       itemsArray={attributes.menuItems}
       setAttributesCallback={setAttributes}
       label={'Быстренько наполнить меню'}
       fieldName={'name'}
       urlFieldName={'url'}
      />
			{
				isElementSelected.index !== null && attributes.menuItems[isElementSelected.index] && (
					<PanelBody>
						<div className="single__inspector_item">
							<h3>
								<Flex>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
											 className="bi bi-sliders" viewBox="0 0 16 16">
										<path fill-rule="evenodd"
													d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
									</svg>
									Настройки для кнопки "{attributes.menuItems[isElementSelected.index].name}"
								</Flex>
							</h3>
							{
								TextControlForArray(
									'menuItems',
									attributes.menuItems,
									isElementSelected.index,
									'url',
									setAttributes,
									'Ссылка для кнопки'
								)
							}
							{
								TextControlForArray(
									'menuItems',
									attributes.menuItems,
									isElementSelected.index,
									'target',
									setAttributes,
									'Цель для кнопки'
								)
							}
							<Flex>
								Алигн для кнопки
								<AlignmentControl
									value={attributes.menuItems[isElementSelected.index].align}
									onChange={(value) =>
										updateBlockInArray('menuItems', attributes.menuItems, isElementSelected.index, 'align',
											value, setAttributes)
									}
								/>
							</Flex>
							{
								SimpleTip('Настройки границ для выбранного блока')
							}
							{
								BorderControlForArray(
									'menuItems',
									attributes.menuItems,
									isElementSelected.index,
									'border',
									setAttributes,
									'Граница для кнопки'
								)
							}
							{
								HeightControlForArray(
									'menuItems',
									attributes.menuItems,
									isElementSelected.index,
									'width',
									setAttributes,
									'Ширина элемента'
								)
							}
							{
								HeightControlForArray(
									'menuItems',
									attributes.menuItems,
									isElementSelected.index,
									'borderRadius',
									setAttributes,
									'Скругляшки для кнопки'
								)
							}
							{
								HeightControlForArray(
									'menuItems',
									attributes.menuItems,
									isElementSelected.index,
									'iconSize',
									setAttributes,
									'Размер Иконки'
								)
							}
							{
								TextControlForArray(
									'menuItems',
									attributes.menuItems,
									isElementSelected.index,
									'padding',
									setAttributes,
									'Отступы для кнопки'
								)
							}
							<ArrayItemDirection
								arrayAttributeName={'menuItems'}
								currentState={attributes.menuItems}
								setAttributesCallback={setAttributes}
								fieldToUpdate={'direction'}
								indexToUpdate={isElementSelected.index}
								columnValue={'column'}
								rowValue={'row'}
								label={'Направление внутреннее'}
							/>


							<Flex>
								<CheckboxControl
									checked={attributes.menuItems[isElementSelected.index].flexGrow}
									help="Grow element to the end?"
									label="Grow element"
									onChange={(value) =>
										updateBlockInArray(
											'menuItems',
											attributes.menuItems,
											isElementSelected.index,
											'flexGrow',
											value,
											setAttributes
										)
									}
								/>

							</Flex>
							{
								SimpleTip('Цветовая схема для кнопки')
							}
							{TextControlForArray(
								'menuItems',
								attributes.menuItems,
								isElementSelected.index,
								'boxShadow',
								setAttributes,
								'Тень менюхи'
							)}
							<ArrayColorSelector
								currentState={attributes.menuItems}
								attributeName={'menuItems'}
								setAttributes={setAttributes}
								label={'Фон кнопки'}
								fieldName={'background'}
								index={isElementSelected.index}
							/>
							<ArrayColorSelector
								currentState={attributes.menuItems}
								attributeName={'menuItems'}
								setAttributes={setAttributes}
								label={'Цвет шрифта'}
								fieldName={'color'}
								index={isElementSelected.index}
							/>

						</div>
					</PanelBody>
				)
			}
			<PanelBody>
				<h3>
					<Flex>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								 className="bi bi-sliders" viewBox="0 0 16 16">
							<path fill-rule="evenodd"
										d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
						</svg>
						Настройки для всех кнопок
					</Flex>
				</h3>
				{
					SimpleTip('Настройки для элементов меню')
				}
				<SimpleCheckbox
					attributeName={'mobileNowrap'}
					value={attributes.mobileNowrap}
					setAttributesCallback={setAttributes}
					label={'Не переносить элементы на мобилке'}
					help={'Появится скролл для всего блока'}
				/>
				{
					SimpleAttributeSet(
						attributes.menuItemsUrl,
						'menuItemsUrl',
						setAttributes,
						'Ссылки для всех элементов'
					)
				}


			</PanelBody>

			<PanelBody>
				{
					SimpleTip('Цветовая схема для блока')
				}
				{
					SimpleColorSelector(
						attributes.menuItemsBlockBackground,
						'menuItemsBlockBackground',
						setAttributes,
						'Фон для блока'
					)
				}
				{
					SimpleColorSelector(
						attributes.menuItemsBackground,
						'menuItemsBackground',
						setAttributes,
						'Фон элементов меню'
					)
				}
				{
					SimpleColorSelector(
						attributes.menuItemsColor,
						'menuItemsColor',
						setAttributes,
						'Цвет шрифта элементов'
					)
				}


			</PanelBody>

			<PanelBody>
				{
					SimpleTip('Размеры, алигн, направления и отступы ')
				}
				{
					SimpleHeightControl(
						attributes.menuItemsBlockPadding,
						'menuItemsBlockPadding',
						setAttributes,
						'Внутренние отступы блока'
					)
				}
				{
					SimpleHeightControl(
						attributes.menuItemsBlockBorderRadius,
						'menuItemsBlockBorderRadius',
						setAttributes,
						'Скругляшки для всего блока'
					)
				}
				{
					SimpleHeightControl(
						attributes.menuItemsWidth,
						'menuItemsWidth',
						setAttributes,
						'Ширина всего блока'
					)
				}
				{
					SimpleDirectionButtons(
						attributes.menuDirection,
						'menuDirection',
						'vertical',
						'horizontal',
						setAttributes,
						'Направление меню'
					)
				}
				{
					SimpleHeightControl(
						attributes.itemsWidth,
						'itemsWidth',
						setAttributes,
						'Ширина элементов (каждого)'
					)
				}

				{
					SimpleAttributeSet(
						attributes.menuItemsMargin,
						'menuItemsMargin',
						setAttributes,
						'Внешние отступы блока'
					)
				}
				{
					SimpleHeightControl(
						attributes.menuItemsIconSize,
						'menuItemsIconSize',
						setAttributes,
						'Размер Иконки'
					)
				}
				{
					SimpleHeightControl(
						attributes.itemsFontSize,
						'itemsFontSize',
						setAttributes,
						'Размер шрифта'
					)
				}
				{
					SimpleHeightControl(
						attributes.menuItemsGap,
						'menuItemsGap',
						setAttributes,
						'Отступы между кнопками'
					)
				}
				{
					SimpleAlignmentSelector(
						attributes.menuItemsAlignment,
						'menuItemsAlignment',
						setAttributes,
						'Алигн всех элементов'
					)
				}
				{
					SimpleAttributeSet(
						attributes.menuItemsPadding,
						'menuItemsPadding',
						setAttributes,
						'Внутренние отступы кнопок'
					)
				}
				{
					SimpleAttributeSet(
						attributes.itemsBorderRadius,
						'itemsBorderRadius',
						setAttributes,
						'Скругляшки кнопок'
					)
				}
				<SimpleCheckbox
				 attributeName={'flexGrowAll'}
				 value={attributes.flexGrowAll}
				 setAttributesCallback={setAttributes}
				 label={'Дотянуть ширину каждого элемента в рамках блока'}
				 help={'Элемент вырастет и заполнит блок'}
				/>

				{
					SimpleDirectionButtons(
						attributes.itemsInnerDirection,
						'itemsInnerDirection',
						'column',
						'row',
						setAttributes,
						'Внутреннее направление кнопок (верт/гор)'
					)
				}

			</PanelBody>


		</InspectorControls>
	)
}

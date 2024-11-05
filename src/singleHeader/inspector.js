import {
	InspectorControls
} from '@wordpress/block-editor'
import {
	PanelBody, Button

} from '@wordpress/components'
import {
	SingleColorSelector,
	SingleSizeControl,
	SingleBorderControl,
	SingleTextControl,
	ArraySizeControl, ArrayColorSelector, UpdateItemFieldInArray, SingleCheckboxControl
} from '../components'
import {BorderControlForArray, CheckboxSetForBlockInArray, SimpleAlignmentSelector, TextControlForArray} from "../Service";

export default function InspectorSettings({attributes, setAttributes, selectedElement, selectedParentElement}) {
	return (
		<InspectorControls>
			<PanelBody>
				<h2>Настройки хедера</h2>
				<SingleCheckboxControl
					currentState={attributes.isBurger}
					attributeName={'isBurger'}
					setAttributes={setAttributes}
					label={'Показать бургер на десктопе'}
					help={'Перед менюшкой появится бургер меню'}
				/>
			</PanelBody>
			{
				selectedElement.type === 'menuItems' && selectedElement.index !== null && attributes.menuItems[selectedElement.index] && (
					<PanelBody>
						<div className={'single__inspector_item'}>
						<h2>Настройки элемента меню</h2>
						<Button onClick={()=> {
							UpdateItemFieldInArray(
								attributes.menuItems,
								'menuItems',
								'icon',
								selectedElement.index,
								{
									id: null,
									url: null
								},
								setAttributes
							)
						}}>Удалить иконку</Button>
						<CheckboxSetForBlockInArray
						currentArray={attributes.menuItems}
						attributeName={'menuItems'}
						setAttributesCallback={setAttributes}
						blockIndex={selectedElement.index}
						fieldName={'hideInMobile'}
						label={'Спрятать на мобилке?'}
						help={'Пропадет на разрешении около 768px'}
						/>
						<TextControlForArray
							currentState={attributes.menuItems}
							arrayAttributeName={'menuItems'}
							fieldToUpdate={'url'}
							setAttributesCallback={setAttributes}
							indexToUpdate={selectedElement.index}
							label={'URL элемента меню'}
						/>
							<TextControlForArray
								currentState={attributes.menuItems}
								arrayAttributeName={'menuItems'}
								fieldToUpdate={'target'}
								setAttributesCallback={setAttributes}
								indexToUpdate={selectedElement.index}
								label={'Цель элемента меню'}
							/>
						<ArraySizeControl
							currentState={attributes.menuItems}
							attributeName={'menuItems'}
							field={'iconSize'}
							setAttributes={setAttributes}
							index={selectedElement.index}
							label={'Размер иконки элемента меню'}
						/>
						<TextControlForArray
							currentState={attributes.menuItems}
							arrayAttributeName={'menuItems'}
							fieldToUpdate={'padding'}
							setAttributesCallback={setAttributes}
							indexToUpdate={selectedElement.index}
							label={'Отступы внтуренние для элемента меню'}
						/>
						<BorderControlForArray
							currentState={attributes.menuItems}
							arrayAttributeName={'menuItems'}
							fieldToUpdate={'border'}
							setAttributesCallback={setAttributes}
							label={'Граница для элемента меню'}
							indexToUpdate={selectedElement.index}
						/>
						<ArrayColorSelector
							currentState={attributes.menuItems}
							attributeName={'menuItems'}
							fieldName={'background'}
							index={selectedElement.index}
							setAttributes={setAttributes}
							label={'Фон элемента меню'}
						/>
						<ArrayColorSelector
							currentState={attributes.menuItems}
							attributeName={'menuItems'}
							fieldName={'color'}
							index={selectedElement.index}
							setAttributes={setAttributes}
							label={'Цвет шрифта элемента меню'}
						/>
						</div>
					</PanelBody>
				)
			}
			{
				selectedElement.type === 'buttons' && selectedElement.index !== null && attributes.buttons[selectedElement.index] && (
					<PanelBody>
						<div className={'single__inspector_item'}>
						<h2>Настройки кнопки</h2>
						<Button onClick={()=> {
							UpdateItemFieldInArray(
								attributes.buttons,
								'buttons',
								'icon',
								selectedElement.index,
								{
									id: null,
									url: null
								},
								setAttributes
							)
						}}>Удалить иконку</Button>
						<CheckboxSetForBlockInArray
							currentArray={attributes.buttons}
							attributeName={'buttons'}
							setAttributesCallback={setAttributes}
							blockIndex={selectedElement.index}
							fieldName={'hideInMobile'}
							label={'Спрятать на мобилке?'}
							help={'Пропадет на разрешении около 768px'}
						/>
						<TextControlForArray
							currentState={attributes.buttons}
							arrayAttributeName={'buttons'}
							fieldToUpdate={'url'}
							setAttributesCallback={setAttributes}
							indexToUpdate={selectedElement.index}
							label={'URL кнопки'}
						/>
							<TextControlForArray
								currentState={attributes.buttons}
								arrayAttributeName={'buttons'}
								fieldToUpdate={'target'}
								setAttributesCallback={setAttributes}
								indexToUpdate={selectedElement.index}
								label={'Цель кнопки'}
							/>
						<ArraySizeControl
							currentState={attributes.buttons}
							attributeName={'buttons'}
							field={'iconSize'}
							setAttributes={setAttributes}
							index={selectedElement.index}
							label={'Размер иконки кнопки'}
						/>

						<TextControlForArray
							currentState={attributes.buttons}
							arrayAttributeName={'buttons'}
							fieldToUpdate={'padding'}
							setAttributesCallback={setAttributes}
							indexToUpdate={selectedElement.index}
							label={'Отступы внтуренние для кнопки'}
						/>
						<BorderControlForArray
							currentState={attributes.buttons}
							arrayAttributeName={'buttons'}
							fieldToUpdate={'border'}
							setAttributesCallback={setAttributes}
							label={'Граница для кнопки'}
							indexToUpdate={selectedElement.index}
						/>
						<ArrayColorSelector
							currentState={attributes.buttons}
							attributeName={'buttons'}
							fieldName={'background'}
							index={selectedElement.index}
							setAttributes={setAttributes}
							label={'Фон кнопки'}
						/>
						<ArrayColorSelector
							currentState={attributes.buttons}
							attributeName={'buttons'}
							fieldName={'color'}
							index={selectedElement.index}
							setAttributes={setAttributes}
							label={'Цвет шрифта кнопки'}
						/>
						</div>
					</PanelBody>
				)
			}
			{
				selectedParentElement === 'logo' && (
					<PanelBody>
						<div className={'single__inspector_item'}>
						<h2>Настройки лого</h2>

						<SingleSizeControl
							currentState={attributes.logoWidth}
							attributeName={'logoWidth'}
							setAttributes={setAttributes}
							label={'Ширина лого'}
						/>
						<SingleSizeControl
							currentState={attributes.logoHeight}
							attributeName={'logoHeight'}
							setAttributes={setAttributes}
							label={'Высота лого'}
						/>
						</div>
					</PanelBody>
				)
			}
			{
				selectedParentElement === 'menuItems' && (
					<>
						<PanelBody>
							<h2>Общие настройки блока Меню</h2>

							<SingleSizeControl
								currentState={attributes.menuItemsWidth}
								attributeName={'menuItemsWidth'}
								setAttributes={setAttributes}
								label={'Ширина меню элементов'}
							/>
							<SingleSizeControl
								currentState={attributes.menuItemsGap}
								attributeName={'menuItemsGap'}
								setAttributes={setAttributes}
								label={'Отступы между элементами'}
							/>
							<SingleSizeControl
								currentState={attributes.menuItemsIconSize}
								attributeName={'menuItemsIconSize'}
								setAttributes={setAttributes}
								label={'Размер иконок элементов'}
							/>
							<SingleSizeControl
								currentState={attributes.menuItemsFontSize}
								attributeName={'menuItemsFontSize'}
								setAttributes={setAttributes}
								label={'Размер шрифта меню элементов'}
							/>
							<SingleTextControl
								currentState={attributes.menuItemsPadding}
								attributeName={'menuItemsPadding'}
								setAttributes={setAttributes}
								label={'Отступы внутряка меню элементов'}
							/>
							<SingleSizeControl
								currentState={attributes.menuItemsBorderRadius}
								attributeName={'menuItemsBorderRadius'}
								setAttributes={setAttributes}
								label={'Скругляши меню элементов'}
							/>
							<SingleBorderControl
								currentState={attributes.menuItemsBorder}
								attributeName={'menuItemsBorder'}
								setAttributes={setAttributes}
								label={'Граница меню элементов'}
							/>
						</PanelBody>
						<PanelBody>
							<h2>Цветовая палитра меню элементов</h2>
							<SingleColorSelector
								currentState={attributes.menuItemsBackground}
								attributeName={'menuItemsBackground'}
								setAttributes={setAttributes}
								label={'Фон меню элементов'}
							/>
							<SingleColorSelector
								currentState={attributes.menuItemsColor}
								attributeName={'menuItemsColor'}
								setAttributes={setAttributes}
								label={'Цвет меню элементов'}
							/>
						</PanelBody>
					</>
				)
			}

			{
				selectedParentElement === 'buttons' && (
					<>
						<PanelBody>
							<h2>Общие настройки блока кнопок</h2>
							<SingleSizeControl
								currentState={attributes.buttonsWidth}
								attributeName={'buttonsWidth'}
								setAttributes={setAttributes}
								label={'Ширина кнопок'}
							/>
							<SingleSizeControl
								currentState={attributes.buttonsGap}
								attributeName={'buttonsGap'}
								setAttributes={setAttributes}
								label={'Отступы между кнопками'}
							/>
              <SimpleAlignmentSelector
                value={attributes.buttonsAlign}
                attributeName={'buttonsAlign'}
                setAttributesCallback={setAttributes}
                label={'Выберите центровку текста'}
              />
							<SingleSizeControl
								currentState={attributes.buttonsIconSize}
								attributeName={'buttonsIconSize'}
								setAttributes={setAttributes}
								label={'Размер иконок кнопок'}
							/>
							<SingleSizeControl
								currentState={attributes.buttonsFontSize}
								attributeName={'buttonsFontSize'}
								setAttributes={setAttributes}
								label={'Размер шрифта кнопок'}
							/>
							<SingleTextControl
								currentState={attributes.buttonsPadding}
								attributeName={'buttonsPadding'}
								setAttributes={setAttributes}
								label={'Отступы внутряка кнопок'}
							/>
							<SingleSizeControl
								currentState={attributes.buttonsBorderRadius}
								attributeName={'buttonsBorderRadius'}
								setAttributes={setAttributes}
								label={'Скругляши кнопок'}
							/>
							<SingleBorderControl
								currentState={attributes.buttonsBorder}
								attributeName={'buttonsBorder'}
								setAttributes={setAttributes}
								label={'Граница кнопок'}
							/>
						</PanelBody>
						<PanelBody>
							<h2>Цветовая палитра кнопок</h2>
							<SingleColorSelector
								currentState={attributes.buttonsBackground}
								attributeName={'buttonsBackground'}
								setAttributes={setAttributes}
								label={'Фон кнопок'}
							/>
							<SingleColorSelector
								currentState={attributes.buttonsColor}
								attributeName={'buttonsColor'}
								setAttributes={setAttributes}
								label={'Цвет шрифта кнопок'}
							/>
						</PanelBody>
					</>
				)
			}


		</InspectorControls>
	)
}

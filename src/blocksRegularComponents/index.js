import {
	MediaUpload,
	MediaUploadCheck, useBlockProps, RichText,
	BlockControls, AlignmentToolbar, InspectorControls, HeightControl
} from '@wordpress/block-editor';

import {
	ColorPalette,
	ColorPicker,
	ToolbarGroup,
	Popover,
	ToolbarButton,
	PanelBody,
	ButtonGroup,
	Button,
	Flex,
	TextControl,
	ColorIndicator,
	CustomGradientPicker,
	CheckboxControl,
	SelectControl,
	Tip,
	__experimentalBorderControl as BorderControl
} from '@wordpress/components'
import AjaxCollector from "../ajaxCollector";
import {useState, useEffect} from 'react'
/**
 * Компонент пояснительной бригады показывает блок с лампочкой и текстом (подсказки)
 * на вход строка
 * @param value
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleTip = (value) => (
	<Tip>{value}</Tip>
)

const SimpleDirectionButtons = (value, attributeName, columnValue, rowValue, setAttributesCallback, label) => (
	<Flex>
		{label}
		<ButtonGroup>
			<Button
				isPressed={value === columnValue}
				onClick={(e) => setAttributesCallback({[attributeName]: columnValue})}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						 className="bi bi-arrow-down-up" viewBox="0 0 16 16">
					<path fill-rule="evenodd"
								d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
				</svg>
			</Button>
			<Button
				isPressed={value === rowValue}
				onClick={(e) => setAttributesCallback({[attributeName]: rowValue})}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						 className="bi bi-arrow-left-right" viewBox="0 0 16 16">
					<path fill-rule="evenodd"
								d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
				</svg>
			</Button>
		</ButtonGroup>
	</Flex>

)


/**
 * Компонент для обновления одиночного атрибута с ползунком рейнджа (Можно использовать для ширины, высоты, бордер радиуса и прочего)
 *
 * @param value
 * @param attributeName
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleHeightControl = (value, attributeName, setAttributesCallback, label) => (
	<div>
		<HeightControl
			value={value}
			onChange={(value) => setAttributesCallback({[attributeName]: value})}
			label={label}
		/>
	</div>
)

/**
 * Цветовая палитра для одиночного атрибута
 *
 * @param value
 * @param attributeName
 * @param setAttributesCallback
 * @returns {JSX.Element}
 * @constructor
 */




const SimpleColorPallete = (value, attributeName, setAttributesCallback) => {
	const [colors, setColors] = useState([])

	useEffect(() => {
		AjaxCollector({action: 'uni_get_colors',  data: '', setDataCallback:setColors})
	}, [])

	return (
		<div style={{
			padding: '0 0 1rem 0'
		}}>
			<ColorPalette
				value={value}
				enableAlpha={true}
				clearable={false}
				colors = {
					colors ? colors : [{color: '#efefef', name: 'gray'}]
				}
				onChange={(color) => setAttributesCallback({[attributeName]: color})}
			/>
		</div>
	)
}

/**
 * Компонент для настройки border: сетает объект данных можно сделать конструкцию 1px solid #222 НЕ ИСПОЛЬЗОВАТЬ ДЛЯ БОРДЕР РАДИУСА
 *
 * @param attributeName
 * @param currentValue
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleBorderControl = (attributeName, currentValue, setAttributesCallback, label) => (
	<Flex>
		<BorderControl
			label={label}
			value={currentValue}
			enableAlpha={true}
			onChange={(value) => {

				setAttributesCallback({[attributeName]: value})
			}}
		/>
	</Flex>
)

/**
 *
 * @param arrayAttributeName
 * @param currentState
 * @param indexToUpdate
 * @param fieldToUpdate
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const BorderControlForArray = (arrayAttributeName, currentState, indexToUpdate, fieldToUpdate, setAttributesCallback, label) => (
	<Flex>
		<BorderControl
			label={label}
			value={currentState[indexToUpdate][fieldToUpdate]}
			enableAlpha={true}
			onChange={(value) => {
				updateBlockInArray(arrayAttributeName, currentState, indexToUpdate, fieldToUpdate, value, setAttributesCallback)
			}}
		/>
	</Flex>
)

const TextControlForArray = (arrayAttributeName, currentState, indexToUpdate, fieldToUpdate, setAttributesCallback, label) => (
	<Flex>
		<TextControl
			label={label}
			value={currentState[indexToUpdate][fieldToUpdate]}
			onChange={(value) => {
				updateBlockInArray(arrayAttributeName, currentState, indexToUpdate, fieldToUpdate, value, setAttributesCallback)
			}}
		/>
	</Flex>
)

const ColorControlForArray = (arrayAttributeName, currentState, indexToUpdate, fieldToUpdate, setAttributesCallback, label) => (
	<Flex>
		<ColorIndicator colorValue={currentState[indexToUpdate][fieldToUpdate]}/>
		<TextControl
			label={label}
			value={currentState[indexToUpdate][fieldToUpdate]}
			onChange={(value) => updateBlockInArray(arrayAttributeName, currentState, indexToUpdate, fieldToUpdate, value, setAttributesCallback)}
		/>
	</Flex>
)

const HeightControlForArray = (arrayAttributeName, currentState, indexToUpdate, fieldToUpdate, setAttributesCallback, label) => (
	<Flex>
		<HeightControl
			label={label}
			value={currentState[indexToUpdate][fieldToUpdate]}
			onChange={(value) => updateBlockInArray(arrayAttributeName, currentState, indexToUpdate, fieldToUpdate, value, setAttributesCallback)}

		/>
	</Flex>
)


/**
 * Панель градиента для одиночного атрибута
 *
 * @param value
 * @param attributeName
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */

const SimpleGradientPicker = (value, attributeName, setAttributesCallback, label) => (
	<div>
		<h4>{label}</h4>
		<CustomGradientPicker
			value={value}
			onChange={(gradient) => {
				setAttributesCallback({[attributeName]: gradient})
			}}/>
	</div>
)

/**
 * Комбо компонентов с Цветовым индикатором, полем и Палеткой цветовой - сразу плюхнет 3 элемента
 * @param value
 * @param attributeName
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */

const SimpleColorSelector = (value, attributeName, setAttributesCallback, label) => (
	<>
		<Flex>
			<ColorIndicator colorValue={value}/>
			<TextControl
				label={label}
				value={value}
				onChange={(color) => setAttributesCallback({[attributeName]: color})}
			/>

		</Flex>
		{
			SimpleColorPallete(
				value,
				attributeName,
				setAttributesCallback
			)
		}
	</>
)
/**
 * Компонент для настройки Алигна left, center, right будет значениями для одного атрибута
 *
 * @param value
 * @param attributeName
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleAlignmentSelector = (value, attributeName, setAttributesCallback, label) => (
	<Flex>
		{label}
		<AlignmentToolbar
			value={value}
			onChange={(align) => setAttributesCallback({[attributeName]: align})}
		/>
	</Flex>
)

/**
 * Добавление элемента в атрибуты типа array (например, promoBlocks: [ {}, {} ]) добавит к массиву еще один элемент
 *
 * @param attributeName
 * @param currentArray
 * @param blockObject
 * @param setAttributesCallback
 * @param className
 * @param text
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleAddBlockInArray = (attributeName, currentArray, blockObject, setAttributesCallback, className = 'uni_add_block', text = '+ Add block') => {

	return (
		<div className={className}
				 onClick={(e) => addBlockInArray(attributeName, currentArray, blockObject, setAttributesCallback)}>
			{text}
		</div>
	)
}

/**
 * Компонент кнопки удаления из массива [{}, {}] блока по индексу
 *
 * @param attributeName
 * @param currentArray
 * @param blockIndex
 * @param setAttributesCallback
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleRemoveButton = (attributeName, currentArray, blockIndex, setAttributesCallback) => (
	<button className="uni_remove_block_button"
					onClick={() => removeBlockFromArray(attributeName, currentArray, blockIndex, setAttributesCallback)}>
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg"
				 viewBox="0 0 16 16">
			<path
				d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
		</svg>
	</button>
)

/**
 * Компонент загрузки одиночного изображения для элемента массива [{img}, {img}],
 * загрузит картинку как объект данных где img.url ссылка на изображение
 *
 * @param attributeName
 * @param currentArray
 * @param blockIndex
 * @param fieldName
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleMediaUploadInArrayElement = (attributeName, currentArray, blockIndex, fieldName, setAttributesCallback, label = '') => (
	<MediaUploadCheck>
		<MediaUpload
			onSelect={(media) => {
				updateBlockInArray(
					attributeName,
					currentArray,
					blockIndex,
					fieldName,
					media,
					setAttributesCallback
				)
			}}
			allowedTypes={['image']}
			value={currentArray[blockIndex][fieldName] ? currentArray[blockIndex][fieldName].id : null}
			render={({open}) => (
				<div className="uni_upload_mage" onClick={open}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							 className="bi bi-card-image" viewBox="0 0 16 16">
						<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
						<path
							d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
					</svg>
					{
						label
					}
					{!currentArray[blockIndex][fieldName] ?
						'' :
						''}
				</div>
			)}
		/>
	</MediaUploadCheck>
)

/**
 * Массовая загрузка изображений для одиночного атрибута, загрузит картинки массивом, прогонять через map и обращаться к урлу картинки .url
 *
 * @param attributeName
 * @param currentAttribute
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleMediaUploadMulti = (attributeName, currentAttribute, setAttributesCallback, label) => (
	<Flex>

		<MediaUploadCheck>
			<MediaUpload
				onSelect={(media) => {
					setAttributesCallback({[attributeName]: media})
				}}
				multiple={true}
				allowedTypes={["image"]}
				value={currentAttribute ? currentAttribute.map((item, index) => item.id) : ""}
				render={({open}) => (
					<div className="uni_upload_mage" style={{padding: '1rem 0', display: 'flex', gap: "1rem"}} onClick={open}>
						{label}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
								 className="bi bi-card-image" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
							<path
								d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
						</svg>
					</div>
				)}
			/>
		</MediaUploadCheck>
	</Flex>
)

/**
 * Простая загрузка изображения для одиночного атрибута, грузит объект изображения, использовать .url чтобы получить ссылку
 *
 * @param attributeName
 * @param currentAttribute
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleMediaUpload = (attributeName, currentAttribute, setAttributesCallback, label) => (
	<Flex>

		<MediaUploadCheck>
			<MediaUpload
				onSelect={(media) => {
					setAttributesCallback({[attributeName]: media})
				}}
				allowedTypes={["image"]}
				value={currentAttribute ? currentAttribute.id : ""}
				render={({open}) => (
					<div className="uni_upload_mage" style={{padding: '1rem 0', display: 'flex', gap: "1rem"}} onClick={open}>
						{label}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
								 className="bi bi-card-image" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
							<path
								d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
						</svg>
					</div>
				)}
			/>
		</MediaUploadCheck>
	</Flex>
)

/**
 * Компонент инпута для обновления одиночного атрибута (можно изменить тип на number) возвращает всегда строку
 *
 * @param value
 * @param attributeName
 * @param setAttributesCallback
 * @param label
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleAttributeSet = (value, attributeName, setAttributesCallback, label, type = "text") => (
	<Flex>
		<TextControl
			label={label}
			value={value}
			onChange={(content) => setAttributesCallback({[attributeName]: content})}
			type={type}
		/>
	</Flex>
)
/**
 * Инпут компонент для обновления атрибута в массиве [{}, {name: "васян"}]  через index и название поля
 *
 * @param attributeName
 * @param currentArray
 * @param blockIndex
 * @param fieldName
 * @param setAttributesCallback
 * @param label
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */
const AttributeSetForBlockInArray = (attributeName, currentArray, blockIndex, fieldName, setAttributesCallback, label, type = "text") => (
	<Flex>
		<TextControl
			label={label}
			value={currentArray[blockIndex][fieldName]}
			onChange={(content) => updateBlockInArray(attributeName, currentArray, blockIndex, fieldName, content, setAttributesCallback)}
			type={type}
		/>
	</Flex>
)

/**
 * Компонент обновления атрибута с цветовым индикатором в массиве
 *
 * @param attributeName
 * @param currentArray
 * @param blockIndex
 * @param fieldName
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const ColorSelectorSetForBlockInArray = (attributeName, currentArray, blockIndex, fieldName, setAttributesCallback, label) => (

	<Flex>
		<ColorIndicator colorValue={currentArray[blockIndex][fieldName]}/>
		<TextControl
			label={label}
			value={currentArray[blockIndex][fieldName]}
			onChange={(color) => updateBlockInArray(attributeName, currentArray, blockIndex, fieldName, color, setAttributesCallback)}
		/>
	</Flex>
)

/**
 * Компонент алигна для элемента объекта в массиве по индексу (left,center,right)
 *
 * @param attributeName
 * @param currentArray
 * @param blockIndex
 * @param fieldName
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const AlignmentSetForBlockInArray = (attributeName, currentArray, blockIndex, fieldName, setAttributesCallback, label) => (
	<Flex>
		{label}
		<AlignmentToolbar
			value={currentArray[blockIndex][fieldName]}
			onChange={(align) => updateBlockInArray(attributeName, currentArray, blockIndex, fieldName, align, setAttributesCallback)}
		/>
	</Flex>
)

/**
 * Чекбокс компонент для одиночного атрибута
 * @param value
 * @param attributeName
 * @param setAttributesCallback
 * @param label
 * @param help
 * @returns {JSX.Element}
 * @constructor
 */

const SimpleCheckbox = (value, attributeName, setAttributesCallback, label, help) => (
	<CheckboxControl
		checked={value}
		help={help}
		label={label}
		onChange={(checked) => {
			setAttributesCallback({[attributeName]: checked})
		}}
	/>
)

/**
 * Чекбокс компонент для атрибута в массиве
 *
 * @param attributeName
 * @param currentArray
 * @param blockIndex
 * @param fieldName
 * @param setAttributesCallback
 * @param label
 * @param help
 * @returns {JSX.Element}
 * @constructor
 */
const CheckboxSetForBlockInArray = (attributeName, currentArray, blockIndex, fieldName, setAttributesCallback, label, help) => (
	<CheckboxControl
		checked={currentArray[blockIndex][fieldName]}
		help={help}
		label={label}
		onChange={(checked) => {
			updateBlockInArray(attributeName, currentArray, blockIndex, fieldName, checked, setAttributesCallback)
		}}
	/>
)

/**
 * Функция для добавления блока в массив (не экспортируется)
 *
 * @param attributeName
 * @param currentArray
 * @param blockObject
 * @param setAttributesCallback
 */

const addBlockInArray = (attributeName, currentArray, blockObject, setAttributesCallback) => {
	const updatedPromoBlocks = [...currentArray]
	updatedPromoBlocks.push(blockObject)

	setAttributesCallback({[attributeName]: updatedPromoBlocks});
}

/**
 * Функция для обновления любого атрибута блока в массиве
 * @param attributeName
 * @param currentArray
 * @param blockIndex
 * @param fieldName
 * @param value
 * @param setAttributesCallback
 */
const updateBlockInArray = (attributeName, currentArray, blockIndex, fieldName, value, setAttributesCallback) => {
	const currentBlocks = [...currentArray]
	currentBlocks[blockIndex] = {
		...currentBlocks[blockIndex],
		[fieldName]: value
	}
	setAttributesCallback({[attributeName]: currentBlocks})
}

/**
 * Компонент удаления элемента блока из массива
 *
 * @param attributeName
 * @param currentArray
 * @param blockIndex
 * @param setAttributesCallback
 */

const removeBlockFromArray = (attributeName, currentArray, blockIndex, setAttributesCallback) => {
	const currentBlocks = [...currentArray]
	currentBlocks.splice(blockIndex, 1)
	setAttributesCallback({[attributeName]: currentBlocks})
}


/**
 * Добавления блока для димнамических атрибутов
 * [
 *  block1: {
 *    type: "block",
 *    items: [1, 2, ]
 *  },
 *  ....
 *
 * ]
   добавит к block1.items значение [1, 2, 3] получится в итоге

 *
 * @param currentState
 * @param attributeName
 * @param parentIndex
 * @param itemsPropertyNames
 * @param value
 * @param setAttributesCallback
 * @param className
 * @param text
 * @returns {JSX.Element}
 * @constructor
 */
const AddBlockToDynamicArray = (currentState, attributeName, parentIndex, itemsPropertyNames, value, setAttributesCallback, className, text) => (
	<div className={className}
			 onClick={(e) =>
				 addBlockToDynamicArrayProcess(currentState, attributeName, parentIndex, itemsPropertyNames, value, setAttributesCallback)}>
		{text}
	</div>
)
/**
 * Компонент для удаления блока из динамических атрибутов
 * @param currentState
 * @param attributeName
 * @param parentIndex
 * @param indexToRemove
 * @param itemsPropertyName
 * @param setAttributesCallback
 * @returns {JSX.Element}
 * @constructor
 */
const RemoveBlockFromDynamicArray = (currentState, attributeName, parentIndex, indexToRemove, itemsPropertyName, setAttributesCallback) => (
	<button className="uni_remove_block_button"
					onClick={() => removeBlockFromDynamicArrayProcess(currentState, attributeName, parentIndex, indexToRemove, itemsPropertyName, setAttributesCallback)}>
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg"
				 viewBox="0 0 16 16">
			<path
				d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
		</svg>
	</button>
)
/**
 * Добавит родительский  блок к динамическим атрибутам сложного типа
 *
 * [
 *  block1: {
 *    type: "block",
 *    items: [1, 2, 3 ]
 *  },
 *  ...
 *
 * ]
 * Добавит  block2: {
 *    type: "block2",
 *    items: [1, 2, 3 ]
 *  },
 * @param currentState
 * @param attributeName
 * @param blockObject
 * @param setAttributesCallback
 * @param className
 * @param text
 * @returns {JSX.Element}
 * @constructor
 */
const AddParentBlockToDynamic = (currentState, attributeName, blockObject, setAttributesCallback, className = 'uni_add_btn', text = '+Add block') => (
	<div className={className}
			 onClick={(e) =>
				 addParentBlockToDynamicArray(currentState, attributeName, blockObject, setAttributesCallback)}>

		{text}
	</div>
)

/**
 * Компонент удаления родительского блока из динамических атрибутов
 *
 * @param currentState
 * @param attributeName
 * @param parentIndex
 * @param setAttributesCallback
 * @returns {JSX.Element}
 * @constructor
 */
const RemoveParentBlockFromDynamicArray = (currentState, attributeName, parentIndex, setAttributesCallback) => (
	<button className="uni_remove_block_button"
					onClick={() => removeParentBlockFromDynamicArray(currentState, attributeName, parentIndex, setAttributesCallback)}>
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg"
				 viewBox="0 0 16 16">
			<path
				d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
		</svg>
	</button>
)

/**
 * Компонент загрузки изображений (массовой) для элемента items динамического блока
 *
 * @param dynamicBlocksValues
 * @param attributeDynamicName
 * @param parentIndex
 * @param itemsPropertyName
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const MediaUploadImagesForDynamicBlocks = (
	dynamicBlocksValues, attributeDynamicName, parentIndex, itemsPropertyName, setAttributesCallback, label
) => (
	<Flex>

		<MediaUploadCheck>
			<MediaUpload
				onSelect={(media) => {
					const currentValues = [...dynamicBlocksValues]
					currentValues[parentIndex][itemsPropertyName] = media
					setAttributesCallback({...dynamicBlocksValues, [attributeDynamicName]: currentValues})

				}}
				multiple={true}
				allowedTypes={["image"]}
				value={dynamicBlocksValues[parentIndex][itemsPropertyName] ? dynamicBlocksValues[parentIndex][itemsPropertyName].map((item, index) => item.id) : ""}
				render={({open}) => (
					<div className="uni_upload_mage" style={{padding: '1rem 0', display: 'flex', gap: "1rem"}} onClick={open}>
						{label}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
								 className="bi bi-card-image" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
							<path
								d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
						</svg>
					</div>
				)}
			/>
		</MediaUploadCheck>
	</Flex>
)
/**
 * Компонент загрузки одного изображения для элемента динамического атрибута
 * @param dynamicBlocksValues
 * @param dynamicBlocksAttributeName
 * @param parentIndex
 * @param itemsPropertyName
 * @param childIndex
 * @param propertyToUpdate
 * @param setAttributesCallback
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const MediaUploadForDynamicBlocks = (
	dynamicBlocksValues,
	dynamicBlocksAttributeName,
	parentIndex,
	itemsPropertyName,
	childIndex,
	propertyToUpdate,
	setAttributesCallback,
	label
) => (
	<Flex>

		<MediaUploadCheck>
			<MediaUpload
				onSelect={(media) => {
					updateDynamicBlocksItem(
						dynamicBlocksValues,
						dynamicBlocksAttributeName,
						parentIndex,
						itemsPropertyName,
						childIndex,
						propertyToUpdate,
						media,
						setAttributesCallback
					)
				}}
				allowedTypes={["image"]}
				value={dynamicBlocksValues[parentIndex][itemsPropertyName][childIndex][propertyToUpdate].id ? dynamicBlocksValues[parentIndex][itemsPropertyName][childIndex][propertyToUpdate].id : ""}
				render={({open}) => (
					<div className="uni_upload_mage" style={{padding: '1rem 0', display: 'flex', gap: "1rem"}} onClick={open}>
						{label}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
								 className="bi bi-card-image" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
							<path
								d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
						</svg>
					</div>
				)}
			/>
		</MediaUploadCheck>
	</Flex>
)
/**
 * Компонент инпута для обновления текстового элемента родителя динамических атрибутов
 * @param dynamicBlocks
 * @param currentValue
 * @param dynamicBlocksAttributeName
 * @param parentIndex
 * @param attributeToUpdate
 * @param label
 * @param setAttributesCallback
 * @param tip
 * @returns {JSX.Element}
 * @constructor
 */
const DynamicParentBlockSingleAttributeTextControl = (
	dynamicBlocks, currentValue, dynamicBlocksAttributeName, parentIndex, attributeToUpdate, label, setAttributesCallback, tip = ""
) => (
	<>
		{tip ? <Tip>{tip}</Tip> : ""}
		<TextControl
			label={label}
			value={currentValue}
			onChange={(value) => {
				updateDynamicParentBlockSingleAttribute(dynamicBlocks, dynamicBlocksAttributeName, parentIndex, attributeToUpdate, value, setAttributesCallback)
			}}
		/>
	</>
)
/**
 * Компонент селекта для одиночного атрибута родительского динамического атрибута
 * @param dynamicBlocks
 * @param currentValue
 * @param dynamicBlocksAttributeName
 * @param parentIndex
 * @param attributeToUpdate
 * @param label
 * @param setAttributesCallback
 * @param tip
 * @param options
 * @returns {JSX.Element}
 * @constructor
 */
const DynamicParentBlockSingleAttributeSelectControl = (
	dynamicBlocks, currentValue, dynamicBlocksAttributeName,
	parentIndex, attributeToUpdate, label, setAttributesCallback, tip = "", options = []
) => (
	<>
		{tip ? <Tip>{tip}</Tip> : ""}
		<SelectControl
			label={label}
			value={currentValue}
			options={
				options
			}
			onChange={(value) => {
				updateDynamicParentBlockSingleAttribute(dynamicBlocks, dynamicBlocksAttributeName, parentIndex, attributeToUpdate, value, setAttributesCallback)
			}}
		/>
	</>
)


/**
 * Функция удаления (не экспортируется)
 *
 * @param currentState
 * @param attributeName
 * @param parentIndex
 * @param indexToRemove
 * @param itemsPropertyName
 * @param setAttributesCallback
 */
const removeBlockFromDynamicArrayProcess = (currentState, attributeName, parentIndex, indexToRemove, itemsPropertyName, setAttributesCallback) => {
	const items = [...currentState]
	items[parentIndex][itemsPropertyName].splice(indexToRemove, 1)
	setAttributesCallback({...currentState, attributeName: items})

}
/**
 * Функция добавления динамического блока - не экспортируется
 * @param currentState
 * @param attributeName
 * @param parentIndex
 * @param itemsPropertyName
 * @param value
 * @param setAttributesCallback
 */
const addBlockToDynamicArrayProcess = (currentState, attributeName, parentIndex, itemsPropertyName, value, setAttributesCallback) => {
	const items = [...currentState]
	items[parentIndex][itemsPropertyName].push(value)
	setAttributesCallback({...currentState, attributeName: items})
}

/**
 * Функция добавления родительского блока (не экспортируется)
 * @param currentState
 * @param attributeName
 * @param blockObject
 * @param setAttributesCallback
 */
const addParentBlockToDynamicArray = (currentState, attributeName, blockObject, setAttributesCallback) => {
	const items = [...currentState]
	items.push(blockObject)
	setAttributesCallback({...currentState, [attributeName]: items})
}
/**
 * Функция удаления родительского блока динамического атрибута (не экспортируется)
 * @param currentState
 * @param attributeName
 * @param parentIndex
 * @param setAttributesCallback
 */
const removeParentBlockFromDynamicArray = (currentState, attributeName, parentIndex, setAttributesCallback) => {
	const items = [...currentState]
	items.splice(parentIndex, 1)
	setAttributesCallback({...currentState, [attributeName]: items})
}

/**
 * Функция обновления динамических блоков (не экспортируется)
 * @param dynamicBlocksValues
 * @param dynamicBlocksAttributeName
 * @param parentIndex
 * @param itemsPropertyName
 * @param childIndex
 * @param propertyToUpdate
 * @param value
 * @param setAttributesCallback
 */
const updateDynamicBlocksItem = (
	dynamicBlocksValues,
	dynamicBlocksAttributeName,
	parentIndex,
	itemsPropertyName,
	childIndex,
	propertyToUpdate,
	value,
	setAttributesCallback
) => {

	// Clone the entire dynamicBlocks array to avoid direct state mutation
	const updatedDynamicBlocks = [...dynamicBlocksValues];


	// Navigate to the specific item to be updated
	const targetItem = updatedDynamicBlocks[parentIndex][itemsPropertyName][childIndex];
	console.log(targetItem)
	// Update the target item with the new value for the specified property
	updatedDynamicBlocks[parentIndex][itemsPropertyName][childIndex] = {
		...targetItem,
		[propertyToUpdate]: value,
	};


	// Use the callback function to update the state or attributes
	setAttributesCallback({[dynamicBlocksAttributeName]: updatedDynamicBlocks});
}
/**
 * Функция обновления родительских одиночных динамических атрибутов (не экспортируется)
 * @param dynamicBlocks
 * @param dynamicBlocksAttributeName
 * @param parentIndex
 * @param attributeToUpdate
 * @param value
 * @param setAttributesCallback
 */

const updateDynamicParentBlockSingleAttribute = (dynamicBlocks, dynamicBlocksAttributeName, parentIndex, attributeToUpdate, value, setAttributesCallback) => {
	const currentValues = [...dynamicBlocks]
	currentValues[parentIndex][attributeToUpdate] = value
	setAttributesCallback({...dynamicBlocks, [dynamicBlocksAttributeName]: currentValues})
}

// Export
export {
	DynamicParentBlockSingleAttributeSelectControl,
	DynamicParentBlockSingleAttributeTextControl,
	updateDynamicBlocksItem,
	SimpleColorSelector,
	SimpleAlignmentSelector,
	updateBlockInArray,
	SimpleAddBlockInArray,
	SimpleRemoveButton,
	SimpleMediaUploadInArrayElement,
	SimpleAttributeSet,
	AttributeSetForBlockInArray,
	AlignmentSetForBlockInArray, SimpleGradientPicker, ColorSelectorSetForBlockInArray,
	CheckboxSetForBlockInArray,
	SimpleMediaUpload,
	SimpleBorderControl,
	SimpleColorPallete,
	SimpleHeightControl,
	SimpleCheckbox,
	RemoveBlockFromDynamicArray,
	SimpleTip,
	SimpleMediaUploadMulti,
	MediaUploadForDynamicBlocks, AddBlockToDynamicArray, MediaUploadImagesForDynamicBlocks, AddParentBlockToDynamic,
	RemoveParentBlockFromDynamicArray,
	SimpleDirectionButtons,
	BorderControlForArray,
	ColorControlForArray,
	TextControlForArray,
	HeightControlForArray
}

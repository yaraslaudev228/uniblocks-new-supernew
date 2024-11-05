import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import {
	SimpleAlignmentSelector,
	SimpleTip,
	SimpleMediaUpload,
	SimpleGradientPicker,
	SimpleAttributeSet,
	SimpleHeightControl,
	SimpleColorSelector,
} from "../Service/index";

export default function Inspector({ attributes, setAttributes }) {
	return (
		<InspectorControls>
			<PanelBody>
				<SimpleTip value={"Настройки баннера"} />
				<SimpleMediaUpload
					currentAttribute={attributes.block_image}
					attributeName={"block_image"}
					setAttributesCallback={setAttributes}
					label={"Изображение баннера"}
				/>
				<SimpleGradientPicker
					value={attributes.overlayColor}
					attributeName={"overlayColor"}
					setAttributesCallback={setAttributes}
					label={"Цвет оверлея на баннере"}
				/>
				<SimpleTip value={'Пояснение по значениям: "Верх Право Низ Лево"'} />
				<SimpleAttributeSet
					value={attributes.bannerMargin}
					attributeName={"bannerMargin"}
					setAttributesCallback={setAttributes}
					label={"Внешние отступы"}
				/>
				<SimpleHeightControl
					value={attributes.bannerInnerPaddingY}
					attributeName={"bannerInnerPaddingY"}
					setAttributesCallback={setAttributes}
					label={"Внутренние отступы сверху/снизу"}
				/>
				<SimpleHeightControl
					value={attributes.bannerInnerPaddingX}
					attributeName={"bannerInnerPaddingX"}
					setAttributesCallback={setAttributes}
					label={"Внутренние отступы слева/справа"}
				/>
				<SimpleHeightControl
					value={attributes.bannerHeight}
					attributeName={"bannerHeight"}
					setAttributesCallback={setAttributes}
					label={"Высота баннера"}
				/>
				<SimpleHeightControl
					value={attributes.bannerBorderRadius}
					attributeName={"bannerBorderRadius"}
					setAttributesCallback={setAttributes}
					label={"Скругление границы баннера"}
				/>
			</PanelBody>
			<PanelBody>
				<SimpleTip value={"Настройки области текста"} />
				<SimpleColorSelector
					value={attributes.captionBackground}
					attributeName={"captionBackground"}
					setAttributesCallback={setAttributes}
					label={"Фон области текста"}
				/>
				<SimpleColorSelector
					value={attributes.block_description_Color}
					attributeName={"block_description_Color"}
					setAttributesCallback={setAttributes}
					label={"Цвет подзаголовка текста"}
				/>
				<SimpleColorSelector
					value={attributes.block_more_description_Color}
					attributeName={"block_more_description_Color"}
					setAttributesCallback={setAttributes}
					label={"Цвет текста"}
				/>
				<SimpleColorSelector
					value={attributes.block_under_description_Color}
					attributeName={"block_under_description_Color"}
					setAttributesCallback={setAttributes}
					label={"Цвет текста под кнопкой"}
				/>
				<SimpleHeightControl
					value={attributes.captionPadding}
					attributeName={"captionPadding"}
					setAttributesCallback={setAttributes}
					label={"Отступы внутренние"}
				/>
				<SimpleHeightControl
					value={attributes.captionBradius}
					attributeName={"captionBradius"}
					setAttributesCallback={setAttributes}
					label={"Скругление"}
				/>
				<SimpleAlignmentSelector
					value={attributes.captionAlign}
					attributeName={"captionAlign"}
					setAttributesCallback={setAttributes}
					label={"Расположение текста в области"}
				/>
				<SimpleHeightControl
					value={attributes.captionFirstFontSize}
					attributeName={"captionFirstFontSize"}
					setAttributesCallback={setAttributes}
					label={"Размер шрифта первого заголовка"}
				/>
				<SimpleHeightControl
					value={attributes.captionSecondFontSize}
					attributeName={"captionSecondFontSize"}
					setAttributesCallback={setAttributes}
					label={"Размер шрифта второго заголовка"}
				/>
				<SimpleHeightControl
					value={attributes.captionThirdFontSize}
					attributeName={"captionThirdFontSize"}
					setAttributesCallback={setAttributes}
					label={"Размер шрифта третьего заголовка"}
				/>
				<SimpleHeightControl
					value={attributes.captionFourthFontSize}
					attributeName={"captionFourthFontSize"}
					setAttributesCallback={setAttributes}
					label={"Размер шрифта четвертого заголовка"}
				/>
			</PanelBody>
			<PanelBody>
				<SimpleAlignmentSelector
					value={attributes.align}
					attributeName={"align"}
					setAttributesCallback={setAttributes}
					label={"Расположение текста (слева/посередине/справа)"}
				/>
			</PanelBody>
			<PanelBody>
				<SimpleTip value={"Настройки кнопки баннера"} />
				<SimpleColorSelector
					value={attributes.buttonBackgroundColor}
					attributeName={"buttonBackground"}
					setAttributesCallback={setAttributes}
					label={"Фон кнопки"}
				/>
				<SimpleColorSelector
					value={attributes.buttonColor}
					attributeName={"buttonColor"}
					setAttributesCallback={setAttributes}
					label={"Цвет шрифта кнопки"}
				/>
				<SimpleHeightControl
					value={attributes.buttonBorderRadius}
					attributeName={"buttonBorderRadius"}
					setAttributesCallback={setAttributes}
					label={"Скругление кнопки"}
				/>
				<SimpleHeightControl
					value={attributes.buttonPaddingY}
					attributeName={"buttonPaddingY"}
					setAttributesCallback={setAttributes}
					label={"Отступы у кнопки Y"}
				/>
				<SimpleHeightControl
					value={attributes.buttonPaddingX}
					attributeName={"buttonPaddingX"}
					setAttributesCallback={setAttributes}
					label={"Отступы у кнопки X"}
				/>
				<SimpleHeightControl
					value={attributes.buttonFontSize}
					attributeName={"buttonFontSize"}
					setAttributesCallback={setAttributes}
					label={"Размер шрифта кнопки"}
				/>
			</PanelBody>
		</InspectorControls>
	);
}

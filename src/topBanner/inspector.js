import {InspectorControls} from '@wordpress/block-editor'
import {PanelBody} from '@wordpress/components'

import {
	SimpleAlignmentSelector,
	SimpleTip,
	SimpleMediaUpload,
	SimpleGradientPicker,
	SimpleAttributeSet,
	SimpleHeightControl,
	SimpleColorSelector
} from '../Service/index'

export default function Inspector({attributes, setAttributes}) {
	return (

		<InspectorControls>
			<PanelBody>
				<h2>Настройки баннера</h2>

				<SimpleMediaUpload
					currentAttribute={attributes.block_image}
					attributeName={'block_image'}
					setAttributesCallback={setAttributes}
					label={'Изображение баннера'}
				/>
				<SimpleColorSelector
					value={attributes.overlayColor}
					attributeName={'overlayColor'}
					setAttributesCallback={setAttributes}
					label={'Цвет оверлея на баннере'}
				/>
				<SimpleGradientPicker
					value={attributes.overlayColor}
					attributeName={'overlayColor'}
					setAttributesCallback={setAttributes}
					label={'Цвет оверлея на баннере'}
				/>
			</PanelBody>
			<PanelBody>
				<h2>Настройки отступов и размеров</h2>
				<SimpleHeightControl
					value={attributes.bannerInnerPaddingY}
					attributeName={'bannerInnerPaddingY'}
					setAttributesCallback={setAttributes}
					label={'Внутренние отступы сверху/снизу'}
				/>
				<SimpleHeightControl
					value={attributes.bannerInnerPaddingX}
					attributeName={'bannerInnerPaddingX'}
					setAttributesCallback={setAttributes}
					label={'Внутренние отступы слева/справа'}
				/>
				<SimpleHeightControl
					value={attributes.bannerHeight}
					attributeName={'bannerHeight'}
					setAttributesCallback={setAttributes}
					label={'Высота баннера'}
				/>
				<SimpleHeightControl
					value={attributes.bannerBorderRadius}
					attributeName={'bannerBorderRadius'}
					setAttributesCallback={setAttributes}
					label={'Скругление границы баннера'}
				/>

			</PanelBody>
			<PanelBody>
				<h2>Настройки области текста</h2>
				<SimpleTip value={'Настройки области текста'}/>
				<SimpleColorSelector
					value={attributes.captionBackground}
					attributeName={'captionBackground'}
					setAttributesCallback={setAttributes}
					label={'Фон области текста'}
				/>
				<SimpleGradientPicker
					value={attributes.captionBackground}
					attributeName={'captionBackground'}
					setAttributesCallback={setAttributes}
					label={'Фон области текста'}
				/>
				<SimpleHeightControl
					value={attributes.captionPadding}
					attributeName={'captionPadding'}
					setAttributesCallback={setAttributes}
					label={'Отступы внутренние'}
				/>
				<SimpleHeightControl
					value={attributes.captionBradius}
					attributeName={'captionBradius'}
					setAttributesCallback={setAttributes}
					label={'Скругление'}
				/>

				<SimpleHeightControl
					value={attributes.captionFirstFontSize}
					attributeName={'captionFirstFontSize'}
					setAttributesCallback={setAttributes}
					label={'Размер шрифта первого заголовка'}
				/>
				<SimpleHeightControl
					value={attributes.captionSecondFontSize}
					attributeName={'captionSecondFontSize'}
					setAttributesCallback={setAttributes}
					label={'Размер шрифта второго заголовка'}
				/>
				<SimpleHeightControl
					value={attributes.captionThirdFontSize}
					attributeName={'captionThirdFontSize'}
					setAttributesCallback={setAttributes}
					label={'Размер шрифта третьего заголовка'}
				/>
				<SimpleHeightControl
					value={attributes.captionFourthFontSize}
					attributeName={'captionFourthFontSize'}
					setAttributesCallback={setAttributes}
					label={'Размер шрифта четвертого заголовка'}
				/>

			</PanelBody>
			<PanelBody>
				<h2>Алигн блока</h2>
				<SimpleAlignmentSelector
					value={attributes.captionAlign}
					attributeName={'captionAlign'}
					setAttributesCallback={setAttributes}
					label={'Расположение текста в области'}
				/>
				<SimpleAlignmentSelector
					value={attributes.align}
					attributeName={'align'}
					setAttributesCallback={setAttributes}
					label={'Расположение текста (слева/посередине/справа)'}
				/>

			</PanelBody>
			<PanelBody>
				<h2>Настройки кнопки баннера</h2>
				<SimpleAttributeSet
				 value={attributes.buttonTarget}
				 attributeName={'buttonTarget'}
				 setAttributesCallback={setAttributes}
				 label={'Цель кнопки'}
				/>
				<SimpleGradientPicker
					value={attributes.buttonBackground}
					attributeName={'buttonBackground'}
					setAttributesCallback={setAttributes}
					label={'Фон кнопки'}
				/>
				<SimpleColorSelector
					value={attributes.buttonBackground}
					attributeName={'buttonBackground'}
					setAttributesCallback={setAttributes}
					label={'Фон кнопки'}
				/>
				<SimpleColorSelector
					value={attributes.buttonColor}
					attributeName={'buttonColor'}
					setAttributesCallback={setAttributes}
					label={'Цвет шрифта кнопки'}
				/>
				<SimpleHeightControl
				  value={attributes.buttonBorderRadius}
					attributeName={'buttonBorderRadius'}
					setAttributesCallback={setAttributes}
					label={'Скругление кнопки'}
				/>
				<SimpleHeightControl
					value={attributes.buttonPaddingY}
					attributeName={'buttonPaddingY'}
					setAttributesCallback={setAttributes}
					label={'Отступы у кнопки Y'}
				/>
				<SimpleHeightControl
					value={attributes.buttonPaddingX}
					attributeName={'buttonPaddingX'}
					setAttributesCallback={setAttributes}
					label={'Отступы у кнопки X'}
				/>
				<SimpleHeightControl
					value={attributes.buttonFontSize}
					attributeName={'buttonFontSize'}
					setAttributesCallback={setAttributes}
					label={'Размер шрифта кнопки'}
				/>

			</PanelBody>

		</InspectorControls>

	)
}

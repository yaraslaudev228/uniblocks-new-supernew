import {SimpleAlignmentSelector, SimpleColorSelector, SimpleHeightControl} from "../Service";
import {InspectorControls} from '@wordpress/block-editor'
import {PanelBody} from '@wordpress/components'

export default function Inspector({attributes, setAttributes}) {
	return (
		<InspectorControls>
			<PanelBody>
				<h3>Настройки формы</h3>
				<SimpleAlignmentSelector
				attributeName={'alignment'}
				value={attributes.alignment}
				setAttributesCallback={setAttributes}
				label={'Расположение формы'}
				/>
				<SimpleHeightControl
				value={attributes.formBradius}
				attributeName={'formBradius'}
				setAttributesCallback={setAttributes}
				label={'Скругляшки формы'}
				/>
				<SimpleHeightControl
					value={attributes.inputBorderRadius}
					attributeName={'inputBorderRadius'}
					setAttributesCallback={setAttributes}
					label={'Скругляшки инпутов'}
				/>
				<SimpleHeightControl
					value={attributes.formPadding}
					attributeName={'formPadding'}
					setAttributesCallback={setAttributes}
					label={'Отступы формы'}
				/>
				<SimpleHeightControl
					value={attributes.inputPadding}
					attributeName={'inputPadding'}
					setAttributesCallback={setAttributes}
					label={'Отступы инпутов'}
				/>
				<SimpleHeightControl
					value={attributes.textareaHeight}
					attributeName={'textareaHeight'}
					setAttributesCallback={setAttributes}
					label={'Высота textarea'}
				/>
 		 	  <SimpleColorSelector
				value={attributes.formBackground}
				attributeName={'formBackground'}
				setAttributesCallback={setAttributes}
				label={'Фон формы'}
				/>
				<SimpleColorSelector
					value={attributes.inputBackground}
					attributeName={'inputBackground'}
					setAttributesCallback={setAttributes}
					label={'Фон для инпута'}
				/>
				<SimpleColorSelector
					value={attributes.labelColor}
					attributeName={'labelColor'}
					setAttributesCallback={setAttributes}
					label={'Цвет лейблы'}
				/>
				<SimpleColorSelector
					value={attributes.inputColor}
					attributeName={'inputColor'}
					setAttributesCallback={setAttributes}
					label={'Цвет шрифта инпута'}
				/>
				<SimpleColorSelector
					value={attributes.placeholderColor}
					attributeName={'placeholderColor'}
					setAttributesCallback={setAttributes}
					label={'Цвет плейсхолдера'}
				/>

			</PanelBody>
			<PanelBody>
				<h3>Настройки Кнопки</h3>
				<SimpleHeightControl
					value={attributes.buttonBorderRadius}
					attributeName={'buttonBorderRadius'}
					setAttributesCallback={setAttributes}
					label={'Округлость кнопки'}
				/>
				<SimpleColorSelector
					value={attributes.buttonBackground}
					attributeName={'buttonBackground'}
					setAttributesCallback={setAttributes}
					label={'Фон Кнопки'}
				/>
				<SimpleColorSelector
					value={attributes.buttonColor}
					attributeName={'buttonColor'}
					setAttributesCallback={setAttributes}
					label={'Цвет шрифта кнопки'}
				/>

			</PanelBody>
		</InspectorControls>

	)
}

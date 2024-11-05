import {InspectorControls} from '@wordpress/block-editor'
import {PanelBody} from '@wordpress/components'

import {
	SimpleAlignmentSelector,
	SimpleTip,
	SimpleAttributeSet,
	SimpleHeightControl,
	SimpleColorSelector, SimpleBorderControl
} from '../Service/index'
import {MediaUploadToArrayItem} from "../components";

export default function Inspector({attributes, setAttributes, selectedBanner}) {
	return (

		<InspectorControls>
			{
				selectedBanner !== false && attributes.banners[selectedBanner] && (
					<PanelBody>
            <div className={'single__inspector_item'}>
						<h2>Мобильный баннер</h2>
						<MediaUploadToArrayItem
						 currentState={attributes.banners}
						 attributeName={'banners'}
						 field={'mobileImage'}
						 index={selectedBanner}
						 setAttributes={setAttributes}
						 label={'Мобильная картинка'}
						/>
						{
							attributes.banners[selectedBanner] && attributes.banners[selectedBanner].mobileImage && (
								<img src={attributes.banners[selectedBanner].mobileImage.url} width={'100%'} height={200} alt={""}/>
							)
						}
						<SimpleHeightControl
							attributeName={'blockHeightMobile'}
							value={attributes.blockHeightMobile}
							setAttributesCallback={setAttributes}
							label={'Высота баннера на мобилке'}

						/>
            </div>
					</PanelBody>
				)
			}
			<PanelBody>
				<SimpleBorderControl
				attributeName={'bannerBorder'}
				currentValue={attributes.bannerBorder}
				label={'Граница баннера'}
				setAttributesCallback={setAttributes}
				/>
			</PanelBody>
			<PanelBody>

			 	<SimpleAttributeSet
 		 	   value={attributes.target}
				 attributeName={'target'}
				 setAttributesCallback={setAttributes}
				 label={'Цель для баннера'}
				/>
				<SimpleHeightControl
				attributeName={'bannerBorderRadius'}
				value={attributes.bannerBorderRadius}
				setAttributesCallback={setAttributes}
				label={'Скругляшка баннера'}

				/>
				<SimpleHeightControl
				 	attributeName={'blockHeight'}
					value={attributes.blockHeight}
					setAttributesCallback={setAttributes}
					label={'Высота баннера'}
				/>
				<SimpleTip value={'Цвета'}/>
				<SimpleColorSelector
					attributeName={'titleColor'}
					value={attributes.titleColor}
					setAttributesCallback={setAttributes}
					label={'Цвет заголовка'}
				/>
				<SimpleColorSelector
					attributeName={'descriptionColor'}
					value={attributes.descriptionColor}
					setAttributesCallback={setAttributes}
					label={'Цвет описания'}
				/>
				<SimpleColorSelector
					attributeName={'contentAfterColor'}
					value={attributes.contentAfterColor}
					setAttributesCallback={setAttributes}
					label={'Цвет текста под кнопкой'}
				/>
			</PanelBody>
			<PanelBody>
				<SimpleTip value={'Настройки кнопки'}/>
				<SimpleColorSelector
					attributeName={'buttonBackground'}
					value={attributes.buttonBackground}
					setAttributesCallback={setAttributes}
					label={'Фон кнопки'}
				/>
				<SimpleColorSelector
					attributeName={'buttonColor'}
					value={attributes.buttonColor}
					setAttributesCallback={setAttributes}
					label={'Цвет шрифта кнопки'}
				/>
				<SimpleHeightControl
				 	attributeName={'buttonPaddingY'}
					value={attributes.buttonPaddingY}
					setAttributesCallback={setAttributes}
					label={'Вн.отступы сверху/снизу'}
				/>
				<SimpleHeightControl
					attributeName={'buttonPaddingX'}
					value={attributes.buttonPaddingX}
					setAttributesCallback={setAttributes}
					label={'Вн.отступы слева/справа'}
				/>
				<SimpleHeightControl
					attributeName={'buttonBorderRadius'}
					value={attributes.buttonBorderRadius}
					setAttributesCallback={setAttributes}
					label={'Скругляшки кнопки'}
				/>
			</PanelBody>
			<PanelBody>
				<SimpleTip value={'Настройки области текста'}/>
				<SimpleAlignmentSelector
				attributeName={'captionAlign'}
				value={attributes.captionAlign}
				setAttributesCallback={setAttributes}
				label={'Алигн контента'}
				/>
				<SimpleHeightControl
				attributeName={'captionMaxWidth'}
				value={attributes.captionMaxWidth}
				setAttributesCallback={setAttributes}
				label={'Ширина контейнера баннера'}
				/>
				<SimpleHeightControl
					attributeName={'captionPaddingY'}
					value={attributes.captionPaddingY}
					setAttributesCallback={setAttributes}
					label={'Отступы области текста Y'}
				/>
				<SimpleHeightControl
					attributeName={'captionPaddingX'}
					value={attributes.captionPaddingX}
					setAttributesCallback={setAttributes}
					label={'Отступы области текста X'}
				/>
				<SimpleHeightControl
					attributeName={'captionGap'}
					value={attributes.captionGap}
					setAttributesCallback={setAttributes}
					label={'Отступ между элементами текста/кнопкой'}
				/>
				<SimpleHeightControl
					attributeName={'titleFontSize'}
					value={attributes.titleFontSize}
					setAttributesCallback={setAttributes}
					label={'Размер заголовка'}
				/>
				<SimpleHeightControl
					attributeName={'descriptionFontSize'}
					value={attributes.descriptionFontSize}
					setAttributesCallback={setAttributes}
					label={'Размер под заголовка'}
				/>
				<SimpleHeightControl
					attributeName={'contentMoreFontSize'}
					value={attributes.contentMoreFontSize}
					setAttributesCallback={setAttributes}
					label={'Размер контента под кнопкой'}
				/>
			</PanelBody>
		</InspectorControls>

	)
}

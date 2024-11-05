import {
	InspectorControls, BlockControls
} from '@wordpress/block-editor';
import {
	ToolbarGroup, ToolbarButton, PanelBody
} from '@wordpress/components'

import {

	SimpleMediaUpload,
	SimpleHeightControl,
	SimpleTip,
	SimpleGradientPicker,
	SimpleAlignmentSelector,
	SimpleColorSelector
} from '../Service/index'

export default function Inspector({attributes, setAttributes}) {
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton>
						<SimpleMediaUpload
							attributeName={'burgerImage'}
							currentAttribute={attributes.burgerImage}
							setAttributesCallback={setAttributes}
							label={'Иконка бургера'}
						/>
					</ToolbarButton>

				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody>
					<h2>Ширина сайдбара</h2>
					<SimpleHeightControl
						value={attributes.burgerAsideWidth}
						attributeName={'burgerAsideWidth'}
						setAttributesCallback={setAttributes}
						label={'Ширина сайдбара'}
					/>
					<SimpleColorSelector
						value={attributes.asideBackground}
						attributeName={'asideBackground'}
						setAttributesCallback={setAttributes}
						label={'Фон сайдбара'}
					/>
					<SimpleGradientPicker
						value={attributes.asideBackground}
						attributeName={'asideBackground'}
						setAttributesCallback={setAttributes}
						label={'Фон сайдбара'}
					/>
				</PanelBody>
				<PanelBody>
					<h2>Настройки бургер меню</h2>
					<SimpleTip value={'Иконки можно тягать отсюда: \n https://www.svgrepo.com/svg/503034/grids'}/>
					<SimpleHeightControl
						value={attributes.burgerImageWidth}
						attributeName={'burgerImageWidth'}
						setAttributesCallback={setAttributes}
						label={'Ширина иконки бургера'}
					/>
					<SimpleHeightControl
						value={attributes.burgerImageHeight}
						attributeName={'burgerImageHeight'}
						setAttributesCallback={setAttributes}
						label={'Высота иконки бургера'}
					/>
					<SimpleAlignmentSelector
						value={attributes.align}
						attributeName={'align'}
						setAttributesCallback={setAttributes}
						label={'Расположение сайдбара (право/лево)'}
					/>
					<SimpleColorSelector
						value={attributes.nearIconColor}
						attributeName={'nearIconColor'}
						setAttributesCallback={setAttributes}
						label={'Цвет текста возле иконки бургера'}
					/>
					<SimpleColorSelector
						value={attributes.closeBurgerColor}
						attributeName={'closeBurgerColor'}
						setAttributesCallback={setAttributes}
						label={'Цвет закрытия бургера (иконки)'}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	)
}

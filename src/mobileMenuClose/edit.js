import {useBlockProps, InspectorControls, BlockControls, RichText} from '@wordpress/block-editor';
import {
	PanelBody, ToolbarGroup, ToolbarButton
} from '@wordpress/components'

import './editor.scss';
import {SimpleCheckbox, SimpleColorSelector, SimpleHeightControl, SimpleMediaUpload} from "../Service";

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()


	return (
		<div {...blockProps}>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton>
						<SimpleMediaUpload
							currentAttribute={attributes.icon}
							attributeName={'icon'}
							setAttributesCallback={setAttributes}
							label={'Иконка меню'}
						/>
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody>
					<SimpleCheckbox
					 value={attributes.isAbsolute}
					 attributeName={'isAbsolute'}
					 setAttributesCallback={setAttributes}
					 label={"Повесить кнопку в угол сайдбара?"}
					 help={"Разместит кнопку закрытия в уголок сайдбара на мобильном меню"}
					/>
					<SimpleHeightControl
						value={attributes.iconWidth}
						attributeName={'iconWidth'}
						setAttributesCallback={setAttributes}
						label={'Размер иконки'}
					/>
					<SimpleHeightControl
						value={attributes.iconPadding}
						attributeName={'iconPadding'}
						setAttributesCallback={setAttributes}
						label={'Отступы'}
					/>
					<SimpleColorSelector
					value={attributes.iconBackground}
					attributeName={'iconBackground'}
					setAttributesCallback={setAttributes}
					label={'Цвет фона иконки'}
					/>
					<SimpleColorSelector
					value={attributes.textColor}
					attributeName={'textColor'}
					setAttributesCallback={setAttributes}
					label={'Цвет шрифта'}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="edit__mobile_menu_trigger"
					 style={{
						 background: attributes.iconBackground,
						 padding: attributes.iconPadding
					 }}
			>

				{
					attributes.icon && (
						<img src={attributes.icon.url} width={attributes.iconWidth} height={attributes.iconWidth} alt=""/>
					)
				}
				<RichText
					value={attributes.text}
					onChange={(text) => setAttributes({text: text})}
					placeholder={'Текст...'}
					style={{
						color: attributes.textColor
					}}
				/>
			</div>

		</div>

	);
}

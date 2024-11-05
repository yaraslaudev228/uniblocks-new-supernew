import {useBlockProps, InspectorControls, BlockControls, RichText} from '@wordpress/block-editor';
import {
	PanelBody, ToolbarGroup, ToolbarButton
} from '@wordpress/components'

import './editor.scss';
import {SimpleColorSelector, SimpleHeightControl, SimpleMediaUpload} from "../Service";

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
					<SimpleHeightControl
						value={attributes.iconWidth}
						attributeName={'iconWidth'}
						setAttributesCallback={setAttributes}
						label={'Размер иконки'}
					/>
					<SimpleColorSelector
					value={attributes.textColor}
					attributeName={'textColor'}
					setAttributesCallback={setAttributes}
					label={'Цвет шрифта'}
					/>
					<SimpleColorSelector
					value={attributes.background}
					attributeName={'background'}
					setAttributesCallback={setAttributes}
					label={'Фон Иконки'}
					/>
					<SimpleHeightControl
					value={attributes.padding}
					attributeName={'padding'}
					setAttributesCallback={setAttributes}
					label={'Отступы иконки'}
					/>
					<SimpleHeightControl
						value={attributes.borderRadius}
						attributeName={'borderRadius'}
						setAttributesCallback={setAttributes}
						label={'Скругляшки иконки'}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="edit__mobile_menu_trigger">
				<div className="icon" style={{
					background: attributes.background,
					padding: attributes.padding,
					borderRadius: attributes.borderRadius
				}}>
				{
					attributes.icon && (
						<img src={attributes.icon.url} width={attributes.iconWidth} height={attributes.iconWidth} alt=""/>
					)
				}
				</div>
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

import {useBlockProps, InspectorControls, RichText} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl
} from '@wordpress/components'
import './editor.scss';
import {SimpleAttributeSet, SimpleColorSelector, SimpleMediaUpload} from "../Service";
import {useState} from "react";

export default function Edit({attributes, setAttributes}) {
	const [selectedPart, setSelectedPart] = useState(false)
	const bannerStyles = {}
	if (attributes.background) {
		bannerStyles.background = `url(${attributes.background.url}) no-repeat`
		bannerStyles.backgroundSize = '100%'
		bannerStyles.backgroundPosition = 'center'
	}
	if (attributes.padding) {
		bannerStyles.padding = attributes.padding
	}
	if(attributes.borderRadius) {
		bannerStyles.borderRadius = attributes.borderRadius
	}

	const changeObjectValues = (content, object, property) => {
		const currentState = {...attributes[object]}
		currentState[property] = content
		setAttributes({...attributes[object], [object]: currentState})
	}


	return (<div {...useBlockProps()}>
		<InspectorControls>
			<PanelBody>
				<h2>Фон Баннера</h2>
				<SimpleMediaUpload
					attributeName={'background'}
					currentAttribute={attributes.background}
					label={'Фон Баннера'}
					setAttributesCallback={setAttributes}
				/>
				<SimpleAttributeSet
					attributeName={'padding'}
					value={attributes.padding}
					label={'Отступы баннера'}
					setAttributesCallback={setAttributes}
				/>
				<SimpleAttributeSet
					attributeName={'borderRadius'}
					value={attributes.borderRadius}
					label={'Скругляшки баннера'}
					setAttributesCallback={setAttributes}
				/>
	 	 		<TextControl
					label={'Фон Кнопки'}
			    onChange={(value) => changeObjectValues(value,
					 'button', 'background') }
				  value={attributes.button.background}
				/>
				<TextControl
					label={'Цвет кнопки'}
					onChange={(value) => changeObjectValues(value,
						'button', 'color') }
					value={attributes.button.color}
				/>
			</PanelBody>
			{
				selectedPart === 'blocks' && (
					<>
						<PanelBody>
							<h2>Настройки блока VIP</h2>
							<TextControl
								label={'Лейба Top'}
								value={attributes.blockVipImagePosition.top}
								onChange={(size) => changeObjectValues(size, 'blockVipImagePosition', 'top')}
							/>
							<TextControl
								label={'Лейба Left'}
								value={attributes.blockVipImagePosition.left}
								onChange={(size) => changeObjectValues(size, 'blockVipImagePosition', 'left')}
							/>
							<TextControl
								label={'Лейба Bottom'}
								value={attributes.blockVipImagePosition.bottom}
								onChange={(size) => changeObjectValues(size, 'blockVipImagePosition', 'bottom')}
							/>
							<TextControl
								label={'Лейба Right'}
								value={attributes.blockVipImagePosition.right}
								onChange={(size) => changeObjectValues(size, 'blockVipImagePosition', 'right')}
							/>
						</PanelBody>
						<PanelBody>
							<h2>Настройки блока Tournaments</h2>
							<TextControl
								label={'Лейба Top'}
								value={attributes.blockTournamentsImagePosition.top}
								onChange={(size) => changeObjectValues(size, 'blockTournamentsImagePosition', 'top')}
							/>
							<TextControl
								label={'Лейба Left'}
								value={attributes.blockTournamentsImagePosition.left}
								onChange={(size) => changeObjectValues(size, 'blockTournamentsImagePosition', 'left')}
							/>
							<TextControl
								label={'Лейба Bottom'}
								value={attributes.blockTournamentsImagePosition.bottom}
								onChange={(size) => changeObjectValues(size, 'blockTournamentsImagePosition', 'bottom')}
							/>
							<TextControl
								label={'Лейба Right'}
								value={attributes.blockTournamentsImagePosition.right}
								onChange={(size) => changeObjectValues(size, 'blockTournamentsImagePosition', 'right')}
							/>
						</PanelBody>
					</>

				)
			}
		</InspectorControls>
		<div className="uni-block-rocket-banner" style={bannerStyles}>
			<div className="caption" onClick={() => setSelectedPart('caption')}>
				<RichText
					tagName={'div'}
					className={'title'}
					value={attributes.bigTitle.title}
					onChange={(text) => changeObjectValues(text, 'bigTitle', 'title')}
					style={{
						fontSize: attributes.bigTitle.size,
						color: attributes.bigTitle.color,
						lineHeight: attributes.bigTitle.lineHeight
					}}
				/>
				<RichText
					tagName={'div'}
					value={attributes.description.title}
					onChange={(text) => changeObjectValues(text, 'description', 'title')}
					style={{
						fontSize: attributes.description.size,
						color: attributes.description.color,
						lineHeight: attributes.description.lineHeight
					}}
				/>
				<RichText
					tagName={'a'}
					className={'uni-btn'}
					value={attributes.button.title}
					onChange={(text) => changeObjectValues(text, 'button', 'title')}
					style={{
						fontSize: attributes.button.size,
						color: attributes.button.color,
						lineHeight: attributes.button.lineHeight,
						padding: attributes.button.padding,
						background: attributes.button.background,
						borderRadius: attributes.button.borderRadius
					}}
				/>
			</div>
			<div className="uni_blocks__list" onClick={() => setSelectedPart('blocks')}>
				<div className="block" style={{
					background: attributes.blocks.background,
					backdropFilter: `blur(${attributes.blocks.blur})`,
					padding: attributes.blocks.padding,
					borderRadius: attributes.blocks.borderRadius
				}}>
					<RichText
						tagName={'div'}
						className={'title'}
						value={attributes.blockVipTitle.title}
						style={{
							fontSize: attributes.blockVipTitle.size,
							lineHeight: attributes.blockVipTitle.lineHeight,
							color: attributes.blockVipTitle.color
						}}
						onChange={(text) => changeObjectValues(text, 'blockVipTitle', 'title')}
					/>
					<RichText
						tagName={'div'}
						className={'title'}
						value={attributes.blockVipDescription.title}
						style={{
							fontSize: attributes.blockVipDescription.size,
							color: attributes.blockVipDescription.color,
							lineHeight: attributes.blockVipDescription.lineHeight
						}}
						onChange={(text) => changeObjectValues(text, 'blockVipDescription', 'title')}
					/>
					<SimpleMediaUpload
					attributeName={'blockVipImage'}
					currentAttribute={attributes.blockVipImage}
					setAttributesCallback={setAttributes}
					label={'Лейба'}
					/>
					{
						attributes.blockVipImage && (
							<a href="#" className={'label'} style={{
								position: 'absolute',
								top: attributes.blockVipImagePosition.top,
								left: attributes.blockVipImagePosition.left,
								right: attributes.blockVipImagePosition.right,
								bottom: attributes.blockVipImagePosition.bottom
							}}>
								<img src={attributes.blockVipImage.url}
										 width={120}
										 height={120}
										 alt="Label"
								/>
							</a>
						)
					}
				</div>
				<div className="block" style={{
					background: attributes.blocks.background,
					backdropFilter: `blur(${attributes.blocks.blur})`,
					padding: attributes.blocks.padding,
					borderRadius: attributes.blocks.borderRadius
				}}>
					<RichText
						tagName={'div'}
						className={'title'}
						value={attributes.blockTournamentsTitle.title}
						style={{
							fontSize: attributes.blockTournamentsTitle.size,
							lineHeight: attributes.blockTournamentsTitle.lineHeight,
							color: attributes.blockTournamentsTitle.color
						}}
						onChange={(text) => changeObjectValues(text, 'blockTournamentsTitle', 'title')}
					/>
					<RichText
						tagName={'div'}
						className={'title'}
						value={attributes.blockTournamentsDescription.title}
						style={{
							fontSize: attributes.blockTournamentsDescription.size,
							color: attributes.blockTournamentsDescription.color,
							lineHeight: attributes.blockTournamentsDescription.lineHeight
						}}
						onChange={(text) => changeObjectValues(text, 'blockTournamentsDescription', 'title')}
					/>
					<SimpleMediaUpload
						attributeName={'blockTournamentsImage'}
						currentAttribute={attributes.blockTournamentsImage}
						setAttributesCallback={setAttributes}
						label={'Лейба'}
					/>
					{
						attributes.blockTournamentsImage && (
							<a href="#" className={'label'} style={{
								position: 'absolute',
								top: attributes.blockTournamentsImagePosition.top,
								left: attributes.blockTournamentsImagePosition.left,
								right: attributes.blockTournamentsImagePosition.right,
								bottom: attributes.blockTournamentsImagePosition.bottom
							}}>
								<img src={attributes.blockTournamentsImage.url}
										 width={120}
										 height={120}
										 alt="Label"
								/>
							</a>
						)
					}
				</div>
			</div>
		</div>
	</div>)
}

import {useBlockProps, InnerBlocks, BlockControls, InspectorControls} from '@wordpress/block-editor';
import {PanelBody} from '@wordpress/components'
import {SimpleHeightControl, SimpleColorSelector, SimpleMediaUpload} from "../blocksRegularComponents";
import './editor.scss';


export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()

	const containerBackground = {
		backgroundColor: `${attributes.backgroundColor}`,
		backgroundImage: `url(${attributes.backgroundImage.url})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		minHeight: attributes.containerHeight ? attributes.containerHeight : 'auto',
		borderRadius: attributes.outerBorderRadius,
		backgroundPosition: 'center'

	}
	if(attributes.backgroundGradient) {
		containerBackground.backgroundImage = attributes.backgroundGradient
	}

	return (

		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					{SimpleHeightControl(
						attributes.containerSize,
						'containerSize',
						setAttributes,
						'Размер контейнера'
					)}
					{
						SimpleHeightControl(
							attributes.containerHeight,
							'containerHeight',
							setAttributes,
							'Высота контейнера'
						)
					}
					{SimpleHeightControl(
						attributes.outerBorderRadius,
						'outerBorderRadius',
						setAttributes,
						'Скругляшки внешнего контейнера'
					)}
					{SimpleHeightControl(
						attributes.innerBorderRadius,
						'innerBorderRadius',
						setAttributes,
						'Скругляшки внутреннего контейнера'
					)}
					{SimpleHeightControl(
						attributes.containerPaddingY,
						'containerPaddingY',
						setAttributes,
						'Отступы контейнера сверху/снизу (внутр)'
					)}
					{SimpleHeightControl(
						attributes.containerPaddingX,
						'containerPaddingX',
						setAttributes,
						'Отступы контейнера слева/справа (внутр)'
					)}
					{
						SimpleMediaUpload(
							'backgroundImage',
							attributes.backgroundImage,
							setAttributes,
							'Картинка на фон контейнера (на весь блок)'
						)
					}
					{
						SimpleColorSelector(
							attributes.backgroundColor,
							'backgroundColor',
							setAttributes,
							'Цвет фона контейнера'
						)
					}
					{
						SimpleColorSelector(
							attributes.innerBackgroundColor,
							'innerBackgroundColor',
							setAttributes,
							'Цвет фона внутреннего контейнера'
						)
					}
					{
						SimpleColorSelector(
							attributes.backgroundGradient,
							'backgroundGradient',
							setAttributes,
							'Цвет градиент (если хочешь чтобы был градик на фоне)'
						)
					}

					{
						SimpleColorSelector(
							attributes.fontColorInside,
							'fontColorInside',
							setAttributes,
							'Цвет текста внутри контейнера'
						)
					}

				</PanelBody>

			</InspectorControls>
			<section className={'uni_container_section'}
			 style={containerBackground}
			>
				<div className="uni_container" style={
					{
						maxWidth: attributes.containerSize,
 						width: '100%',
						margin: '0 auto',
						background: attributes.innerBackgroundColor,
						borderRadius: attributes.innerBorderRadius,
					}
				}>
					<InnerBlocks style = {{
						color: attributes.fontColorInside
					}}/>
				</div>
			</section>
		</div>

	);
}

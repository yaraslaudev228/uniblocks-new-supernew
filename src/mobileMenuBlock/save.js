
import {useBlockProps, RichText} from '@wordpress/block-editor';


export default function save({attributes}) {

	const blockProps = useBlockProps.save();

	return (

		<div {...blockProps}>
			<div className="uni__mobile_menu_trigger">

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
				{
					attributes.text && (
						<RichText.Content
							value={attributes.text}
							placeholder={'Текст...'}
							style={{
								color: attributes.textColor
							}}
						/>
					)
				}

			</div>
		</div>

	)

}

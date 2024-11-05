import {useBlockProps, RichText} from '@wordpress/block-editor';


export default function save({attributes}) {

	const blockProps = useBlockProps.save();

	return (

		<div {...blockProps}>
			<div className="close"
					 style={{
						 background: attributes.iconBackground,
						 padding: attributes.iconPadding,
						 position: attributes.isAbsolute ? 'absolute' : 'static',
 		 	 	 	   top: '10px',
						 right: '10px',
					 }}
			>

				{
					attributes.icon && (
						<img src={attributes.icon.url} width={attributes.iconWidth} height={attributes.iconWidth} alt=""/>
					)
				}
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

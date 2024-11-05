import {useBlockProps, RichText} from '@wordpress/block-editor';
import {RawHTML} from '@wordpress/element'

export default function save({attributes}) {

	const blockProps = useBlockProps.save({
		className:' uni_burger'
	})

	return (
		<div  {...blockProps} >
			<style>{
				`.uni_burger__aside {
				  width: ${attributes.burgerAsideWidth};
				  background: ${attributes.asideBackground}
				 }`
			}</style>

			<div className="uni_burger__icon"
			>
				{
				 attributes.burgerImage.url &&
					(
						<img src={attributes.burgerImage.url}
								 width={attributes.burgerImageWidth}
								 height={attributes.burgerImageHeight}
								 alt=""/>
					)
				}
				{
					attributes.burgerTitle && (
						<RichText.Content
							value={attributes.burgerTitle}
							tagName={'span'}
							style={{
								color: attributes.nearIconColor
							}}
						/>
					)
				}

			</div>

		</div>

	);
}

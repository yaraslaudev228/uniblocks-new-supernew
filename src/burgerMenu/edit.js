import './editor.scss';
import Inspector from "./inspector.js"
import {useBlockProps, RichText} from '@wordpress/block-editor';

export default function Edit({attributes, setAttributes}) {

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<Inspector attributes={attributes} setAttributes={setAttributes}  />
			<style>
				{`[data-widget-area-id="burger-1"] { background: ${attributes.asideBackground} !important; }`}
			</style>
			<div className="uni_burger">
				<div className="uni_burger__icon">
					<img src={attributes.burgerImage.url} width={attributes.burgerImageWidth}
							 height={attributes.burgerImageHeight} alt=""/>
					<RichText
						value={attributes.burgerTitle}
						onChange={(content) => setAttributes({burgerTitle: content})}
						tagName="span"
						placeholder="...Burger"
						style={{color: attributes.nearIconColor}}
					/>
				</div>

			</div>
		</div>
	);
}

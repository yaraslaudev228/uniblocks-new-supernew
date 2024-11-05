import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';


export default function save({attributes}) {
	const blockProps = useBlockProps.save();
	blockProps.className = blockProps.className + ' uni_header__collection ' + (attributes.isMenuMobile ? 'uni_header__wrap_in_mobile' : "")
	blockProps.style = {
		position: attributes.isAbsolute ? 'absolute' : 'static',
		top: "0",
		left: "0",
		minHeight: attributes.headerHeight,
		padding: `0 ${attributes.headerPadding}`

	}
	return (

		<div {...blockProps}>
			{
				attributes.isMenuMobile ? <div className={'uni_burger_mobile__trigger mobile_only'}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list"
							 viewBox="0 0 16 16">
						<path fill-rule="evenodd"
									d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
					</svg>
				</div> : ""
			}
			{
				attributes.isMenuMobile ?
					<div className={'uni_wrap_for__mobile uni_header__collection'}>
						<InnerBlocks.Content/>
					</div> :
					<InnerBlocks.Content/>
			}

		</div>
	)

}

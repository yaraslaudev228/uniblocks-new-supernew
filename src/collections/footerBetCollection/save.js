import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';


export default function save({attributes}) {
	const blockProps = useBlockProps.save();
	blockProps.className += ' uni_bet_footer__collection'
	blockProps.style = {
		padding: attributes.footerPaddingY + ' ' + attributes.footerPaddingX,
		display: 'flex',
		flexDirection: 'column',
		gap: attributes.gapBetween
	}
	return (

		<div {...blockProps}>

			<InnerBlocks.Content/>
		</div>
	)

}

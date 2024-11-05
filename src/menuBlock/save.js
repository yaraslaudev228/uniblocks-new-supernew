import {useBlockProps, RichText} from '@wordpress/block-editor';


export default function save({attributes}) {

	const blockProps = useBlockProps.save()
	blockProps.className = blockProps.className + ' menu_items menu_items-' + attributes.menuDirection
	blockProps.className += ' menu_items_align_' + attributes.menuItemsAlignment
	blockProps.style = {
		flexBasis: attributes.menuItemsWidth,
		flexGrow: 1,
		flexWrap: !attributes.mobileNowrap ? 'wrap' : 'nowrap',
		width: '100%',
		maxWidth: attributes.menuItemsWidth,
		gap: attributes.menuItemsGap,

		alignItems: 'unset',
		margin: attributes.menuItemsMargin,
		background: attributes.menuItemsBlockBackground,
		padding: attributes.menuItemsBlockPadding,
		borderRadius: attributes.menuItemsBlockBorderRadius,
		overflowX: !attributes.mobileNowrap ? 'hidden' : 'scroll',
	}
	return (
		<div  {...blockProps}>
			{
				attributes.menuItems.map((item, index) => (

					<a key={index} href={item.url ? item.url : attributes.menuItemsUrl}
						 onClick={item.target}
						 style={
							 {
								 background: item.background ? item.background : attributes.menuItemsBackground,
								 padding: item.padding ? item.padding : attributes.menuItemsPadding,
								 boxShadow: item.boxShadow ? item.boxShadow : '',
								 color: item.color ? item.color : attributes.menuItemsColor,
								 borderRadius: item.borderRadius ? item.borderRadius : attributes.itemsBorderRadius,
								 flexGrow: item.flexGrow ? '1' : attributes.flexGrowAll ? '1' : 'unset',
								 flexDirection: item.direction ? item.direction : attributes.itemsInnerDirection,
								 border: `${item.border ? item.border.width + ' ' + (item.border.style ? item.border.style : "") + ' ' + item.border.color : "0"}`,
								 flexBasis: attributes.menuDirection === 'vertical' ? 'unset' : item.width ? item.width : attributes.itemsWidth,
								 fontSize: attributes.itemsFontSize,
								 whiteSpace:  attributes.mobileNowrap ? 'nowrap' : 'unset'
							 }
						 }
						 className={'uni_menu_item uni_menu_item-' + item.align}>
						{
							item.icon &&
							<img src={item.icon.url} width={item.iconSize ? item.iconSize : attributes.menuItemsIconSize}
									 height={item.iconSize ? item.iconSize : attributes.menuItemsIconSize} alt={item.name}/>
						}
						{
							item.name && <RichText.Content
								className={'title'}// The tag type of the RichText container.
								value={item.name} // The content value bound to this RichText.
							/>
						}


					</a>
				))
			}
		</div>
	);
}

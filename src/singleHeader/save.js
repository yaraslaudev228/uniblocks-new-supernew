import {useBlockProps, RichText, InnerBlocks} from '@wordpress/block-editor'


export default function save({attributes}) {

	return (
		<header {...useBlockProps.save()}>
			<div className="uni_logo_wrap">
				<InnerBlocks.Content />
				<a href={'/'} className="uni_logo">
					<img src={attributes.logo.url} width={attributes.logoWidth} height={attributes.logoHeight} alt=""/>
				</a>
				<div className={attributes.isBurger ? "uni_menu_items uni_menu_items_hidden" : "uni_menu_items uni_menu_items_is_mobile"}
 	 	 	 	 style={{
					 gap: attributes.menuItemsGap
				 }}
				>
					{attributes.menuItems.map((item, index) => (
						<a href={item.url} onClick={item.target} className={'uni_item '  + (item.hideInMobile ? 'uni_hide_on_mobile' : '')} key={index}
							 style={{
								 background: item.background ? item.background : attributes.menuItemsBackground,
								 color: item.color ? item.color : attributes.menuItemsColor,
								 padding: item.padding ? item.padding : attributes.menuItemsPadding,
								 borderRadius: item.borderRadius ? item.borderRadius : attributes.menuItemsBorderRadius,
								 fontSize: item.fontSize ? item.fontSize : attributes.menuItemsFontSize,
                 width: attributes.menuItemsWidth,
								 border: item.border && item.border.width ?
									 `${item.border.width} ${item.border.style} ${item.border.color}` :
									 `${attributes.menuItemsBorder.width} ${attributes.menuItemsBorder.style} ${attributes.menuItemsBorder.color}`
							 }}
						>
							{
								item.icon && item.icon.url && (
									<img src={item.icon.url} width={item.iconSize ? item.iconSize : attributes.menuItemsIconSize}
											 height={item.iconSize ? item.iconSize : attributes.menuItemsIconsSize} alt={item.name}/>
								)
							}
							{item.name && (
								<RichText.Content
									value={item.name}
								/>
							)}
						</a>
					))}

				</div>
			</div>
			<div className="uni_buttons"
					 style={{
						 gap: attributes.buttonsGap
					 }}
			>
				{
					attributes.buttons.map((item, index) => (
						<a href={item.url} onClick={item.target} className={'btn '  + (item.hideInMobile ? 'uni_hide_on_mobile' : '')} key={index} style={{
							background: item.background ? item.background : attributes.buttonsBackground,
							color: item.color ? item.color : attributes.buttonsColor,
							padding: item.padding ? item.padding : attributes.buttonsPadding,
							borderRadius: item.borderRadius ? item.borderRadius : attributes.buttonsBorderRadius,
							fontSize: item.fontSize ? item.fontSize : attributes.buttonsFontSize,
              width: attributes.buttonsWidth, textAlign: attributes.buttonsAlign,
							border: item.border && item.border.width ?
								`${item.border.width} ${item.border.style} ${item.border.color}` :
								`${attributes.buttonsBorder.width} ${attributes.buttonsBorder.style} ${attributes.buttonsBorder.color}`
						}}
						>
							{
								item.icon && item.icon.url && (
									<img src={item.icon.url} width={item.iconSize ? item.iconSize : attributes.buttonsIconsSize}
											 height={item.iconSize ? item.iconSize : attributes.buttonsIconsSize} alt={item.name}/>
								)
							}
							{
								item.name && (
									<RichText.Content
										value={item.name}
									/>
								)
							}
						</a>
					))
				}

			</div>

		</header>
	);
}

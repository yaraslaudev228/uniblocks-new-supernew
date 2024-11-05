import {useBlockProps, RichText} from '@wordpress/block-editor';
import {getFlexAlignment} from "../Service";

export default function save({attributes}) {

	const blockProps = useBlockProps.save()
	blockProps.className = blockProps.className + ' uni_langs_dd'
	// let alignDropdown
 	// switch (attributes.langsDropdownAlign) {
	// 	case 'left' : alignDropdown = 'flex-start'
	// 		break
	// 	case 'center' : alignDropdown = 'center'
	// 		break
	// 	case 'right' : alignDropdown = 'flex-end'
	// 		break
	// }
	return (
		<div  {...blockProps}>

			<div className={'uni_langs_list'} style={{
				display: 'flex',
				justifyContent: getFlexAlignment(attributes.langsButtonAlign)
			}}>
				<div className={'uni_lang uni_current_lang'}
				style={{
					background: attributes.langsDropdownBackground,
					width: attributes.langsDropdownWidth,
					justifyContent: attributes.langsDropdownAlign,
					borderRadius: attributes.langsDropdownBorderRadius,
					padding: `${attributes.langsDropdownPaddingY} ${attributes.langsDropdownPaddingX}`
				}}
				>
					{attributes.langs[0] ? attributes.langs[0].flag.url && <img src={attributes.langs[0].flag.url} style={{
						borderRadius: attributes.flagsBorderRadius,
						width: attributes.flagsSize,
						height: attributes.flagsSize
					}} width={20} height={20} alt=""/> : ''}

					<RichText.Content
						className={'title'}
						tagName="div" // The tag type of the RichText container.
						value={attributes.langs[0] ? attributes.langs[0].name : ''} // The content value bound to this RichText.
						placeholder="Enter title here..." // Optional: Placeholder text.
					/>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							 className="bi bi-caret-down-fill" viewBox="0 0 16 16">
						<path
							d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
					</svg>
				</div>
				<div className="uni_langs__dropdown"  style={{
					width: attributes.langsDropdownWidth,
					padding: `${attributes.langsDropdownPaddingY} ${attributes.langsDropdownPaddingX}`,
					borderRadius: attributes.langsDropdownBorderRadius,
					[attributes.langsDropdownDirection]: '100%',
					[attributes.langsButtonAlign !== 'center' ? attributes.langsButtonAlign : 'left']: 0
				}}>
					{
						attributes.langs.map((item, index) => (

							<a href={'/goto'} key={index} className={'uni_lang'} style={{
								background: attributes.langsBackground,

							}}>
								{item.flag.url && (
									<img src={item.flag.url ? item.flag.url : ''} style={
										{
											borderRadius: attributes.flagsBorderRadius,
											width: attributes.flagsSize,
											height: attributes.flagsSize
										}
									} width={20} height={20} alt=""/>
								)}

								<RichText.Content
									className={'title'}
									tagName="div" // The tag type of the RichText container.
									value={item.name ? item.name : ''} // The content value bound to this RichText.
									placeholder="Enter title here..." // Optional: Placeholder text.
								/>

							</a>
						))
					}

				</div>
			</div>
		</div>
	);
}

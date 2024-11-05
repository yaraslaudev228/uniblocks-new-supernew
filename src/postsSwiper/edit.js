import {useBlockProps, InspectorControls, HeightControl} from '@wordpress/block-editor';
import {
	Flex,
	TextControl,
	CheckboxControl, PanelBody,
	ColorIndicator
} from '@wordpress/components'

import {useEffect, useState} from '@wordpress/element'

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	const [slots, setSlots] = useState([])

	useEffect(() => {
		jQuery(function ($) {
			$.get('/wp-admin/admin-ajax.php', {
				action: 'uni_get_posts',
				perPage: attributes.slotsPerPage ? attributes.slotsPerPage : "10"
			}).done(function (response) {
				setSlots(JSON.parse(response))
				setAttributes({slots: JSON.parse(response)})
			})
		})
	}, [attributes.slotsPerPage])


	blockProps.className = blockProps.className + ' uni_slots__swiper swiper'
	blockProps.style = {
		display: 'grid',
		gridTemplateColumns: `repeat(${attributes.slotsPerRow ? attributes.slotsPerRow : '6'}, 1fr)`,
		gap: attributes.slotsGap + 'px'
	}
	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						<h3>Posts swiper settings</h3>
						<Flex>
							<TextControl
								label={'Slots per Page'}
								value={attributes.slotsPerPage}
								onChange={(value) => {
									setAttributes({slotsPerPage: value})
								}}
								type="number"
							/>
						</Flex>
						<Flex>
							<TextControl
								label={'Slots per Row'}
								value={attributes.slotsPerRow}
								onChange={(value) => setAttributes({slotsPerRow: value})}
								type="number"
							/>
						</Flex>
						<Flex>
							<TextControl
								label={'Отступы между слотами'}
								value={attributes.slotsGap}
								onChange={(value) => setAttributes({slotsGap: value})}
								type={'number'}
							/>
						</Flex>
						<Flex>
							<TextControl
								label="Border radius"
								value={attributes.slotsBorderRadius}
								onChange={(value) => setAttributes({slotsBorderRadius: value})}
							/>
						</Flex>
						<Flex>
							<HeightControl
								value={attributes.slotsImageHeight}
								onChange={(height) => {
									setAttributes({slotsImageHeight: height})
								}}
								label="Slots image height"/>
						</Flex>

					</PanelBody>
					<PanelBody>
						<h3>Color scheme for block Slots Swiper</h3>
						<Flex>
							<ColorIndicator colorValue={attributes.slotsInnerTextColor}/>
							<TextControl
								label="Inner color for font"
								value={attributes.slotsInnerTextColor}
								onChange={(value) => setAttributes({slotsInnerTextColor: value})}
							/>
						</Flex>
						<Flex>
							<ColorIndicator colorValue={attributes.playBtnBackground}/>
							<TextControl
								label="Background for Play button"
								value={attributes.playBtnBackground}
								onChange={(value) => setAttributes({playBtnBackground: value})}
							/>
						</Flex>
						<Flex>
							<ColorIndicator colorValue={attributes.slotsTitleColor}/>
							<TextControl
								label="Slots Title color"
								value={attributes.slotsTitleColor}
								onChange={(value) => setAttributes({slotsTitleColor: value})}
							/>
						</Flex>
						<Flex>
							<CheckboxControl
								checked={attributes.isTitleUnderImage}
								help="Is title under image or inside?"
								label="Set title after slots images"
								onChange={(checked) => setAttributes({isTitleUnderImage: checked})}
							/>
						</Flex>
						<Flex>
							<TextControl
								label={"Demo text"}
								value={attributes.demoText}
								onChange={(value) => setAttributes({demoText: value})}
							/>
						</Flex>
					</PanelBody>
				</InspectorControls>
			}

			{
				!slots ? '' : slots.slice(0, 12).map((slot, index) => (
						<div key={index} className="uni_slot">
							<div className="uni_slot__image" style={
								{
									background: 'url(' + slot.image + ')',
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
									height: attributes.slotsImageHeight,
									borderRadius: attributes.slotsBorderRadius
								}
							} title={slot.title}>
								<div className="uni_slot__overlay uni_banner__overlay" style={{
									borderRadius: attributes.slotsBorderRadius,

								}}/>
								<div className="uni_slot__caption">
									{
										attributes.isTitleUnderImage === false && (
											<a href="#"
												 style={{color: attributes.slotsTitleColor ? attributes.slotsTitleColor : attributes.slotsInnerTextColor}}
												 className="uni_slot__title">
												{slot.title}</a>
										)

									}

									<a href="#" className="uni_slot__play" style={{
										background: attributes.playBtnBackground,
										color: attributes.slotsInnerTextColor
									}}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
												 className="bi bi-play-fill" viewBox="0 0 16 16">
											<path
												d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
										</svg>
									</a>
									<a href="/goto" style={{
										color: attributes.slotsInnerTextColor
									}}>
										{attributes.demoText}
									</a>
								</div>
							</div>

							{
								attributes.isTitleUnderImage ?
									<a href="#" style={{color: attributes.slotsTitleColor}} className="uni_slot__title">
										{slot.title}</a> : ''
							}

						</div>
					)
				)
			}
		</div>

	);
}

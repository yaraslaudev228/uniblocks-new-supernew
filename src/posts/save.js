import { useBlockProps} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {slots} = attributes
	const blockProps = useBlockProps.save();
	blockProps.className = ` ${blockProps.className} uni_slots`
	blockProps.style = {
		display: 'grid',
		gridTemplateColumns: `repeat(${attributes.slotsPerRow}, 1fr)`,
		gap: attributes.slotsGap
	}

	return (
	<>
		<section {...blockProps}>
			{

				slots.map((slot, index) => (
					<div key={index} className="uni_slot swiper-slide">
						<div className="uni_slot__image" style = {
							{
								background: 'url(' + slot.image + ')',
								backgroundSize: 'cover',
								backgroundPosition: 'center center',
								height: attributes.slotsImageHeight,
								borderRadius: attributes.slotsBorderRadius
							}
						} title={slot.title}>
							<div className="uni_slot__overlay uni_banner__overlay" style={{
								borderRadius: attributes.slotsBorderRadius
							}}/>
							<div className="uni_slot__caption">
								{
									attributes.isTitleUnderImage === false ? <a href={slot.url} className="uni_slot__title">
										{slot.title}</a> : ''
								}
								<a href="/goto" className="uni_slot__play" style={{
									background: attributes.playBtnBackground
								}}>
									<i className="fa fa-play"/>
								</a>
								<a href={slot.url} style={{
								 	color: attributes.slotsInnerTextColor
								}}>
									{attributes.demoText}
								</a>
							</div>
						</div>

						{
							attributes.isTitleUnderImage ? 	<a href={slot.url} className="uni_slot__title">
								{slot.title}</a> : ''
						}

					</div>)
				)
			}
		</section>
	</>)

 }

import './editor.scss';
import {useBlockProps } from '@wordpress/block-editor';
import {useEffect, useState} from '@wordpress/element'
import Inspector from "./inspector.js";

export default function Edit({attributes, setAttributes}) {
  const blockProps = useBlockProps()
  const [slots, setSlots] = useState([])
  useEffect(() => {
    jQuery(function ($) {
      $.get('/wp-admin/admin-ajax.php', {
        action: 'uni_get_posts',
        perPage: attributes.slotsPerPage
      }).done(function (response) {

        setSlots(JSON.parse(response))
        setAttributes({slots: JSON.parse(response)})
      })
    })
  }, [attributes.slotsPerPage])

  blockProps.className = blockProps.className + ' uni_slots'
  blockProps.style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${attributes.slotsPerRow}, 1fr)`,
    gap: attributes.slotsGap
  }
  return (
    <>
      <div {...blockProps}>
        <Inspector attributes={attributes} setAttributes={setAttributes}/>
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
                  borderRadius: attributes.slotsBorderRadius
                }}/>
                <div className="uni_slot__caption">
                  <a href="#" className="uni_slot__play">
                    <i className="fa fa-play"/>
                  </a>
                  <a href="/goto" style={{
                    color: attributes.slotsInnerTextColor
                  }}>
                    {attributes.demoText}
                  </a>
                </div>
              </div>

              <a href={slot.url} className="uni_slot__title">
                {slot.title}</a>
            </div>)
          )
        }
      </div>
    </>
  );
}

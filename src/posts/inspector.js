import {SimpleAttributeSet, SimpleCheckbox, SimpleColorSelector, SimpleHeightControl} from "../blocksRegularComponents";
import {SimpleAddBlockInArray, SimpleRemoveButton, TextControlForArray} from "../Service";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody} from "@wordpress/components";

export default function ({attributes, setAttributes}) {
  return (

  <InspectorControls>
    <PanelBody>
      <h3>Slots global Settings</h3>
      {
        SimpleAttributeSet(
          attributes.slotsPerPage,
          'slotsPerPage',
          setAttributes,
          'Слотов в блоке',
          'number'
        )
      }
      {
        SimpleAttributeSet(
          attributes.slotsPerRow,
          'slotsPerRow',
          setAttributes,
          'Слотов в строке',
          'number'
        )
      }
      {
        SimpleHeightControl(
          attributes.slotsGap,
          'slotsGap',
          setAttributes,
          'Отступы между слотами'
        )
      }
    </PanelBody>
    <PanelBody>
      <h2>Медиа точки</h2>
      <div className="media__queries">
        {
          attributes.mediaQueries.map((item, index) => (
            <div className={'media_query'}>
              <TextControlForArray
                setAttributesCallback={setAttributes}
                fieldToUpdate={'query'}
                arrayAttributeName={'mediaQueries'}
                currentState={attributes.mediaQueries}
                indexToUpdate={index}
                label={'Точка'}
              />
              <TextControlForArray
                setAttributesCallback={setAttributes}
                fieldToUpdate={'size'}
                arrayAttributeName={'mediaQueries'}
                currentState={attributes.mediaQueries}
                indexToUpdate={index}
                label={'Кол-во'}
              />
              <SimpleRemoveButton
                attributeName={'mediaQueries'}
                currentArray={attributes.mediaQueries}
                setAttributesCallback={setAttributes}
                blockIndex={index}
              />
            </div>
          ))
        }
      </div>
      <SimpleAddBlockInArray
        text='+ Добавить точку'
        setAttributesCallback={setAttributes}
        attributeName={'mediaQueries'}
        className={'add-media'}
        currentArray={attributes.mediaQueries}
        blockObject={{
          query: '',
          size: attributes.slotsPerRow
        }}
      />
    </PanelBody>
    <PanelBody>
      <h3>Скругляши слота и высота картинки</h3>
      {
        SimpleHeightControl(
          attributes.slotsBorderRadius,
          'slotsBorderRadius',
          setAttributes,
          'Скругляшики слота'
        )
      }
      {
        SimpleHeightControl(
          attributes.slotsImageHeight,
          'slotsImageHeight',
          setAttributes,
          'Высота картинки слота'
        )
      }
      {
        SimpleCheckbox(
          attributes.isTitleUnderImage,
          'isTitleUnderImage',
          setAttributes,
          'Заголовок снаружи если отмечено',
          'Позиция заголовка снаружи или внутри'
        )
      }
    </PanelBody>
    <PanelBody>
      <h3>Slots colors</h3>
      {
        SimpleColorSelector(
          attributes.slotsInnerTextColor,
          'slotsInnerTextColor',
          setAttributes,
          'Цвет шрифта внутри'
        )
      }
      {
        SimpleColorSelector(
          attributes.playBtnBackground,
          'playBtnBackground',
          setAttributes,
          'Фон кнопки слота'
        )
      }
    </PanelBody>
    <PanelBody>
      <h3>Demo text</h3>
      {
        SimpleAttributeSet(
          attributes.demoText,
          'demoText',
          setAttributes,
          'Текст Демо'
        )
      }
    </PanelBody>
  </InspectorControls>

  )
}
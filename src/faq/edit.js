import {useBlockProps, BlockControls, InspectorControls, RichText} from '@wordpress/block-editor';

import './editor.scss';
import metadata from './block.json';
import {
  SimpleColorSelector,
  SimpleAlignmentSelector,
  updateBlockInArray,
  SimpleAddBlockInArray,
  SimpleRemoveButton,
  SimpleMediaUploadInArrayElement,
  SimpleAttributeSet,
  AttributeSetForBlockInArray,
  AlignmentSetForBlockInArray,
  SimpleGradientPicker,
  ColorSelectorSetForBlockInArray
} from '../blocksRegularComponents'

import {PanelBody} from '@wordpress/components';

import {useEffect, useState} from '@wordpress/element'

export default function Edit({attributes, setAttributes}) {
  const blockProps = useBlockProps()
  const [selectedElement, setSelectedElement] = useState(null)

  return (
    <>
      <div  {...blockProps}>
        {
          <InspectorControls>
            <PanelBody>
              <h3>Цветовые настройки блока FAQ</h3>
              {
                SimpleColorSelector(
                  attributes.questionBgColor,
                  'questionBgColor',
                  setAttributes,
                  'Фон Вопроса'
                )
              }
              {
                SimpleColorSelector(
                  attributes.questionColor,
                  'questionColor',
                  setAttributes,
                  'Цвет шрифта вопроса'
                )
              }
              {
                SimpleColorSelector(
                  attributes.answerBgColor,
                  'answerBgColor',
                  setAttributes,
                  'Фон ответа'
                )
              }
              {
                SimpleColorSelector(
                  attributes.answerColor,
                  'answerColor',
                  setAttributes,
                  'Цвет шрифта ответа'
                )
              }
            </PanelBody>
            <PanelBody>
              <h3>Отступы и размеры блока FAQ</h3>
              {
                SimpleAttributeSet(
                  attributes.gapBetweenBlocks,
                  'gapBetweenBlocks',
                  setAttributes,
                  'Отступ между элементами'
                )
              }
              {
                SimpleAttributeSet(
                  attributes.borderRadiusForElements,
                  'borderRadiusForElements',
                  setAttributes,
                  'Скругление углов'
                )
              }
              {
                SimpleAttributeSet(
                  attributes.questionPadding,
                  'questionPadding',
                  setAttributes,
                  'Отступы у вопроса'
                )
              }
              {
                SimpleAttributeSet(
                  attributes.answerPadding,
                  'answerPadding',
                  setAttributes,
                  'Отступы у ответа'
                )
              }
            </PanelBody>

          </InspectorControls>
        }


        <div className="uni_faq" style={{
          gap: attributes.gapBetweenBlocks
        }}>
          {
            attributes.faqItems.map((item, index) => (

              <div key={index} className="uni_faq__item" style={{
                borderRadius: attributes.borderRadiusForElements
              }}
                   onClick={() => setSelectedElement(index)}
              >

                <RichText
                  className="uni_faq__question"
                  value={item.faq_question}
                  tagName={'h3'}
                  onChange={(e) => {
                    updateBlockInArray(
                      'faqItems',
                      attributes.faqItems,
                      index,
                      'faq_question',
                      e,
                      setAttributes
                    )
                  }}
                  style={{
                    background: attributes.questionBgColor,
                    color: attributes.questionColor,
                    padding: attributes.questionPadding,
                    borderRadius: `${attributes.borderRadiusForElements} ${attributes.borderRadiusForElements} 0 0 `
                  }}
                />

                {
                  SimpleRemoveButton(
                    'faqItems',
                    attributes.faqItems,
                    index,
                    setAttributes
                  )}
                <RichText
                  tagName={'div'}
                  className="uni_faq__answer"
                  style={{
                    background: attributes.answerBgColor,
                    color: attributes.answerColor,
                    padding: attributes.answerPadding,
                    borderRadius: `0 0 ${attributes.borderRadiusForElements} ${attributes.borderRadiusForElements}`
                  }}
                  value={item.faq_answer}
                  onChange={(e) => {
                    updateBlockInArray(
                      'faqItems',
                      attributes.faqItems,
                      index,
                      'faq_answer',
                      e,
                      setAttributes
                    )
                  }}/>
              </div>
            ))
          }
          {
            SimpleAddBlockInArray(
              'faqItems',
              attributes.faqItems,
              metadata.attributes.faqItems.default[0],
              setAttributes,
              'uni_faq__item uni_faq__item_add',
              '+ Add Faq Item'
            )
          }

        </div>
      </div>
    </>
  );
}

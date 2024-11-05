import { useBlockProps, BlockControls, InspectorControls, RichText } from "@wordpress/block-editor";

import "./editor.scss";
import metadata from "./block.json";

import { PanelBody } from "@wordpress/components";

import { useState } from "@wordpress/element";
import { SimpleAddBlockInArray, SimpleAttributeSet, SimpleRemoveButton, updateBlockInArray } from "../Service";

import { MediaUploadToArrayItem } from "../components";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div {...blockProps}>
      {
        <InspectorControls>
          <PanelBody>
            <SimpleAttributeSet 
              value={attributes.blocksHeight} 
              attributeName="blocksHeight"
              setAttributesCallback={setAttributes} 
              label="Высота блоков"
            />

            <SimpleAttributeSet
              value={attributes.blocksBorderRadius}
              attributeName="blocksBorderRadius"
              setAttributesCallback={setAttributes}
              label="Скругление границы блоков"
            />

            <SimpleAttributeSet
              value={attributes.blocksPaddings}
              attributeName="blocksPaddings"
              setAttributesCallback={setAttributes}
              label="Отступы внутри блока"
            />

            <SimpleAttributeSet
              value={attributes.blocksMargins}
              attributeName="blocksMargins"
              setAttributesCallback={setAttributes}
              label="Отступы снаружи блока"
            />
          </PanelBody>
        </InspectorControls>
      }
      <div className="promotionList">
        {attributes.items.map((elem, i, arr) => {
          const promoStyle = {
            background: `url(${elem.img ? elem.img.url : ""})`,
            backgroundSize: "cover",
            position: "relative",
            height: attributes.blocksHeight,
            borderRadius: attributes.blocksBorderRadius,
            margin: attributes.blocksMargins,
            padding: attributes.blocksPaddings
          };
          return (
            <div key={i} className="promotion" style={promoStyle}>
              <MediaUploadToArrayItem
                currentState={arr}
                attributeName="items"
                field="img"
                index={i}
                setAttributes={setAttributes}
                label="add background image"
              />
              <RichText
                value={elem.title}
                placeholder="Enter title"
                tagName="div"
                onChange={(content) => updateBlockInArray("items", arr, i, "title", content, setAttributes)}
              />
              <SimpleRemoveButton
                attributeName="items"
                currentArray={arr}
                blockIndex={i}
                setAttributesCallback={setAttributes}
              />
              {/* <div>{elem.title}</div> */}
            </div>
          );
        })}

        <SimpleAddBlockInArray
          attributeName="items"
          currentArray={attributes.items}
          blockObject={metadata.attributes.items.default[0]}
          setAttributesCallback={setAttributes}
        />
      </div>
    </div>
  );
}

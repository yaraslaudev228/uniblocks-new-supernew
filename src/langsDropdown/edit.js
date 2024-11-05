import { useBlockProps, RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";

import "./editor.scss";
import metadata from "./block.json";

import {
  SimpleMediaUploadInArrayElement,
  SimpleAddBlockInArray,
  updateBlockInArray,
  SimpleRemoveButton,
  SimpleHeightControl,
  SimpleTip,
  SimpleAlignmentSelector,
  SimpleColorSelector,
} from "../blocksRegularComponents";

import { useEffect, useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();

  blockProps.className = blockProps.className + " uni_langs_dd";
  return (
    <div {...blockProps}>
      {
        <InspectorControls>
          <PanelBody>
            {SimpleTip("Adjust your langs")}
            {SimpleHeightControl(
              attributes.langsDropdownWidth,
              "langsDropdownWidth",
              setAttributes,
              "Длина кнопки дропдауна",
            )}
            {SimpleColorSelector(
              attributes.langsDropdownBackground,
              "langsDropdownBackground",
              setAttributes,
              "Фон кнопки дропдауна",
            )}
            {/* {SimpleAlignmentSelector(
              attributes.langsDropdownAlign,
              "langsDropdownAlign",
              setAttributes,
              "Расположение текста дропдауна",
            )} */}
            <SelectControl
              label={"Justify-content обертки кнопок"}
              onChange={(value) => setAttributes({ langsDropdownAlign: value })} // Изменяем атрибут для justify-content
              value={attributes.langsDropdownAlign} // Текущее значение justify-content
              options={[
                {
                  label: "Лево", // Отображаемое значение
                  value: "flex-start", // Значение justify-content для выравнивания влево
                },
                {
                  label: "Центр",
                  value: "center", // Значение justify-content для центрирования
                },
                {
                  label: "Право",
                  value: "flex-end", // Значение justify-content для выравнивания вправо
                },
                {
                  label: "Между элементами",
                  value: "space-between", // Значение justify-content для равного расстояния между элементами
                },
                {
                  label: "Равномерное распределение",
                  value: "space-around", // Значение justify-content для равномерного распределения с отступами
                },
                {
                  label: "Заполнить пространство",
                  value: "space-evenly", // Значение justify-content для равномерного распределения с одинаковыми отступами
                },
              ]}
            />
            {SimpleAlignmentSelector(
              attributes.langsButtonAlign,
              "langsButtonAlign",
              setAttributes,
              "Расположение блока дропдауна",
            )}
            {SimpleHeightControl(
              attributes.langsDropdownBorderRadius,
              "langsDropdownBorderRadius",
              setAttributes,
              "Скругление краев дропдауна",
            )}
            {SimpleHeightControl(
              attributes.langsDropdownPaddingY,
              "langsDropdownPaddingY",
              setAttributes,
              "Отступы внутренние по Y",
            )}
            {SimpleHeightControl(
              attributes.langsDropdownPaddingX,
              "langsDropdownPaddingX",
              setAttributes,
              "Отступы внутренние по X",
            )}
            <SelectControl
              label={"Направление выпадашки"}
              onChange={(value) => setAttributes({ langsDropdownDirection: value })}
              value={attributes.langsDropdownDirection}
              options={[
                {
                  label: "Вверх",
                  value: "bottom",
                },
                {
                  label: "Вниз",
                  value: "top",
                },
              ]}
            />
            {SimpleHeightControl(
              attributes.flagsBorderRadius,
              "flagsBorderRadius",
              setAttributes,
              "Flags Border Radius",
            )}
            {SimpleHeightControl(attributes.flagsSize, "flagsSize", setAttributes, "Flags Size")}
            {SimpleColorSelector(attributes.langsBackground, "langsBackground", setAttributes, "Dropdown background")}
          </PanelBody>
        </InspectorControls>
      }

      <div className={"uni_langs_list"}>
        {attributes.langs.map((item, index) => (
          <div key={index} className={"uni_lang " + (index === 0 ? "uni_current_lang" : "")}>
            {SimpleMediaUploadInArrayElement("langs", attributes.langs, index, "flag", setAttributes, "")}
            {item.flag.url && (
              <img
                style={{
                  borderRadius: attributes.flagsBorderRadius,
                  width: attributes.flagsSize,
                  height: attributes.flagsSize,
                }}
                src={item.flag.url}
                width={20}
                height={20}
                alt={item.name}
              />
            )}

            <RichText
              className={"title"}
              tagName="div" // The tag type of the RichText container.
              value={item.name} // The content value bound to this RichText.
              onChange={(newTitle) => {
                updateBlockInArray("langs", attributes.langs, index, "name", newTitle, setAttributes);
              }}
              placeholder="English"
            />
            {SimpleRemoveButton("langs", attributes.langs, index, setAttributes)}
          </div>
        ))}
        {SimpleAddBlockInArray(
          "langs",
          attributes.langs,
          metadata.attributes.langs.default[0],
          setAttributes,
          "uni_btn uni_btn_add",
          "+ Add Language",
        )}
      </div>
    </div>
  );
}

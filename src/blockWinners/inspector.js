import {SimpleColorSelector, SimpleHeightControl, SimpleDirectionButtons} from "../blocksRegularComponents";
import {InspectorControls} from '@wordpress/block-editor'
import {
	Flex,
	TextControl,
	PanelBody,
	FontSizePicker,
} from "@wordpress/components";
export default function Inspector({attributes, setAttributes}) {
	const {
		blocksBackground,
		fs_title_winners,
		fs_sum_winners,
		fs_game_winners,
		color_title_winners,
		color_sum_winners,
		color_game_winners,
	} = attributes;

	return (
	<InspectorControls>
		<PanelBody>
			<Flex>
				<FontSizePicker
					value={fs_game_winners}
					onChange={(fontSize) => {
						setAttributes({fs_game_winners: fontSize})
					}}
					units={["px", "em", "rem"]}
					withSlider
				/>
			</Flex>
			<div className="font-size">Размер шрифта победителя</div>
			<Flex>
				<FontSizePicker

					value={fs_title_winners}
					onChange={(newfontSize) => {
						setAttributes({ fs_title_winners: newfontSize });
					}}
					units={["px", "em", "rem"]}
					withSlider
				/>
			</Flex>
			<div className="font-size">Размер шрифта приза</div>
			<Flex>
				<FontSizePicker

					value={fs_sum_winners}
					onChange={(fontSize) => {
						setAttributes({ fs_sum_winners: fontSize });
					}}
					units={["px", "em", "rem"]}
					withSlider
				/>
			</Flex>
			<div className="font-size">Размер шрифта игры</div>
			<Flex>
				<FontSizePicker

					value={fs_game_winners}
					onChange={(fontSize) => {
						setAttributes({ fs_game_winners: fontSize });
					}}
					units={["px", "em", "rem"]}
					withSlider
				/>
			</Flex>
		</PanelBody>

		<PanelBody>
			{
				SimpleDirectionButtons(
					attributes.elementsDirection,
					'elementsDirection',
					'column',
					'row',
					setAttributes,
					'Направление внутри'
				)
			}
			{
				SimpleColorSelector(
					blocksBackground,
					'blocksBackground',
					setAttributes,
					'Цвет Фона Победителя'
				)
			}
			{
				SimpleColorSelector(
					color_title_winners,
					'color_title_winners',
					setAttributes,
					'Цвет Шрифта Заголовка'
				)
			}
			{
				SimpleColorSelector(
					color_sum_winners,
					'color_sum_winners',
					setAttributes,
					'Цвет Шрифта Приза'
				)
			}
			{
				SimpleColorSelector(
					color_game_winners,
					'color_game_winners',
					setAttributes,
					'Цвет Шрифта Игры'
				)
			}

		</PanelBody>
		<PanelBody>
			<Flex>
				<TextControl
					label="Скругление углов"
					value={attributes.border_block}
					onChange={(value) => setAttributes({ border_block: value })}
				/>
			</Flex>

			{
				SimpleHeightControl(
					attributes.itemsPadding,
					'itemsPadding',
					setAttributes,
					'Отступы внутренние'
				)
			}
		</PanelBody>
	</InspectorControls>
)
}

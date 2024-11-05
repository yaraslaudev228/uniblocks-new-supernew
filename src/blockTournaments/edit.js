import {
	RichText,
	useBlockProps,
	InspectorControls,
	InspectorAdvancedControls,
	HeightControl,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import {
	Flex,
	TextControl,
	PanelBody,
	ColorIndicator,
	ColorPalette,
	FontSizePicker,
} from "@wordpress/components";

import {useState} from "@wordpress/element";
import metadata from './block.json'
import "./editor.scss";
import {
	SimpleAddBlockInArray, SimpleColorSelector,
	SimpleMediaUploadInArrayElement,
	SimpleRemoveButton,
	updateBlockInArray,
	SimpleHeightControl
} from "../blocksRegularComponents";

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps();

	const {
		tournaments,
		title_fs,
		title_section_fs,
		prize_fs,
		text_fs,
		button_fs,
		title_section,
		alignment,
		border_block,
		color_title_tour,
		color_prize_tour,
		color_text_tour,
		color_button,
		color_button_bg,
		heightBlock,
		align,
		count_block,
	} = attributes;


	const [color, setColor] = useState(null);
	const fontSizes = [
		{
			name: "Small",
			size: 16,
			slug: "small",
		},
		{
			name: "Normal",
			size: 22,
			slug: "normal",
		},
		{
			name: "Big",
			size: 28,
			slug: "big",
		},
	];

	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? "none" : newAlignment,
		});
	};



	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						<Flex>
							<FontSizePicker
								fallbackFontSize={24}
								fontSizes={fontSizes}
								value={title_section_fs}
								onChange={(title_section_fs) => {
									setAttributes({title_section_fs: title_section_fs});
								}}
								units={["px", "em", "rem"]}
								withSlider
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<div className="font-size">Font Size title element</div>
						<Flex>
							<FontSizePicker
								fallbackFontSize={24}
								fontSizes={fontSizes}
								value={title_fs}
								onChange={(newfontSize) => {
									setAttributes({title_fs: newfontSize});
								}}
								units={["px", "em", "rem"]}
								withSlider
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<div className="font-size">Font Size prize element</div>
						<Flex>
							<FontSizePicker
								fallbackFontSize={24}
								fontSizes={fontSizes}
								value={prize_fs}
								onChange={(fontSize) => {
									setAttributes({prize_fs: fontSize});
								}}
								units={["px", "em", "rem"]}
								withSlider
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<div className="font-size">Font Size text element</div>
						<Flex>
							<FontSizePicker
								fallbackFontSize={24}
								fontSizes={fontSizes}
								value={text_fs}
								onChange={(fontSize) => {
									setAttributes({text_fs: fontSize});
								}}
								units={["px", "em", "rem"]}
								withSlider
							/>
						</Flex>
					</PanelBody>

					<PanelBody>
						<div className="font-size">Font Size button</div>
						<Flex>
							<FontSizePicker
								fallbackFontSize={24}
								fontSizes={fontSizes}
								value={button_fs}
								onChange={(fontSize) => {
									setAttributes({button_fs: fontSize});
								}}
								units={["px", "em", "rem"]}
								withSlider
							/>
						</Flex>
					</PanelBody>

					<PanelBody>
						<Flex>
							<ColorIndicator colorValue={color_title_tour}/>
							<TextControl
								label="Color title element"
								value={color_title_tour}
								onChange={(color) => setAttributes({color_title_tour: color})}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<ColorIndicator colorValue={color_prize_tour}/>
							<TextControl
								label="Color prize element"
								value={color_prize_tour}
								onChange={(color) => setAttributes({color_prize_tour: color})}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<ColorIndicator colorValue={color_text_tour}/>
							<TextControl
								label="Color text element"
								value={color_text_tour}
								onChange={(color) => setAttributes({color_text_tour: color})}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<ColorIndicator colorValue={color_button}/>
							<TextControl
								label="Color button"
								value={color_button}
								onChange={(color) => setAttributes({color_button: color})}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<ColorIndicator colorValue={color_button_bg}/>
							<TextControl
								label="Background button"
								value={color_button_bg}
								onChange={(color) => setAttributes({color_button_bg: color})}
							/>
						</Flex>
						{
							SimpleColorSelector(
								attributes.timer_items_background,
								'timer_items_background',
								setAttributes,
								'Timer Background'
							)
						}
						{
							SimpleHeightControl(
								attributes.timer_items_border_radius,
								'timer_items_border_radius',
								setAttributes,
								'Timer Items border radius'
							)
						}
					</PanelBody>

					<PanelBody>
						<Flex>
							<TextControl
								label="Border element"
								value={border_block}
								onChange={(value) => setAttributes({border_block: value})}
							/>
						</Flex>
					</PanelBody>
					<PanelBody>
						<Flex>
							<TextControl
								label="number of elements in a row"
								value={count_block}
								onChange={(value) => setAttributes({count_block: value})}
							/>
						</Flex>
					</PanelBody>

					<PanelBody>
						<Flex>
							ALIGN CONTENT
							<AlignmentToolbar
								value={alignment}
								onChange={onChangeAlignment}
							/>
						</Flex>
					</PanelBody>

					<PanelBody>
						<Flex>
							<HeightControl
								label="Height element"
								value={heightBlock}
								onChange={(value) => setAttributes({heightBlock: value})}
							/>
						</Flex>
					</PanelBody>
				</InspectorControls>
			}
			{
				<InspectorAdvancedControls>
					<PanelBody>
						<ColorPalette
							value={color}
							enableAlpha={true}
							onChange={(color) => {
								setColor(color);
							}}
						/>
					</PanelBody>
				</InspectorAdvancedControls>
			}
			<section className="uni_section">
				<RichText
					className={`title-tournaments ${align}`}
					value={title_section}
					onChange={(value) => {
						setAttributes({title_section: value});
					}}
					style={{
						color: attributes.color,
						fontSize: title_section_fs,
						textAlign: align,

					}}
					tagName="div"
				/>

				<div className="uni_tournaments__wrap">

					{tournaments.map((item, index) => (
						<div
							className="uni_tournament"
							key={index}
							style={{
								height: heightBlock,
								borderRadius: border_block,
								flexBasis: `calc(100%/${count_block} - 1rem)`,
								background: `url(${item.image_tour.url}) no-repeat`,
								backgroundSize: 'cover',
								backgroundPosition: 'center'
							}}
						>
							{
								SimpleMediaUploadInArrayElement(
									'tournaments',
									tournaments,
									index,
									'image_tour',
									setAttributes
								)
							}

							<div className={`promo-block__info ${alignment}`}
							>
								<RichText
									className="home-promo__bonus"
									value={item.title_tour}
									onChange={(content) => {
										updateBlockInArray(
											'tournaments',
											tournaments,
											index,
											'title_tour',
											content,
											setAttributes
										)

									}}
									style={{
										lineHeight: '1.2',
										color: color_title_tour,
										fontSize: title_fs,
									}}
									tagName="div"
								/>
								<RichText
									className="promo-block__prize"
									value={item.prize_tour}
									onChange={(content) => {
										updateBlockInArray(
											'tournaments',
											tournaments,
											index,
											'prize_tour',
										 	content,
											setAttributes
										)
									}}
									style={{
										color: color_prize_tour,
										fontSize: prize_fs,
									}}
									tagName="div"
								/>
								<RichText
									className="home-promo__game"
									value={item.text_tour}
									onChange={(content) => {
										updateBlockInArray(
											'tournaments',
											tournaments,
											index,
											'text_tour',
											content,
											setAttributes
										)
									}}
									style={{
										color: color_text_tour,
										fontSize: text_fs,
									}}
									tagName="div"
								/>

								<div className="promo-block__buttons">
									<a
										className="custom-btn"
										href="/goto"
										style={{
											color: color_button,
											background: color_button_bg,
											borderRadius: border_block,
											fontSize: button_fs,
										}}
									>
										{item.get_tour}
									</a>
								</div>
							</div>
							{
								SimpleRemoveButton(
									'tournaments',
									tournaments,
									index,
									setAttributes
								)
							}

						</div>
					))}
					{
						SimpleAddBlockInArray(
							'tournaments',
							tournaments,
							metadata.attributes.tournaments.default[0],
							setAttributes,
							'uni_tournaments uniTournamentAdd',
							'+ Add Tournament'
						)
					}

				</div>
			</section>
		</div>
	);
}

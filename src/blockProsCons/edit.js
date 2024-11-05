import {
	RichText,
	useBlockProps,
	InspectorControls,
	InspectorAdvancedControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import {
	Flex,
	TextControl,
	PanelBody,
	ColorIndicator,
	ColorPalette,
	FontSizePicker,
	Button
} from "@wordpress/components";
import {
	SimpleAddBlockInArray,
	SimpleRemoveButton, updateBlockInArray, SimpleColorSelector,
	SimpleHeightControl,
	SimpleAlignmentSelector,
	SimpleTip,
	SimpleMediaUpload
} from '../blocksRegularComponents'
import {useState} from "@wordpress/element";

import "./editor.scss";

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps();
 	const {
		cons,
		pros,
		title_pros,
		title_const,
		title_fs,
		text_fs,
		color_title_pros,
		color_title_cons,
		color_text_pros,
		color_text_cons,
		color_bg_cons,
		color_bg_pros,
		border_block,
		align,
		count_block,
	} = attributes;

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


	return (
		<div {...blockProps}>
			{
				<InspectorControls>
					<PanelBody>
						{
							SimpleTip('Overall Settings for Block')
						}
						<div className="font-size">Title font-size</div>
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
						<div className="font-size">Element font-size</div>
						<Flex>
							<FontSizePicker
								fallbackFontSize={24}
								fontSizes={fontSizes}
								value={text_fs}
								onChange={(newfontSize) => {
									setAttributes({text_fs: newfontSize});
								}}
								units={["px", "em", "rem"]}
								withSlider
							/>
						</Flex>
						{
							SimpleHeightControl(
								border_block,
								'border_block',
								setAttributes,
								'Border Radius for blocks'
							)
						}
				 	 	<div>
							{
								SimpleMediaUpload(
									'prosIcon',
									attributes.prosIcon,
									setAttributes,
									'Pros Icon before item'
								)
							}
							<img src={attributes.prosIcon.url} width={24} height={24} alt=""/>
						</div>
						{
							SimpleMediaUpload(
								'consIcon',
								attributes.consIcon,
								setAttributes,
								'Cons Icon before item'
							)
						}
						<img src={attributes.consIcon.url} width={24} height={24} alt=""/>
					</PanelBody>

					<PanelBody>
						{
							SimpleTip('Pros color scheme')
						}
						{
							SimpleColorSelector(
								attributes.prosTitleBackground,
								'prosTitleBackground',
								setAttributes,
								'Pros Title Background'
							)
						}
						{
							SimpleColorSelector(
								 color_title_pros,
								'color_title_pros',
								setAttributes,
								'Pros Title Color'
							)
						}
						{
							SimpleColorSelector(
								color_text_pros,
								'color_text_pros',
								setAttributes,
								'Pros font color'
							)
						}
						{
							SimpleColorSelector(
								color_bg_pros,
								'color_bg_pros',
								setAttributes,
								'Pros Background'
							)
						}

					</PanelBody>
					<PanelBody>
						{
							SimpleTip('Cons color scheme')
						}
						{
							SimpleColorSelector(
								attributes.consTitleBackground,
								'consTitleBackground',
								setAttributes,
								'Cons Title Background'
							)
						}
						{
							SimpleColorSelector(
								color_title_cons,
								'color_title_cons',
								setAttributes,
								'Cons Title Color'
							)
						}

						{
							SimpleColorSelector(
								color_text_cons,
								'color_text_cons',
								setAttributes,
								'Cons text color'
							)
						}
						{
							SimpleColorSelector(
								color_bg_cons,
								'color_bg_cons',
								setAttributes,
								'Cons Background'
							)
						}

					</PanelBody>


					<PanelBody>
						{
							SimpleAlignmentSelector(
								align,
								'align',
								setAttributes,
								'Align content inside blocks'
							)
						}

					</PanelBody>
					<PanelBody>
						{
							SimpleTip('Set the blocks Direction')
						}
						<Button
							isPressed={attributes.prosConsDirection === 'column'}
							onClick={() => {
								setAttributes({prosConsDirection: 'column'})
							}
							}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
									 className="bi bi-arrow-down-up" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
											d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
							</svg>
						</Button>
						<Button
							isPressed={attributes.prosConsDirection === 'row'}
							onClick={() => {
								setAttributes({prosConsDirection: 'row'})
							}
							}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
									 className="bi bi-arrow-left-right" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
											d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
							</svg>
						</Button>
					</PanelBody>
				</InspectorControls>
			}

			<section className="uni_pros__cons" style={
				{
					flexDirection: attributes.prosConsDirection
				}
			}>
				<div
					className="pros-cons__items"
					style={{
						borderRadius: border_block,
						background: color_bg_pros,
						textAlign: align,

					}}
				>
					<RichText
						className="pros-title pros-cons__title"
						style={{
							fontSize: title_fs,
							color: color_title_pros,
							borderRadius: `${border_block} ${border_block} 0 0`,
							background: attributes.prosTitleBackground
						}}
						value={title_pros}
						tagName="div"
						onChange={(e) => setAttributes({title_pros: e})}
					/>
					{pros.map((item, index) => (
						<div className="pros pros-cons__item" key={index}>
							{
								attributes.prosIcon.url ? <img src={attributes.prosIcon.url} alt="" width={24} height={24}/> : ""
							}
							<RichText
								className="title"
								style={{
									fontSize: text_fs,
									color: color_text_pros,
								}}
								tagName="div"
								value={item.item_pros}
								onChange={(e) => {
									updateBlockInArray(
										'pros',
										pros,
										index,
										'item_pros',
										e,
										setAttributes
									)
								}}
							/>
							{
								SimpleRemoveButton(
									'pros',
									pros,
									index,
									setAttributes
								)
							}

						</div>
					))}
					{
						SimpleAddBlockInArray(
							'pros',
							pros,
							{
								item_pros: "Write pros"
							},
							setAttributes,
							'addElement',
							'+ Add Pros'
						)
					}
				</div>
				<div
					className="pros-cons__items"
					style={{
						borderRadius: border_block,
						background: color_bg_cons,
						textAlign: align
					}}
				>
					<RichText
						className="cons-title pros-cons__title"
						style={{
							fontSize: title_fs,
							color: color_title_cons,
							background: attributes.consTitleBackground,
							borderRadius: `${border_block} ${border_block} 0 0`,
						}}
						value={title_const}
						tagName="div"
						onChange={(e) => setAttributes({title_const: e})}
					/>

					{cons.map((item, index) => (
						<div className="cons pros-cons__item" key={index}>
							{
								attributes.consIcon.url ? <img src={attributes.consIcon.url} alt="" width={24} height={24}/> : ""
							}
							<RichText
								className="item"
								style={{
									fontSize: text_fs,
									color: color_text_cons,
								}}
								value={item.item_cons}
								tagName="div"
								onChange={(e) => {
									updateBlockInArray(
										'cons',
										cons,
										index,
										'item_cons',
										e,
										setAttributes
									)
								}}
							/>
							{
								SimpleRemoveButton(
									'cons',
									cons,
									index,
									setAttributes
								)
							}
						</div>
					))}
					{
						SimpleAddBlockInArray(
							'cons',
							cons,
							{
								item_cons: "write cons"
							},
							setAttributes,
							'addElement',
							'+ Add Cons'
						)
					}

				</div>
			</section>
		</div>
	);
}

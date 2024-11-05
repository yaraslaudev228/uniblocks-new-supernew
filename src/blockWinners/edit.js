import {
	useBlockProps,
	RichText,

} from "@wordpress/block-editor";
import metadata from './block.json'
import {SimpleMediaUploadInArrayElement,SimpleRemoveButton,
	SimpleHeightControl, SimpleColorSelector, SimpleAttributeSet,
	SimpleAddBlockInArray, SimpleDirectionButtons

} from "../blocksRegularComponents";

import Inspector from "./inspector";
import { useState } from "@wordpress/element";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const {
		winners,
		biggestWins,
		latestWins,
		blocksBackground,
		border_block,
		fs_title_winners,
		fs_sum_winners,
		fs_game_winners,
		color_title_winners,
		color_sum_winners,
		color_game_winners,
	} = attributes;

 	const [editedBlocks, setEditedBlocks] = useState(winners);

	const updateEditedBlock = (index, field, value) => {
		const updatedBlocks = [...editedBlocks];

		setEditedBlocks(updatedBlocks);
		const updatedWinners = winners.map((block, idx) =>
			idx === index ? { ...block, [field]: value } : block,
		);

		setAttributes({ winners: updatedWinners });
	};

	return (
		<div {...blockProps}>
 		  <Inspector
			setAttributes={setAttributes}
			attributes={attributes}
			/>
			<div className="uni_winner swiper">

				<div className="swiper-wrapper">
					{winners.map((item, index) => (
						<div
							className="swiper-slide"
							key={index}
							style={{
								background: attributes.blocksBackground,
								borderRadius: border_block,
								padding: attributes.itemsPadding
							}}
						>
							{
								SimpleMediaUploadInArrayElement(
									'winners',
									winners,
									index,
									'image',
									setAttributes,
									'+'
								)
							}
							{item.image && (
								<img
									src={item.image.url}
									alt={""}
									style={{
										borderRadius: border_block,
									}}
								/>
							)
							}

							<div className="uni_winner_wr_description" style={{
								display: 'flex',
								flexDirection: attributes.elementsDirection,
								gap: '.5rem',
								alignItems: attributes.elementsDirection === 'row' ? 'center' : 'flex-start'

							}}>
								<RichText
									value={item.name}
									className={"title_winners"}
									tagName={"div"}
									onChange={(content) => {
										updateEditedBlock(index, "name", content);
									}}
									style={{
										color: color_title_winners,
										fontSize: fs_title_winners,
									}}
								/>
								<RichText
									value={item.sum}
									className={"sum_winners"}
									tagName={"div"}
									onChange={(content) => {
										updateEditedBlock(index, "sum", content);
									}}
									style={{
										color: color_sum_winners,
										fontSize: fs_sum_winners,
									}}
								/>
								<RichText
									value={item.title}
									className={"game_title_wiiner"}
									tagName={"div"}
									onChange={(content) => {
										updateEditedBlock(index, "title", content);
									}}
									style={{
										color: color_game_winners,
										fontSize: fs_game_winners,
									}}
								/>
							</div>
							{
								SimpleRemoveButton(
									'winners',
									winners,
									index,
									setAttributes,
								)
							}
						</div>
					))}

					{
						SimpleAddBlockInArray(
							'winners',
							winners,
							metadata.attributes.winners.default[0],
							setAttributes,
							'add',
							'+ Добавить победителя'


						)
					}
				</div>
			</div>
		</div>
	);
}

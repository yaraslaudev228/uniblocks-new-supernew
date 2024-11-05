import {useBlockProps, RichText} from "@wordpress/block-editor";

export default function save({attributes}) {
	const {
		align,
		cons,
		pros,
		title_pros,
		title_const,
		title_fs,
		color_title_pros,
		color_title_cons,
		text_fs,
		color_text_pros,
		color_text_cons,
		border_block,
		color_bg_cons,
		color_bg_pros
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<section className="uni_pros__cons"
							 style={{
								 flexDirection: attributes.prosConsDirection
							 }}
			>
				<div
					className="uni_pros uni_pros-cons__items"
					style={{
						borderRadius: border_block,
						background: color_bg_pros,
						textAlign: align,

					}}
				>
					<RichText.Content
						className="uni_pros-title uni_pros-cons__title"
						style={{
							fontSize: title_fs,
							color: color_title_pros,
							borderRadius: `${border_block} ${border_block} 0 0`,
							background: attributes.prosTitleBackground,
						}}
						value={title_pros}
						tagName="div"
					/>
					{pros.map((item, index) => (
						<div className="uni_pros_item uni_pros-cons__item" key={index}>
							{
								attributes.prosIcon.url ? <img src={attributes.prosIcon.url} alt="" width={24} height={24}/> : ""
							}
							<RichText.Content
								className="item"
								style={{
									fontSize: text_fs,
									color: color_text_pros,
								}}
								tagName="p"
								value={item.item_pros}
							/>
						</div>
					))}
				</div>
				<div
					className="uni_pros uni_pros-cons__items"
					style={{
						borderRadius: border_block,
						background: color_bg_cons,
						textAlign: align,
					}}
				>
					<RichText.Content
						className="uni_cons-title uni_pros-cons__title"
						style={{
							fontSize: title_fs,
							color: color_title_cons,
							background: attributes.consTitleBackground,
							borderRadius: `${border_block} ${border_block} 0 0`
						}}
						value={title_const}
						tagName="div"
					/>
					{cons.map((item, index) => (

						<div className="uni_cons_item uni_pros-cons__item" key={index}>
							{
								attributes.consIcon.url ? <img src={attributes.consIcon.url} alt="" width={24} height={24}/> : ""
							}
							<RichText.Content
								className="item"
								style={{
									fontSize: text_fs,
									color: color_text_cons,
								}}
								value={item.item_cons}
								tagName="p"
							/>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

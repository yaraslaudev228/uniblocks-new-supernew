import {useBlockProps, InspectorControls, RichText} from '@wordpress/block-editor';
import {
	PanelBody
} from '@wordpress/components'
import './editor.scss';
import {useState} from "react";
import { SimpleMediaUpload, updateBlockInArray} from "../Service";
import {ArraySizeControl} from "../components";

export default function Edit({attributes, setAttributes}) {
	const [selectedTitle, setSelectedTitle] = useState(false)
	const formstyles = {
		maxWidth: '320px',
		background: '#0006',
		borderRadius: '20px',
		padding: '16px',
		gap: '8px'
	}

	return (
		<section {...useBlockProps()}>
			<InspectorControls>
				{
					selectedTitle !== false && attributes.titles[selectedTitle] && (
						<PanelBody>
							<div className="single__inspector_item">
								<h2>Настройки выбранного тайтла {+selectedTitle + 1 }</h2>
							 	<ArraySizeControl
								 attributeName={'titles'}
								 currentState={attributes.titles}
								 index={selectedTitle}
								 field={'fontSize'}
								 label={'Размер шрифта заголовка'}
								 setAttributes={setAttributes}
								/>
							</div>
						</PanelBody>
					)
				}
			</InspectorControls>
			<div className="uni_wrapper" style={{
				justifyContent: 'center',
			}}>
				<div className="uni__mini-form" style={formstyles}>
					<div className="bonuses" style={{
						background: 'linear-gradient(#3b7096 0%,#254a64 100%)',
						borderRadius: '14px',
						padding: '12px',
						border: '2px solid #e29430',
						color: '#fff'
					}}>
						<div className="bonus">
							<div className="image">
								<SimpleMediaUpload
									attributeName={'bonusImage'}
									currentAttribute={attributes.bonusImage}
									setAttributesCallback={setAttributes}
									label={''}
								/>
								{attributes.bonusImage && (
									<img width={32} height={32} src={attributes.bonusImage.url} alt=""/>
								)}
							</div>
							<div className="caption">
								{
									attributes.titles.map((item, index) => (
										<RichText
											onClick = {(e) => setSelectedTitle(index)}
											value={item.text}
											className="title"
											onChange={(content) =>
												updateBlockInArray(
													'titles',
													attributes.titles,
													index,
													'text',
													content,
													setAttributes
												)
											} style={{
											fontSize: item.fontSize ? item.fontSize : '14px'
										}}/>
									))
								}
							</div>
							<div className="dropdown">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
										 className="bi bi-chevron-down" viewBox="0 0 16 16">
									<path fillRule="evenodd"
												d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
								</svg>
							</div>
						</div>
					</div>

					<div className="input-wrap">
						<div className="input"
								 style={{
									 padding: '12px',
									 borderRadius: '14px 0 0 14px',
									 fontSize: '18px',
									 color: '#FFCF01',
									 background: 'linear-gradient(#3b7096 0%,#254a64 100%)'
								 }}
						>70
						</div>
						<div className="button"
								 style={{
									 borderRadius: '0 14px 14px 0',
									 color: '#fff',
									 background: 'linear-gradient(#487493,#487493),linear-gradient(#105485a8 0%,#153c58a8 100%)'
								 }}
								 contentEditable={true}
								 onBlur={(e) => setAttributes({currency: e.target.innerText})}
						>{attributes.currency}
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
									 fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
								<path fillRule="evenodd"
											d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
							</svg>
						</div>
					</div>
					<RichText
						tagName={'div'}
						value={attributes.buttonText}
						onChange={(content) => setAttributes({buttonText: content})}
						className={'btn btn-spiele'} style={{
						background: 'linear-gradient(#a0ff00 0%,#68f284 95.03%)',
						minWidth: '288px',
						borderRadius: '14px',
						boxShadow: '0 2px #38b751',
						minHeight: '64px',
						color: '#fff',
						fontWeight: '900'
					}}/>


				</div>
			</div>
		</section>
	)
}

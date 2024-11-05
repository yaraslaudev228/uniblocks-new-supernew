import {useBlockProps, BlockControls,InspectorControls} from '@wordpress/block-editor';


import './editor.scss';
import Inspector from "./inspector";
import {updateBlockInArray} from "../Service";
import {getFlexAlign} from "../components";

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()


	return (
		<div {...blockProps}>
			<Inspector  attributes={attributes} setAttributes={setAttributes}/>
			<div className="uni_form__wrapper"
			style={{
				display: 'flex',
				justifyContent: getFlexAlign(attributes.alignment)
			}}
			>
			<div className={'uni_form'} style={{
				borderRadius: attributes.formBradius,
				padding: attributes.formPadding,
				background: attributes.formBackground,

			}}>
				{
					attributes.inputs.map((input, index) => (
						<div className="uni_input__group" key={index}>
							<label style={{color: attributes.labelColor}}
							 contentEditable
							 onBlur={(e) => updateBlockInArray(
								 'inputs',
								 attributes.inputs,
								 index,
								 'label',
								 e.target.innerText,
								 setAttributes
							 )}
							>{input.label}</label>
							{
								input.type !== 'textarea' && (
									<div className={'input'}
												 style={{
													 background: attributes.inputBackground,
													 color: attributes.inputColor,
													 borderRadius: attributes.inputBorderRadius,
													 padding: attributes.inputPadding
												 }}
											 contentEditable
											 onBlur={(e) => updateBlockInArray(
												 'inputs',
												 attributes.inputs,
												 index,
												 'placeholder',
												 e.target.innerText,
												 setAttributes
											 )}
									>{input.placeholder}</div>
								)
							}
							{
								input.type === 'textarea' && (
									<div className={'textarea'}
											 contentEditable
											 onBlur={(e) => updateBlockInArray(
												 'inputs',
												 attributes.inputs,
												 index,
												 'placeholder',
												 e.target.innerText,
												 setAttributes
											 )}
														style={{
															background: attributes.inputBackground,
															color: attributes.inputColor,
															borderRadius: attributes.inputBorderRadius,
															minHeight: attributes.textareaHeight,
															padding: attributes.inputPadding
														}}
									>{input.placeholder}</div>
								)
							}
						</div>
					))
				}


				<div contentEditable style={{
					borderRadius: attributes.buttonBorderRadius,
					background: attributes.buttonBackground,
					color: attributes.buttonColor
				}}
						 onBlur={(e) => setAttributes({buttonText: e.target.innerText})}
						 className={'uni_btn uni_btn__signup'}>{attributes.buttonText}
				</div>
			</div>



			</div>
		</div>

	);
}

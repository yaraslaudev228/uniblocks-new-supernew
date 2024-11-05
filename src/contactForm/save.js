import {useBlockProps} from '@wordpress/block-editor';
import {getFlexAlign} from "../components";

export default function save({attributes}) {

	const blockProps = useBlockProps.save();

	return (
 	 	<div {...blockProps}>
			<style>
				{`
					::placeholder {
           	color: ${attributes.placeholderColor};
         	}`
				}
			</style>
			<div className="uni_form__wrapper"
					 style={{
						 display: 'flex',
						 justifyContent: getFlexAlign(attributes.alignment)
					 }}
			>
			<form className={'uni_form'} style={{
				borderRadius: attributes.formBradius,
				padding: attributes.formPadding,
				background: attributes.formBackground
			}}>
				{
					attributes.inputs.map((input, index) => (
						<div className="uni_input__group">
							<label style={{color: attributes.labelColor}}>{input.label}</label>
							{
								input.type !== 'textarea' && (
								<input className={'input'}
											 type={input.type}
											 placeholder={input.placeholder}
											 required={true}
											 style={{
												 background: attributes.inputBackground,
												 color: attributes.inputColor,
												 borderRadius: attributes.inputBorderRadius,
											 }} />
								)
							}
							{
							 input.type === 'textarea' && (
									<textarea className={'input'}
														required={true}
														style={{
															background: attributes.inputBackground,
															color: attributes.inputColor,
															borderRadius: attributes.formBradius,
															height: attributes.textareaHeight
														}}
														placeholder={input.placeholder}/>
								)
							}
						</div>
						)
					)
				}

				<div  style={{
					borderRadius: attributes.buttonBorderRadius,
					background: attributes.buttonBackground,
					color: attributes.buttonColor
				}}
 						 className={'uni_btn uni_btn__signup'}>{attributes.buttonText}
				</div>
			</form>
			</div>
		</div>

	)

}

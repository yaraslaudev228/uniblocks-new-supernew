import {
	MediaUpload,
	MediaUploadCheck, HeightControl, AlignmentToolbar
} from '@wordpress/block-editor'

import {
	ColorPalette,
	ColorIndicator,
	TextControl,
	CheckboxControl,
	Button,
	Flex, FlexItem,
	__experimentalBorderControl as BorderControl
} from '@wordpress/components'

const SingleAlignmentControl = ({currentState, attributeName, setAttributes, label}) => {
	return (
		<>
			<h3>{label}</h3>
			<AlignmentToolbar
				value={currentState}
				onChange={(value) => setAttributes({[attributeName]: value})}
			/>
		</>
	)
}

const SingleDirection = ({currentState, attributeName, setAttributes, columnValue, rowValue, label}) => {
	return (
		<>
			<h3>{label}</h3>
			<Flex gap={'10px'} style={{
				padding: '0 0 1rem 0'
			}} justify={false}>
				<FlexItem>
					<Button
						isPressed={currentState === columnValue}
						onClick={() => setAttributes({[attributeName]: columnValue})}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								 className="bi bi-arrow-down-up" viewBox="0 0 16 16">
							<path fillRule="evenodd"
										d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
						</svg>
					</Button>
				</FlexItem>
				<FlexItem>
					<Button
						isPressed={currentState === rowValue}
						onClick={() => setAttributes({[attributeName]: rowValue})}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								 className="bi bi-arrow-left-right" viewBox="0 0 16 16">
							<path fillRule="evenodd"
										d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
						</svg>
					</Button>
				</FlexItem>
			</Flex>
		</>
	)
}

const SingleMediaUpload = ({currentState, attributeName, setAttributes, label}) => {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={(media) => {
					setAttributes({[attributeName]: media})
				}}
				allowedTypes={['image']}
				value={currentState.id ? currentState.id : null}
				render={({open}) => (
					<div className="pr_upload_image" onClick={open}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								 className="bi bi-card-image" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
							<path
								d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
						</svg>
						{
							label
						}
					</div>
				)}
			/>
		</MediaUploadCheck>
	)
}

const MediaUploadToArrayItem = ({currentState, attributeName, field, index, setAttributes, label}) => {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={(media) => {
					UpdateItemFieldInArray(
						currentState,
						attributeName,
						field,
						index,
						media,
						setAttributes
					)
				}}
				allowedTypes={['image']}
				value={currentState[index][field] ? currentState[index][field].id : null}
				render={({open}) => (
					<div className="pr_upload_image" onClick={open}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								 className="bi bi-card-image" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
							<path
								d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
						</svg>
						{
							label
						}

					</div>
				)}
			/>
		</MediaUploadCheck>)
}
const AddItemToArray = ({currentArray, attributeName, itemToAdd, setAttributes, classname, text}) => {
	return (
		<div
			onClick={() => {
				const currentState = [...currentArray]
				currentState.push(itemToAdd)
				setAttributes({...currentArray, [attributeName]: currentState})
			}}
			className={classname}>
			{text}
		</div>
	)
}
const SingleTextControl = ({currentState, attributeName, setAttributes, label, type = 'text'}) => {
	return (
		<>
			<h3>{label}</h3>
			<TextControl
				type={type}
				value={currentState}
				attributeName={attributeName}
				onChange={(value) => setAttributes({[attributeName]: value})}
			/>
		</>
	)
}
const SingleSizeControl = ({currentState, attributeName, setAttributes, label}) => {
	return (
		<>

			<HeightControl
				label={label}
				value={currentState}
				attributeName={attributeName}
				onChange={(value) => setAttributes({[attributeName]: value})}
			/>
		</>
	)
}

const SingleColorSelector = ({currentState, attributeName, setAttributes, label}) => {
	return (
		<>
			<h3>{label}</h3>
			<Flex gap="1rem">
				<FlexItem>
					<ColorIndicator colorValue={currentState}/>
				</FlexItem>
				<FlexItem>
					<TextControl value={currentState}
											 onChange={(value) => setAttributes({[attributeName]: value})}
					/>
				</FlexItem>
			</Flex>
			<ColorPalette
				enableAlpha
				value={currentState}
				onChange={(color) => setAttributes({[attributeName]: color})}
			/>
		</>
	)
}
const SingleBorderControl = ({currentState, attributeName, setAttributes, label}) => {
	return (
		<>
			<h3>{label}</h3>
			<BorderControl
				value={currentState}
				onChange={(border) => setAttributes({[attributeName]: border})}
			/>
		</>
	)
}
const UpdateItemFieldInArray = (currentArray, attributeName, field, index, value, setAttributes) => {
	let updatedArray = [...currentArray];
	updatedArray[index] = {...updatedArray[index], [field]: value};
	setAttributes({[attributeName]: updatedArray});
}

const RemoveElement = ({currentState, attributeName, index, setAttributes}) => {

	return (
		<div className={'pr_remove'}
				 onClick={(e) => {
					 console.log(currentState)
					 const currentArray = [...currentState]
					 currentArray.splice(index, 1)
					 setAttributes({...currentState, [attributeName]: currentArray})
				 }}
		>X</div>
	)
}

const SingleCheckboxControl = ({currentState, attributeName, setAttributes, label, help = ''}) => {
	return (
		<CheckboxControl
			label={label}
			help={help}
			checked={currentState}
			onChange={(checked) => setAttributes({[attributeName]: checked})}
		/>
	)
}


const MultipleImagesUploader = ({currentState, attributeName, setAttributes, label}) => {
	const currentIds = currentState.map((image, index) => {
		return image.id
	})
	return (
		<MediaUploadCheck>
			<MediaUpload
				multiple
				onSelect={(media) => {
					setAttributes({[attributeName]: media})
				}}
				allowedTypes={['image']}
				value={currentIds ? currentIds : null}
				render={({open}) => (
					<div className="pr_upload_image" onClick={open}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								 className="bi bi-card-image" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
							<path
								d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
						</svg>
						{
							label
						}
					</div>
				)}
			/>
		</MediaUploadCheck>
	)
}
const UpdateObjectField = (currentState, attributeName, field, value, setAttributes) => {
	const currentObject = {...currentState}
	currentObject[field] = {...currentObject[field], [field]: value}
	setAttributes({[attributeName]: currentObject})
}

function getGoToLink() {
	return '/gotourl'
}

const getFlexAlign = (align) => {
	return align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'
}
const ArrayAlignControl = ({currentState, attributeName, setAttributes, index, field, label}) => {
	return (
		<>
			<h3>{label}</h3>
			<AlignmentToolbar
				value={currentState[index][field]}
				onChange={(value) => UpdateItemFieldInArray(
					currentState,
					attributeName,
					field,
					index,
					value,
					setAttributes
				)}
			/>
		</>
	)
}

const ArraySizeControl = ({currentState, attributeName, setAttributes, index, field, label}) => {
	return (
		<>
			<HeightControl
				label={label}
				value={currentState[index][field]}
				attributeName={attributeName}
				onChange={(value) => UpdateItemFieldInArray(
					currentState,
					attributeName,
					field,
					index,
					value,
					setAttributes
				)}
			/>
		</>
	)
}
const ArrayColorSelector = ({currentState, attributeName, setAttributes, index, fieldName, label}) => {
	return (
		<>
			<h3>{label}</h3>
			<Flex gap="1rem">
				<FlexItem>
					<ColorIndicator colorValue={currentState[index][fieldName]}/>
				</FlexItem>
				<FlexItem>
					<TextControl
						value={currentState[index][fieldName]}
						onChange={(value) => UpdateItemFieldInArray(
							currentState,
							attributeName,
							fieldName,
							index,
							value,
							setAttributes
						)}
					/>
				</FlexItem>
			</Flex>
			<ColorPalette
				enableAlpha
				value={currentState[index][fieldName]}
				onChange={(color) => UpdateItemFieldInArray(
					currentState,
					attributeName,
					fieldName,
					index,
					color,
					setAttributes
				)}
			/>
		</>
	)
}


export {
	UpdateObjectField, getFlexAlign, ArrayColorSelector,
	AddItemToArray, getGoToLink, RemoveElement, SingleMediaUpload,
	MediaUploadToArrayItem, SingleBorderControl, MultipleImagesUploader,
	UpdateItemFieldInArray, SingleColorSelector, SingleSizeControl, SingleTextControl, SingleCheckboxControl,
	SingleDirection, SingleAlignmentControl, ArraySizeControl,ArrayAlignControl
}

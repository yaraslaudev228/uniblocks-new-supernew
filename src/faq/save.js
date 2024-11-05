import {useBlockProps, RichText} from '@wordpress/block-editor';

export default function save({attributes}) {

	const { faqItems } = attributes

	const blockProps = useBlockProps.save()
	blockProps.className = blockProps.className + ' uni_faq'
	blockProps.style = {
		gap: attributes.gapBetweenBlocks
	}
 	return (
		<div  {...blockProps}>
			{faqItems.map((item, index) => (
				<div key={index} className = "uni_faq__item" style={{
					borderRadius: attributes.borderRadiusForElements
				}}>
					<RichText.Content
            className="uni_question"
            tagName={'h3'}
            value={item.faq_question}
            style={{
						background: attributes.questionBgColor,
						color: attributes.questionColor,
						padding: attributes.questionPadding
					}}/>
					<RichText.Content
            tagName={'div'}
            value={item.faq_answer}
            className="uni_answer" style={{
						background: attributes.answerBgColor,
						color: attributes.answerColor,
						padding: attributes.answerPadding,


					}}/>
				</div>
			))}
		</div>

	);
}

import {useBlockProps, RichText, AlignmentToolbar, BlockControls, InspectorControls} from '@wordpress/block-editor';
import {PanelBody} from "@wordpress/components"
import {SimpleAttributeSet, SimpleTip, SimpleColorSelector, SimpleHeightControl, SimpleCheckbox} from '../blocksRegularComponents'
import AjaxCollector from '../ajaxCollector/index.js'

import './editor.scss';

import {useEffect, useState} from 'react'
import StarRating from "./StarRating";

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()
	const [comments, setComments] = useState([])

	useEffect(() => {
 		 AjaxCollector({action: 'uni_collect_comments', data: '', setDataCallback: setComments})
	},  [])

	setAttributes({commentsList: comments})

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<h3>Настройки комментов</h3>
					{
						SimpleColorSelector(
							attributes.commentsBackground,
							'commentsBackground',
							setAttributes,
							'Фон для комментария'
						)
					}
					{
						SimpleColorSelector(
							attributes.commentsColor,
							'commentsColor',
							setAttributes,
							'Цвет шрифта комментариев'
						)
					}
					{
						SimpleColorSelector(
							attributes.commentsStarsColor,
							'commentsStarsColor',
							setAttributes,
							'Цвет шрифта комментариев'
						)
					}
					{
						SimpleHeightControl(
							attributes.commentsTitleFsize,
							'commentsTitleFsize',
							setAttributes,
							'Размер шрифта автора'
						)
					}
					{
						SimpleHeightControl(
							attributes.commentsBodyFsize,
							'commentsBodyFsize',
							setAttributes,
							'Размер шрифта текста ревью'
						)
					}
					{
						SimpleHeightControl(
							attributes.commentsGap,
							'commentsGap',
							setAttributes,
							'Отступы между комментами'
						)
					}
					{
						SimpleHeightControl(
							attributes.commentsBradius,
							'commentsBradius',
							setAttributes,
							'Скругляшки для блока ревью'
						)
					}
					{
						SimpleCheckbox(
							attributes.isDateRevealed,
							'isDateRevealed',
							setAttributes,
							'Показать дату в ревью?',
							'Если отмечено, дата будет отображаться под именем'
						)
					}
				</PanelBody>
			</InspectorControls>
			<div className="uni_comments"
			style={{
				gap: attributes.commentsGap
			}}
			>
				<RichText
				className={'comments_title uni_section__title'}
				value={attributes.commentsTitle}
				onChange={(content) => setAttributes({commentsTitle: content})}
				style={{color: attributes.commentTitleColor, fontSize: attributes.commentTitleFontSize}}
				/>
			{ attributes.commentsList.map((comment, index) => (
				<div className="uni_comment" key={index}
				style={{
					background: attributes.commentsBackground,
					color: attributes.commentsColor,
					borderRadius: attributes.commentsBradius,
					padding: attributes.commentsPadding
				}}
				>
					<div className="uni_comment_name" style={{
						fontSize: attributes.commentsTitleFsize
					}}>
						{comment.comment_author}
					</div>
					{
						comment.rating && (	<StarRating rating={comment.rating} color={attributes.commentsStarsColor}/>)
					}
					{attributes.isDateRevealed && (
						<div className="uni_comment_date">{comment.comment_date}</div>
					)}

					<div className="uni_comment_body" style={{
						fontSize: attributes.commentsBodyFsize
					}}>
						{comment.comment_content}
					</div>
				</div>
			)) }
		</div>
		</div>

	);
}

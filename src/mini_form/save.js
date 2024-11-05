import {useBlockProps, RichText} from '@wordpress/block-editor';


export default function save({attributes}) {

	const blockProps = useBlockProps.save();
	const formstyles = {
		maxWidth: '320px',
		background: '#0006',
		borderRadius: '20px',
		padding: '16px',
		gap: '8px'
	}
	return ( <section {...blockProps}>
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

							{attributes.bonusImage && (
								<img width={32} height={32} src={attributes.bonusImage.url} alt=""/>
							)}
						</div>
						<div className="caption">
							{
								attributes.titles.map((item, index) => (
									<RichText.Content
										value={item.text}
										tagName={'a'}
										href={attributes.refLink ? attributes.refLink : '/goto'}
										className="title"
									  style={{
										fontSize: item.fontSize
									}}/>
								))
							}
						</div>
						<a href={attributes.refLink ? attributes.refLink : '/goto'}
							 style={{color: '#fff'}}
							 className="dropdown">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
									 className="bi bi-chevron-down" viewBox="0 0 16 16">
								<path fillRule="evenodd"
											d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
							</svg>
						</a>
					</div>
				</div>

				<div className="input-wrap">
					<a href={attributes.refLink ? attributes.refLink : '/goto'} className="input"
							 style={{
								 padding: '12px',
								 borderRadius: '14px 0 0 14px',
								 fontSize: '18px',
								 color: '#FFCF01',
								 background: 'linear-gradient(#3b7096 0%,#254a64 100%)'
							 }}
					>70
					</a>
					<a href={attributes.refLink ? attributes.refLink : '/goto'} className="button"
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
					</a>
				</div>
				<RichText.Content
					tagName={'a'}
					href={attributes.refLink ? attributes.refLink : '/goto'}
					value={attributes.buttonText}
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
	</section>)
}

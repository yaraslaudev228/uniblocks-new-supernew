import {useBlockProps, InnerBlocks, BlockControls} from '@wordpress/block-editor';
import {ToolbarGroup, ToolbarButton, Flex} from '@wordpress/components'
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps()

	const getFrontAttribute = () => {
		jQuery(function ($) {
			$.get('/wp-admin/admin-ajax.php', {
				action: "uni_get_header_for_front",
			}).done(function (response) {

				setAttributes({showInFront: Boolean(response)})
				return Boolean(response)
			})
		})
	}
	const setFrontAttribute = (checked) => {
		jQuery(function ($) {
			$.post('/wp-admin/admin-ajax.php', {
				action: 'uni_set_header_for_front',
				showInFront: checked
			}).done(function (response) {

				setAttributes({showInFront: response})
			})
		})
	}
	blockProps.className = blockProps.className + ' uni_block_collection'
	return (
		<div {...blockProps}>
			{
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton>
							<Flex>
								<label htmlFor={'showInFp'}>
									<Flex>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
												 className="bi bi-front" viewBox="0 0 16 16">
											<path
												d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z"/>
										</svg>
										Show in front-page
									</Flex>
								</label>
								<input
									id="showInFp"
									checked={getFrontAttribute()}
									type="checkbox"
									onChange={(e) => {
										setFrontAttribute(e.target.checked)
									}}
								/>
							</Flex>
						</ToolbarButton>
					</ToolbarGroup>
					<ToolbarGroup>
						<ToolbarButton>
							<Flex>
								<label htmlFor={'isAbsolute'}>
									<Flex>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
												 className="bi bi-front" viewBox="0 0 16 16">
											<path
												d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z"/>
										</svg>
										is Absolute (for banner)
									</Flex>
								</label>
								<input
									id="isAbsolute"
									checked={attributes.isAbsolute}
									type="checkbox"
									onChange={(e) => {
										setAttributes({isAbsolute: e.target.checked})
									}}
								/>
							</Flex>
						</ToolbarButton>
					</ToolbarGroup>

					<ToolbarGroup>
						<ToolbarButton>
							<Flex>
								<label htmlFor={'headerPadding'}>
									<Flex>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
												 className="bi bi-arrows" viewBox="0 0 16 16">
											<path
												d="M1.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L2.707 7.5h10.586l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L13.293 8.5H2.707l1.147 1.146a.5.5 0 0 1-.708.708z"/>
										</svg>
										Header paddings (left-right)
									</Flex>
								</label>
								<input
									style={{width: '85px'}}
									id="headerPadding"
									type="text"
									value={attributes.headerPadding}
									onChange={(e) => {
										setAttributes({headerPadding: e.target.value})
									}}
								/>
							</Flex>
						</ToolbarButton>
					</ToolbarGroup>

					<ToolbarGroup>
						<ToolbarButton>
							<Flex>
								<label htmlFor={'headerHeight'}>
									<Flex>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
												 className="bi bi-arrows-vertical" viewBox="0 0 16 16">
											<path
												d="M8.354 14.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 13.293V2.707L6.354 3.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 2.707v10.586l1.146-1.147a.5.5 0 0 1 .708.708z"/>
										</svg>
										Header height
									</Flex>
								</label>
								<input
									id="headerHeight"
									style={{width: '85px'}}
									type="text"
									value={attributes.headerHeight}
									onChange={(e) => {
										setAttributes({headerHeight: e.target.value})
									}}
								/>
							</Flex>
						</ToolbarButton>
					</ToolbarGroup>
				</BlockControls>
			}
			<InnerBlocks

				template={
					[
						["uni-blocks/burger-aside", {

						}],
						[
							'core/image', {
						}
						],

						[
							'uni-blocks/menu-block', {
							menuItemsGap: "1rem",
							menuItemsAlignment: "right",
							menuItems: [
								{
									"name": "Login",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								},
								{
									"name": "Sign Up",
									"url": "/goto",
									"icon": "",
									"color": "",
									"background": "",
									"align": "center",
									"flexGrow": false,
									"padding": "0.5rem 1.5rem",
								}
							]
						}
						]
					]
				}
			/>
		</div>

	);
}

<?php
// registers the route
add_action('rest_api_init', function () {

	register_rest_route('uni-blocks/v1', '/options/save', array(
		'methods' => 'POST',
		'callback' => 'uni_save_options',
		'permission_callback' => '__return_true'
	));
});

// Processes the request
function uni_save_options( WP_REST_Request $request )
{
	$data = $request->get_params();

	if ( $data ) {
		$fields = new OptionFields();
		foreach ($data as $name => $value) {

			$fields->update($name, wp_unslash($value));
		}
	}
	wp_redirect('/wp-admin/admin.php?page=unisettings');
	exit;
}

<?php
add_action('admin_menu', 'uni_register_settings_page');
function uni_register_settings_page()
{
	add_menu_page(
			'Настройки темы',
			'Настройки темы',
			'manage_options',
			'unisettings',
			'uni_settings_page', plugins_url('uni-blocks/customFields/icon.svg'), 6
	);
}

add_action('admin_enqueue_scripts', function () {
	wp_enqueue_style('cf-page-css', plugin_dir_url(__DIR__) . 'customFields/css/index.css', null, date('h-i-s'));

});

function uni_settings_page()
{ ?>
	<div class="settings">
		<h1>Настройки темы</h1>
	</div>

	<?php
	$fields = new OptionFields();

	?>
	<form action="/wp-json/uni-blocks/v1/options/save" class="cfForm" method="post">
		<div class="cfFormInputs">
			<input type="hidden" name="page" value="unisettings">
			<?php
			echo '<h3>Цвета</h3>
 			<div class = "colorsList">';
			$fields->optionInput('body_bg', 'Цвет фона сайта', 'color');
			$fields->optionInput('header_bg', 'Цвет фона шапки', 'color');
			$fields->optionInput('footer_bg', 'Цвет футера', 'color');
			$fields->optionInput('sidebar_bg', 'Цвет сайдбара', 'color');
			$fields->optionInput('heading_colors', 'Цвет Заголовков', 'color');
			$fields->optionInput('content_colors', 'Цвет Шрифта', 'color');
			$fields->optionInput('content_a_colors', 'Цвет ссылки в контенте', 'color');
			$fields->optionInput('copyright_color_footer', 'Цвет копирайта', 'color');
			echo '</div>
			<h3>Шрифты</h3>';
			$fields->optionInput('fonts_import', 'Импорт шрифта google fonts', 'text');
			$fields->optionInput('fonts_activate', 'Задаем шрифт', 'text');
			$fields->optionInput('content_font_size', 'Размер шрифта в контенте', 'text');
			echo '<h3>Мобильное меню</h3>';
			$fields->optionInput('mobile_menu_width', 'Ширина мобильного сайдбара');
			$fields->optionInput('mobile_menu_bg', 'Фон мобильного сайдбара', 'color');

			echo '<h3>Шапка</h3>';

 			$fields->optionInput('is_header_upper', 'Показать шапку выше всех?', 'checkbox');
			$fields->optionInput('is_header_sticky', 'Лепить шапку при скролле?', 'checkbox');

			echo '<h3>Сайдбары</h3>';
			echo '<h4>Сайдбар левый</h4>';
			$fields->optionInput('site_show_sidebar', 'Убрать/Показать сайдбар?', 'checkbox');
			$fields->optionInput('is_left_sidebar_fixed', 'Фиксировать?', 'checkbox');
			$fields->optionInput('left_sidebar_width', 'Ширина сайдбара (лев)');
			$fields->optionInput('left_sidebar_border', 'Граница сайдбара левого (полоска справа)');
			echo '<h4>Сайдбар правый</h4>';
			$fields->optionInput('site_show_right_sidebar', 'Убрать/Показать сайдбар?', 'checkbox');
			$fields->optionInput('is_righ_sidebar_fixed', 'Фиксировать?', 'checkbox');
			$fields->optionInput('right_sidebar_width', 'Ширина сайдбара (прав)');
			$fields->optionInput('right_sidebar_border', 'Граница сайдбара правого (полоска слева)');

			echo '<h3>Подвал</h3>';
			$fields->optionInput('is_footer_under', 'Показать подвал ниже всех и растянуть на весь экран?', 'checkbox');
			$fields->optionInput('is_footer_sized', 'Растянуть подвал, но контент оставить в контейнере', 'checkbox');
			echo '<h3>Разное</h3>';
			$fields->optionInput('slots_h1_heading', 'Динамичный заголово для слотов');
			$fields->optionInput('google_meta', 'Google meta');
			$fields->optionInput('yandex_metrix', 'Яндекс метрика', 'textarea');
			$fields->optionInput('copyright', 'Копирайт футера (клоаченный)', 'editor');
			echo '<h3>Обертка для слотов</h3><p>Собери макет на любом слоте и скопируй открывающие куски и закрывающие</p>';
			$fields->optionInput('slot_builder_wrapper', 'Открытие контейнера для слотов', 'textarea');
			$fields->optionInput('slot_builder_wrapper_end', 'Закрытие контейнера для слотов', 'textarea');

			?>

			<div class="visualisation">
				<h2>Визуальный редактор таблицы</h2>
				<div class="colorsList">
					<?php
					$fields->optionInput('table_background', 'Фон таблицы', 'color');
					$fields->optionInput('table_head_background', 'Фон шапки', 'color');
					$fields->optionInput('table_head_color', 'Цвет шрифта шапки', 'color');
					$fields->optionInput('table_color', 'Цвет шрифта таблицы', 'color');
					$fields->optionInput('table_border_color', 'Цвет границы таблицы', 'color');
					?>
				</div>
				<?php
				$fields->optionInput('table_border', 'Рамка для ячеек');
				$fields->optionInput('table_td_padding', 'Отступы у ячеек');
				$fields->optionInput('table_header_border', 'Рамка для шапки', 'color');
				?>
				<h3>Визуализация</h3>
				<table>
					<style>
						table {
							border-collapse: collapse;
							background: <?php echo $fields->get('table_background') ?>
						}

						tr:nth-child(1) td {
							background: <?php echo $fields->get('table_head_background') ?>;
							color: <?php echo $fields->get('table_head_color') ?>
						}

						td {
							border-collapse: collapse;
							border: <?php echo $fields->get('table_border') ?> solid<?php echo $fields->get('table_border_color') ?>;
							padding: <?php echo $fields->get('table_td_padding') ?>
						}</style>
					<?php for ($i = 0; $i <= 5; $i++) {
						?>
						<tr><?php
							for ($td = 0; $td <= 5; $td++) {
								?>
								<td>Lorem ipsum dolor sit amet.</td>
								<?php
							}
							?></tr>
						<?php
					} ?>
				</table>
			</div>

		</div>
		<div class="cfControls">
			<h2>Сохранить поля</h2>
			<button class="btn btn-cfSave">Сохранить</button>
		</div>

	</form>
	<script>
			jQuery(function ($) {
				const visualisation = $('.visualisation')
				const td = visualisation.find('td')

				const tablePadding = visualisation.find('[name="table_td_padding"]')
				const tableBorder = visualisation.find('[name="table_border"]')
				const tableBorderColor = visualisation.find('[name="table_border_color"]')


				tableBorder.on('input', function () {
					const val = $(this).val()
					td.each(function () {
						changeStyle($(this), 'border', val + ' solid ' + tableBorderColor.val())
					})
				})

				// Change Td padding
				tablePadding.on('input', function () {
					const val = $(this).val()
					td.each(function () {
						changeStyle($(this), 'padding', val)
					})
				})

				// Change Td border


				function changeStyle(element, name, value) {
					element.css(name, value)
				}

			})
	</script>
	<?php


}


class OptionFields
{

	public function get( $name )
	{
		return get_option($name);
	}

	public function update( $name, $newValue )
	{
		update_option($name, $newValue);
	}

	public function optionInput( $name, $label, $type = "text" )
	{
		?>
		<div class="formGroup">
			<?php
			if ( $type === 'text' ) {
				?>
				<label for=""><?php echo $label ?></label>
			<input type="text" name="<?php echo $name ?>"
				   class="setInput"
				   value="<?php echo $this->get($name) ?>"/>
			<?php
			} else if ( $type === 'color' ) {
			?>

				<label for=""><?php echo $label ?></label>
			<?php
			wp_enqueue_script('wp-color-picker');
			wp_enqueue_style('wp-color-picker');
			?>
			<input name="<?php echo $name ?>" type="text" id="<?php echo $name ?>_color"
				   value="<?php echo $this->get($name) ?: "" ?>" data-default-color="#ffffff">
				<script type="text/javascript">
									jQuery(document).ready(function ($) {
										$('#<?php echo $name ?>_color').wpColorPicker();
									});
				</script>

			<?php
			} else if ( $type === 'checkbox' ) {
			?>

				<label for=""><?php echo $label ?></label>
				<div class="checkboxlike <?php echo $this->get($name) !== 'false' ? 'checked' : '' ?>"
					 data-checked="<?php echo $this->get($name) !== 'false' ? 'true' : 'false' ?>">
					<input type="hidden" name="<?php echo $name ?>"
						   value="<?php echo $this->get($name) !== 'false' ? 'true' : 'false' ?>">

				</div>

				<?php
			} else if ( $type === 'textarea' ) {
				?>
				<label for=""><?php echo $label ?></label>
				<textarea name="<?php echo $name ?>" class="setInput" id="" cols="30"
						  rows="10"><?php echo $this->get($name) ?></textarea>
				<?php
			} else if ( $type === 'editor' ) {
				wp_editor($this->get($name), $name, array(
						'wpautop' => 1,
						'media_buttons' => 1,
						'textarea_name' => $name, //нужно указывать!
						'textarea_rows' => 20,
						'tabindex' => null,
						'editor_css' => '',
						'editor_class' => '',
						'teeny' => 0,
						'dfw' => 0,
						'tinymce' => 1,
						'quicktags' => 1,
						'drag_drop_upload' => false
				));
			}

			?>
		</div>
		<script>
					jQuery(function ($) {
						const checkboxes = $('.checkboxlike')
						checkboxes.each(function () {
							const currentCheckbox = $(this)
							currentCheckbox.click(function () {
								if ($(this).attr('data-checked') === "true") {
									$(this).attr('data-checked', 'false')
									$(this).removeClass('checked')
									$(this).find('input[type="hidden"]').val('false')
								} else {

									$(this).attr('data-checked', 'true')
									$(this).addClass('checked')
									$(this).find('input[type="hidden"]').val('true')
								}
							})
						})
					})
		</script>
		<?php

	}
}

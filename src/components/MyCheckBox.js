import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const MyCheckbox = field => (
	<Checkbox
  label={field.input.label}
  checked={!!field.input.value}
  onCheck={field.input.onChange}
	/>
);

MyCheckbox.propTypes = {
	defaultValue: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.oneOfType([PropTypes.func])
};

export default MyCheckbox;

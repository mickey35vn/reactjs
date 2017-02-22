import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const MyCheckbox = ({ label, onChange }) => (
	<Checkbox
  label={label}
  onCheck={onChange}
	/>
);

MyCheckbox.propTypes = {
	defaultValue: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.oneOfType([PropTypes.func])
};

export default MyCheckbox;

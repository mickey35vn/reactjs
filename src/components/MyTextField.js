import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const MyTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField
  hintText={label}
  floatingLabelText={label}
  errorText={touched && error}
  {...input}
  {...custom}
	/>
);

MyTextField.propTypes = {
	input: PropTypes.oneOfType([PropTypes.object]),
	label: PropTypes.string,
	meta: PropTypes.oneOfType([PropTypes.object])
};

export default MyTextField;

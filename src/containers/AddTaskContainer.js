import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { addTask } from '../actions';
import MyTextField from '../components/MyTextField';
import MyCheckbox from '../components/MyCheckbox';

let isInvalid = false;

const validate = (values) => {
	const errors = {};
	const requiredFields = ['taskName', 'effort'];
	isInvalid = false;

	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = 'Required';
			isInvalid = true;
		}
	});
	if (values.effort && isNaN(parseInt(values.effort, 0))) {
		errors.effort = 'The effort must be the number';
		isInvalid = true;
	}

	return errors;
};

const onSubmit = (values, dispatch) => {
	const effort = parseInt(values.effort, 0);
	dispatch(addTask(values.taskName, effort));
};

const AddTaskContainer = (props) => {
	const { handleSubmit, pristine, submitting } = props;

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field name='taskName' component={MyTextField} label='Task Name' />
			</div>
			<div>
				<Field name='effort' component={MyTextField} label='Effort' />
			</div>
			<div>
				<Field name='status' component={MyCheckbox} label='Completed???' />
			</div>
			<div>
				<button type='submit' disabled={pristine || submitting || isInvalid}>Submit</button>
			</div>
		</form>
	);
};

AddTaskContainer.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	pristine: PropTypes.bool,
	submitting: PropTypes.bool
};

export default reduxForm({
	form: 'AddTaskContainer',
	validate,
	onSubmit
})(AddTaskContainer);

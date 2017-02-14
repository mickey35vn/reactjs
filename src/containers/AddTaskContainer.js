import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const AddTaskContainer = ({ dispatch }) => {
	let input;

	return (
		<div>
			<input ref={(node) => { input = node; }} />
			<button
  onClick={() => {
	if (!input.value.trim()) {
		return;
	}
	dispatch(addTask(input.value));
	input.value = '';
}}
			>Add Task</button>
		</div>
	);
};

AddTaskContainer.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(AddTaskContainer);

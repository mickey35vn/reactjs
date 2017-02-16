import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const AddTaskContainer = ({ dispatch }) => {
	let input;
	let effort;

	return (
		<div>
			<p>Task name: <input ref={(node) => { input = node; }} /></p>
			<p>Task effort: <input ref={(node) => { effort = node; }} /></p>
			<p><button
  onClick={() => {
	if (!input.value.trim()) {
		return;
	}

	const num = parseInt(effort.value.trim(), 0);

	dispatch(addTask(input.value, isNaN(num) ? 0 : num));
	input.value = '';
	effort.value = '';
}}
			>Add Task</button></p>
		</div>
	);
};

AddTaskContainer.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(AddTaskContainer);

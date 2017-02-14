import React, { PropTypes } from 'react';

const TaskComponent = ({ onClick, completed, text }) => (
	<li style={{ color: completed ? 'blue' : 'red' }}>
		{text} <button onClick={onClick}>{completed ? 'uncomplete' : 'complete it'}</button>
	</li>
);

TaskComponent.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default TaskComponent;

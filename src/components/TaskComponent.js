import React, { PropTypes } from 'react';

const TaskComponent = ({ onClick, completed, text, created }) => (
	<li style={{ color: completed ? 'blue' : 'red' }}>
		{text} - Created at {created.toLocaleDateString()}
		<button onClick={onClick}>{completed ? 'remove task' : 'edit task'}</button>
	</li>
);

TaskComponent.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	created: PropTypes.oneOfType([PropTypes.object.isRequired])
};

export default TaskComponent;

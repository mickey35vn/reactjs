import React, { PropTypes } from 'react';
import TaskComponent from './TaskComponent';

const TaskListComponent = ({ tasks, onTaskClick }) => (
	<ul>
		{tasks.map(task =>
			<TaskComponent
  key={task.id}
  {...task}
  onClick={() => onTaskClick(task.id)}
			/>
		)}
	</ul>
);

TaskListComponent.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTaskClick: PropTypes.func.isRequired
};

export default TaskListComponent;

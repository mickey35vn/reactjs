import React, { PropTypes } from 'react';
import TaskComponent from './TaskComponent';

function sumEffort(items, prop) {
	return items.reduce((a, b) => {
		return a + b[prop];
	}, 0);
}

const TaskListComponent = ({ tasks, onTaskClick }) => (
	<div>
		{tasks.length > 0 && <h3>Task list:</h3>}
		<ul>
			{tasks.map(task =>
				<TaskComponent
  key={task.id}
  {...task}
  onClick={() => onTaskClick(task.id)}
				/>
			)}
		</ul>
		{tasks.length > 0 && <h4>Total effort: {sumEffort(tasks, 'effort')}</h4>}
	</div>
);

TaskListComponent.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired,
		effort: PropTypes.number,
		created: PropTypes.object
	}).isRequired).isRequired,
	onTaskClick: PropTypes.func.isRequired
};

export default TaskListComponent;

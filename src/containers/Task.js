import React from 'react';

import TaskManager from '../managers/TashManager';

class Task extends React.Component {
	componentWillMount() {
		TaskManager.init();
	}

	render() {
		const task = TaskManager.getTask(this.props.params.id - 1);
		return (
			<div>
				<h3>- My task: {task.name}</h3>
				<h3>- Status: {task.completed ? 'completed' : 'not yet'}</h3>
			</div>
		);
	}
}

Task.propTypes = {
	params: React.PropTypes.oneOfType([React.PropTypes.object])
};

export default Task;

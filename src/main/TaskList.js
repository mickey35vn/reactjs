import React from 'react';
import { Link } from 'react-router';

import TaskManager from '../managers/TashManager';

class TaskList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tasks: TaskManager.getTasks() };
	}

	componentWillMount() {
		TaskManager.init();

		this.updateTasks();
	}

	componentDidMount() {
		TaskManager.addChangeListener(this.updateTasks);
	}

	componentWillUnmount() {
		TaskManager.removeChangeListener(this.updateTasks);
	}

	updateTasks() {
		this.setState({
			tasks: TaskManager.getTasks()
		});
	}

	render() {
		const tasks = this.state.tasks.map((task, id) => <li key={id}><Link to={`/task/${id}`}>{task.name}</Link></li>);

		return (<div>
			<ul>
				{tasks}
			</ul>
		</div>);
	}
}

export default TaskList;

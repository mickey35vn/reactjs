import React from 'react';
import { Link } from 'react-router';

import TaskManager from '../managers/TashManager';
import TaskItem from '../components/TaskItem';

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
		const tasks = this.state.tasks.map((task, id) => <TaskItem task={task} id={id + 1} key={id} />);

		return (<div>
			<Link to='/task/new'>New Task</Link>
			<ul>
				{tasks}
			</ul>
		</div>);
	}
}

export default TaskList;

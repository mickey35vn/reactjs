import React from 'react';
import { Link } from 'react-router';

import TaskManager from '../managers/TashManager';

class App extends React.Component {
	constructor(props) {
    super(props);
		this.state = {tasks: TaskManager.getTasks()};
	}

	componentWillMount() {
    TaskManager.init()

		this.updateTasks();
  }

  componentDidMount() {
    TaskManager.addChangeListener(this.updateTasks)
  }

  componentWillUnmount() {
    TaskManager.removeChangeListener(this.updateTasks)
  }

  updateTasks() {
    this.setState({
      tasks: TaskManager.getTasks()
    })
  }

	render() {
		const tasks = this.state.tasks.map(function (task, id) {
      return <li key={id}><Link to={`/task/${id}`}>{task.name}</Link></li>
    })

		return (
			<div>
				<h1>Task Manager</h1>
				<ul>
            {tasks}
        </ul>
			</div>
		);
	}
}
export default App;

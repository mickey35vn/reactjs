import React from 'react';

import TaskManager from '../managers/TashManager';

class NewTask extends React.Component {
	constructor(props) {
		super(props);

		this.state = { task: '' };

		this.updateState = this.updateState.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.addTask = this.addTask.bind(this);
	}

	handleKeyPress(event) {
		if (event.key === 'Enter') {
			this.addTask();
		}
	}

	addTask() {
		TaskManager.addTask(this.state.task, () => {
			this.props.router.push('/');
		});
	}

	updateState(event) {
		this.setState({
			task: event.target.value
		});
	}

	render() {
		return (<div>
			<h1>New Task</h1>
			<input type='text' value={this.state.task} onChange={this.updateState} onKeyPress={this.handleKeyPress} />
			<button onClick={this.addTask}>ADD</button>
		</div>);
	}
}

NewTask.propTypes = {
	router: React.PropTypes.shape.isRequired
};

export default NewTask;

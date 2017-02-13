import React from 'react';

import TaskManager from '../managers/TashManager';

class NewTask extends React.Component {
	constructor(props) {
		super(props);

		this.state = { task: '', showConfirm: false };

		this.updateState = this.updateState.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.addTask = this.addTask.bind(this);
		this.handleCancelPress = this.handleCancelPress.bind(this);
		this.handleLeaveConfirm = this.handleLeaveConfirm.bind(this);
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
		this.setState(prevState => ({
			task: event.target.value,
			showConfirm: prevState.showConfirm
		}));
	}

	handleCancelPress() {
		this.setState(prevState => ({
			task: prevState.task,
			showConfirm: true
		}));
	}

	handleLeaveConfirm() {
		if (confirm('Are you want to leave?')) {
			this.props.router.push('/');
		}
	}

	render() {
		return (<div>
			<h1>New Task</h1>
			<div>
				<input type='text' value={this.state.task} onChange={this.updateState} onKeyPress={this.handleKeyPress} />
				<div>
					<button onClick={this.addTask}>Save</button>
					<button onClick={this.handleLeaveConfirm}>Cancel</button>
				</div>
			</div>
		</div>);
	}
}

NewTask.propTypes = {
	router: React.PropTypes.oneOfType([React.PropTypes.object])
};

export default NewTask;

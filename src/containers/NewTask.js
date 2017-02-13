import React from 'react';

import TaskManager from '../managers/TashManager';
import { confirm } from '../util/confirm';

class NewTask extends React.Component {
	constructor(props) {
		super(props);

		this.state = { task: '' };

		this.updateState = this.updateState.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.addTask = this.addTask.bind(this);
		this.handleCancelPress = this.handleCancelPress.bind(this);
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

	handleCancelPress() {
		confirm('Are you want to leave?', { okLabbel: 'Yes', cancelLabel: 'No', title: 'Leaving page' }).then(() => {
			this.props.router.push('/');
		}, () => { });
	}

	render() {
		return (<div>
			<h1>New Task</h1>
			<div>
				<input type='text' value={this.state.task} onChange={this.updateState} onKeyPress={this.handleKeyPress} />
				<div>
					<button onClick={this.addTask}>Save</button>
					<button onClick={this.handleCancelPress}>Cancel</button>
				</div>
			</div>
		</div>);
	}
}

NewTask.propTypes = {
	router: React.PropTypes.oneOfType([React.PropTypes.object])
};

export default NewTask;

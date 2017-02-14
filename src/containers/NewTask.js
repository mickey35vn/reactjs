import React from 'react';
import Confirm from 'react-confirm-bootstrap';

import TaskManager from '../managers/TashManager';

class NewTask extends React.Component {
	constructor(props) {
		super(props);

		this.state = { task: '' };

		this.updateState = this.updateState.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.addTask = this.addTask.bind(this);
		this.onConfirm = this.onConfirm.bind(this);
	}

	onConfirm() {
		this.props.router.push('/');
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
		const confirmTitle = 'Leaving page';
		const confirmMessage = 'Are you want to leave?';

		return (<div>
			<h1>New Task</h1>
			<div>
				<input type='text' value={this.state.task} onChange={this.updateState} onKeyPress={this.handleKeyPress} />
				<div>
					<button disabled={!this.state.task} onClick={this.addTask}>Save</button>
					<Confirm onConfirm={this.onConfirm} body={confirmMessage} confirmText='Yes' title={confirmTitle}>
						<button>Cancel</button>
					</Confirm>
				</div>
			</div>
		</div>);
	}
}

NewTask.propTypes = {
	router: React.PropTypes.oneOfType([React.PropTypes.object])
};

export default NewTask;

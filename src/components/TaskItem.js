import React from 'react';
import { Link } from 'react-router';

class TaskItem extends React.Component {
	render() {
		const color = this.props.task.completed === true ? 'blue' : 'red';
		const status = this.props.task.completed === true ? ' (completed)' : ' (not yet)';

		return (<li style={{ color }}>
			<Link style={{ color }} to={`/task/${this.props.id}`}>{this.props.task.name + status}</Link>
		</li>);
	}
}

TaskItem.propTypes = {
	id: React.PropTypes.number,
	task: React.PropTypes.oneOfType([React.PropTypes.object])
};

export default TaskItem;

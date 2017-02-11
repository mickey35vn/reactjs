import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Task Manager</h1>
				<Link to='/task/new'>New Task</Link>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.element.isRequired
};

export default App;

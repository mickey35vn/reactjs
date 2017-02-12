import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Task Manager</h1>
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

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './main/app';
import NewTask from './containers/NewTask';
import Task from './containers/Task';
import TaskList from './main/TaskList';

render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={TaskList} />
			<Route path='task/new' component={NewTask} />
			<Route path='task/:id' component={Task} />
		</Route>
	</Router>
), document.getElementById('root'));

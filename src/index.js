import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import taskManager from './reducers';

injectTapEventPlugin();

const store = createStore(
	taskManager, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);

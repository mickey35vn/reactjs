import { combineReducers } from 'redux';

import { ADD_TASK, TOGGLE_TASK } from './actions';

const task = (state, action) => {
	switch (action.type) {
	case ADD_TASK:
		return {
			...action,
			completed: false
		};
	case TOGGLE_TASK:
		if (state.id !== action.id) {
			return state;
		}

		return {
			...state,
			completed: !state.completed
		};
	default:
		return state;
	}
};

const tasks = (state = [], action) => {
	switch (action.type) {
	case ADD_TASK:
		return [
			...state,
			task(state, action)
		];
	case TOGGLE_TASK:
		return state.map(t =>
				task(t, action)
			);
	default:
		return state;
	}
};

const taskManager = combineReducers({
	tasks
});

export default taskManager;

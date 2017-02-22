import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { ADD_TASK, TOGGLE_TASK } from './actions';

const task = (state, action) => {
	switch (action.type) {
	case ADD_TASK:
		return {
			...action
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
	case TOGGLE_TASK: {
		const clone = state.splice(0);
		const index = clone.map(e => e.id).indexOf(action.id);
		clone.splice(index, 1);
		return clone;
	}
	default:
		return state;
	}
};

const taskManager = combineReducers({
	tasks,
	form: reduxFormReducer
});

export default taskManager;

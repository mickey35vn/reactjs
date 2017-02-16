let nextTaskId = 0;

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (text, effort) => {
	nextTaskId += 1;
	return {
		type: ADD_TASK,
		id: nextTaskId,
		text,
		effort,
		created: new Date()
	};
};

export const toggleTask = id => ({
	type: TOGGLE_TASK,
	id
});

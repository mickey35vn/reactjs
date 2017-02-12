import json from '../tasks.json';

let _tasks = [];
let _initCalled = false;
let _changeListeners = [];

const TaskManager = {
	init: () => {
		if (_initCalled) {
			return;
		}
		_initCalled = true;
		_tasks = json.tasks;

		TaskManager.notifyChange();
	},

	addTask: (taskName, cb) => {
		const task = { name: taskName, completed: false };

		_tasks.push(task);

		TaskManager.notifyChange();

		if (cb) {
			cb(task);
		}
	},

	removeTask: (id, cb) => {
		delete _tasks[id];

		TaskManager.notifyChange();

		if (cb) {
			cb();
		}
	},

	getTasks: () => {
		return _tasks;
	},

	getTask: (id) => {
		return _tasks[id];
	},

	notifyChange: () => {
		_changeListeners.forEach((listener) => {
			listener();
		});
	},

	addChangeListener: (listener) => {
		_changeListeners.push(listener);
	},

	removeChangeListener: (listener) => {
		_changeListeners = _changeListeners.filter((l) => {
			return listener !== l;
		});
	}
};

export default TaskManager;

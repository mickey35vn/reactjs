import json from 'json-loader!../tasks.json';

let _tasks = [];
let _initCalled = false;
let _changeListeners = [];

const TaskManager = {
	init: function () {
		if (_initCalled) {
			return;
		}
		_initCalled = true;
		_tasks = json.tasks;

		TaskManager.notifyChange();
	},

	addTask: function (task, cb) {
		_tasks.push(task);

		TaskManager.notifyChange();

		if (cb) {
			cb(task);
		}
	},

	removeTask: function (id, cb) {
		delete _tasks[id];

		TaskManager.notifyChange();
	},

	getTasks: function () {
		return _tasks;
	},

	getTask: function (id) {
		return _tasks[id];
	},

	notifyChange: function () {
		_changeListeners.forEach(function (listener) {
			listener();
		});
	},

	addChangeListener: function (listener) {
		_changeListeners.push(listener);
	},

	removeChangeListener: function (listener) {
		_changeListeners = _changeListeners.filter(function (l) {
			return listener !== l;
		});
	}
}

export default TaskManager;

import { connect } from 'react-redux';
import { toggleTask } from '../actions';
import TaskListComponent from '../components/TaskListComponent';

const mapStateToProps = state => ({
	tasks: state.tasks
});

const mapDispatchToProps = ({
	onTaskClick: toggleTask
});

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListComponent);

export default TaskListContainer;

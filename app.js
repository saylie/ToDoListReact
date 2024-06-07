import React from 'react';
import './style.css';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { taskName: 'Study React', priority: 1 },
        { taskName: 'Go to Shopping', priority: 2 },
        { taskName: 'Go to Gym', priority: 2 },
      ],
      newTaskName: '',
      newTaskPriority: '',
    };
  }
  handleTaskChange = (event) => {
    this.setState({ newTaskName: event.target.value });
  };
  handlePriorityChange = (event) => {
    this.setState({ newTaskPriority: event.target.value });
  };
  addTask = () => {
    const { newTaskName, newTaskPriority } = this.state;
    const newTask = {
      taskName: newTaskName,
      priority: parseInt(newTaskPriority),
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      newTaskName: '',
      newTaskPriority: '',
    }));
  };

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task.taskName} - {task.priority}
            </li>
          ))}
        </ul>
        <input
          type="textarea"
          placeholder="add a task"
          value={this.state.newTaskName}
          onChange={this.handleTaskChange}
        />
        <input
          type="number"
          placeholder="enter priority"
          value={this.state.newTaskPriority}
          onChange={this.handlePriorityChange}
        />
        <button class="addBtn" onClick={this.addTask}>
          Add Task
        </button>
      </div>
    );
  }
}

export default ToDoList;

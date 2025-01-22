import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

import React from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const toggleComplete = () => {
    onUpdate(task._id, { ...task, completed: !task.completed });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title} - {task.description}
      </span>
      <button onClick={toggleComplete}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;

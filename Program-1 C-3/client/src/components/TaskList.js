import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await fetchTasks();
      setTasks(data);
    };
    getTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    const { data } = await createTask(newTask);
    setTasks([...tasks, data]);
  };

  const handleUpdateTask = async (id, updatedTask) => {
    const { data } = await updateTask(id, updatedTask);
    setTasks(tasks.map((task) => (task._id === id ? data : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

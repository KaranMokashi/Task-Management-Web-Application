import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../api';
import { Link } from 'react-router-dom';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((response) => {
      setTasks(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  };

  return (
    <div className='task-list-conatainer'>
      <h1>Task List</h1>
      <Link to="/add" className='add-task-link'>Add New Task</Link>
      <ul className='task-list'>
        {tasks.map(task => (
          <li key={task.id} className='task-item'>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

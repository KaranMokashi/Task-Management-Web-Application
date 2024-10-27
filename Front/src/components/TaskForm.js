import React, { useState, useEffect } from 'react';
import { createTask, fetchTaskById, updateTask } from '../api';
import { useNavigate, useParams } from 'react-router-dom';

function TaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: '', description: '', is_completed: false });

  useEffect(() => {
    if (id) {
      fetchTaskById(id).then((response) => {
        setTask(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTask(id, task).then(() => navigate('/'));
    } else {
      createTask(task).then(() => navigate('/'));
    }
  };

  return (
    <div className="task-form-container">
    <form autocomplete="off" className='task-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Title:</label>
        <input className="centered-input" name="title" value={task.title} onChange={handleChange} required />
      </div>
      <div className='form-group'>
        <label>Description:</label>
        <textarea className="centered-textarea" name="description" value={task.description} onChange={handleChange} />
      </div>
      <div className='form-group checkbox-group'>
        <label>Completed:</label>
        <input
          type="checkbox"
          name="is_completed"
          checked={task.is_completed}
          onChange={(e) => setTask({ ...task, is_completed: e.target.checked })}
        />
      </div>
      <button type="submit">{id ? 'Update' : 'Create'}</button>
    </form>
    </div>
  );
}

export default TaskForm;

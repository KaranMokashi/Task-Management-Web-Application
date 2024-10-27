import React, { useEffect, useState } from 'react';
import { fetchTaskById } from '../api';
import { useParams, Link } from 'react-router-dom';

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTaskById(id).then((response) => {
      setTask(response.data);
    });
  }, [id]);

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div className="task-details-container">
      <h1>{task.title}</h1>
      <p className='desc-details'>{task.description}</p>
      <p>{task.is_completed ? 'Completed' : 'Not Completed'}</p>
      <Link to={`/edit/${task.id}`} className="edit-task-button">Edit</Link>
    </div>
  );
}

export default TaskDetails;

import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

// Fetch all tasks
export const fetchTasks = () => axios.get(API_URL);

// Fetch task by ID
export const fetchTaskById = (id) => axios.get(`${API_URL}/${id}`);

// Create a new task
export const createTask = (task) => axios.post(API_URL, task);

// Update a task
export const updateTask = (id, updatedTask) => axios.put(`${API_URL}/${id}`, updatedTask);

// Delete a task
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

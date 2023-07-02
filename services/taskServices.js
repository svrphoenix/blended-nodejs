const fs = require('fs/promises');
const path = require('path');
const HttpError = require('../helpers/HttpError');
const crypto = require('crypto');

const tasksPath = path.join(__dirname, '..', 'db', 'tasks.json');

const getTasksService = async () => {
  const tasks = await fs.readFile(tasksPath);
  return JSON.parse(tasks);
};

const getOneTaskService = async id => {
  const tasks = await getTasksService();
  const task = tasks.find(item => item.id === id);
  if (!task) {
    throw new HttpError(404, 'Task not found');
  }
  return task;
};

const addTaskService = async body => {
  const tasks = await getTasksService();
  const newTask = { id: crypto.randomUUID(), ...body };
  tasks.push(newTask);
  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
  return newTask;
};

const updateTaskService = async (id, body) => {
  const tasks = await getTasksService();
  const index = tasks.findIndex(item => item.id === id);
  if (index === -1) {
    throw new HttpError(404, 'Task not found');
  }
  tasks[index] = { ...tasks[index], ...body };

  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
  return tasks[index];
};

const deleteTaskService = async id => {
  const tasks = await getTasksService();
  const index = tasks.findIndex(item => item.id === id);
  if (index === -1) {
    throw new HttpError(404, 'Task not found');
  }

  const [deletedTask] = tasks.splice(index, 1);
  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
  return deletedTask;
};

module.exports = { getTasksService, getOneTaskService, addTaskService, updateTaskService,deleteTaskService };

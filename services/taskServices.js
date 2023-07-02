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

const addTaskService = async task => {
  const tasks = await getTasksService();
  const newTask = { ...task, id: crypto.randomUUID() };
  tasks.push(newTask);
  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
  return newTask;
};

module.exports = { getTasksService, getOneTaskService, addTaskService };

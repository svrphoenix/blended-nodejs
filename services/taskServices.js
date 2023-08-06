const HttpError = require('../helpers/HttpError');
const { Task } = require('../models/Task');

const getTasksService = async userId => {
  return await Task.find({ owner: userId });
};

const getOneTaskService = async (id, userId) => {
  const task = await Task.findOne({ _id: id, owner: userId });
  if (!task) {
    throw new HttpError(404, 'Task not found');
  }
  return task;
};

const addTaskService = async (body, userId) => {
  return await Task.create({ ...body, owner: userId });
};

const updateTaskService = async (id, body, userId) => {
  const updatedTask = await Task.findOneAndUpdate({ _id: id, owner: userId }, body, { new: true });
  if (!updatedTask) {
    throw new HttpError(404, 'Task not found');
  }
  return updatedTask;
};

const deleteTaskService = async (id, userId) => {
  const deletedTask = await Task.findOneAndDelete({ _id: id, owner: userId });
  if (!deletedTask) {
    throw new HttpError(404, 'Task not found');
  }
  return deletedTask;
};

module.exports = {
  getTasksService,
  getOneTaskService,
  addTaskService,
  updateTaskService,
  deleteTaskService,
};

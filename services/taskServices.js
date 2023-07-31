const HttpError = require('../helpers/HttpError');
const { Task } = require('../models/Task');


const getTasksService = async () => {
  return await Task.find();
  
};

const getOneTaskService = async (id) => {
  const task = await Task.findById(id);
  if (!task) {
    throw new HttpError(404, 'Task not found');
  }
  return task;
};

const addTaskService = async body => {
  return await Task.create(body);
};

const updateTaskService = async (id, body) => {
  const updatedTask = await Task.findByIdAndUpdate(id, body, { new: true });
  if (!updatedTask) {
    throw new HttpError(404, "Task not found");
  }
  return updatedTask;
};

const deleteTaskService = async id => {
  const deletedTask = await Task.findByIdAndDelete(id);
  if (!deletedTask) {
    throw new HttpError(404, "Task not found");
  }
  return deletedTask;
}


module.exports = { getTasksService, getOneTaskService, addTaskService, updateTaskService,deleteTaskService };

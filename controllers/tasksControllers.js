const controllerWrapper = require('../helpers/controllerWrapper');
const {
  getTasksService,
  getOneTaskService,
  addTaskService,
  updateTaskService,
  deleteTaskService,
} = require('../services/taskServices');

const getTasks = controllerWrapper(async (req, res, __) => {
  const { _id: userId } = req.user;
  const tasks = await getTasksService(userId);
  res.json(tasks);
});

const getTaskById = controllerWrapper(async (req, res, _) => {
  const { id } = req.params;
  const { _id: userId } = req.user;

  const task = await getOneTaskService(id, userId);
  res.json(task);
});

const addTask = controllerWrapper(async (req, res, _) => {
  const { _id: userId } = req.user;
  const task = await addTaskService(req.body, userId);
  res.status(201).json(task);
});

const updateTask = controllerWrapper(async (req, res, _) => {
  const { id } = req.params;
  const { _id: userId } = req.user;

  const task = await updateTaskService(id, req.body, userId);
  res.json(task);
});

const deleteTask = controllerWrapper(async (req, res, _) => {
  const { id } = req.params;
  const { _id: userId } = req.user;

  const task = await deleteTaskService(id, userId);
  res.status(200).json(task);
});

module.exports = { getTasks, getTaskById, addTask, updateTask, deleteTask };

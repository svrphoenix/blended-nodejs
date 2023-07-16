const controllerWrapper = require('../helpers/controllerWrapper');
const {
  getTasksService,
  getOneTaskService,
  addTaskService,
  updateTaskService,
  deleteTaskService,
} = require('../services/taskServices');

const getTasks = controllerWrapper(async (_, res, __) => {
    const tasks = await getTasksService();
    res.json(tasks);
})

const getTaskById = controllerWrapper(async (req, res, _) => {
  const { id } = req.params;
  
    const task = await getOneTaskService(id);
    res.json(task);
})

const addTask = controllerWrapper(async (req, res, _) => {
  
    const task = await addTaskService(req.body);
    res.status(201).json(task);

});

const updateTask = controllerWrapper(async (req, res, _) => {
  const { id } = req.params;
    const task = await updateTaskService(id, req.body);
    res.json(task);
});

const deleteTask = controllerWrapper(async (req, res, _) => {
  const { id } = req.params;
    const task = await deleteTaskService(id);
    res.status(200).json(task);
  
});

module.exports = { getTasks, getTaskById, addTask, updateTask, deleteTask };

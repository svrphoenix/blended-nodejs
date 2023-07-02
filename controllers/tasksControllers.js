const { getTasksService, getOneTaskService, addTaskService } = require('../services/taskServices');

const getTasks = async (_, res, next) => {
  try {
    const tasks = await getTasksService();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Database error' });
  }
};

const getTaskById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await getOneTaskService(id);
    res.json(task);
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

const addTask = async (req, res, next) => {
  try {
    const task = await addTaskService(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = { getTasks, getTaskById, addTask };

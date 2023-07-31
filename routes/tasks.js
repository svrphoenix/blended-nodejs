const express = require('express');
const { validateBody } = require("../helpers/validateBody");
const { createTaskValidationSchema, updateTaskValidationSchema } = require("../helpers/validation/taskValidationSchemas");
const {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksControllers');
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.use(auth);
router.route('/').get(getTasks).post(validateBody(createTaskValidationSchema),addTask);
router.route('/:id').get(getTaskById).patch(validateBody(updateTaskValidationSchema),updateTask).delete(deleteTask);
// router.get('/:id', getTaskById);

// router.post('/', addTask);

// router.patch('/:id', updateTask);

// router.delete('/:id', deleteTask);

module.exports = { tasksRouter: router };

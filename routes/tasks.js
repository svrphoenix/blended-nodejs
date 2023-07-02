const express = require('express');
const {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksControllers');

const router = express.Router();

router.route('/').get(getTasks).post(addTask);
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);
// router.get('/:id', getTaskById);

// router.post('/', addTask);

// router.patch('/:id', updateTask);

// router.delete('/:id', deleteTask);

module.exports = { tasksRouter: router };

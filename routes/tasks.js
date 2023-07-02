const express = require('express');
const { getTasks, getTaskById, addTask } = require('../controllers/tasksControllers');

const router = express.Router();

router.get('/', getTasks);

router.get('/:id', getTaskById);

router.post('/', addTask);

module.exports = { tasksRouter: router };

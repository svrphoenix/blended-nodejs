const express = require('express');
const { tasksRouter } = require('./routes/tasks');
const notFoundHandler = require('./middlewares/notFoundHandler');

const app = express();
app.use(express.json());
app.use('/tasks', tasksRouter);

app.use(notFoundHandler);

module.exports = app;

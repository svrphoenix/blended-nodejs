const express = require('express');

const { tasksRouter } = require('./routes/tasks');
const { authRouter } = require('./routes/auth');
const notFoundHandler = require('./middlewares/notFoundHandler');
const globalErrorHandler = require('./middlewares/globalErrorHandler');

const app = express();

app.use(express.json());
app.use('/tasks', tasksRouter);
app.use('/auth', authRouter);

app.use(notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;

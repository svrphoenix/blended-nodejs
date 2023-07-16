const Joi = require("joi");

const createTaskValidationSchema = Joi.object({
  title: Joi.string().min(4).max(20).required(),
  completed: Joi.boolean().optional(),
});

const updateTaskValidationSchema = Joi.object()
  .keys({
    title: createTaskValidationSchema.extract('title').optional(),
    completed: createTaskValidationSchema.extract('completed').optional(),
  })
    .or('title', 'completed');
  
module.exports = {
    createTaskValidationSchema,
    updateTaskValidationSchema,
    }
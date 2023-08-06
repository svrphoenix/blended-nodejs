const Joi = require('joi');

const { passwordRegex } = require('./const');

const signupValidationSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordRegex).required().messages({
    'string.pattern.base':
      'This password should contain  at least eight characters and at least one number and one letter',
  }),
});

const loginValidationSchema = Joi.object().keys({
  email: signupValidationSchema.extract('email'),
  password: signupValidationSchema.extract('password'),
});

module.exports = { signupValidationSchema, loginValidationSchema };

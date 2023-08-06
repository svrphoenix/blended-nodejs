const express = require('express');
const { signup, login } = require('../controllers/authControllers');
const { validateBody } = require('../helpers/validateBody');
const {
  signupValidationSchema,
  loginValidationSchema,
} = require('../helpers/validation/authValidationSchemas');

const router = express.Router();

router.post('/signup', validateBody(signupValidationSchema), signup);
router.post('/login', validateBody(loginValidationSchema), login);
router.post('/logout');

module.exports = { authRouter: router };

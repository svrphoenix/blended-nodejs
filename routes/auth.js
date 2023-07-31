const express = require("express");
const { signup, login } = require("../controllers/authControllers");

const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout");


module.exports = { authRouter: router };
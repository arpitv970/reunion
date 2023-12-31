const express = require('express');
const { signup, login } = require('../controllers/user');

const userRouter = express.Router();

/*
 * TODO:
 * POST -> '/signup' -> frontend: true
 * POST -> '/login' -> frontend: true
 */

userRouter.post('/signup', signup);
userRouter.post('/login', login);

module.exports = userRouter;

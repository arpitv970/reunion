const express = require('express');
const { signup } = require('../controllers/user');

const userRouter = express.Router();

/*
 * TODO:
 * POST -> '/signup' -> frontend: true
 * POST -> '/login' -> frontend: true
 */

userRouter.post('/signup', signup);

module.exports = userRouter;

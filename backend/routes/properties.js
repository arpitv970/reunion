const express = require('express');
const { fetchAllProperties } = require('../controllers/properties');

const propertiesRouter = express.Router()

/*
 * TODO:
 * GET -> /all-list -> public -> frontend: true
 * GET -> /my-list -> private -> frontend: true
 * PUT -> /add -> private -> frontend: false
 * PUT -> /update -> private -> frontend: false
 * DELETE -> /delete -> private -> frontend: true
 */

propertiesRouter.get('/all-list', fetchAllProperties);

module.exports = propertiesRouter;

const express = require('express');
const { fetchAllProperties, fetchMyProperties, addNewProperty, updateMyProperty, deleteMyProperty } = require('../controllers/properties');

const propertiesRouter = express.Router()

/*
 * TODO:
 * GET -> /all-list -> public -> frontend: true
 * GET -> /my-list -> private -> frontend: true
 * PUT -> /add -> private -> frontend: false
 * PUT -> /update/:id -> private -> frontend: false
 * DELETE -> /delete/:id -> private -> frontend: true
 */

propertiesRouter.get('/all-list', fetchAllProperties);
propertiesRouter.get('/my-list', fetchMyProperties);
propertiesRouter.put('/add', addNewProperty);
propertiesRouter.put('/update/:id', updateMyProperty);
propertiesRouter.delete('/delete/:id', deleteMyProperty);

module.exports = propertiesRouter;

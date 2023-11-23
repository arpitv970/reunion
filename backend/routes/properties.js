const express = require('express');
const { fetchAllProperties, fetchMyProperties, addNewProperty, updateMyProperty, deleteMyProperty } = require('../controllers/properties');
const protect = require('../middleware/authMiddleware');

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
propertiesRouter.get('/my-list', protect, fetchMyProperties);
propertiesRouter.put('/add', protect, addNewProperty);
propertiesRouter.put('/update/:id', protect, updateMyProperty);
propertiesRouter.delete('/delete/:id', protect, deleteMyProperty);

module.exports = propertiesRouter;

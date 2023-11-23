const { propertiesList } = require("../lib/utils")
const Property = require("../models/Property")

const fetchAllProperties = async (req, res, next) => {
  try {
    return res.status(200).json(propertiesList)
  } catch (error) {
    return console.log(error)
  }
}

const fetchMyProperties = async (req, res, next) => {
  return res.status(200).json({ properties: 'All Properties here' })
}

const addNewProperty = async (req, res, next) => {
  const {
    img,
    name,
    address,
    data
  } = req.body;

  let newProperty = {
    img,
    name,
    address,
    data,
    owner: req.user._id,
  }

  try {

    let property = await Property.create(newProperty);
    property = await property.populate('owner', 'name pic email');

    return res.status(200).json({ property })

  } catch (error) {
    return console.log(error);
  }
}

const updateMyProperty = async (req, res, next) => {
  return res.status(200).json({ properties: 'Update Properties here' })
}

const deleteMyProperty = async (req, res, next) => {
  return res.status(200).json({ properties: 'Delete Properties here' })
}

module.exports = {
  fetchAllProperties,
  fetchMyProperties,
  addNewProperty,
  updateMyProperty,
  deleteMyProperty,
}

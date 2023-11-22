const { propertiesList } = require("../lib/utils")

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
  return res.status(200).json({ properties: 'All Properties here' })
}

const updateMyProperty = async (req, res, next) => {
  return res.status(200).json({ properties: 'All Properties here' })
}

const deleteMyProperty = async (req, res, next) => {
  return res.status(200).json({ properties: 'All Properties here' })
}

module.exports = {
  fetchAllProperties,
  fetchMyProperties,
  addNewProperty,
  updateMyProperty,
  deleteMyProperty,
}

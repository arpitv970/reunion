const Property = require("../models/Property")

const fetchAllProperties = async (req, res, next) => {
  const { page, limit } = req.query;
  try {
    let allProperties = await Property.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('owner', 'name pic email')
    return res.status(200).json(allProperties)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const fetchMyProperties = async (req, res, next) => {
  const userId = req.user._id
  try {
    let myProperties = await Property.find({
      owner: userId
    }).populate('owner', 'name pic email')
    return res.status(200).json(myProperties)
  } catch (error) {
    return res.status(400).json(error)
  }
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

    return res.status(200).json(property)

  } catch (error) {
    return res.status(400).json({ error })
  }
}

const updateMyProperty = async (req, res, next) => {
  const userId = req.user._id;
  const { id } = req.params;

  try {
    let propertyToUpdate = await Property.
      findOneAndUpdate(
        { _id: id, owner: userId },
        { $set: req.body }
      )

    return res.status(200).json({ propertyToUpdate })

  } catch (error) {
    return res.status(400).json({ error })
  }

}

const deleteMyProperty = async (req, res, next) => {
  const userId = req.user._id;
  const { id } = req.params;

  try {
    let propertyToDelete = await Property.
      findOneAndDelete(
        { _id: id, owner: userId }
      )

    return res.status(200).json({ propertyToDelete, message: 'Property has been deleted!!' })

  } catch (error) {
    return res.status(400).json({ error })
  }

}

module.exports = {
  fetchAllProperties,
  fetchMyProperties,
  addNewProperty,
  updateMyProperty,
  deleteMyProperty,
}

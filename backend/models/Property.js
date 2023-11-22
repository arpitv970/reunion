const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  data: {
    bed: {
      type: Number,
      required: true
    },
    bathroom: {
      type: Number,
      required: true
    },
    area: {
      type: String,
      required: true
    }
  }
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;


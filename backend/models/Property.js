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
  price: {
    type: Number,
    require: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
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
      width: {
        type: Number,
        required: true
      },
      breadth: {
        type: Number,
        required: true
      },
      units: {
        type: String,
        required: true
      }
    }
  }
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;


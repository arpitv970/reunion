const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      match: [
        // Regular expression for email validation
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address',
      ],
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
    pic: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;

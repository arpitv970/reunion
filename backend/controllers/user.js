const bcryptjs = require('bcryptjs')
const User = require("../models/User");
const generateToken = require('../lib/config/generateToken');

const signup = async (req, res, next) => {
  const { name, email, password, pic } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log;
  }

  if (existingUser) {
    return res.status(400).json({
      message: 'User already exists, try to login!',
    });
  }

  const hashedPass = bcryptjs.hashSync(password);

  const user = new User({
    name,
    email,
    password: hashedPass,
    pic,
  });

  try {
    await user.save();

    return res.status(201).json({
      user,
      token: generateToken(user._id),
    });

  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: err })
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return (err);
  }

  if (!existingUser) {
    return res.status(404).json({ message: 'No User found!' });
  }

  // NOTE: We are not storing the JWT Token in our DB,
  // instead it is generated at client side everytime the user tries to login
  return (await bcryptjs.compareSync(password, existingUser.password))
    ? res.status(200).json({
      user: existingUser,
      token: generateToken(existingUser._id),
    })
    : res.status(400).json({
      message: 'Wrong Credentials detected, please enter correct ones',
    });
};

module.exports = {
  signup,
  login,
}

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
  } catch (err) {
    return console.log(err);
  }

  return res.status(201).json({
    user,
    token: generateToken(user._id),
  });
};

module.exports = {
  signup
}

const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const { JWT_SECRET } = require('../config/dotenv');


/////////////// Register new user
const Register = async ({body}, res) => {

  const { username, email, password, role } = body || {};
  const user = new User.create({ username, email, password, role });

  try {
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

///////////// Login user
const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

////////////// Get user profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
};

module.exports = {
    Register,
    Login,
    getProfile
};
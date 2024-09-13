const User = require('../models/User');

// Signup function
exports.signup = async (req, res) => {
  const { nickname, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ nickname });
    if (existingUser) {
      return res.status(400).json({ message: 'Nickname already taken' });
    }

    // Create new user
    const newUser = new User({ nickname, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all users (for testing purposes)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

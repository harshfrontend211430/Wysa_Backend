const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST route for signup
router.post('/signup', userController.signup);

// GET route for fetching all users (for testing purposes)
router.get('/users', userController.getUsers);

module.exports = router;

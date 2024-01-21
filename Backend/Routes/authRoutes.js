// routes/authRoutes.js
const express = require('express');
const authController = require('../Controller/authController');

const router = express.Router();

// Register a new user
router.post('/register', authController.registerUser);

// Login user
router.post('/login', authController.loginUser);

module.exports = router;

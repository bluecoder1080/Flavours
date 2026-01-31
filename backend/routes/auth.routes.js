const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const { generateToken } = require('../utils/jwt.utils');

// Sign Up
router.post('/signup', async (req, res) => {
  try {
    const { email, password, displayName } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email and password are required' 
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }

    const user = await User.create({
      displayName: displayName || email.split('@')[0],
      email,
      password
    });

    if (user) {
      res.status(201).json({
        success: true,
        user: {
          uid: user._id,
          email: user.email,
          displayName: user.displayName
        },
        token: generateToken({ uid: user._id, email: user.email, name: user.displayName })
      });
    } else {
      res.status(400).json({
        success: false,
        error: 'Invalid user data'
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Sign In
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        user: {
          uid: user._id,
          email: user.email,
          displayName: user.displayName
        },
        token: generateToken({ uid: user._id, email: user.email, name: user.displayName })
      });
    } else {
      res.status(401).json({
        success: false,
        error: 'Invalid email or password'
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Get Current User
router.get('/me', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ success: false, error: 'No token provided' });
    }

    const { verifyToken } = require('../utils/jwt.utils');
    const decoded = verifyToken(token);
    
    const user = await User.findById(decoded.uid).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    res.json({
      success: true,
      user: {
        uid: user._id,
        email: user.email,
        displayName: user.displayName
      }
    });
  } catch (error) {
    res.status(401).json({ success: false, error: 'Invalid token' });
  }
});

module.exports = router;


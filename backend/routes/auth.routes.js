const express = require('express');
const router = express.Router();
const admin = require('../config/firebase.config');
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

    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: displayName || email.split('@')[0]
    });

    const token = generateToken(userRecord);

    res.json({ 
      success: true, 
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName
      },
      token 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Sign In
router.post('/signin', async (req, res) => {
  try {
    const { email, idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ 
        success: false, 
        error: 'ID token is required' 
      });
    }

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const user = await admin.auth().getUser(decodedToken.uid);

    const token = generateToken(user);

    res.json({ 
      success: true, 
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      },
      token 
    });
  } catch (error) {
    res.status(401).json({ 
      success: false, 
      error: 'Invalid credentials' 
    });
  }
});

module.exports = router;

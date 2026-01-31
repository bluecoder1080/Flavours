const express = require('express');
const router = express.Router();
const storage = require('../data/storage');

// Get cart for user
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const cart = storage.getCart(userId);
  res.json({ success: true, cart });
});

// Add item to cart
router.post('/add', (req, res) => {
  const { userId, item } = req.body;
  
  if (!userId || !item) {
    return res.status(400).json({ 
      success: false, 
      error: 'userId and item are required' 
    });
  }
  
  const cart = storage.addToCart(userId, item);
  res.json({ success: true, cart });
});

// Remove item from cart
router.delete('/remove', (req, res) => {
  const { userId, itemId } = req.body;
  
  if (!userId || !itemId) {
    return res.status(400).json({ 
      success: false, 
      error: 'userId and itemId are required' 
    });
  }
  
  const cart = storage.removeFromCart(userId, itemId);
  res.json({ success: true, cart });
});

// Clear cart
router.delete('/clear/:userId', (req, res) => {
  const { userId } = req.params;
  const cart = storage.clearCart(userId);
  res.json({ success: true, cart });
});

module.exports = router;

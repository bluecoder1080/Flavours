const express = require('express');
const router = express.Router();
const storage = require('../data/storage');

// Create new order
router.post('/create', (req, res) => {
  const { userId, items, total, address } = req.body;
  
  if (!userId || !items || !total) {
    return res.status(400).json({ 
      success: false, 
      error: 'userId, items, and total are required' 
    });
  }
  
  const order = storage.createOrder({
    userId,
    items,
    total,
    address
  });
  
  // Clear cart after order
  storage.clearCart(userId);
  
  res.json({ success: true, order });
});

// Get order by ID
router.get('/:orderId', (req, res) => {
  const { orderId } = req.params;
  const order = storage.getOrder(orderId);
  
  if (!order) {
    return res.status(404).json({ 
      success: false, 
      error: 'Order not found' 
    });
  }
  
  res.json({ success: true, order });
});

// Get all orders for user
router.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  const orders = storage.getAllOrders(userId);
  res.json({ success: true, orders });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Order = require('../models/order.model');
const Cart = require('../models/cart.model');
const { protect } = require('../middleware/auth.middleware');

// Create new order
router.post('/create', protect, async (req, res) => {
  try {
    const { items, total, subtotal, deliveryFee, taxes, address, paymentMethod, restaurantName } = req.body;
    
    if (!items || !total || !address) {
      return res.status(400).json({ 
        success: false, 
        error: 'items, total, and address are required' 
      });
    }

    const order = await Order.create({
      userId: req.user._id,
      items,
      total,
      subtotal,
      deliveryFee,
      taxes,
      address,
      paymentMethod,
      restaurantName,
      status: 'confirmed',
      estimatedDelivery: '30-40 mins'
    });

    // Clear user's cart after order
    await Cart.findOneAndUpdate(
      { userId: req.user._id },
      { items: [], restaurantId: null }
    );

    res.json({ 
      success: true, 
      order: {
        id: order.orderId,
        ...order.toObject()
      }
    });
  } catch (error) {
    console.error('Create order error:', JSON.stringify(error, null, 2));
    if (error.name === 'ValidationError') {
      console.error('Validation Errors:', JSON.stringify(error.errors, null, 2));
    }
    res.status(500).json({ success: false, error: 'Failed to create order', details: error.message });
  }
});

// Get all orders for authenticated user
router.get('/my-orders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id })
      .sort({ createdAt: -1 });
    
    res.json({ 
      success: true, 
      orders: orders.map(o => ({
        id: o.orderId,
        ...o.toObject(),
        date: o.createdAt
      }))
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch orders' });
  }
});

// Get order by ID
router.get('/:orderId', protect, async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ 
      orderId,
      userId: req.user._id 
    });
    
    if (!order) {
      return res.status(404).json({ 
        success: false, 
        error: 'Order not found' 
      });
    }
    
    res.json({ 
      success: true, 
      order: {
        id: order.orderId,
        ...order.toObject(),
        date: order.createdAt
      }
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch order' });
  }
});

// Reorder - add items from previous order to cart
router.post('/reorder/:orderId', protect, async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ 
      orderId,
      userId: req.user._id 
    });
    
    if (!order) {
      return res.status(404).json({ 
        success: false, 
        error: 'Order not found' 
      });
    }

    // Update or create cart with order items
    let cart = await Cart.findOne({ userId: req.user._id });
    
    if (cart) {
      // Replace cart items with order items
      cart.items = order.items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        isVeg: item.isVeg,
        restaurantName: order.restaurantName
      }));
      await cart.save();
    } else {
      cart = await Cart.create({
        userId: req.user._id,
        items: order.items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          isVeg: item.isVeg,
          restaurantName: order.restaurantName
        }))
      });
    }

    res.json({ 
      success: true, 
      message: 'Items added to cart',
      cart: cart.toObject()
    });
  } catch (error) {
    console.error('Reorder error:', error);
    res.status(500).json({ success: false, error: 'Failed to reorder' });
  }
});

// Update order status (for admin/system use)
router.patch('/:orderId/status', protect, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    
    const validStatuses = ['confirmed', 'preparing', 'on the way', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid status' 
      });
    }

    const order = await Order.findOneAndUpdate(
      { orderId, userId: req.user._id },
      { status },
      { new: true }
    );
    
    if (!order) {
      return res.status(404).json({ 
        success: false, 
        error: 'Order not found' 
      });
    }
    
    res.json({ 
      success: true, 
      order: {
        id: order.orderId,
        ...order.toObject()
      }
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ success: false, error: 'Failed to update order' });
  }
});

// Get all orders for user (legacy route for backward compatibility)
router.get('/user/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .sort({ createdAt: -1 });
    
    res.json({ 
      success: true, 
      orders: orders.map(o => ({
        id: o.orderId,
        ...o.toObject(),
        date: o.createdAt
      }))
    });
  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch orders' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Cart = require('../models/cart.model');
const { protect, optionalProtect } = require('../middleware/auth.middleware');

// Get cart for authenticated user
router.get('/', protect, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      cart = { items: [], total: 0 };
    }
    
    res.json({ success: true, cart: cart.toObject ? cart.toObject() : cart });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch cart' });
  }
});

// Add item to cart
router.post('/add', protect, async (req, res) => {
  try {
    const { item, restaurantId } = req.body;
    
    if (!item || !item.id) {
      return res.status(400).json({ 
        success: false, 
        error: 'item with id is required' 
      });
    }

    let cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      cart = new Cart({ 
        userId: req.user._id, 
        items: [],
        restaurantId 
      });
    }

    // Check if from different restaurant (optional warning)
    if (restaurantId && cart.restaurantId && cart.restaurantId !== restaurantId && cart.items.length > 0) {
      return res.status(409).json({
        success: false,
        error: 'Cart contains items from different restaurant',
        shouldClear: true
      });
    }

    // Check if item already in cart
    const existingIndex = cart.items.findIndex(i => i.id === item.id);
    
    if (existingIndex > -1) {
      cart.items[existingIndex].quantity += 1;
    } else {
      cart.items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
        isVeg: item.isVeg,
        restaurantName: item.restaurantName
      });
    }

    if (restaurantId) {
      cart.restaurantId = restaurantId;
    }

    await cart.save();
    res.json({ success: true, cart: cart.toObject() });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ success: false, error: 'Failed to add to cart' });
  }
});

// Update item quantity
router.patch('/update', protect, async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    
    if (!itemId || quantity === undefined) {
      return res.status(400).json({ 
        success: false, 
        error: 'itemId and quantity are required' 
      });
    }

    const cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ success: false, error: 'Cart not found' });
    }

    if (quantity <= 0) {
      // Remove item
      cart.items = cart.items.filter(i => i.id !== itemId);
    } else {
      // Update quantity
      const itemIndex = cart.items.findIndex(i => i.id === itemId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity = quantity;
      }
    }

    // Clear restaurant ID if cart is empty
    if (cart.items.length === 0) {
      cart.restaurantId = null;
    }

    await cart.save();
    res.json({ success: true, cart: cart.toObject() });
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({ success: false, error: 'Failed to update cart' });
  }
});

// Remove item from cart
router.delete('/remove/:itemId', protect, async (req, res) => {
  try {
    const { itemId } = req.params;
    
    const cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ success: false, error: 'Cart not found' });
    }

    cart.items = cart.items.filter(i => i.id !== itemId);

    // Clear restaurant ID if cart is empty
    if (cart.items.length === 0) {
      cart.restaurantId = null;
    }

    await cart.save();
    res.json({ success: true, cart: cart.toObject() });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ success: false, error: 'Failed to remove from cart' });
  }
});

// Clear cart
router.delete('/clear', protect, async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId: req.user._id },
      { items: [], restaurantId: null },
      { new: true }
    );

    res.json({ success: true, cart: cart ? cart.toObject() : { items: [] } });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({ success: false, error: 'Failed to clear cart' });
  }
});

// Sync cart (for merging local cart with server)
router.post('/sync', protect, async (req, res) => {
  try {
    const { items, restaurantId } = req.body;
    
    let cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      cart = new Cart({ 
        userId: req.user._id, 
        items: items || [],
        restaurantId 
      });
    } else if (items && items.length > 0) {
      // Merge items - prefer server quantities if item exists
      items.forEach(newItem => {
        const existingIndex = cart.items.findIndex(i => i.id === newItem.id);
        if (existingIndex === -1) {
          cart.items.push(newItem);
        }
      });
      if (restaurantId) {
        cart.restaurantId = restaurantId;
      }
    }

    await cart.save();
    res.json({ success: true, cart: cart.toObject() });
  } catch (error) {
    console.error('Sync cart error:', error);
    res.status(500).json({ success: false, error: 'Failed to sync cart' });
  }
});

// Legacy route for backward compatibility
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json({ success: true, cart: cart ? cart.items : [] });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch cart' });
  }
});

module.exports = router;

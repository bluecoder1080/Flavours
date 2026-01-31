const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorite.model');
const { protect } = require('../middleware/auth.middleware');

// Get all favorites for authenticated user
router.get('/', protect, async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user._id })
      .sort({ createdAt: -1 });
    
    res.json({ 
      success: true, 
      favorites: favorites.map(f => f.toObject())
    });
  } catch (error) {
    console.error('Get favorites error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch favorites' });
  }
});

// Add to favorites
router.post('/add', protect, async (req, res) => {
  try {
    const { itemId, type, name, image, cuisine, avgRating, deliveryTime, costForTwo, price, isVeg, restaurantName } = req.body;
    
    if (!itemId || !type || !name) {
      return res.status(400).json({ 
        success: false, 
        error: 'itemId, type, and name are required' 
      });
    }

    // Check if already favorited
    const existing = await Favorite.findOne({ 
      userId: req.user._id, 
      itemId, 
      type 
    });

    if (existing) {
      return res.status(400).json({ 
        success: false, 
        error: 'Item already in favorites' 
      });
    }

    const favorite = await Favorite.create({
      userId: req.user._id,
      itemId,
      type,
      name,
      image,
      cuisine,
      avgRating,
      deliveryTime,
      costForTwo,
      price,
      isVeg,
      restaurantName
    });

    res.json({ success: true, favorite: favorite.toObject() });
  } catch (error) {
    console.error('Add favorite error:', error);
    res.status(500).json({ success: false, error: 'Failed to add favorite' });
  }
});

// Remove from favorites
router.delete('/remove/:itemId', protect, async (req, res) => {
  try {
    const { itemId } = req.params;
    const { type } = req.query;
    
    const result = await Favorite.findOneAndDelete({ 
      userId: req.user._id, 
      itemId,
      ...(type && { type })
    });

    if (!result) {
      return res.status(404).json({ 
        success: false, 
        error: 'Favorite not found' 
      });
    }

    res.json({ success: true, message: 'Removed from favorites' });
  } catch (error) {
    console.error('Remove favorite error:', error);
    res.status(500).json({ success: false, error: 'Failed to remove favorite' });
  }
});

// Check if item is favorited
router.get('/check/:itemId', protect, async (req, res) => {
  try {
    const { itemId } = req.params;
    const { type } = req.query;
    
    const favorite = await Favorite.findOne({ 
      userId: req.user._id, 
      itemId,
      ...(type && { type })
    });

    res.json({ 
      success: true, 
      isFavorited: !!favorite 
    });
  } catch (error) {
    console.error('Check favorite error:', error);
    res.status(500).json({ success: false, error: 'Failed to check favorite' });
  }
});

// Toggle favorite
router.post('/toggle', protect, async (req, res) => {
  try {
    const { itemId, type, name, image, cuisine, avgRating, deliveryTime, costForTwo, price, isVeg, restaurantName } = req.body;
    
    if (!itemId || !type) {
      return res.status(400).json({ 
        success: false, 
        error: 'itemId and type are required' 
      });
    }

    const existing = await Favorite.findOne({ 
      userId: req.user._id, 
      itemId, 
      type 
    });

    if (existing) {
      await Favorite.findByIdAndDelete(existing._id);
      return res.json({ 
        success: true, 
        isFavorited: false,
        message: 'Removed from favorites' 
      });
    }

    const favorite = await Favorite.create({
      userId: req.user._id,
      itemId,
      type,
      name,
      image,
      cuisine,
      avgRating,
      deliveryTime,
      costForTwo,
      price,
      isVeg,
      restaurantName
    });

    res.json({ 
      success: true, 
      isFavorited: true,
      favorite: favorite.toObject(),
      message: 'Added to favorites' 
    });
  } catch (error) {
    console.error('Toggle favorite error:', error);
    res.status(500).json({ success: false, error: 'Failed to toggle favorite' });
  }
});

module.exports = router;

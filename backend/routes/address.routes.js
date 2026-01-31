const express = require('express');
const router = express.Router();
const Address = require('../models/address.model');
const { protect } = require('../middleware/auth.middleware');

// Get all addresses for authenticated user
router.get('/', protect, async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.user._id })
      .sort({ isDefault: -1, createdAt: -1 });
    
    res.json({ 
      success: true, 
      addresses: addresses.map(a => a.toObject())
    });
  } catch (error) {
    console.error('Get addresses error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch addresses' });
  }
});

// Get default address
router.get('/default', protect, async (req, res) => {
  try {
    let address = await Address.findOne({ 
      userId: req.user._id, 
      isDefault: true 
    });

    // If no default, get most recent
    if (!address) {
      address = await Address.findOne({ userId: req.user._id })
        .sort({ createdAt: -1 });
    }

    res.json({ 
      success: true, 
      address: address ? address.toObject() : null
    });
  } catch (error) {
    console.error('Get default address error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch default address' });
  }
});

// Add new address
router.post('/add', protect, async (req, res) => {
  try {
    const { name, phone, flat, area, landmark, city, type, isDefault } = req.body;
    
    if (!name || !phone || !flat || !area || !city) {
      return res.status(400).json({ 
        success: false, 
        error: 'name, phone, flat, area, and city are required' 
      });
    }

    // If this is the first address, make it default
    const existingCount = await Address.countDocuments({ userId: req.user._id });
    const shouldBeDefault = isDefault || existingCount === 0;

    const address = await Address.create({
      userId: req.user._id,
      name,
      phone,
      flat,
      area,
      landmark: landmark || '',
      city,
      type: type || 'Home',
      isDefault: shouldBeDefault
    });

    res.json({ success: true, address: address.toObject() });
  } catch (error) {
    console.error('Add address error:', error);
    res.status(500).json({ success: false, error: 'Failed to add address' });
  }
});

// Update address
router.put('/:addressId', protect, async (req, res) => {
  try {
    const { addressId } = req.params;
    const { name, phone, flat, area, landmark, city, type, isDefault } = req.body;

    const address = await Address.findOneAndUpdate(
      { _id: addressId, userId: req.user._id },
      { 
        name, 
        phone, 
        flat, 
        area, 
        landmark, 
        city, 
        type: type || 'Home',
        isDefault: isDefault || false
      },
      { new: true }
    );

    if (!address) {
      return res.status(404).json({ 
        success: false, 
        error: 'Address not found' 
      });
    }

    res.json({ success: true, address: address.toObject() });
  } catch (error) {
    console.error('Update address error:', error);
    res.status(500).json({ success: false, error: 'Failed to update address' });
  }
});

// Delete address
router.delete('/:addressId', protect, async (req, res) => {
  try {
    const { addressId } = req.params;

    const result = await Address.findOneAndDelete({ 
      _id: addressId, 
      userId: req.user._id 
    });

    if (!result) {
      return res.status(404).json({ 
        success: false, 
        error: 'Address not found' 
      });
    }

    // If deleted address was default, set another as default
    if (result.isDefault) {
      const nextAddress = await Address.findOne({ userId: req.user._id })
        .sort({ createdAt: -1 });
      
      if (nextAddress) {
        nextAddress.isDefault = true;
        await nextAddress.save();
      }
    }

    res.json({ success: true, message: 'Address deleted' });
  } catch (error) {
    console.error('Delete address error:', error);
    res.status(500).json({ success: false, error: 'Failed to delete address' });
  }
});

// Set default address
router.patch('/:addressId/default', protect, async (req, res) => {
  try {
    const { addressId } = req.params;

    // Unset all defaults for this user
    await Address.updateMany(
      { userId: req.user._id },
      { isDefault: false }
    );

    // Set new default
    const address = await Address.findOneAndUpdate(
      { _id: addressId, userId: req.user._id },
      { isDefault: true },
      { new: true }
    );

    if (!address) {
      return res.status(404).json({ 
        success: false, 
        error: 'Address not found' 
      });
    }

    res.json({ success: true, address: address.toObject() });
  } catch (error) {
    console.error('Set default address error:', error);
    res.status(500).json({ success: false, error: 'Failed to set default address' });
  }
});

module.exports = router;

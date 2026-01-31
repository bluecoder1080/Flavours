const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  itemId: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['restaurant', 'dish'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  // Restaurant specific fields
  cuisine: { type: String },
  avgRating: { type: String },
  deliveryTime: { type: String },
  costForTwo: { type: String },
  // Dish specific fields
  price: { type: Number },
  isVeg: { type: Boolean },
  restaurantName: { type: String }
}, {
  timestamps: true
});

// Compound index to prevent duplicate favorites
favoriteSchema.index({ userId: 1, itemId: 1, type: 1 }, { unique: true });

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;

const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  image: { type: String },
  isVeg: { type: Boolean, default: false },
  restaurantName: { type: String }
});

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  items: [cartItemSchema],
  restaurantId: {
    type: String
  }
}, {
  timestamps: true
});

// Calculate total
cartSchema.virtual('total').get(function() {
  return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

cartSchema.set('toJSON', { virtuals: true });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

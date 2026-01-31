const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  image: { type: String },
  isVeg: { type: Boolean, default: false }
});

const addressSchema = mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  flat: { type: String },
  area: { type: String },
  landmark: { type: String },
  city: { type: String },
  type: { type: String, enum: ['Home', 'Work', 'Other'], default: 'Home' }
});

const orderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderId: {
    type: String,
    unique: true
  },
  items: [orderItemSchema],
  total: {
    type: Number,
    required: true
  },
  subtotal: {
    type: Number
  },
  deliveryFee: {
    type: Number,
    default: 0
  },
  taxes: {
    type: Number,
    default: 0
  },
  address: addressSchema,
  paymentMethod: {
    type: String,
    enum: ['upi', 'card', 'cod', 'wallet'],
    default: 'cod'
  },
  restaurantName: {
    type: String,
    default: 'Flavours Restaurant'
  },
  status: {
    type: String,
    enum: ['confirmed', 'preparing', 'on the way', 'delivered', 'cancelled'],
    default: 'confirmed'
  },
  estimatedDelivery: {
    type: String,
    default: '30-40 mins'
  }
}, {
  timestamps: true
});

// Generate order ID before saving
orderSchema.pre('save', function(next) {
  if (!this.orderId) {
    this.orderId = `FLV${Date.now()}`;
  }
  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

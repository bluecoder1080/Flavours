// In-memory data storage
let carts = {};
let orders = [];
let orderIdCounter = 1;

const storage = {
  // Cart operations
  getCart(userId) {
    return carts[userId] || [];
  },

  addToCart(userId, item) {
    if (!carts[userId]) {
      carts[userId] = [];
    }
    
    const existingIndex = carts[userId].findIndex(i => i.id === item.id);
    if (existingIndex > -1) {
      carts[userId][existingIndex].quantity += 1;
    } else {
      carts[userId].push({ ...item, quantity: 1 });
    }
    
    return carts[userId];
  },

  removeFromCart(userId, itemId) {
    if (carts[userId]) {
      carts[userId] = carts[userId].filter(i => i.id !== itemId);
    }
    return carts[userId] || [];
  },

  clearCart(userId) {
    carts[userId] = [];
    return [];
  },

  // Order operations
  createOrder(orderData) {
    const order = {
      id: orderIdCounter++,
      ...orderData,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    orders.push(order);
    return order;
  },

  getOrder(orderId) {
    return orders.find(o => o.id === parseInt(orderId));
  },

  getAllOrders(userId) {
    return orders.filter(o => o.userId === userId);
  }
};

module.exports = storage;

import React, { useState } from 'react';
import { useOrders } from '../../context';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router';

const Orders = () => {
  const { orders, loading, reorder } = useOrders();
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [reordering, setReordering] = useState(null);

  const getStatusColor = (status) => {
    const colors = {
      confirmed: 'bg-blue-500',
      preparing: 'bg-yellow-500',
      'on the way': 'bg-orange-500',
      delivered: 'bg-green-500',
      cancelled: 'bg-red-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  const getStatusIcon = (status) => {
    const icons = {
      confirmed: '✓',
      preparing: '👨‍🍳',
      'on the way': '🚴',
      delivered: '✅',
      cancelled: '✕'
    };
    return icons[status] || '•';
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  const handleReorder = async (order) => {
    setReordering(order.id || order.orderId);
    try {
      // If we have the reorder API
      if (reorder) {
        await reorder(order.orderId || order.id);
      } else {
        // Fallback: manually add items to cart
        clearCart();
        order.items?.forEach(item => {
          for (let i = 0; i < item.quantity; i++) {
            addToCart({
              id: item.id,
              name: item.name,
              price: item.price,
              image: item.image,
              isVeg: item.isVeg
            });
          }
        });
      }
      navigate('/');
    } catch (error) {
      console.error('Failed to reorder:', error);
      alert('Failed to add items to cart. Please try again.');
    } finally {
      setReordering(null);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">My Orders</h1>
            <p className="text-gray-400 text-sm">{orders.length} orders</p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : orders.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-6xl mb-6">📦</div>
            <h2 className="text-xl font-semibold text-white mb-3">No orders yet</h2>
            <p className="text-gray-400 mb-8">Looks like you haven't placed any orders</p>
            <button 
              onClick={() => navigate('/')} 
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Browse Restaurants
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id || order.orderId || order._id} className="glass rounded-xl overflow-hidden">
                {/* Order Header */}
                <div className="p-4 border-b border-gray-800/50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{order.restaurantName || 'Flavours Restaurant'}</h3>
                      <p className="text-gray-400 text-sm flex items-center gap-2">
                        <span>{formatDate(order.date || order.createdAt)}</span>
                        <span>•</span>
                        <span>{formatTime(order.date || order.createdAt)}</span>
                      </p>
                    </div>
                    <div className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium text-white ${getStatusColor(order.status)}`}>
                      <span>{getStatusIcon(order.status)}</span>
                      <span className="capitalize">{order.status}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">Order #{order.orderId || order.id}</p>
                </div>

                {/* Order Items */}
                <div className="p-4 border-b border-gray-800/50">
                  {order.items?.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2">
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${item.isVeg ? 'border-green-500' : 'border-red-500'}`}>
                          <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        </span>
                        <span className="text-gray-300">{item.quantity}x {item.name}</span>
                      </div>
                      <span className="text-gray-400">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  {order.items?.length > 3 && (
                    <p className="text-gray-500 text-sm pt-2 border-t border-gray-800/50 mt-2">
                      +{order.items.length - 3} more items
                    </p>
                  )}
                </div>

                {/* Order Footer */}
                <div className="p-4 flex items-center justify-between bg-gray-900/30">
                  <div>
                    <p className="text-gray-400 text-sm">Total</p>
                    <p className="text-white font-bold text-lg">₹{order.total}</p>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleReorder(order)}
                      disabled={reordering === (order.id || order.orderId)}
                      className="px-5 py-2.5 rounded-lg border border-orange-500 text-orange-400 font-medium hover:bg-orange-500/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {reordering === (order.id || order.orderId) ? (
                        <>
                          <div className="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
                          Adding...
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Reorder
                        </>
                      )}
                    </button>
                    {order.status !== 'delivered' && order.status !== 'cancelled' && (
                      <button className="px-5 py-2.5 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-all flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        Track
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;

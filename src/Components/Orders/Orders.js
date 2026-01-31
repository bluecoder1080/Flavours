import React from 'react';
import { useOrders } from '../../context/OrderContext';
import { useNavigate } from 'react-router';

const Orders = () => {
  const { orders } = useOrders();
  const navigate = useNavigate();

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

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-white">My Orders</h1>
        </div>

        {orders.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-xl font-semibold text-white mb-2">No orders yet</h2>
            <p className="text-gray-400 mb-6">Looks like you haven't placed any orders</p>
            <button onClick={() => navigate('/')} className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold">
              Browse Restaurants
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="glass rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-white font-semibold">{order.restaurantName || 'Restaurant'}</h3>
                    <p className="text-gray-500 text-sm">{formatDate(order.date)}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="border-t border-gray-800 pt-3 mb-3">
                  {order.items?.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex justify-between text-sm py-1">
                      <span className="text-gray-400">{item.quantity}x {item.name}</span>
                      <span className="text-gray-300">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  {order.items?.length > 3 && (
                    <p className="text-gray-500 text-sm">+{order.items.length - 3} more items</p>
                  )}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-800">
                  <div className="text-white font-semibold">Total: ₹{order.total}</div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm hover:bg-gray-800">
                      Reorder
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-orange-500 text-white text-sm">
                      Track
                    </button>
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

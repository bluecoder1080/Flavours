import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

const API_URL = 'http://localhost:5002/api';

export const OrderProvider = ({ children }) => {
  const { token, currentUser, logout } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch orders when user logs in
  useEffect(() => {
    if (token && currentUser) {
      fetchOrders();
    } else {
      setOrders([]);
    }
  }, [token, currentUser]);

  const fetchOrders = async () => {
    if (!token) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/orders/my-orders`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setOrders(data.orders || []);
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const addOrder = async (orderData) => {
    if (!token) {
      // Fallback to localStorage for non-authenticated users
      const newOrder = {
        id: `FLV${Date.now()}`,
        ...orderData,
        status: 'confirmed',
        date: new Date().toISOString(),
        estimatedDelivery: '30-40 mins'
      };
      setOrders(prev => [newOrder, ...prev]);
      return newOrder;
    }

    try {
      const response = await fetch(`${API_URL}/orders/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });

      const data = await response.json();

      if (response.status === 401 || data.error === 'User not found') {
        logout();
        throw new Error('Session expired. Please sign in again.');
      }

      if (data.success) {
        const newOrder = {
          ...data.order,
          date: data.order.createdAt || new Date().toISOString()
        };
        setOrders(prev => [newOrder, ...prev]);
        return newOrder;
      }
      throw new Error(data.details || data.error);
    } catch (error) {
      console.error('Failed to create order:', error);
      throw error;
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    if (!token) {
      setOrders(prev => prev.map(order => 
        order.id === orderId ? { ...order, status } : order
      ));
      return;
    }

    try {
      const response = await fetch(`${API_URL}/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      const data = await response.json();

      if (data.success) {
        setOrders(prev => prev.map(order => 
          order.id === orderId ? { ...order, status } : order
        ));
      }
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  const reorder = async (orderId) => {
    if (!token) {
      throw new Error('Please sign in to reorder');
    }

    try {
      const response = await fetch(`${API_URL}/orders/reorder/${orderId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        return data.cart;
      }
      throw new Error(data.error);
    } catch (error) {
      console.error('Failed to reorder:', error);
      throw error;
    }
  };

  const getOrderById = (orderId) => {
    return orders.find(o => o.id === orderId || o.orderId === orderId);
  };

  return (
    <OrderContext.Provider value={{ 
      orders, 
      loading,
      addOrder, 
      updateOrderStatus, 
      reorder,
      getOrderById,
      fetchOrders
    }}>
      {children}
    </OrderContext.Provider>
  );
};

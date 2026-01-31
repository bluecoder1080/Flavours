import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import API_URL from '../config';

const AddressContext = createContext();

export const useAddresses = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error('useAddresses must be used within AddressProvider');
  }
  return context;
};

export const AddressProvider = ({ children }) => {
  const { token, currentUser } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch addresses when user logs in
  useEffect(() => {
    if (token && currentUser) {
      fetchAddresses();
    } else {
      setAddresses([]);
      setDefaultAddress(null);
    }
  }, [token, currentUser]);

  const fetchAddresses = async () => {
    if (!token) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/addresses`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setAddresses(data.addresses || []);
        const defaultAddr = data.addresses?.find(a => a.isDefault);
        setDefaultAddress(defaultAddr || data.addresses?.[0] || null);
      }
    } catch (error) {
      console.error('Failed to fetch addresses:', error);
    } finally {
      setLoading(false);
    }
  };

  const addAddress = async (addressData) => {
    if (!token) {
      throw new Error('Please sign in to save addresses');
    }

    try {
      const response = await fetch(`${API_URL}/addresses/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(addressData)
      });

      const data = await response.json();

      if (data.success) {
        setAddresses(prev => [...prev, data.address]);
        if (data.address.isDefault || addresses.length === 0) {
          setDefaultAddress(data.address);
        }
        return data.address;
      }
      throw new Error(data.error);
    } catch (error) {
      console.error('Failed to add address:', error);
      throw error;
    }
  };

  const updateAddress = async (addressId, addressData) => {
    if (!token) {
      throw new Error('Please sign in to update addresses');
    }

    try {
      const response = await fetch(`${API_URL}/addresses/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(addressData)
      });

      const data = await response.json();

      if (data.success) {
        setAddresses(prev => prev.map(a => 
          a._id === addressId ? data.address : a
        ));
        if (data.address.isDefault) {
          setDefaultAddress(data.address);
        }
        return data.address;
      }
      throw new Error(data.error);
    } catch (error) {
      console.error('Failed to update address:', error);
      throw error;
    }
  };

  const deleteAddress = async (addressId) => {
    if (!token) {
      throw new Error('Please sign in to delete addresses');
    }

    try {
      const response = await fetch(`${API_URL}/addresses/${addressId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        setAddresses(prev => prev.filter(a => a._id !== addressId));
        if (defaultAddress?._id === addressId) {
          const remaining = addresses.filter(a => a._id !== addressId);
          setDefaultAddress(remaining[0] || null);
        }
      }
    } catch (error) {
      console.error('Failed to delete address:', error);
      throw error;
    }
  };

  const setAsDefault = async (addressId) => {
    if (!token) {
      throw new Error('Please sign in to set default address');
    }

    try {
      const response = await fetch(`${API_URL}/addresses/${addressId}/default`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        setAddresses(prev => prev.map(a => ({
          ...a,
          isDefault: a._id === addressId
        })));
        setDefaultAddress(data.address);
      }
    } catch (error) {
      console.error('Failed to set default address:', error);
      throw error;
    }
  };

  const saveAddressFromOrder = async (orderAddress, type = 'Home') => {
    // Check if this address already exists (by matching fields)
    const exists = addresses.find(a => 
      a.flat === orderAddress.flat && 
      a.area === orderAddress.area && 
      a.city === orderAddress.city
    );

    if (exists) {
      return exists;
    }

    return addAddress({
      ...orderAddress,
      type,
      isDefault: addresses.length === 0
    });
  };

  return (
    <AddressContext.Provider value={{
      addresses,
      defaultAddress,
      loading,
      addAddress,
      updateAddress,
      deleteAddress,
      setAsDefault,
      saveAddressFromOrder,
      fetchAddresses
    }}>
      {children}
    </AddressContext.Provider>
  );
};

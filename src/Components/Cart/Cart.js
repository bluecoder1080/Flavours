import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useOrders } from '../../context/OrderContext';
import CartHeader from './CartHeader';
import StepProgress from './StepProgress';
import CartItems from './CartItems';
import AddressForm from './AddressForm';
import PaymentOptions from './PaymentOptions';
import OrderSuccess from './OrderSuccess';
import BillSummary from './BillSummary';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [step, setStep] = useState('cart');
  const [address, setAddress] = useState({ name: '', phone: '', flat: '', area: '', landmark: '', city: '' });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const deliveryFee = total > 500 ? 0 : 40;
  const taxes = Math.round(total * 0.05);
  const grandTotal = total + deliveryFee + taxes;

  const handleBack = () => {
    if (step === 'payment') setStep('address');
    else if (step === 'address') setStep('cart');
  };

  const handleClose = () => {
    setStep('cart');
    setPaymentMethod('');
    setOrderId('');
    onClose();
  };

  const handleAction = async (action) => {
    if (action === 'address') setStep('address');
    else if (action === 'payment') setStep('payment');
    else if (action === 'pay') {
      setIsProcessing(true);
      await new Promise(r => setTimeout(r, 2000));
      
      // Save order
      const order = addOrder({
        items: cartItems,
        total: grandTotal,
        address,
        paymentMethod,
        restaurantName: 'Flavours Restaurant'
      });
      
      setOrderId(order.id);
      setIsProcessing(false);
      setStep('success');
      setTimeout(clearCart, 500);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" onClick={handleClose} />
      <div className="fixed right-0 top-0 h-screen w-[420px] max-w-[95vw] z-50 bg-gradient-to-b from-gray-900 to-black shadow-2xl border-l border-orange-500/20 overflow-hidden">
        <div className="h-full flex flex-col">
          <CartHeader step={step} onBack={handleBack} onClose={handleClose} />
          
          {step !== 'success' && cartItems.length > 0 && <StepProgress currentStep={step} />}

          <div className="flex-1 overflow-y-auto">
            {step === 'cart' && (
              <div className="p-4">
                <CartItems items={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
              </div>
            )}
            {step === 'address' && <AddressForm address={address} setAddress={setAddress} />}
            {step === 'payment' && <PaymentOptions address={address} selectedMethod={paymentMethod} onSelect={setPaymentMethod} />}
            {step === 'success' && <OrderSuccess orderId={orderId} onClose={handleClose} />}
          </div>

          {cartItems.length > 0 && step !== 'success' && (
            <div className="flex-shrink-0">
              <BillSummary total={total} step={step} address={address} paymentMethod={paymentMethod} isProcessing={isProcessing} onAction={handleAction} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

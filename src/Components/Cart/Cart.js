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
  const [address, setAddress] = useState({});
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
    // 'payment' action is handled by AddressForm
    else if (action === 'pay') {
      setIsProcessing(true);
      
      try {
        // Save order
        const result = await addOrder({
          items: cartItems,
          total: grandTotal,
          address,
          paymentMethod,
          restaurantName: 'Flavours Restaurant' // Ideally dynamic
        });
        
        setOrderId(result.orderId || result.id || 'ORDER123');
        setStep('success');
        setTimeout(clearCart, 500);
      } catch (error) {
        console.error("Order failed", error);
        console.error("Order failed", error);
        alert(error.message || "Failed to place order. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity" onClick={handleClose} />
      <div className="fixed right-0 top-0 h-screen w-[420px] max-w-[95vw] z-50 bg-[#0d1117] shadow-2xl border-l border-white/10 overflow-hidden transform transition-transform duration-300">
        <div className="h-full flex flex-col">
          <CartHeader step={step} onBack={handleBack} onClose={handleClose} />
          
          {step !== 'success' && cartItems.length > 0 && <StepProgress currentStep={step} />}

          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {step === 'cart' && (
              <div className="p-4">
                <CartItems items={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
              </div>
            )}
            {step === 'address' && (
              <AddressForm 
                address={address} 
                setAddress={setAddress} 
                onNext={() => setStep('payment')}
              />
            )}
            {step === 'payment' && <PaymentOptions address={address} selectedMethod={paymentMethod} onSelect={setPaymentMethod} />}
            {step === 'success' && <OrderSuccess orderId={orderId} onClose={handleClose} />}
          </div>

          {cartItems.length > 0 && step !== 'success' && step !== 'address' && (
            <div className="flex-shrink-0 bg-[#161b22] border-t border-white/5">
              <BillSummary 
                total={total} 
                step={step} 
                address={address} 
                paymentMethod={paymentMethod} 
                isProcessing={isProcessing} 
                onAction={handleAction} 
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

import React, { useState } from 'react';
import axios from 'axios';

const Cart = ({ items }) => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckout = async () => {
    try {
      await axios.post('/api/checkouts', { items });
      setSuccessMessage('Purchase successful!');
    } catch (error) {
      console.error('Checkout error', error);
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      {/* Cart details */}
      <button onClick={handleCheckout}>Checkout</button>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Cart;

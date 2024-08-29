import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function PlaceOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext); 

  const cart = location.state?.cart || [];
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const confirmOrder = () => {
    if (cart.length > 0) {
      navigate('/track-order', { state: { cart, total, status: 'Preparing' } });
      clearCart(); 
    } else {
      alert("Cart is empty. Please add items to your cart before proceeding.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Confirm Order</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((item, index) => (
                <li key={index} className="py-4 flex justify-between items-center">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-gray-700">${item.price}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-bold text-gray-800 mt-4">Total: ${total}</h2>
          </>
        )}
      </div>
      <button
        onClick={confirmOrder}
        className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
        disabled={cart.length === 0}
      >
        Confirm Order
      </button>
    </div>
  );
}

export default PlaceOrder;

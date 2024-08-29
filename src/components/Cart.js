import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate('/place-order', { state: { cart: cartItems } }); 
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center">
                <img
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
                  <p className="text-gray-600">$ : {item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 text-right">
            <button onClick={handleProceedToCheckout} className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

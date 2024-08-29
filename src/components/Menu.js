import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Menu() {
  const { restaurantId } = useParams();
  const { addToCart } = useContext(CartContext);
  const menuItems = data.menuItems[restaurantId];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Menu</h1>
      <div className="grid grid-cols-1 gap-4">
        {menuItems.map(item => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
              <p className="text-gray-600">$ : {item.price}</p>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

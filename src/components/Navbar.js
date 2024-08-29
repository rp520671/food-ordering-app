
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={"/Food_Ordering_app.jpeg"} alt="Food Ordering App" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">Food Ordering App</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/restaurants" className="text-gray-800 hover:text-green-500">Restaurants</Link>
          <Link to="/cart" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

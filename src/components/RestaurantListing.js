import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

function RestaurantListing() {
  const restaurants = data.restaurants;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Select a Restaurant</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {restaurants.map(restaurant => (
          <Link
            to={`/menu/${restaurant.id}`}
            key={restaurant.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <img 
              src={restaurant.imageUrl} 
              alt={restaurant.name} 
              className="w-full h-70 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700">{restaurant.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RestaurantListing;

import React, { useContext } from 'react';
import data from '../data/data.json';
import { CartContext } from '../context/CartContext';

function HomePage() {
    const { addToCart } = useContext(CartContext);

    const dishes = Object.keys(data.menuItems).flatMap(restaurantId =>
        data.menuItems[restaurantId].map(dish => {
            const restaurant = data.restaurants.find(res => res.id === parseInt(restaurantId));
            return {
                ...dish,
                restaurantName: restaurant ? restaurant.name : "Unknown Restaurant"
            };
        })
    );

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dishes</h1>
            <div className="grid grid-cols-2 gap-4">
                {dishes.map((dish, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        <img src={dish.imageUrl} alt={dish.name} className="w-full h-60 object-cover rounded-t-lg mb-2" />
                        <h2 className="text-lg font-semibold text-gray-700">{dish.name}</h2>
                        <p className="text-sm text-gray-600">From: {dish.restaurantName}</p>
                        <p className="text-sm text-gray-600">${dish.price}</p>
                        <button
                            onClick={() => addToCart(dish)}
                            className="mt-2 inline-block bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;

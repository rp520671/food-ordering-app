import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RestaurantListing from './components/RestaurantListing';
import Menu from './components/Menu';
import Cart from './components/Cart';
import PlaceOrder from './components/PlaceOrder';
import OrderTracking from './components/OrderTracking';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantListing />} />
          <Route path="/menu/:restaurantId" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/track-order" element={<OrderTracking />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

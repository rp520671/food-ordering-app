import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function OrderTracking() {
  const location = useLocation();
  const [status, setStatus] = useState(location.state.status);

  useEffect(() => {
    const statuses = ['Preparing', 'Out for Delivery', 'Delivered'];
    let currentStatusIndex = statuses.indexOf(status);
    const interval = setInterval(() => {
      if (currentStatusIndex < statuses.length - 1) {
        currentStatusIndex++;
        setStatus(statuses[currentStatusIndex]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [status]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Order Tracking</h1>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-2xl font-semibold text-gray-700">{status}</p>
      </div>
    </div>
  );
}

export default OrderTracking;

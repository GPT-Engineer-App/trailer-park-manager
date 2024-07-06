import React from "react";

const Orders = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Placeholder for orders list */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Order 1</h2>
          <p>Status: Loaded</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Order 2</h2>
          <p>Status: Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
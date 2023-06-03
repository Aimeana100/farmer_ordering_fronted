import React from 'react';
import './OrderList.css';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      <h2>Order List</h2>
      {orders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Farmer</th>
              <th>Land Size</th>
              <th>Fertilizer</th>
              <th>Seeds</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.farmer}</td>
                <td>{order.landSize}</td>
                <td>{order.fertilizer}</td>
                <td>{order.seeds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderList;

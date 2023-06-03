import React from 'react';
import './OrderList.css';
import { useDispatch, useSelector } from 'react-redux';

const OrderList = ({ orders }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <div className="order-list">
      <h2>Order List</h2>
      {orders?.data && orders.data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Farmer</th>
              <th>Land Size</th>
              <th>Status</th>
              <th>Seeds</th>
            </tr>
          </thead>
          <tbody>
            {orders.data.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user?.names}</td>
                <td>{order.landSize} Acres</td>
                <td>{order.status}</td>
                <td>
                  <ul>
                    {order.seeds.map((element) => (
                      <li key={element._id}>
                        {element.name} : {element.kg_per_acre * order.landSize}{' '}
                        Kg
                      </li>
                    ))}
                  </ul>
                </td>
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

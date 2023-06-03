import React from 'react';
import OrderList from '../../components/order/Order';

const orders = [
  {
    id: 1,
    farmer: 'John Doe',
    landSize: '1 acre',
    fertilizer: '3kg',
    seeds: '0.5kg',
  },
  {
    id: 2,
    farmer: 'Jane Smith',
    landSize: '2 acres',
    fertilizer: '4kg',
    seeds: '1kg',
  },
  // Add more orders as needed
];

const OrdersPage = () => {
  return (
    <div>
      <h1>Orders Page</h1>
      <OrderList orders={orders} />
    </div>
  );
};

export default OrdersPage;

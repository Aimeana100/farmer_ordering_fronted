import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderList from '../../components/order/Order';
import { fetchSeeds } from '../../redux/seedSlice';
import { fetchOrder } from '../../redux/orderSlice';

const OrdersPage = () => {
  const orders = useSelector((state) => state.orders.farmerOrders);
  console.log(orders);
  const dispatch = useDispatch();
  console.log(orders);
  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  return (
    <div>
      <h1>Orders Page</h1>
      <OrderList orders={orders?.orders} />
    </div>
  );
};

export default OrdersPage;

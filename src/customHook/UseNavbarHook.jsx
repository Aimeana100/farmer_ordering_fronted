import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar/Navbar';

const UseNavbarHook = () => {
  const user = useSelector((state) => state.user);
  const guestLInks = [
    {
      to: '/',
      text: 'home',
    },
  ];
  const farmerLinks = [
    {
      to: '/orders',
      text: 'Orders',
    },
    {
      to: '/new-order',
      text: 'New order',
    },
  ];
  const storeKeeperLinks = [
    {
      to: '/dashboard/seeds',
      text: 'Seeds',
    },
    {
      to: '/dashboard/fertilizers',
      text: 'Fertilizers',
    },
    {
      to: '/dashboard/orders',
      text: 'All Orders',
    },
    {
      to: '/logout',
      text: 'Logout',
    },
  ];

  if (!user?.user) return <Navbar links={guestLInks} />;
  return user.user.role === 'farmer' ? (
    <Navbar links={farmerLinks} />
  ) : (
    <Navbar links={storeKeeperLinks} />
  );
};

export default UseNavbarHook;

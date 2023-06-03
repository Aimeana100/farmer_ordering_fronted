import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { clearUser } from '../../redux/auth';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearUser());
  });
  return <Navigate to="/" replace />;
};

export default Logout;

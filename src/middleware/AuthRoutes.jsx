import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/auth';

const AuthRoutes = ({ roles }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const hasAccess = roles.includes(user.role);
  useEffect(() => {});
  if (!user) return async () => dispatch(clearUser());
  return !hasAccess ? <Navigate to="/" /> : <Outlet />;
};
export default AuthRoutes;

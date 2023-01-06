import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const { admin } = useSelector((state: RootState) => state.user);
  return admin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;

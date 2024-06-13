import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useRequireAuth from './useRequireAuth'; // Import your authentication hook

const PrivateRoute = ({ children }) => {
  const auth = useRequireAuth();
  return auth ? <>{children}</> : <Navigate to="/form-login" />;
}

export default PrivateRoute;
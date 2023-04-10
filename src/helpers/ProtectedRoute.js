import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem('email');
  if (!email) {
    return <Navigate to={'/'} replace />;
  }
  return children;
};

export default ProtectedRoute;

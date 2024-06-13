import React from 'react';
import { Navigate } from 'react-router-dom';
import useRequireAuth from './useRequireAuth';

function PublicRoute({ children }) {
  const auth = useRequireAuth();

  if (auth === undefined) {
    // Handle the case when the auth state is undefined, typically during initial loading.
    // This part may not be necessary if `isSignedIn` is always defined.
    return <div>Loading...</div>;
  }

  return !auth ? children : <Navigate to="/home" />;
}

export default PublicRoute;

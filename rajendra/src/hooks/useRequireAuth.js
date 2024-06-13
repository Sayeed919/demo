import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const useRequireAuth = () => {
    const { isSignedIn } = useUser();
    return isSignedIn;
};

export default useRequireAuth;

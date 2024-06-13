import React, { useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await signOut();
        navigate('/home');
      } catch (error) {
        console.error('Error during sign-out:', error);
      }
    };

    handleSignOut();
  }, [signOut, navigate]);

  return <div>Signing you out...</div>;
};

export default SignOut;

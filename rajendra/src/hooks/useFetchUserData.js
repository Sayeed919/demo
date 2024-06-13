/* import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

const useFetchUserData = () => {
  const { user } = useUser();
  const [phoneNumber, setPhoneNumber] = useState('');
 
  //console.log(user.phoneNumbers[0].phoneNumber);

  useEffect(() => {
    if (user) {
      setPhoneNumber(user.phoneNumbers[0].phoneNumber || '');
    }
  }, [user]);

  return { phoneNumber };
};

export default useFetchUserData; */

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

const useFetchUserData = () => {
    const { user } = useUser();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            const fetchData = async () => {
                const phoneNumber = user.phoneNumbers[0].phoneNumber;
                setPhoneNumber(phoneNumber);
                setIsLoading(false);
            };

            fetchData();
        }
    }, [user]);

    return { phoneNumber, isLoading };
};

export default useFetchUserData;

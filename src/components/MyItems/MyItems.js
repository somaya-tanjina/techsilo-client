import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'
const MyItems = () => {
  const [user, loading, error] = useAuthState(auth)
  const email = user.email;

  
  return (

    <div>
      <h1>My Items</h1>
    </div>
  );
};

export default MyItems;
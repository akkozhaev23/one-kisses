import React from 'react';
import auth from '../firebase';
import { signOut } from 'firebase/auth';

const Logout = () => {
  const logOutFunc = () => {
    signOut(auth);
  };

  return (
    <button className="btn btn-danger mx-2" onClick={logOutFunc}>
      Logout
    </button>
  );
};

export default Logout;

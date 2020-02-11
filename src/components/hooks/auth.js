import React, { createContext, useContext, useState, useEffect } from 'react';
import { signupUser, loginUser, verifyAuth } from '../services/authApi';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authErr, setAuthErr] = useState();

  useEffect(() => {
    verifyAuth()
      .then(user => {
        setUser(user);
      });
  }, []);

  const login = (email, password) => {
    setAuthErr(null);
    return loginUser(email, password)
      .then(user => {
        setUser(user);
      })
      .catch(err => setAuthErr(err.message));
  };
};

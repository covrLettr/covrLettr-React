import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { signupUser, loginUser, verifyAuth } from '../services/authApi';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authErr, setAuthErr] = useState();
  const history = useHistory();

  useEffect(() => {
    verifyAuth()
      .then(user => {
        setUser(user);
        history.push('/');
      })
      .catch(() => {
        history.push('/userauth');
      });
  }, []);

  const signup = (email, password) => {
    setAuthErr(null);
    return signupUser(email, password)
      .then(newUser => {
        setUser(newUser);
      })
      .catch(err => setAuthErr(err.message));
  };

  const login = (email, password) => {
    setAuthErr(null);
    return loginUser(email, password)
      .then(user => {
        setUser(user);
      })
      .catch(err => setAuthErr(err.message));
  };

  return (
    <SessionContext.Provider value={{ user, authErr, signup, login }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionUser = () => {
  const { user } = useContext(SessionContext);
  return user;
};

export const useHasSession = () => {
  const user = useSessionUser();
  return !!user;
};

export const useSignup = () => {
  const { signup, authErr } = useContext(SessionContext);
  return { signup, authErr };
};

export const useLogin = () => {
  const { login, authErr } = useContext(SessionContext);
  return { login, authErr };
};

export const useAuthErr = () => {
  const { authErr } = useContext(SessionContext);
  return authErr;
};

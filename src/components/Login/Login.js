import React, { useState } from 'react';
import styles from './LogUpS.css';
import { useLogin } from '../hooks/auth';


const LogIn = () => {
  const { login, authErr } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  const handleEmailChange = ({ target }) => setEmail(target.value);
  const handlePasswordChange = ({ target }) => setPassword(target.value);

  return (
    <>
      {authErr && <p>{authErr}</p>}
      <form className={styles.Login} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="signin-email">Email</label>
          <input id="signin-email" onChange={handleEmailChange} type="text" name="email" required placeholder="you@somewhere.com" />
        </p>
        <p>
          <label htmlFor="signin-password">Password</label>
          <input id="signin-password" onChange={handlePasswordChange} type="password" name="password" required />
        </p>
        <p>
          <button>Log In</button>
        </p>
      </form>
    </>
  );
};

export default LogIn;

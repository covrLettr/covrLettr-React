import React from 'react';
import styles from './Login.css';


const LogIn = () => (
  <form className={styles.Login}>
    <p>
      <label htmlFor="signin-email">Email</label>
      <input id="signin-email" type="email" name="email" required placeholder="you@somewhere.com" />
    </p>
    <p>
      <label htmlFor="signin-password">Password</label>
      <input id="signin-password" type="password" name="password" required />
    </p>
    <p>
      <button>Log In</button>
    </p>
  </form>
);

export default LogIn;

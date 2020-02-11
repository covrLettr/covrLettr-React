import React from 'react';
import styles from './LogUpS.css';

const SignUp = () => (
  <form className={styles.SignUp}>
    <label htmlFor="name">Name: <input name="name" id="name" required /></label>
    <label htmlFor="email">Email: <input type="email" id="email" name="email" required /></label>      
    <label htmlFor="password">Password: <input type="password" id="password" name="password" required />
    </label>
    <button className="signin-button">Sign Up</button>
    <p className="go-back-link"><a href="../index.html">Go Back</a></p>
  </form>
);

export default SignUp;


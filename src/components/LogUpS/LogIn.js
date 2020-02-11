import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogUpS.css';


const LogIn = () => (
  <form className="auth-form standard">
    <p>
        <label for="signin-email">Email</label>
        <input id="signin-email" type="email" name="email" required placeholder="you@somewhere.com">
    </p>
    <p>
        <label for="signin-password">Password</label>
        <input id="signin-password" type="password" name="password" required>
    </p>
    <p>
        <button>Log In</button>
    </p>
  </form>
);

export default LogIn;

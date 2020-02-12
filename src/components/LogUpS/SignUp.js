import React, { useState } from 'react';
import styles from './LogUpS.css';
import { useSignup } from '../hooks/auth';

const SignUpForm = () => {
  const { signup, authErr } = useSignup();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = event => {
    event.preventDefault();
    signup(email, password);
  };

  return (
    <>
      {authErr && <p>{authErr}</p>}
      <form className={styles.SignUp} onSubmit={handleSubmit}>
        <label htmlFor="email">Email: <input type="text" onChange={({ target }) => setEmail(target.value)} id="email" name="email" required /></label>      
        <label htmlFor="password">Password: <input type="password" id="password" name="password" onChange={({ target }) => setPassword(target.value)} required />
        </label>
        <button className="signin-button">Sign Up</button>
        <p className="go-back-link"><a href="../index.html">Go Back</a></p>
      </form>
      <button>Already a User?</button>
    </>
  );
};


export default SignUpForm;


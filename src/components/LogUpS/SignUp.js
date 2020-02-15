import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignUp.css';

const SignUpForm = ({ authErr, handleSubmit, handleClick, handleEmailChange, handlePasswordChange }) => (
  <>
    {authErr && <p>{authErr}</p>}
    <form className={styles.SignUp} onSubmit={handleSubmit}>
      <label htmlFor="email">Email: <input type="text" onChange={handleEmailChange} id="email" name="email" required /></label>      
      <label htmlFor="password">Password: <input type="password" id="password" name="password" onChange={handlePasswordChange} required />
      </label>
      <button className="signin-button">Sign Up</button>
      {/* <p className="go-back-link"><a href="../index.html">Go Back</a></p> */}
    </form>
    <button onClick={handleClick} className={styles.toggle}>Already a User?</button>
  </>
);

SignUpForm.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  authErr: PropTypes.string.isRequired
};

export default SignUpForm;


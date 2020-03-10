import React from 'react';
import PropTypes from 'prop-types';
import styles from '../LogUpS/SignUp.css';

const LogIn = ({
  authErr,
  handleEmailChange,
  handlePasswordChange,
  handleLoginSubmit,
  handleClick
}) => (
  <>
    {authErr && <p>{authErr}</p>}
    <form onSubmit={handleLoginSubmit} className={styles.Login}>
      <label htmlFor='signin-email'>
        Email:
        <input id='signin-email' onChange={handleEmailChange} type='text' name='email' required placeholder='you@you.com' />
      </label>

      <label htmlFor='signin-password'>
        Password:
        <input id='signin-password' onChange={handlePasswordChange} type='password' name='password' required/>
      </label>

      <button>Log In</button>
    </form>
    <button onClick={handleClick} className={styles.toggle}>
      New User?
    </button>
  </>
);

LogIn.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  authErr: PropTypes.string
};

export default LogIn;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.css';

const LogIn = ({ authErr, handleEmailChange, handlePasswordChange, handleLoginSubmit, handleClick }) => (
  <>
    {authErr && <p>{authErr}</p>}
    <form onSubmit={handleLoginSubmit} className={styles.Login}>
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
<<<<<<< HEAD
    <button onClick={handleClick} className={styles.toggle}>Not a User?</button>
=======

    <button onClick={handleClick} className={styles.toggle}>
      Not a User?
    </button>
>>>>>>> d8455da4f27e79a59b35cb52c4c9d85ec353dd23
  </>
);

LogIn.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  authErr: PropTypes.string.isRequired
};

export default LogIn;

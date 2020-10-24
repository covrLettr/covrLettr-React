import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import { useSessionUser } from '../hooks/auth';

const Header = () => {
  const user = useSessionUser();

  const handleLogout = () => {
    return fetch(`${process.env.GATSBY_API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if(res.ok) {
          window.location = '/userauth';
          return res;
        }
        throw `Response: ${res.status}`;
      });
  };

  return (
    <header className={styles.Header}>
      <h1>CovrLettr</h1>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>

        {!user ? <Link to="/userauth">
          <span>Signup/Login</span>
        </Link>
          : <span onClick={handleLogout}>Logout</span>}

        <Link to="/about">
          <span>About</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

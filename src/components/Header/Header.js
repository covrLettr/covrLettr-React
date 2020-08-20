import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import { useHasSession } from '../hooks/auth';

const Header = () => {
  const user = useHasSession();


  return (
    <header className={styles.Header}>
      <h1>CovrLettr</h1>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>

        {!user ? <Link to="/userauth">
          <span>Signup/Login</span>
        </Link> : <span>Logout</span>}

        <Link to="/about">
          <span>About</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

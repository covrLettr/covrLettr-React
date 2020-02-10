import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import covrLettrImg from '../../assets/covrLettr.png';

const Header = () => (
  <header className={styles.Header}>
    <h1>CovrLettr</h1>
    <nav>
      <Link to="/">
        <span>Home</span>
      </Link>

      <Link to="/about">
        <span>About</span>
      </Link>
    </nav>
  </header>
);

export default Header;

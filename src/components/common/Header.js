import React from 'react';
import styles from './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header className={styles.Header}>
      <h1>Monster of the Week</h1>
      <nav>
        {
          location.pathname.includes('/characters/') ? <Link to="/">All Monsters</Link> : null
        }
      </nav>
    </header>
  );
};

export default Header;

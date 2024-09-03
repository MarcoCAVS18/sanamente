// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './icons/logo';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
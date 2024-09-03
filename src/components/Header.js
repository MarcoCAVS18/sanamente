import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './icons/logo';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <div className="svg-container">
          <Logo />
        </div>
      </Link>
    </header>
  );
};

export default Header;

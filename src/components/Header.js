// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/isologo.png';

const Header = () => {
  return (
    <header className="flex justify-center items-center h-24 my-4">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="max-w-full h-auto" />
      </Link>
    </header>
  );
};

export default Header;

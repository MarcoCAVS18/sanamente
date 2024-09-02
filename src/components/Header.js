import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './icons/logo';

const Header = () => {
  return (
    <header className="flex justify-center items-center h-24 my-4">
      <Link to="/" className="flex items-center">
        <Logo className="lg:w-1/2 sm:w-auto" />
      </Link>
    </header>
  );
};

export default Header;






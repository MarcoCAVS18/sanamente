import React from 'react';
import logo from '../images/isologo.png';

const Header = () => {
  return (
    <header className="flex justify-center items-center h-24 my-4">
      <img src={logo} alt="Logo" className="max-w-full h-auto" />
    </header>
  );
};

export default Header;

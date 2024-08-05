import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-[#F0F2F3] p-5 text-center mt-auto">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Sanamente. Hecho con amor para Gonza y Vero{' '}
        <FontAwesomeIcon icon={faHeart} className="text-red-500 ml-1" />
      </p>
    </footer>
  );
});

export default Footer;

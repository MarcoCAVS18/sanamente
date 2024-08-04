import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F0F2F3] p-5 text-center mt-5">
      <p className="text-gray-600">&copy; {new Date().getFullYear()} Sanamente. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

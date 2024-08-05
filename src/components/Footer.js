import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-[#F0F2F3] p-5 text-center mt-auto">
      <p className="text-gray-600">&copy; {new Date().getFullYear()} Sanamente. Todos los derechos reservados.</p>
    </footer>
  );
});

export default Footer;

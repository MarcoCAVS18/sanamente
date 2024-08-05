import React from 'react';

const ContactButton = ({ show }) => { // 'show' para controlar la visibilidad
  return (
    <button
      style={{
        opacity: show ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: show ? 'auto' : 'none' 
      }}
      className="fixed bottom-10 left-1/2 w-[90%] transform -translate-x-1/2 bg-[#3ECC33] text-white font-black py-4 px-6 rounded-3xl shadow-md hover:opacity-80 z-50"
    >
      Contáctanos
    </button>
  );
};

export default ContactButton;

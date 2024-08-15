import React, { useState, useEffect, useRef } from 'react';

const ContactButton = ({ show }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const buttonElement = buttonRef.current; // Copia la referencia

    const handleMouseEnter = () => {
      setIsBlurred(true);
    };

    const handleMouseLeave = () => {
      setIsBlurred(false);
    };

    if (buttonElement) {
      buttonElement.addEventListener('mouseenter', handleMouseEnter);
      buttonElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener('mouseenter', handleMouseEnter);
        buttonElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []); // No se necesitan dependencias aquí

  return (
    <div className="relative" style={{ opacity: show ? 1 : 0, transition: 'opacity 0.5s ease-in-out', pointerEvents: show ? 'auto' : 'none' }}>
      <a
        href="https://api.whatsapp.com/send/?phone=543415711104&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        ref={buttonRef}
        className="fixed bottom-10 left-1/2 w-[90%] transform -translate-x-1/2 bg-[#3ECC33] text-white font-black py-4 px-6 rounded-3xl shadow-md hover:opacity-80 z-50 text-center"
      >
        Contáctanos
      </a>

      {isBlurred && (
        <div
          className="fixed inset-0 bg-gray-500 opacity-50 blur-lg z-40"
          style={{
            top: '0',
            left: '0',
            width: '100%',
            height: 'calc(100% - 60px)', // Ajusta este valor según la altura del botón
          }}
        />
      )}
    </div>
  );
};

export default ContactButton;
import React, { useState, useEffect, useRef } from 'react';

const ContactButton = ({ show }) => {
  const buttonRef = useRef(null);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current) {
        const buttonPosition = buttonRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const footerPosition = document.querySelector('footer').getBoundingClientRect().top;

        const distanceToFooter = footerPosition - buttonPosition.bottom;
        const maxDistance = viewportHeight - buttonPosition.height;

        if (distanceToFooter <= maxDistance) {
          const newOpacity = Math.max(distanceToFooter / maxDistance, 0);
          setButtonOpacity(newOpacity);
        } else {
          setButtonOpacity(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative" style={{ opacity: show ? buttonOpacity : 0, transition: 'opacity 0.5s ease-in-out', pointerEvents: show ? 'auto' : 'none' }}>
      <a
        href="https://api.whatsapp.com/send/?phone=543415711104&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        ref={buttonRef}
        className="fixed bottom-10 left-1/2 w-[90%] transform -translate-x-1/2 bg-[#3ECC33] text-white font-black py-4 px-6 rounded-3xl shadow-md z-50 text-center"
      >
        Contáctanos
      </a>
    </div>
  );
};

export default ContactButton;

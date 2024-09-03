import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const TopNav = () => {
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstMessage((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topnav bg-[#BE4391] text-white fixed top-0 left-0 w-full flex justify-between items-center p-2 z-50">
      {/* Lado izquierdo con la animación */}
      <div className="left-section flex items-center max-w-full overflow-hidden flex-grow">
        <div className="topnav-content flex items-center max-w-full">
          <div
            className={`message ${showFirstMessage ? 'message-show' : 'message-hide'} text-sm truncate`}
          >
            Obten un 10% de descuento abonando en efectivo
          </div>
          <div
            className={`message ${!showFirstMessage ? 'message-show' : 'message-hide'} text-sm truncate`}
          >
            Aceptamos todos los medios de pagos y cuotas!
          </div>
        </div>
      </div>
      {/* Lado derecho con el icono y texto */}
      <div
        className="right-section flex justify-end items-center ml-4 cursor-pointer flex-none w-10 "
        onClick={() => navigate('/favorite')}
        style={{ width: '40px' }} // Espacio fijo para el icono
      >
        <FontAwesomeIcon icon={faStar} className="text-white hover:text-[#aeca0d]" />
      </div>
    </div>
  );
};

export default TopNav;


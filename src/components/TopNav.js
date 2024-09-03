import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { fetchOffers } from '../services/sheetService'; // Asegúrate de que el path es correcto
import '../index.css';

const TopNav = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [previousMessageIndex, setPreviousMessageIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getOffers = async () => {
      const offers = await fetchOffers();
      console.log('Messages in TopNav:', offers); // Log para verificar los mensajes en el componente
      setMessages(offers.map(offer => offer.message));
    };

    getOffers();
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const interval = setInterval(() => {
        setPreviousMessageIndex(currentMessageIndex);
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [messages, currentMessageIndex]);

  return (
    <div className="topnav bg-[#BE4391] text-white fixed top-0 left-0 w-full flex justify-between items-center p-2 z-50">
      {/* Lado izquierdo con la animación */}
      <div className="left-section flex items-center">
        <div className="topnav-content flex items-center">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                index === currentMessageIndex
                  ? 'message-show'
                  : index === previousMessageIndex
                  ? 'message-hide'
                  : ''
              }`}
            >
              {message}
            </div>
          ))}
        </div>
      </div>
      {/* Lado derecho con el icono y texto */}
      <div
        className="right-section flex justify-end items-center cursor-pointer"
        onClick={() => navigate('/favorite')}
      >
        <FontAwesomeIcon icon={faStar} className="text-white mr-2" />
      </div>
    </div>
  );
};

export default TopNav;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { fetchPromos } from '../services/sheetService'; // Asegúrate de que esta ruta sea correcta
import '../index.css';

const TopNav = () => {
  const [promos, setPromos] = useState([]);
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPromos = await fetchPromos();
        setPromos(fetchedPromos);
      } catch (error) {
        console.error('Error fetching promos:', error);
      }
    };

    fetchData();
  }, []);

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
            {promos.length > 0 ? promos[0]?.message : 'Cargando mensajes...'}
          </div>
          <div
            className={`message ${!showFirstMessage ? 'message-show' : 'message-hide'} text-sm truncate`}
          >
            {promos.length > 1 ? promos[1]?.message : 'Cargando mensajes...'}
          </div>
        </div>
      </div>
      {/* Lado derecho con el icono y texto */}
      <div
        className="right-section flex justify-end items-center ml-4 cursor-pointer flex-none w-10 hover:text-[#aeca0d]"
        onClick={() => navigate('/favorite')}
        style={{ width: '40px' }} 
      >
        <FontAwesomeIcon icon={faStar} className="text-white hover:text-[#aeca0d]" />
      </div>
    </div>
  );
};

export default TopNav;

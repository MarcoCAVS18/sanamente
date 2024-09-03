// src/components/OfferCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import pruebaImage from '../images/prueba.png'; // Importa la imagen

const OfferCard = ({ offer }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/all'); // Redirige a la página /all al hacer clic
  };

  return (
    <div 
      className="offer-card bg-white p-6 shadow-md rounded-lg h-full cursor-pointer hover:opacity-30" 
      onClick={handleClick}
    >
      <img src={pruebaImage} alt="Oferta" className="w-full h-40 object-cover mb-4" />
    </div>
  );
};

export default OfferCard;







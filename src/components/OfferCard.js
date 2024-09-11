import React from 'react';
import { useNavigate } from 'react-router-dom';
import pruebaImage from '../images/prueba.png';  // Importa la imagen para la primera tarjeta
import pruebaImage1 from '../images/prueba1.png'; // Importa la imagen para la segunda tarjeta
import pruebaImage2 from '../images/prueba2.png'; // Importa la imagen para la tercera tarjeta

const OfferCard = ({ offer, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (index === 0) {
      navigate('/all'); // Redirige a la página /all solo para la primera tarjeta
    } else if (index === 2) {
      navigate('/offers'); // Redirige a la página /offers para la tercera tarjeta
    }
  };

  // Lógica para asignar la imagen según el índice de la tarjeta
  const getImageForIndex = () => {
    if (index === 0) {
      return pruebaImage; // Primera tarjeta usa prueba.png
    } else if (index === 1) {
      return pruebaImage1; // Segunda tarjeta usa prueba1.png
    } else if (index === 2) {
      return pruebaImage2; // Tercera tarjeta usa prueba2.png
    }
  };

  return (
    <div
      className={`offer-card bg-white p-4 shadow-md rounded-lg h-full flex items-center justify-center overflow-hidden ${index !== 1 ? 'cursor-pointer hover:opacity-70' : ''}`}
      onClick={index !== 1 ? handleClick : null} // Evita que la segunda tarjeta sea clickeable
    >
      <img 
        src={getImageForIndex()} 
        alt="Oferta" 
        className="w-full h-full object-cover rounded-3xl" 
      />
    </div>
  );
};

export default OfferCard;








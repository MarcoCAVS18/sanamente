import React, { useState, useEffect } from 'react';
import OfferCard from './OfferCard'; // Asegúrate de que el componente OfferCard esté correctamente importado

const OffersCarousel = ({ offers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth < 768 ? 1 : 2; // 1 en móviles, 2 en escritorio

  useEffect(() => {
    // Cambia la diapositiva automáticamente cada 3 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.floor(offers.length / itemsPerPage) ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia el tiempo según sea necesario

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, [offers.length, itemsPerPage]);

  return (
    <div className="offers-carousel">
      <div className="m-2 mb-4 flex items-baseline">
        <h2 className="text-2xl font-bold">Ofertas para ti!</h2>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            width: `${offers.length * (100 / itemsPerPage)}%`,
          }}
        >
          {offers.map((offer) => (
            <div key={offer.id} className={`w-full ${itemsPerPage === 2 ? 'md:w-1/2' : 'w-full'}`}>
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersCarousel;

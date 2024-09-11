import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SpecialCard = ({ offer }) => {
  return (
    <div className="relative w-full mb-12 select-none">
      {/* Tarjeta con borde */}
      <div className="relative border-2 border-[#aeca0d] rounded-3xl pt-12 pb-8 px-4 special-card w-full">

        {/* Información de productos */}
        <div className="text-center mb-4">
          <p className="text-sm">{offer.description1}</p>
          <h3 className="text-3xl font-bold">{offer.product1}</h3>
          <span className="text-lg font-bold">+</span>
          <h3 className="text-3xl font-bold">{offer.product2}</h3>
          <p className="text-sm">{offer.description2}</p>
        </div>

        {/* Contenedor de precio clickeable */}
        <div className="absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 bg-[#aeca0d] text-white text-center py-2 px-12 rounded-md z-10 cursor-pointer transition-colors duration-300 hover:bg-[#be4492]">
          {/* Precio visible */}
          <span className="text-lg font-bold group-hover:hidden">${offer.price}</span>
          {/* Ícono de estrella que aparece al hacer hover */}
          <span className="hidden group-hover:inline-block">
            <FontAwesomeIcon icon={faStar} className="text-white" />
          </span>
        </div>
      </div>

      {/* Contenedor de imágenes */}
      <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {offer.image1 && (
          <div className="w-24 h-24 overflow-hidden">
            <img src={offer.image1} alt="Producto 1" className="object-cover w-full h-full" />
          </div>
        )}
        {offer.image2 && (
          <div className="w-24 h-24 overflow-hidden">
            <img src={offer.image2} alt="Producto 2" className="object-cover w-full h-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialCard;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 relative flex flex-col">
      <div className="flex flex-wrap">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full"
        />
        <div className="flex flex-col justify-end flex-grow ml-2">
          <div className="flex flex-col">
            <div className="category-container">
              <span className="category-label">
                {product.category}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-1">{product.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{product.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <button
            className={`mb-2 ${isFavorite ? 'text-yellow-500' : 'text-gray-500'}`}
            onClick={handleToggleFavorite}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
          <div className="text-right">
            <span className="text-xs block">Desde</span>
            <span className="text-base sm:text-lg font-black">${product.prices[0].price}</span>
          </div>
          <button
            onClick={handleToggleExpand}
            className="text-gray-700 font-bold text-xs"
          >
            <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
            <span className="ml-1">{isExpanded ? 'Ver menos' : 'Ver más'}</span>
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-2">
          <ul className="grid grid-cols-2 gap-2 list-none p-0">
            {product.prices.map((price, index) => (
              <li
                key={index}
                className={`text-xs sm:text-sm flex items-center justify-center p-2 border border-gray-300 rounded-md ${
                  (product.prices.length % 2 === 1 && index === product.prices.length - 1)
                    ? 'col-span-2' // Make the last item span both columns if the count is odd
                    : ''
                }`}
              >
                {price.type}: ${price.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductCard;


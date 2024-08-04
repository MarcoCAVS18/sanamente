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
      <div className="flex">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-28 h-28 object-cover rounded-full"
        />
        <div className="flex flex-col justify-end flex-grow">
          <div className="flex flex-col">
            <span className="bg-green-500 text-white px-1 py-0.5 rounded-full text-xs font-bold self-start mb-1">
              {product.category}
            </span>
            <h3 className="text-lg font-bold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-end ml-4 justify-between">
          <button
            className={`mb-2 ${isFavorite ? 'text-yellow-500' : 'text-gray-500'}`}
            onClick={handleToggleFavorite}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
          <div className="text-right">
            <span className="text-xs block">Desde</span>
            <span className="text-lg font-black">${product.prices[0].price}</span>
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
          <ul className="list-disc list-inside">
            {product.prices.map((price, index) => (
              <li key={index} className="text-sm">
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

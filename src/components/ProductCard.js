import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Promo from './Promo';
import FavoriteAlert from './FavoriteAlert';

const categoryColors = {
  'Almacen': '#b16b05',
  'Lacteos': '#006996',
  'Frutos secos': '#850016',
  'Cereales y Harinas': '#266d57',
  'Condimentos y Especias': '#534a68',
  'Granos y Semillas': '#d0a669',
  'Snacks': '#ebde0b',
};

const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [productPrices, setProductPrices] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isProductFavorite = currentFavorites.some(favProduct => favProduct.id === product.id);
    setIsFavorite(isProductFavorite);

    try {
      if (typeof product.prices === 'string') {
        const parsedPrices = JSON.parse(product.prices);
        setProductPrices(parsedPrices);
      } else if (Array.isArray(product.prices)) {
        setProductPrices(product.prices);
      } else {
        console.error('Unexpected format for prices:', product.prices);
      }
    } catch (error) {
      console.error('Error parsing prices:', error);
    }
  }, [product]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleFavorite = () => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isProductFavorite = currentFavorites.some(favProduct => favProduct.id === product.id);

    if (isProductFavorite) {
      const updatedFavorites = currentFavorites.filter(favProduct => favProduct.id !== product.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      currentFavorites.push(product);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites));
    }

    setIsFavorite(!isProductFavorite);
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  const categoryColor = categoryColors[product.category] || '#cccccc';
  const categorySlug = product.category.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 relative flex flex-col">
      <div className="flex flex-wrap">
        <img
          src={product.imageUrl || 'placeholder.jpg'}
          alt={product.name}
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full"
        />
        <div className="flex flex-col justify-end flex-grow ml-2">
          <div className="relative">
            {product.promo === 'Si' && <Promo />}
            <div className="flex flex-col">
              <div
                className="category-container"
                style={{ backgroundColor: categoryColor }}
              >
                <Link
                  to={`/category/${categorySlug}`}
                  className="category-label"
                  style={{ backgroundColor: categoryColor }}
                >
                  {product.category}
                </Link>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{product.description}</p>
            </div>
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
            {product.onlyPrice === 'unico' ? (
              productPrices.length > 0 ? (
                <>
                  <span className="text-xs block">Desde</span>
                  <span className="text-base sm:text-lg font-black">${productPrices[0].price}</span>
                </>
              ) : (
                <span className="text-xs block text-gray-500">Precio no disponible</span>
              )
            ) : (
              <>
                {productPrices.length > 0 ? (
                  <>
                    <span className="text-xs block">Desde</span>
                    <span className="text-base sm:text-lg font-black">${productPrices[0].price}</span>
                  </>
                ) : (
                  <span className="text-xs block text-gray-500">Precio no disponible</span>
                )}
              </>
            )}
          </div>
          {product.onlyPrice === 'muchos' && (
            <button
              onClick={handleToggleExpand}
              className="text-gray-700 font-bold text-xs"
            >
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
              <span className="ml-1">{isExpanded ? 'Ver menos' : 'Ver más'}</span>
            </button>
          )}
        </div>
      </div>
      {isExpanded && product.onlyPrice === 'muchos' && productPrices.length > 0 && (
        <div className="mt-2">
          <ul className="grid grid-cols-2 gap-2 list-none p-0">
            {productPrices.map((price, index) => (
              <li
                key={index}
                className={`text-xs sm:text-sm flex items-center justify-center p-2 border border-gray-300 rounded-md ${
                  (productPrices.length % 2 === 1 && index === productPrices.length - 1)
                    ? 'col-span-2'
                    : ''
                }`}
              >
                {price.type}: ${price.price}
              </li>
            ))}
          </ul>
        </div>
      )}
      <FavoriteAlert
        message={isFavorite ? 'Producto agregado a favoritos' : 'Producto eliminado de favoritos'}
        visible={alertVisible}
        onClose={handleAlertClose}
      />
    </div>
  );
};

export default ProductCard;

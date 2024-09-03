// src/components/FeaturedProducts.js
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="featured-products">
      <div className="m-6 flex items-baseline">
        <h2 className="text-2xl font-bold">Productos Destacados!</h2>
      </div>
      {featuredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">Qué extraño, no hay ningún elemento dentro de los destacados de esta semana</p>
      )}
    </div>
  );
};

export default FeaturedProducts;

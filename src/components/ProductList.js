import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="product-list container mx-auto px-4">
      {/* Ajusta el gap dependiendo del tamaño de la pantalla */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 sm:gap-6"> 
        {products.map((product, index) => (
          <ProductCard key={product.id || index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


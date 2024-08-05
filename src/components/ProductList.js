// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  console.log('Rendering ProductList with products:', products);

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={product.id || index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

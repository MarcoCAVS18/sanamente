// src/components/CategoryProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const CategoryProductList = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductList;
// src/components/MainContainer.js
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import CategoryCarouselContainer from './CategoryCarouselContainer';
import ProductList from './ProductList';
import products from '../data/products';
import categories from '../data/categories';

const MainContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showCarousel, setShowCarousel] = useState(true);

  const handleSearch = (term) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.category.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
    setShowCarousel(term.trim() === ''); // Muestra el carrusel solo si la búsqueda está vacía
  };

  return (
    <div className="main-container mx-auto px-6 py-4 max-w-4xl max-h-screen">
      <SearchInput onSearch={handleSearch} />
      {showCarousel && <CategoryCarouselContainer categories={categories} />}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default MainContainer;

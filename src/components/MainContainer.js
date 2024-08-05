// src/components/MainContainer.js
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import CategoryCarousel from './CategoryCarousel';
import ProductList from './ProductList';
import products from '../data/products';
import categories from '../data/categories';

const MainContainer = () => {
  console.log('Products:', products);
  console.log('Categories:', categories);
  
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
    <div className="main-container mx-auto max-w-4xl"> {/* Elimina max-h-screen */}
      <SearchInput onSearch={handleSearch} />
      {showCarousel && <CategoryCarousel categories={categories} />}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default MainContainer;
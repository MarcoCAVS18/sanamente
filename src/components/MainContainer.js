// src/components/MainContainer.js
import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import CategoryCarousel from './CategoryCarousel';
import ProductList from './ProductList';
import { fetchCategories, fetchProducts } from '../services/sheetService';

const MainContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // Estado separado para todos los productos
  const [categories, setCategories] = useState([]);
  const [showCarousel, setShowCarousel] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching categories and products...');
        const categoriesData = await fetchCategories();
        console.log('Categories fetched:', categoriesData);
        setCategories(categoriesData);

        const productsData = await fetchProducts();
        console.log('Products fetched:', productsData);
        setAllProducts(productsData); // Guardamos todos los productos en un estado separado
        setFilteredProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (term) => {
    console.log('Search term:', term);
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.category.toLowerCase().includes(term.toLowerCase())
    );
    console.log('Filtered products:', filtered);
    setFilteredProducts(filtered);
    setShowCarousel(term.trim() === ''); // Muestra el carrusel solo si la búsqueda está vacía
  };

  return (
    <div className="main-container mx-auto max-w-4xl">
      <SearchInput onSearch={handleSearch} />
      {showCarousel && <CategoryCarousel categories={categories} />}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default MainContainer;

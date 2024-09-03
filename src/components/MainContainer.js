// src/components/MainContainer.js
import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import CategoryCarousel from './CategoryCarousel';
import ProductList from './ProductList';
import FeaturedProducts from './FeaturedProducts'; 
import OffersCarousel from './OffersCarousel'; // Importa el nuevo componente
import { fetchCategories, fetchProducts } from '../services/sheetService';

// Datos estáticos para las ofertas
const staticOffers = [
  { id: 1, title: 'Oferta 1', description: 'Descripción de la oferta 1', link: '#', buttonText: 'Más Info' },
  { id: 2, title: 'Oferta 2', description: 'Descripción de la oferta 2', link: '#', buttonText: 'Más Info' },
  { id: 3, title: 'Oferta 3', description: 'Descripción de la oferta 3', link: '#', buttonText: 'Más Info' },
  // Añade más ofertas si es necesario
];

const MainContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
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
        setAllProducts(productsData);
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
    <div className="main-container mx-auto max-w-full lg:max-w-6xl">
      <div className="search-input-container">
        <SearchInput onSearch={handleSearch} />
      </div>
      {showCarousel && <CategoryCarousel categories={categories} />}
      {showCarousel ? (
        <>
          <FeaturedProducts products={allProducts} />
          <OffersCarousel offers={staticOffers} /> {/* Agrega el carrusel de ofertas después de los productos destacados */}
        </>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default MainContainer;

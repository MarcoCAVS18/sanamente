import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import CategoryProductList from '../components/CategoryProductList';
import Breadcrumb from '../components/Breadcrumb';
import { fetchProducts } from '../services/sheetService';

const GalletitasPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const category = 'Galletitas'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setAllProducts(productsData);
        const initialFiltered = productsData.filter((product) =>
          product.category.toLowerCase() === category.toLowerCase()
        );
        setFilteredProducts(initialFiltered);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, [category]);

  const handleSearch = (term) => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()) &&
      product.category.toLowerCase() === category.toLowerCase()
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold ml-4">
          {category}
        </h1>
        <Breadcrumb 
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Galletitas', path: '/galletitas' }
          ]}
        />
        <SearchInput onSearch={handleSearch} />
        <CategoryProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default GalletitasPage;

// src/page/AllPage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../services/sheetService';
import SearchInput from '../components/SearchInput';
import Breadcrumb from '../components/Breadcrumb';

const AllPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setAllProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (term) => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <SearchInput onSearch={handleSearch} />
        <div className="my-4">
          <h1 className="text-3xl font-bold">Todos nuestros productos:</h1>
          <Breadcrumb
            items={[
              { label: 'Inicio', path: '/' },
              { label: 'Todos nuestros productos', path: '/all' }
            ]}
          />
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default AllPage;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import CategoryProductList from '../components/CategoryProductList';
import Breadcrumb from '../components/Breadcrumb';
import { fetchProducts } from '../services/sheetService';

const categoryMap = {
  'almacen': 'Almacen',
  'lacteos': 'Lacteos',
  'frutos-secos': 'Frutos secos',
  'cereales-y-harinas': 'Cereales y Harinas',
  'condimentos-y-especias': 'Condimentos y Especias',
  'granos-y-semillas': 'Granos y Semillas',
  'snacks': 'Snacks'
};

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categoryName = categoryMap[category] || category;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        const initialFiltered = productsData.filter((product) =>
          product.category.toLowerCase() === categoryName.toLowerCase()
        );
        setFilteredProducts(initialFiltered);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, [category, categoryName]); // Dependencia para actualizar al cambiar la categoría

  const handleSearch = (term) => {
    const filtered = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold ml-4 capitalize">{categoryName}</h1>
        <Breadcrumb
          items={[
            { label: 'Inicio', path: '/' },
            { label: categoryName, path: `/category/${category}` } 
          ]}
        />
        <SearchInput onSearch={handleSearch} />
        <CategoryProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default CategoryPage;

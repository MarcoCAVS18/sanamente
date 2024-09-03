import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import CategoryProductList from '../components/CategoryProductList';
import Breadcrumb from '../components/Breadcrumb';
import { fetchProducts } from '../services/sheetService';

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categoryName = category === 'all' ? 'Todos nuestros productos:' : category;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        if (category === 'all') {
          setFilteredProducts(productsData);
        } else {
          const initialFiltered = productsData.filter((product) =>
            product.category.toLowerCase() === category.toLowerCase()
          );
          setFilteredProducts(initialFiltered);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, [category]);

  const handleSearch = (term) => {
    const filtered = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="pl-8">
        <h1 className="text-3xl font-bold capitalize mb-2">{categoryName}</h1>
        <Breadcrumb
          items={[
            { label: 'Inicio', path: '/' },
            { label: category === 'all' ? 'Todos los productos' : categoryName, path: `/category/${category}` }
          ]}
        />
      </div>
      <div className="flex-grow py-2">
        <SearchInput onSearch={handleSearch} />
        <CategoryProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default CategoryPage;



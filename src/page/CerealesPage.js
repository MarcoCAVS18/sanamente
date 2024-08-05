import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import CategoryProductList from '../components/CategoryProductList';
import products from '../data/products';
import Breadcrumb from '../components/Breadcrumb';


const CerealesPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const category = 'Cereales'; 

  useEffect(() => {
    console.log('Products in useEffect:', products);
    const initialFiltered = products.filter((product) =>
      product.category.toLowerCase() === category.toLowerCase()
    );
    console.log('Initial filtered products:', initialFiltered);
    setFilteredProducts(initialFiltered);
  }, [category]);

  const handleSearch = (term) => {
    console.log('Search term:', term);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()) &&
      product.category.toLowerCase() === category.toLowerCase()
    );
    console.log('Filtered products after search:', filtered);
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    console.log('Filtered products in useEffect:', filteredProducts);
  }, [filteredProducts]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">

        <h1 className="text-3xl font-bold ml-4">
          {category}
        </h1>
        <Breadcrumb 
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Cereales', path: '/cereales' }
          ]}
        />
        <SearchInput onSearch={handleSearch} />
        <CategoryProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default CerealesPage;

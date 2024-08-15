import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SearchInput from '../components/SearchInput';
import Breadcrumb from '../components/Breadcrumb';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('Stored favorites:', storedFavorites); 
    setFavorites(storedFavorites);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredFavorites = favorites.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  console.log('Filtered favorites:', filteredFavorites);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold ml-4">Mis Favoritos</h2>
      <Breadcrumb
        items={[
          { label: 'Inicio', path: '/' },
          { label: 'Mis Favoritos', path: '/favorite' }
        ]}
      />
      <SearchInput onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className='m-6 text-center text-gray-500'>
            <p>No tienes productos favoritos.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
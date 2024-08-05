import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ imageUrl, name, link }) => {
  return (
    <Link to={link} className="block">
      <div className="category-item text-center mb-6">
        <img src={imageUrl} alt={name} className="w-full h-auto mb-2" />
        <p className="text-lg font-bold">{name}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;



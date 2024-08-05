// src/components/CategoryItem.js
import React from 'react';

const CategoryItem = ({ imageUrl, name, link }) => {
  return (
    <a href={link} className="block">
      <div className="category-item text-center mb-6">
        <img src={imageUrl} alt={name} className="w-full h-auto mb-2" />
        <p className="text-lg font-bold">{name}</p>
      </div>
    </a>
  );
};

export default CategoryItem;


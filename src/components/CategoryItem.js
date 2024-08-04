import React from 'react';

const CategoryItem = ({ imageUrl, name }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="text-center text-lg font-bold mt-2 bg-white bg-opacity-50 p-2 rounded">
        {name}
      </div>
    </div>
  );
};

export default CategoryItem;

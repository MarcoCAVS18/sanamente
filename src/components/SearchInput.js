import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ onSearch }) => {
  return (
    <div className="relative mx-auto w-11/12 flex items-center">
      <input
        type="text"
        placeholder="Buscar entre todos los productos..."
        onChange={(event) => onSearch(event.target.value)}
        className="w-full h-12 pl-12 pr-4 py-2 bg-[#F0F2F3] rounded-full border-none outline-none"
      />
      <button
        type="button"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#F0F2F3] rounded-full p-2"
        onClick={() => onSearch(document.querySelector('input').value)}
      >
        <FontAwesomeIcon icon={faSearch} className="text-[#6D767F]" />
      </button>
    </div>
  );
};

export default SearchInput;

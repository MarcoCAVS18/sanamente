import React from 'react';
import SpecialCard from './SpecialCard';

const OffersList = ({ offers }) => {
  return (
    <div className="offers-list container mx-auto pt-4 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {offers.map((offer, index) => (
          <SpecialCard key={offer.id || index} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersList;


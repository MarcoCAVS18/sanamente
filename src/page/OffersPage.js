import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import OffersList from '../components/OffersList';
import { fetchSpecialOffers } from '../services/sheetService';

const OffersPage = () => {
  const [allOffers, setAllOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedOffers = await fetchSpecialOffers(); // Obtén las ofertas especiales
      setAllOffers(fetchedOffers);
    };

    fetchData(); // Llama a la función de fetch al montar el componente
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="my-4">
          <h1 className="text-3xl font-bold">Todas nuestras ofertas:</h1>
          <Breadcrumb
            items={[
              { label: 'Inicio', path: '/' },
              { label: 'Todas nuestras ofertas', path: '/offers' },
            ]}
          />
          <div className="pt-8">
            <OffersList offers={allOffers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;

import React, { useState, useEffect, useRef } from 'react';
import OfferCard from './OfferCard';

const OffersCarousel = ({ offers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === offers.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [offers.length]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === offers.length - 1 ? 0 : prevIndex + 1
      );
    } else if (diffX < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? offers.length - 1 : prevIndex - 1
      );
    }

    setStartX(null);
  };

  return (
    <div className="offers-carousel">
      <div className="title-container mb-4 flex items-center">
        <h2 className="text-2xl font-bold">Ofertas para ti!</h2>
      </div>
      <div
        className="carousel-container"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className={`flex ${
            window.innerWidth > 768 ? "justify-start" : "transition-transform duration-500 ease-in-out"
          }`}
          style={{
            transform: window.innerWidth <= 768 ? `translateX(-${currentIndex * 100}%)` : "none",
            width: `${window.innerWidth > 768 ? '100%' : offers.length * 100}%`,
          }}
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="offer-card-container"
            >
              <OfferCard offer={offer} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersCarousel;



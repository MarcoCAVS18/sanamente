import React, { useState, useEffect, useRef } from 'react';
import OfferCard from './OfferCard';

const OffersCarousel = ({ offers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = window.innerWidth <= 768 ? setInterval(() => {
      if (!isSwiping) {
        setCurrentIndex((prevIndex) =>
          prevIndex === offers.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000) : null;

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [offers.length, isSwiping]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) {
      setCurrentIndex((prevIndex) =>
        diffX > 0
          ? prevIndex === offers.length - 1
            ? 0
            : prevIndex + 1
          : prevIndex === 0
          ? offers.length - 1
          : prevIndex - 1
      );
      setStartX(null);
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setIsSwiping(false);
  };

  return (
    <div className="offers-carousel">
      <div className="title-container my-4 flex items-center select-none">
        <h2 className="text-2xl font-bold">Ofertas para ti!</h2>
      </div>
      <div
        className="carousel-container"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-slider"
          style={{
            transform: window.innerWidth <= 768 ? `translateX(-${currentIndex * 100}%)` : "none",
            width: window.innerWidth <= 768 ? `${offers.length * 100}%` : '100%',
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

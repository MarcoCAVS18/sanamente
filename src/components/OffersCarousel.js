import React, { useState, useEffect, useRef } from 'react';
import OfferCard from './OfferCard';

const OffersCarousel = ({ offers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false); // To handle swipe state
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwiping) { // Move to the next slide only if not swiping
        setCurrentIndex((prevIndex) =>
          prevIndex === offers.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [offers.length, isSwiping]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true); // Set swiping state to true
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) { // Adjust threshold if needed
      setCurrentIndex((prevIndex) =>
        diffX > 0
          ? prevIndex === offers.length - 1
            ? 0
            : prevIndex + 1
          : prevIndex === 0
          ? offers.length - 1
          : prevIndex - 1
      );
      setStartX(null); // Reset startX
      setIsSwiping(false); // Reset swiping state
    }
  };

  const handleTouchEnd = () => {
    setStartX(null); // Reset startX
    setIsSwiping(false); // Reset swiping state
  };

  return (
    <div className="offers-carousel">
      <div className="title-container my-4 flex items-center">
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

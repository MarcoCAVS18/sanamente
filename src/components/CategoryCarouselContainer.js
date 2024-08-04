// src/components/CategoryCarouselContainer.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CategoryItem from './CategoryItem';

const CategoryCarousel = ({ categories }) => {
  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>
      <Carousel
        autoPlay={false}
        infiniteLoop
        showThumbs={false}
        showArrows
        centerMode
        centerSlidePercentage={50}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={true}
      >
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            imageUrl={category.imageUrl}
            name={category.name}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;


// src/components/CategoryCarouselContainer.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CategoryItem from './CategoryItem';

const CategoryCarousel = ({ categories }) => {
  return (
    <div className="category-carousel">
      <h2 className="text-2xl font-bold m-4">Categorías</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryItem 
              imageUrl={category.imageUrl} 
              name={category.name} 
              link={`/categories/${category.id}`} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;

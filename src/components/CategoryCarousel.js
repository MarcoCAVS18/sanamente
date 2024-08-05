import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CategoryItem from './CategoryItem';

const CategoryCarousel = ({ categories }) => {
  return (
    <div className="category-carousel">
      <div className="m-4 flex items-baseline">
        <h2 className="text-2xl font-bold">Categorías</h2>
        <p className="text-gray-500 text-xs ml-2">Desliza para ver más!</p>
      </div>
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
          <SwiperSlide key={category.name}>
            <CategoryItem 
              imageUrl={category.imageUrl} 
              name={category.name} 
              link={`/${category.name.toLowerCase().replace(/ /g, '-')}`} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

const CategoryCarousel = ({ categories }) => {
  console.log('Rendering CategoryCarousel with categories:', categories);
  

  return (
    <div className="category-carousel">
      <div className="m-2 mb-4 flex items-baseline">
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
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}> {/* Cambiado a category.id */}
            <Link to={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`} className="block">
              <div className="category-item text-center mb-6">
                <img src={category.imageUrl} alt={category.name} className="w-full h-auto mb-2" />
                <p className="text-lg font-bold">{category.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://cdn.prod.website-files.com/65aeef01ceab5a488ee1a755/65bae5dca22bad4391e32bad_category-green-bg-1200x630.jpg",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://cdn.prod.website-files.com/65aeef01ceab5a488ee1a755/65bae5dca22bad4391e32bad_category-green-bg-1200x630.jpg",
  },
  {
    id: 3,
    name: "Home & Living",
    image: "https://cdn.prod.website-files.com/65aeef01ceab5a488ee1a755/65bae5dca22bad4391e32bad_category-green-bg-1200x630.jpg",
  },
  {
    id: 4,
    name: "Sports",
    image: "https://cdn.prod.website-files.com/65aeef01ceab5a488ee1a755/65bae5dca22bad4391e32bad_category-green-bg-1200x630.jpg",
  },
  {
    id: 5,
    name: "Beauty",
    image: "https://cdn.prod.website-files.com/65aeef01ceab5a488ee1a755/65bae5dca22bad4391e32bad_category-green-bg-1200x630.jpg",
  },
];

const CategoriesSlider = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Shop by Category
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true} // Enable infinite loop
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="bg-white rounded-lg overflow-hidden border-none">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                    Explore
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoriesSlider;
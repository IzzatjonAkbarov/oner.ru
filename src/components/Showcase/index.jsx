import { Swiper, SwiperSlide } from "swiper/react";
import {} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Showcase = ({
  slides = [],
  autoplay = true,
  pagination = true,
  navigation = true,
  spaceBetween = 30,
  slidesPerView = 1,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
      loop={true}
      className="custom-swiper">
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 gap-5">
            {/* Left Section */}
            <div className="flex flex-col gap-3 justify-center">
              <p className="text-pink-500 font-medium">
                Best Furniture For Your Castle....
              </p>
              <h1 className="font-bold text-4xl leading-tight">
                New Furniture Collection Trends in 2025
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
            </div>

            {/* Right Section */}
            <div className="overflow-hidden h-full">
              <img
                src={slide.image}
                alt={slide.alt || `Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Showcase;

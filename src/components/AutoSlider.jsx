import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import i1 from "../assets/c1.webp";
import i2 from "../assets/c2.jpg";
import i3 from "../assets/c3.webp";
import i4 from "../assets/c4.jpg";
import i5 from "../assets/c11.jpg";
import i6 from "../assets/c12.jpg";
import i7 from "../assets/c13.jpg";
import i8 from "../assets/c14.jpg";
import i9 from "../assets/c15.jpg";
import i10 from "../assets/c16.jpg";
import i11 from "../assets/c17.png";
import i12 from "../assets/c18.jpg";
import i13 from "../assets/c19.jpg";
import i14 from "../assets/c20.jpg";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const AutoSlider = () => {
  return (
    <div className="sm:p-24 p-8 pb-10">
      <h1 className="text-#1F2937 text-2xl sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Yevropa uslubidagi uylar uchun mebellar
      </h1>
      <Swiper
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={2}
        className="mySwiper mt-5 sm:mt-0 rounded-2xl"
      >
        <SwiperSlide className="bg-red-200">
          <img className="w-[100%] h-60 rounded-2xl" src={i1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i11} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i12} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-60 rounded-2xl" src={i14} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AutoSlider;

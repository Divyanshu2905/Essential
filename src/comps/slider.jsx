import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';
export default function Slider() {
    return (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img className="sliderimage" src='/slider1.png'></img></SwiperSlide>
          <SwiperSlide><img className="sliderimage" src='/slider2.png'></img></SwiperSlide>
          <SwiperSlide><img className="sliderimage" src='/slider3.png'></img></SwiperSlide>
          <SwiperSlide><img className="sliderimage" src='/slider4.png'></img></SwiperSlide>
          <SwiperSlide><img className="sliderimage" src='/slider5.png'></img></SwiperSlide>
        </Swiper>
      </>
    );
  }
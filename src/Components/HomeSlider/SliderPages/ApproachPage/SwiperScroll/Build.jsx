import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Build.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import p1 from "../../images/954-1-Al-Naseem-1-960x679.jpg";
import p2 from "../../images/DJI_0061-Edit-960x719.jpg"
import p3 from "../../images/IMG_0891-960x640.jpg"
import p4 from "../../images/SR_106-960x650.jpg"


export default function Build() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide><img src={p1} alt='p1'/></SwiperSlide>
        <SwiperSlide><img src={p2} alt='p2'/></SwiperSlide>
        <SwiperSlide><img src={p3} alt='p3'/></SwiperSlide>
        <SwiperSlide><img src={p4} alt='p4'/></SwiperSlide>
      </Swiper>
    </>
  );
}

"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../swiper/slide.components.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Allplantsgrid from '@/components/Allplantsgrid/Allplantsgrid';
import Plantslide from '@/components/Plantslide/Plantslide';
import Banner1 from '@/components/common/Banner/image1';
import Banner2 from '@/components/common/Banner/image2';
import Banner3 from '@/components/common/Banner/image3';
// import Plantslide from '../plants/plantslide';

type Props = {
  variant?:number
}

const Bannerslide = ({variant}: Props) => {
  return (
    <>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true, 
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Banner1/></SwiperSlide>
        <SwiperSlide><Banner2/></SwiperSlide>
        <SwiperSlide><Banner3/></SwiperSlide>
       
    
        
      </Swiper>
    </>
  );
}

export default Bannerslide
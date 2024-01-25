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
// import Plantslide from '../plants/plantslide';

type Props = {
  variant?:number
}

const Slide = ({variant}: Props) => {
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
        <SwiperSlide>
           <Allplantsgrid/>
        </SwiperSlide>
        <SwiperSlide>
            <Plantslide variant={variant} />

        </SwiperSlide>
       
    
        
      </Swiper>
    </>
  );
}

export default Slide
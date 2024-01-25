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
import Sale from '@/components/Sale/Sale';
import ProductCard from '@/components/products/ProductCard';
import { productData } from '@/lib/constData';
import { ProductProvider } from '@/lib/context/product-context';
import { useProducts } from "medusa-react"

// import Plantslide from '../plants/plantslide';

type Props = {}



const SwiperSale = (props: Props) => {

  const { products } = useProducts({
    // limit: 10,
  })

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
           <Sale/>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative grid xl:grid-cols-4 z-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        
          {products?.map((product) => (
            <ProductProvider key={product.id} product={product}>
              <ProductCard key={product.id} product={product} />
            </ProductProvider>
          ))}
        
    </div>
        </SwiperSlide>
       
    
        
      </Swiper>
    </>
  );
}

export default SwiperSale
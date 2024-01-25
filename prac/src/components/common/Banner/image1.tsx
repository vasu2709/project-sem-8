// import Image from "next/image"
// import React from "react"
// import s1 from "@/public/images/slider1.jpg"
// import slash from "@/public/images/slash.png"

// type Props = {}

// const Banner1 = (props: Props) => {
//   return (
//     <div className="relative row-span-2">
//       <Image alt="banner" className="select-none" src={s1} />
//       <div className="absolute text-sm md:flex bottom-5 hidden left-8">
//         <p className="px-6">Plants</p>
//         <p className="px-6 border-l-[1px] border-black">Terrasium</p>
//         <p className="px-6 border-l-[1px] border-black">Succulent</p>
//       </div>
//       <div className="absolute bottom-0 px-2 justify-center items-center bg-[#fefefe] right-0 flex flex-col">
//         <p className="pt-5">01</p>
//         <Image className="px-2" src={slash} alt="divider" />
//         <p className="pb-5">03</p>
//       </div>
//     </div>
//   )
// }

// export default Banner1

"use client"
import React from "react"
import Image from "next/image"
// import slash from "@/app/assests/slash.png";
// import s1 from "@/app/assests/slider1.jpg";
import { useState, useEffect } from "react"
import "./Img2.components.css"
import s1 from "@/public/images/slider1.jpg"
import s2 from "@/public/images/slider2.jpg"
import s3 from "@/public/images/slider3.jpg"
import slash from "@/public/images/slash.png"
import img1 from "@/public/assets/slider4.jpg"
import img2 from "@/public/assets/slider2.jpg"
import img3 from "@/public/assets/slider3.jpg"

type Props = {}

const Banner1: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ["./images/s1.jpg", "./images/slider2.jpg", "./images/s5.jpg"]
  const text1 = ["FALL / SUMMER", "FALL / SUMMER", "FALL / SUMMER"]
  const text = [
    "terrsdium  collection",
    "plant  collection",
    "succutents  collection",
  ]
  const count = ["1", "2", "3"]

  useEffect(() => {
    const interval = setInterval(() => {
      toggleImages()
    }, 9000)

    return () => clearInterval(interval)
  }, [currentImageIndex])

  const toggleImages = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }
  return (
    <>
      <div className="relative w-fit h-auto overflow-hidden  row-span-2 z-0">
        {/* <Image alt="banner" className="select-none" src={s1} /> */}

        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Image ${index + 1}`}
              className={index === currentImageIndex ? "" : "hidden"}
            />
          ))}

          <div className="absolute bottom-5 text-base  flex pl-4">
            <button
              className="border-black border-r-[1px] px-4"
              onClick={toggleImages}
            >
              <p className="hover:text-greenDark-50 duration-500 text-black ">
                Plant
              </p>
            </button>
            <button
              className="border-black border-r-[1px] px-4"
              onClick={toggleImages}
            >
              <p className="hover:text-greenDark-50 duration-500 text-black ">
                Terrariums
              </p>
            </button>
            <button className=" px-4" onClick={toggleImages}>
              <p className="hover:text-greenDark-50 duration-500 text-black ">
                Succulents
              </p>
            </button>
          </div>

          <div className="line1 w-full -translate-x-1/2 text-center">
            <h2 className="lineUp1" id="lineText">
              {text1[currentImageIndex]}
            </h2>
          </div>
          <div className="line w-full -translate-x-1/2  text-center">
            <h2 className="lineUp" id="lineText">
              {text[currentImageIndex]}
            </h2>
          </div>
        </div>

        <div className="absolute md:text-sm text-caption2 md:flex z-10 bottom-5 hidden left-8">
          <button onClick={toggleImages} className="px-6">
            Plants
          </button>
          <button
            onClick={toggleImages}
            className="px-6 border-l-[1px] border-black"
          >
            Terrasium
          </button>
          <button
            onClick={toggleImages}
            className="px-6 border-l-[1px] border-black"
          >
            Succulent
          </button>
        </div>
        <div className="absolute bottom-0 px-2 justify-center items-center bg-[#fefefe] right-0 flex flex-col">
          <p className="lineUp pt-8" id="lineText">
            0{count[currentImageIndex]}
          </p>
          <Image className="px-2" src={slash} alt="divider" />
          <p className="pb-5">03</p>{" "}
        </div>
      </div>
    </>
  )
}

export default Banner1

// // import React, { useRef, useState } from 'react';
// import Image from "next/image"
// // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';
// import s1 from "@/public/images/slider1.jpg"
// import s2 from "@/public/images/slider2.jpg"
// import s3 from "@/public/images/slider3.jpg"
// import slash from "@/public/images/slash.png"

// // "use client"
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import '../swiper/slide.components.css'

// // import required modules
// import { FreeMode, Pagination } from 'swiper/modules';

// type Props = {}

// const Banner1 = (props: Props) => {
//   return (
//     <div className="relative row-span-2">

//         <Swiper
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//         <Image alt="banner" className="select-none" src={s1} />
//         </SwiperSlide>
//         <SwiperSlide>
//         <Image alt="banner" className="select-none" src={s2} />
//         </SwiperSlide>
//         <SwiperSlide>
//         <Image alt="banner" className="select-none" src={s3} />
//         </SwiperSlide>

//       </Swiper>

//       <div className="absolute text-sm md:flex bottom-5 hidden left-8">
//          <p className="px-6">Plants</p>
//          <p className="px-6 border-l-[1px] border-black">Terrasium</p>
//          <p className="px-6 border-l-[1px] border-black">Succulent</p>
//        </div>
//        <div className="absolute bottom-0 px-2 justify-center items-center bg-[#fefefe] right-0 flex flex-col">
//          <p className="pt-5">01</p>
//          <Image className="px-2" src={slash} alt="divider" />
//          <p className="pb-5">03</p>
//        </div>
//      </div>
//   )
// }

// export default Banner1

// "use client"
// import React, { useState, useEffect } from "react"
// import "./Img2.components.css"
// const Banner1: React.FC = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const images = [
//     "./images/slider2.jpg",
//     "./images/slider1.jpg",
//     "./images/slider3.jpg",
//   ]
//   const texts = [
//     "FALL / SUMMER terrsdium collection",
//     "FALL / SUMMER plant collection",
//     "FALL / SUMMER succutents collection",
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       toggleImages()
//     }, 9000)

//     return () => clearInterval(interval)
//   }, [currentImageIndex])

//   const toggleImages = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
//   }

//   return (
//     <div className="image-container overflow-hidden relative row-span-2">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Product Image ${index + 1}`}
//           className={index === currentImageIndex ? "" : "hidden"}
//         />
//       ))}
//       <button
//         className="border-2 bg-blue-900 text-slate-200 rounded-md "
//         onClick={toggleImages}
//       >
//         Show Next Image
//       </button>

//       <div className="line">
//         <h2 className="lineUp" id="lineText">
//           {texts[currentImageIndex]}
//         </h2>
//       </div>
//     </div>
//   )
// }

// export default Banner1

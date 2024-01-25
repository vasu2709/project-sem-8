"use client"
import TestimonialCard from "@/components/TestimonialCard"
import { testimonialData } from "@/lib/constData"
import PrevIcon from "@/public/icons/chevron-left.svg"
import NextIcon from "@/public/icons/chevron-right.svg"
import styles from "./testimonialCarousel.module.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Greentext from "../GreenText"

type Props = {}

const TestimonialCarousel = (props: Props) => {
  return (
    <section>
      {/* <p className={styles.heading}>{testimonialData.heading}</p> */}
      <Greentext title="Welcome to Lustria" subtitle="Testimonials"></Greentext>

      <div className="relative">
        <Swiper
          // spaceBetween={50}
          // slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="relative pb-20"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            1280: {
              slidesPerView: 3,
              // spaceBetween:2,
            },
          }}
        >
          {testimonialData.testimonialCards.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <TestimonialCard data={item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialCarousel

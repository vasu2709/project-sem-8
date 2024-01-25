import TitleBanner from "@/components/common/TitleBanner"
import AboutUsBanner from "@/containers/AboutUsBanner"
import OurTeam from "@/containers/OurTeam"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "About Us",
  description: "About our Bea Ypu",
}

const page = () => {
  return (
    <>
      {/* <TitleBanner>About Us</TitleBanner> */}
      <AboutUsBanner />
      <section>
        <WhyChooseUs />
        {/* <TestimonialCarousel /> */}
        {/* <OurTeam/>  */}
      </section>
    </>
  )
}

export default page

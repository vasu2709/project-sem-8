import HomeBanner from "@/containers/HomeBanner"
import Breaker from "@/containers/HomeBreaker"
import Imagecategory from "@/containers/HomeGrid"
import HomeProducts from "@/containers/HomeProducts"
import SeasonCollection from "@/containers/SeasonCollection/SeasonCollection"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plantopia",
  description: "",
}

export default async function Home() {
  return (
    <>
      <HomeBanner />
      <HomeProducts />
      <Imagecategory />
      <SeasonCollection />
      <Breaker id="home" />
      <TestimonialCarousel />
    </>
  )
}

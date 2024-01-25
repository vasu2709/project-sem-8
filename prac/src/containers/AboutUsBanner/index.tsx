import React from "react"
import Image from "next/image"
import pic1 from "../../../public/about_image/OIP.jpeg"
import Button from "@/components/ImageWithButton/button"
import Plus from "@/modules/common/icons/plus"
import Link from "next/link"

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <section>
        <p className="text-heading2 py-2  text-center">About Us</p>
        <div className="flex flex-col lg:flex-row md:items-center">
          <div className="relative lg:ml-0 mx-auto overflow-hidden transition-all bg-black w-fit md:mx-auto  -z-1 group">
            <div className="absolute top-1/2 h-[4px] w-full rotate-45 z-10  ">
              <div className=" bg-white  h-[1px] w-full group-hover:translate-y-40 opacity-0 group-hover:opacity-100 -translate-x-2 transition-all duration-500  z-10"></div>
              <div className=" bg-white  h-[1px] w-full group-hover:-translate-y-40 opacity-0 group-hover:opacity-100 translate-x-5 transition-all duration-500 z-10"></div>
            </div>
            <Image
              src={pic1}
              className=" transition-all hover:opacity-75"
              alt=""
            />
          </div>
          <div className="p-2 text-left gap-2 flex flex-col lg:w-1/2 md:pt-4 ">
            <p className="text-3xl sm:pt-10 text-greenDark-50 pb-4 ">
              Welcome to Lustria
            </p>
            <p className="text-heading3 font-bold ">Our Journey to Dreams</p>
            <p className="text-[#777777]">
              Empowering all people to be plant people — a collection of
              articles from The Sill’s team of Plant Experts across a variety of
              plant care topics to inspire confidence in the next generation of
              plant parents. Welcome to Plant Parenthood™.
            </p>

            <p className=" text-grayDark-50 ">
              Luckily, we have a few ideas on watering for optimum plant health.
              The Lustria succulents and other smaller specimen.
            </p>
            <Link href="/products">
              <Button variant="shopallplants">
                <Plus />
                <p className="">View the shop</p>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

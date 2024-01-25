import Image from "next/image"
import React from "react"
import b3 from "@/public/images/banner3.jpg"
import HomeCountDown from "../Countdown/HomeCountDown"

type Props = {}

const Banner3 = (props: Props) => {
  return (
    <div className="relative flex flex-col h-fit overflow-hidden">
      <Image alt="banner" className="select-none place-self-end" src={b3} />
      <div className="absolute top-[20%] md:top-14 md:w-52  lg:top-6 lg:left-8  lg:w-72 right-[20%] gap-1  md:gap-6 lg:gap-2 w-44 flex flex-col left-4">
        <strong className="md:text-2xl text-xs lg:text-2xl">
          Peperomia Ripple Ruby Large
        </strong>
        <span className="text-xs md:text-lg lg:text-xl">
          {" "}
          <b> $25.00 </b> <s className="text-[#7777] ">$39.00</s>{" "}
        </span>
        <div className=" scale-[60%] -translate-x-10 md:translate-x-0 md:scale-100">
          <HomeCountDown />
        </div>
      </div>
    </div>
  )
}

export default Banner3

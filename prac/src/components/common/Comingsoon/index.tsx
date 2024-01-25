import React from "react"
import Image from "next/image"
import imag from "@/public/images/commig.jpg"
import Email from "@/components/Email"
import Link from "next/link"
import logo from "@/public/images/logo-white.png"
import Countdown from "../Countdown"

type Props = {}

const ComingSoon = (props: Props) => {
  return (
    <>
      {" "}
      <Image
        src={imag}
        alt=""
        className="overflow-hidden absolute h-screen w-full  "
        style={{ objectFit: "cover" }}
      />
      {/* <div className={`bg-cover bg-no-repeat bg-center w-screen h-screen`} > */}
      <div className=" bg-black bg-opacity-20 items-center justify-center flex flex-col h-screen w-full px-6 text-center absolute">
        <div className="flex text-center py-2 justify-center ">
          <div className=" ">
            <Link href="/">
              <p className="text-6xl text-white font-bold">Plantopia</p>
            </Link>
          </div>
        </div>
        <div className="mb-24 md:mb-28 lg:mb-40"></div>
        <h1 className="lg:text-4xl text-3xl text-center text-white ">
          We’re Coming Soon.
        </h1>

        <Countdown />

        <Email />

        <p className="text-white text-base">Subscribe to more news.</p>
      </div>
      {/* </div> */}
    </>
  )
}

export default ComingSoon

"use client"
import React, { useState } from "react"
import NewArrivalElement from "./NewArrivalElement"
import Slide from "@/containers/swiper/Swiper"
import Sale from "../Sale/Sale"
import Plantslide from "../Plantslide/Plantslide"
import SwiperSale from "@/containers/SwiperSale/SwiperSale"

type Props = {}

const Newarrival = (props: Props) => {
  const [activeTab, setActiveTab] = useState("All Plants")

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName)

    console.log(`Clicked on ${tabName}`)
  }

  return (
    <div className="">
      <div>
        <ul className="gap-0 flex justify-center transition-all text-4xl px-4 pt-8 pb-16">
          <li
            className={`border-r-4 pr-5 md:px-10 ${
              activeTab === "All Plants" ? "active" : ""
            }`}
          >
            <a
              className={`text-[#ABABAB] hover:text-black font-bold text-3xl md:text-4xl focus:text-black`}
              onClick={() => handleTabClick("All Plants")}
            >
              All Plants
            </a>
          </li>
          <li
            className={`border-l md:border-r block max-md:hidden  px-10 ${
              activeTab === "New Arrival" ? "active" : ""
            }`}
          >
            <a
              className={`text-[#ABABAB] hover:text-black font-bold md:text-4xl focus:text-black`}
              onClick={() => handleTabClick("New Arrival")}
            >
              New Arrival
            </a>
          </li>
          <li
            className={`border-l-4 md:px-10 block max-md:hidden  ${
              activeTab === "Sale" ? "active" : ""
            }`}
          >
            <a
              className={`text-[#ABABAB] hover:text-black font-bold md:text-4xl focus:text-black`}
              onClick={() => handleTabClick("Sale")}
            >
              Sale
            </a>
          </li>
          <li className="md:px-10 pl-5 md:hidden">
            <NewArrivalElement />
          </li>
        </ul>
      </div>

      {activeTab === "All Plants" && <Slide variant={8} />}
      {activeTab === "New Arrival" && <Slide variant={8} />}
      {activeTab === "Sale" && <Slide variant={1} />}
    </div>
  )
}

export default Newarrival

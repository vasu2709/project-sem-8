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
        <ul className="gap-0 flex  justify-center transition-all text-4xl px-4 pt-8 pb-16">
          <li
            className={`border-r-4 pr-5  px-10 ${
              activeTab === "All Plants" ? "active" : ""
            }`}
          >
            <a
              className={`text-[#ABABAB] hover:text-black hover:cursor-pointer font-bold text-4xl focus:text-black`}
              onClick={() => handleTabClick("All Plants")}
            >
              All Plants
            </a>
          </li>
          <li
            className={`border-l md:border-r  px-10 ${
              activeTab === "New Arrival" ? "active" : ""
            }`}
          >
            <a
              className={`text-[#ABABAB] hover:text-black hover:cursor-pointer font-bold text-4xl focus:text-black`}
              onClick={() => handleTabClick("New Arrival")}
            >
              New Arrival
            </a>
          </li>
          <li
            className={`border-l-4 px-10   ${
              activeTab === "Sale" ? "active" : ""
            }`}
          >
            <a
              className={`text-[#ABABAB] hover:text-black hover:cursor-pointer font-bold md:text-4xl focus:text-black`}
              onClick={() => handleTabClick("Sale")}
            >
              Sale
            </a>
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

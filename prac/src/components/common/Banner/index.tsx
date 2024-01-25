import React from "react"
import Image from "next/image"
import Styles from "./banner.module.css"
import Button from "../Button"
import moduleName from "module"
import s1 from "@/public/images/slider1.jpg"
import s2 from "@/public/images/slider1.jpg"
import s3 from "@/public/images/slider1.jpg"
import b2 from "@/public/images/banner2.jpg"
import b3 from "@/public/images/banner3.jpg"
import slash from "@/public/images/slash.png"
import { BannerPropsType } from "@/utils/types"
import Banner1 from "./image1"
import Banner3 from "./image3"
import Banner2 from "./image2"
// import Bannerslide from "@/containers/Bannerslide"

const Banner = ({ data }: BannerPropsType) => {
  return (
    <div className=" grid grid-cols-1  gap-7  justify-self-center items-end px-5 lg:pt-[0.1rem] lg:grid-cols-2 lg:px-8 ">
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </div>
  )
}

export default Banner

{
  /* <section className={Styles.gridSection}>
      <div className={Styles.contentWrapper}>
        <div className={Styles.content}>
          <h2 className={Styles.heading}>{data.heading}</h2>
          {data.description && (
            <p className={Styles.description}>&quot;{data.description}&quot;</p>
          )}
        </div>
        <div className={Styles.bannerButtons}>
          {data.actionBtn1 && (
            <Button
              variant="fill"
              color="yellow"
              as="a"
              href={"#top-products"}
              className="!rounded-full"
            >
              {data.actionBtn1}
            </Button>
          )}
          {data.actionBtn2 && (
            <Button
              variant="outlined"
              color="light"
              as="a"
              href={"/products"}
              className="!rounded-full"
            >
              {data.actionBtn2}
            </Button>
          )}
        </div>
      </div>
      {data.backgroundBannerImage && (
        <div className={Styles.backgroundBannerImage}>
          <Image
            src={data.backgroundBannerImage}
            alt={"Banner Image"}
            fill
            style={{ objectFit: "contain" }}
            className="z-10"
          />
        </div>
      )}
    </section> */
}

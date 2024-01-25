import React from "react"
import image1 from "@/modules/imagecategory/Cat_images/Category-01.jpg"
import ImageWithButton from "@/components/ImageWithButton"
import { homeGrid } from "@/lib/constData"
// import img1 from "@/public/images/Cat_images/Category-01.jpg"
import img1 from "@/public/images/Cat_images/Category-01.jpg"
import img2 from "@/public/images/Cat_images/Category-02.jpg"
import img3 from "@/public/images/Cat_images/Category-06.jpg"
import img4 from "@/public/images/Cat_images/Category-04.jpg"
import img5 from "@/public/images/Cat_images/Category-07.jpg"
type Props = {}

const Imagecategory = (props: Props) => {
  // const firstThreeItems = homeGrid.slice(0, 2)
  // const lastTwoItems = homeGrid.slice(3,4)
  return (
    <section>
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2  md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 gap-4">
            <div className="relative md:col-span-2 lg:col-span-2 lg:row-span-2">
              {/* Image with Button */}
              <ImageWithButton
                src={img1}
                alt="pic"
                buttonName="Seeds"
                quantitySize="(1)"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageWithButton
                src={img2}
                alt="pic"
                buttonName="Terrariums"
                quantitySize="(1)"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageWithButton
                src={img3}
                alt="pic"
                buttonName="HousePlants"
                quantitySize="(8)"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr_1fr] lg:grid-cols-2   lg:grid-rows-3 gap-x-4 md:gap-y-4 sm:gap-y-4 gap-y-4 ">
            <div
              className={`md:col-span-2 md:row-span-1 lg:col-span-2  lg:row-span-1`}
            >
              <ImageWithButton
                src={img4}
                alt="pic"
                buttonName="PotterPlants"
                quantitySize="(4)"
              />
            </div>
            <div className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2">
              <ImageWithButton
                src={img5}
                alt="pic"
                buttonName="Succelents"
                quantitySize="(3)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Imagecategory

{
  /*
 import React from "react"
import image1 from "@/modules/imagecategory/Cat_images/Category-01.jpg"
import ImageWithButton from "@/components/ImageWithButton"

type Props = {}

const Imagecategory = (props: Props) => {
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2  md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1  gap-4">
            <div className="relative md:col-span-2 lg:col-span-2 lg:row-span-2">
             
              <ImageWithButton
                src="@/public/images/Cat_images/Category-01.jpg"
                alt="pic"
                buttonName="Seeds"
                quantitySize="(1)"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageWithButton
                src="@/public/images/Cat_images/Category-02.jpg"
                alt="pic"
                buttonName="Terrariums"
                quantitySize="(1)"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImageWithButton
                src="@/public/images/Cat_images/Category-06.jpg"
                alt="pic"
                buttonName="House Plants"
                quantitySize="(8)"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr_1fr] lg:grid-cols-2   lg:grid-rows-3 gap-4">
            <div className="md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1">
              <ImageWithButton
                src="@/public/images/Cat_images/Category-04.jpg"
                alt="pic"
                buttonName="Potter Plants"
                quantitySize="(4)"
              />
            </div>
            <div className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2">
              <ImageWithButton
                src="@/public/images/Cat_images/Category-07.jpg"
                alt="pic"
                buttonName="Succelents"
                quantitySize="(3)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


  */
}

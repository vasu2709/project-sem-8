import React from "react"


import Plantstype from './Plantstype';
import RangeSlider from './Rangeslider';
import Plantstypenames from './Plantstypenames';

type Props = {}

const Categories = (props: Props) => {
  return (

    <div className=''>
      <Plantstypenames/>
      <RangeSlider/>
    </div>
  )
}

export default Categories

{
  /* 
  "use client"
import React from "react"
import Plantstype from "./Plantstype"
import RangeSlider from "./Rangeslider"
import { useProductCategories } from "medusa-react"

type Props = {}

const Categories = (props: Props) => {
  const { product_categories, isLoading } = useProductCategories()

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {product_categories && !product_categories.length && (
        <span>No Categories</span>
      )}
      {product_categories && product_categories.length > 0 && (
        <div className="">
          <div className="hidden lg:block ">
            <p className="font-bold pb-8 text-2xl ">Categories</p>
            {product_categories.map((category) => (
              <div className="flex flex-col gap-y-8" key={category.id}>
                <div>{category.name} </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden ">
            <details>
              <summary className="font-bold pb-8 text-2xl ">Categories</summary>
              <div className="flex flex-col gap-y-8">
                <Plantstype count="8">House Plants </Plantstype>
                <Plantstype count="4">Potter Plants </Plantstype>
                <Plantstype count="1">Seeds </Plantstype>
                <Plantstype count="13">Small Plants </Plantstype>
                <Plantstype count="3">Succulents </Plantstype>
                <Plantstype count="1">Terrariums </Plantstype>
              </div>
            </details>
          </div>
          <RangeSlider />
        </div>
        // <ul>
        //   {product_categories.map((category) => (
        //     <li key={category.id}>{category.name}</li>
        //   ))}
        // </ul>
      )}
    </div>
  )

  // return (

  // );
}

export default Categories

*/
}

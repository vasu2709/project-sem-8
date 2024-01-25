import React from "react"

import { IoShuffleOutline } from "react-icons/io5"
import { IoIosSearch } from "react-icons/io"
import Opt from "./opt"
import AddToCartBtn from "../AddToCartBtn"
import Share from "@/public/icons/share-thin.svg"
import Wishlist from "@/public/icons/wishlist.svg"
import ShareOpt from "./shareopt"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Link from "next/link"
type ProductTemplateProps = {
  product: PricedProduct
  // variant?: number
  // itemsToShow?: number
}
const Option = ({ product }: Props) => {
  return (
    <div className="flex items-end w-[4dvw] h-[30dvh] -right-3 pt-2 pr-2 pb-1 mr-[-2px] absolute flex-col gap-2  group-hover:translate-x-[-18px] opacity-0 group-hover:opacity-100 z-10 transition-all duration-300 ">
      {/* <a href="">
        {" "}
        <Opt>
          
        </Opt>
      </a> */}
      <AddToCartBtn type="icon" />
      <a href="">
        {" "}
        {/* <Opt>
          <Wishlist className="h-6" />
        </Opt> */}
      </a>
      {/* <a href="">
        <Opt>
          <IoIosSearch style={{ width: "1.5em", height: "1.5em" }} />
        </Opt>
      </a> */}
      {/* <Link href=''> */}
      <ShareOpt variant="card" product={product}>
        <Share className="h-6" />
      </ShareOpt>
      {/* </Link> */}
    </div>
  )
}

export default Option

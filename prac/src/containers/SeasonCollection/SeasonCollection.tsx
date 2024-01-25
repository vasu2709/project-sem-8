"use client"
import React from "react"
import Greentext from "../GreenText"
import ProductCard from "@/components/products/ProductCard"
import { productData } from "@/lib/constData"
import Button from "@/components/ImageWithButton/button"
import Plus from "@/modules/common/icons/plus"
import Link from "next/link"
import { useProducts } from "medusa-react"
import { ProductProvider } from "@/lib/context/product-context"

type Props = {}

const SeasonCollection = (props: Props) => {
  const SALES_CHANNEL_ID = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""

  const { products } = useProducts({
    limit: 4,
    sales_channel_id: [SALES_CHANNEL_ID],
  })

  return (
    <section>
      {/* <p className={styles.heading}>{testimonialData.heading}</p> */}
      <Greentext
        title="find your dream plants"
        subtitle="New Summer Collection"
      ></Greentext>

      <div className="relative grid xl:grid-cols-4  z-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 ">
        {products?.slice(0, 4).map((product) => (
          <ProductProvider key={product.id} product={product}>
            <ProductCard key={product.id} product={product} />
          </ProductProvider>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/products">
          <Button variant="shopallplants">
            {" "}
            <Plus /> Shop all plants
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default SeasonCollection

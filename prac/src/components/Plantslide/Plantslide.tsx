// "use client"
import ProductCard from "@/components/products/ProductCard"
import { productData } from "@/lib/constData"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"

type Props = {
  variant?: number
}

const SALES_CHANNEL_ID = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""

const Plantslide = ({ variant }: Props) => {
  const { products } = useProducts({
    limit: variant,
    sales_channel_id: [SALES_CHANNEL_ID],
  })

  return (
    <div className="relative grid xl:grid-cols-4 grid-rows-2 z-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10">
      {products?.map((product) => (
        <ProductProvider key={product.id} product={product}>
          <ProductCard key={product.id} product={product} />
        </ProductProvider>
      ))}
    </div>
  )
}

export default Plantslide

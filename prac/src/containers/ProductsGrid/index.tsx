"use client"
import ProductCard from "@/components/products/ProductCard"
// import { productData } from "@/lib/constData"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"

const ProductsGrid = () => {
  const SALES_CHANNEL_ID = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""

  const { products } = useProducts({
    sales_channel_id: [SALES_CHANNEL_ID],
    // limit: 10
  })

  return (
    <div className="relative w-full grid xl:grid-cols-3 auto-rows-auto auto-cols-max  grid-rows-2 z-0 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 ">
      <>
        {products?.map((product) => (
          <ProductProvider key={product.id} product={product}>
            <ProductCard
              product={product}
              // variant={1}
              // itemsToShow={16}
              // productData={productData}
            />
          </ProductProvider>
        ))}
      </>
    </div>
  )
}

export default ProductsGrid

{
  /* <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
{products && !products.length && <span>No Products</span>}
{products && products.length > 0 && (
  <>
    {products.map((product) => (
      <ProductProvider key={product.id} product={product}>
        <ProductCard product={product} />
      </ProductProvider>
    ))}
  </>
)}
</section> */
}

// "use client"
import ProductCard from "@/components/products/ProductCard"
import { productData } from "@/lib/constData"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"

const Sale = () => {
  const { products } = useProducts({})
  

  return (
    <div className="relative grid xl:grid-cols-4 grid-rows-2 z-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <>        
          {products?.map((product) => (
            <ProductProvider key={product.id} product={product}>
              <ProductCard key={product.id} product={product} />
            </ProductProvider>
          ))}
      </>
    </div>
  )
}

export default Sale
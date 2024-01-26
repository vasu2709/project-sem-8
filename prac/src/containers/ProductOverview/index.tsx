import Button from "@/components/common/Button"
import ProductDetails from "@/components/products/ProductDetails"
import ProductOverviewImage from "@/components/products/ProductOverviewImage"
import ProductReviewCard from "@/components/products/ProductReviewCard"
import ProductReviewForm from "@/components/products/ProductReviewForm"
import { productReviews } from "@/lib/constData"
import { ProductProvider } from "@/lib/context/product-context"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Share from "@/public/icons/share.svg"
import Categories from "@/components/Categories"
import Plantstypenames from "@/components/Categories/Plantstypenames"
import TagLink from "@/components/Categories/Tagslink"
import ProductDesc from "./ProductDesc"
import ShareOpt from "@/components/products/ProductCard/shareopt"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductOverview = ({ product }: ProductTemplateProps) => {
  return (
    <>
      <ProductProvider product={product}>
        <section className="relative sm:mt-0 mt-4 grid lg:grid-cols-[1fr_20%] lg:grid items-start md:grid-cols-2 grid-cols-1 flex-1 gap-5 lg:gap-10">
          <div className="h-max grid lg:grid-cols-2 grid-cols-1 gap-10  top-[100px]">
            <div className="flex items-start justify-between md:hidden">
              <h3 className="font-bold mb-4">{product.title}</h3>
              

              <ShareOpt variant="card">
                <Share className="h-6" />
              </ShareOpt>
            </div>
            <ProductOverviewImage
              productImagesData={[
                {
                  id: `${product.title}-thumbnail`,
                  url: product?.thumbnail,
                },
                ...product.images,
              ]}
            />

            <div>
              <ProductDetails product={product} />
            </div>
          </div>
          <div className="sticky">
            <Plantstypenames />
            <TagLink />
          </div>
          <ProductDesc />
          {/* <Categories /> */}
        </section>
      </ProductProvider>

      
    </>
  )
}

export default ProductOverview

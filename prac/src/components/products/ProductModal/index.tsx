import Image from "next/image"
import AddToCartBtn from "../AddToCartBtn"
import Button from "@/components/common/Button"
import Price from "@/components/Price"
import Share from "@/public/icons/share.svg"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductProvider } from "@/lib/context/product-context"
import ShareOpt from "../ProductCard/shareopt"
import Tree from "@/public/icons/tree.svg"
import ProductDesc from "@/containers/ProductOverview/ProductDesc"
import TagLink from "@/components/Categories/Tagslink"
import ProductSocial from "../ProductDetails/ProductSocial"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductModal = ({ product }: ProductTemplateProps) => {
  return (
    <ProductProvider product={product}>
      <div className="grid w-full max-w-2xl lg:max-w-3xl grid-cols-1 sm:grid-cols-2 rounded-md gap-8">
        <div className="relative w-full aspect-3/4">
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div className="flex flex-col justify-between gap-4">
          <h3 className="font-bold">{product?.title}</h3>
          <Price id={product.id as string} />
          <span className="line-clamp-3 text-subtitle1">
            <ReactMarkdown>{product?.description}</ReactMarkdown>
          </span>
          <ProductSocial />
          <div className="absolute top-[23px] opacity-0 md:opacity-100 left-5 ">
            <Tree className="h-12" />
          </div>
          {/* <Rating rating={data.rating} reviewCount={data.reviewCount} /> */}
          <div className="flex items-center justify-between gap-1 w-full">
            <div className=" ">
              <AddToCartBtn product={product} />
            </div>
            <Button
              as="a"
              variant="checkout"
              color="green"
              href={`/products/${product?.handle}`}
              className="flex-1"
            >
              More Details
            </Button>
            {/* <Button
              as="a"
              href="/"
              variant="checkout"
              className="aspect-square px-2 py-2"
            >
              <Share className="w-7" />
            </Button> */}
            <ShareOpt variant="">
              <Share className="h-6" />
            </ShareOpt>
          </div>
        </div>
      </div>
    </ProductProvider>
  )
}

export default ProductModal

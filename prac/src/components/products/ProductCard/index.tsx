import Image from "next/image"
import Styles from "./productCard.module.css"
import AddToCartBtn from "../AddToCartBtn"
import Link from "next/link"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { productData } from "@/lib/constData"
import Rounds from "./rounds"
import Option from "./option"
import Price from "@/components/Price"

type ProductTemplateProps = {
  product: PricedProduct
  // variant?: number
  // itemsToShow?: number
}

const shouldDisplayRounds = (productId: string): boolean => {
  // Define the logic to determine if a product should have the Rounds component
  const productsWithRounds = [
    "prod_01HMEZVGY3TYFJX82299PE6EVD",
    "prod_01HMEZHC09ZFV0H7ARNAXZ33GQ",
    "prod_01HMEYW1CVK59186P37B269H22",
    "prod_01HMEXC6B3PYX1DAZKG7QX9Z54",
    "prod_01HMEX0J4YWGAZPZQMM7RD5YE3",
    "prod_01HMEWM6F42Y019CTAXHXBRRHA",
    "prod_01HMEV5NZZK1H6PKZ0AY1M5QCA",
  ]
  return productsWithRounds.includes(productId)
}

const shouldDisplayhot = (productId: string): boolean => {
  // Define the logic to determine if a product should have the Rounds component
  const productsWithRounds = [
    "prod_01HMEZHC09ZFV0H7ARNAXZ33GQ",
    "prod_01HMEWM6F42Y019CTAXHXBRRHA",
    "prod_01HMEV5NZZK1H6PKZ0AY1M5QCA",
  ]
  return productsWithRounds.includes(productId)
}

const ProductCard = ({
  product,
}: // variant = 16,
// itemsToShow = 16,
// ...props
ProductTemplateProps) => {
  // const limitedPlantData = productData.slice(
  //   variant - 1,
  //   variant - 1 + itemsToShow
  // )
  return (
    <>
      {/* <p>{product.id}</p> */}

      <Link
        scroll={false}
        href={`/products/${product?.handle}`}
        className={Styles.productImage}
      >
        {productData.slice(0, 1).map((plant, index) => (
          <div key={plant.title} className="relative group z-0 pb-12">
            {shouldDisplayRounds(product.id) &&
              plant.tag.map((x, i) => (
                <Rounds key={x} variant={x} style={{ top: i * 55 + 10 }}>
                  {x}
                </Rounds>
              ))}

            {shouldDisplayhot(product.id) &&
              plant.tag.map((x, i) => (
                <Rounds key={x} variant="HOT" style={{ top: 2 * 32 }}>
                  HOT
                </Rounds>
              ))}

            <Option product={product} />

            <div className="relative aspect-square z-0 transition-image transition-all delay-700  duration-700 ease-in-out">
              <Image
                src={product?.thumbnail}
                alt={product?.title || "image"}
                objectFit="cover"
                fill
                className="opacity-0 hover:opacity-100 z-[1] duration-300"
              />
              <Image
                src={product?.images[0]?.url}
                alt={plant.title}
                objectFit="cover"
                fill
                className="opacity-100 hover:opacity-0 hover:hidden duration-300"
              />
            </div>
            <div className="pt-4">
              <p className="text-center pb-2 text-xl font-semibold">
                {product?.title}
              </p>
              <div className="flex justify-center">
                <Price id={product.id as string} />
              </div>

              {/* <div className="flex justify-center items-center gap-x-2">
              <p className="line-through text-zinc-400 font-semibold text-caption1 ">
                {plant.price}
              </p>
              <p className="font-bold text-body2 ">{plant.originalPrice}</p>
            </div> */}
            </div>
          </div>
        ))}
      </Link>
    </>
  )
}

export default ProductCard

{
  /* <div className={Styles.main}>
      <div className={Styles.productWrapper}>
        <Link
          scroll={false}
          href={`/products/${product?.handle}`}
          className={Styles.productImage}
        >
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              priority
              fill
              style={{ objectFit: "contain" }}
            />
          )}
        </Link>
        <div className={Styles.content}>
          <p className={Styles.productName}>{product?.title}</p>
          <Price id={product.id as string} />
        </div>
      </div>
      <div className={Styles.btnWrapper}>
        <AddToCartBtn type="icon" product={product} />
      </div>
    </div> */
}

{
  /* <>
{limitedPlantData.map((plant, index) => (
  <div key={plant.title} className="relative group z-0 px-5 pb-12">
    {plant.tag.map((x, i) => (
      <Rounds key={x} variant={x} style={{ top: i * 55 + 10 }}>
        {x}
      </Rounds>
    ))}
    <Option />
    <div className="relative aspect-square z-0 transition-image transition-all delay-700  duration-700 ease-in-out">
      <Image
        src={plant.hoverImage}
        alt={plant.title}
        objectFit="cover"
        fill
        className="opacity-0 hover:opacity-100 z-[1] duration-300"
      />
      <Image
        src={plant.image}
        alt={plant.title}
        objectFit="cover"
        fill
        className="opacity-100 hover:opacity-0 duration-300"
      />
    </div>
    <div className="pt-4">
      <p className="text-center pb-2">{plant.title}</p>
      
      <div className="flex justify-center items-center gap-x-2">
        <p className="line-through text-zinc-400 font-semibold text-caption1 ">{plant.price}</p>
        <p className="font-bold text-body2 ">{plant.originalPrice}</p>
      </div>
    </div>
  </div>
))}
</> */
}

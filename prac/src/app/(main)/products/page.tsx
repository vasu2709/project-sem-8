import TitleBanner from "@/components/common/TitleBanner"
import ProductCategory from "@/containers/ProductCategory"
import ProductsBanner from "@/containers/ProductsBanner"
import ProductsGrid from "@/containers/ProductsGrid"
import StoreTemplate from "@/modules/store/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function ProductsPage() {
  return (
    <>
      <TitleBanner>Shop</TitleBanner>

      <section className="flex justify-center pt-24 lg:flex-row xl:flex-row md:flex-col sm:flex-col flex-col overflow-hidden xl:gap-4 lg:gap-4 md:gap-16 sm:gap-16 gap-16">
        <ProductCategory />
        <ProductsGrid />
      </section>
      {/* <Shop/> */}
    </>
  )
}

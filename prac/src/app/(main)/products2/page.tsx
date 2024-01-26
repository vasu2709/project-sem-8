import TitleBanner from "@/components/common/TitleBanner";
import Shop from "@/containers/AANew/shop/shop/shop";

export default function ProductsPage() {
    return (
      <>
        <TitleBanner>Shop</TitleBanner>
  
        <section className="flex justify-center pt-24 lg:flex-row xl:flex-row md:flex-col sm:flex-col flex-col overflow-hidden xl:gap-4 lg:gap-4 md:gap-16 sm:gap-16 gap-16">
            <Shop/>
        </section>
      </>
    )
  }
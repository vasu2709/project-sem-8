import CategoryHoverNavLink from "./CategoryHoverNavLink"
import CategoryHoverHeading from "./CategoryHoverHeading"
import CatImage1 from "@/public/images/Cat_images/Category-01.jpg"
import CatImage2 from "@/public/images/Cat_images/Category-02.jpg"
import CatImage3 from "@/public/images/Cat_images/Category-03.jpg"
import CatImage4 from "@/public/images/Cat_images/Category-04.jpg"
import CatImage5 from "@/public/images/Cat_images/Category-05.jpg"
import CatImage6 from "@/public/images/Cat_images/Category-06.jpg"
import CategoryHoverImage from "./CategoryHoverImage"
type Props = {}

const CategoryHover = ({}: Props) => {
  return (
    <div className="flex gap-6 py-20 bg-white justify-center">
      <div className="flex flex-col gap-4">
        <CategoryHoverImage
          src={CatImage1}
          alt="Small Plants"
          quantitySize="(1)"
        />
        <div>
          <CategoryHoverHeading>Small Plants</CategoryHoverHeading>
          <div className="">
            <CategoryHoverNavLink url="/products">
              Medium plant 6-9 inch
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Small plant 3-5 inch
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Mini plant
            </CategoryHoverNavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <CategoryHoverImage
          src={CatImage2}
          alt="House Plants"
          quantitySize="(1)"
        />
        <div>
          <CategoryHoverHeading>House Plants</CategoryHoverHeading>
          <div className="">
            <CategoryHoverNavLink url="/products">
              Pet friendly
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Light Bright
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Light Low
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Low Light
            </CategoryHoverNavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <CategoryHoverImage
          src={CatImage3}
          alt="Terrariums"
          quantitySize="(1)"
        />
        <div>
          <CategoryHoverHeading>Terrariums</CategoryHoverHeading>
          <div className="">
            <CategoryHoverNavLink url="/products">
              Medium plant 6-9 inch
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Small plant 3-5 inch
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Mini plant
            </CategoryHoverNavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <CategoryHoverImage
          src={CatImage4}
          alt="Succulents"
          quantitySize="(1)"
        />
        <div>
          <CategoryHoverHeading>Succulents</CategoryHoverHeading>
          <div className="">
            <CategoryHoverNavLink url="/products">
              Binde-worthy series
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Teen Faithpoint
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Love Stories
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Psychological thriller
            </CategoryHoverNavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <CategoryHoverImage
          src={CatImage5}
          alt="Accessories"
          quantitySize="(1)"
        />
        <div>
          <CategoryHoverHeading>Accessories</CategoryHoverHeading>
          <div className="">
            <CategoryHoverNavLink url="/products">
              Pots & Planters
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Potting mix & supplies
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Tees & Totes
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Gift Card
            </CategoryHoverNavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <CategoryHoverImage src={CatImage6} alt="seed" quantitySize="(1)" />
        <div>
          <CategoryHoverHeading>Seeds</CategoryHoverHeading>
          <div className="">
            <CategoryHoverNavLink url="/products">
              Binde-worthy series
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Teen Faithpoint
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Love Stories
            </CategoryHoverNavLink>
            <CategoryHoverNavLink url="/products">
              Psychological thriller
            </CategoryHoverNavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryHover

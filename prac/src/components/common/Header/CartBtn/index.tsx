"use client"
import Link from "next/link"
import CartIcon from "@/public/icons/cart.svg"
import { useCart } from "medusa-react"
import CategoryHover from "@/containers/CategoryHover"

type Props = {}

const CartBtn = (props: Props) => {
  const { cart, totalItems } = useCart()

  return (
    <Link href={"/cart"} scroll={false} className="relative">
      <span className="sr-only">go to cart button</span>
      <CartIcon className="h-5 text-black" />
      <span className="absolute top-0 right-0 bg-offwhite rounded-full w-full aspect-square text-[12px] m-0 flex items-center justify-center translate-x-1/2 -translate-y-1/2">
        {totalItems}
      </span>
    </Link>
  )
}

export default CartBtn

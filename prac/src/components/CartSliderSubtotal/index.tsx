"use client"
import React from "react"
import { formatAmount, useCart } from "medusa-react"
import Button from "../ImageWithButton/button"

type Props = {}

const CartSliderSubtotal = (props: Props) => {
  const { cart } = useCart()

  if (!cart) return null

  return (
    <div className="border-t border-gray/30 flex flex-col pt-2 gap-4">
      <div>
        <div className="flex justify-between items-center text-body2 font-medium">
          <span>Sub Total</span>
          <span className="text-greenDark-50">
            {cart &&
              cart.region &&
              formatAmount({
                amount: cart?.subtotal || 0,
                region: cart?.region,
                includeTaxes: false,
              })}
          </span>
        </div>
        <p className="text-caption2 text-gray">
          Shipping and taxes calculated at checkout.
        </p>
      </div>
      <div className="grid gap-2">
        <Button variant="checkout" as="a" href="/checkout">
          <span className="sr-only">Checkout</span>
          Checkout
        </Button>
        <div className="flex justify-center items-center">
          <p>
            or &nbsp;
            <a href={"/products"} className="text-gray">
              Continue Shopping
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartSliderSubtotal

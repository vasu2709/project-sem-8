// "use client"
// import CartItem from "@/components/CartItem"
// import LoadingSpinner from "@/components/common/LoadingSpinner"
// import useEnrichedLineItems from "@/lib/hooks/use-enrich-line-items"
// import CartIcon from "@/public/icons/cart.svg"
// import { useCart, useMeCustomer } from "medusa-react"
// import style from "./cartitem.module.css"
// const CartItemList = () => {
//   const { cart } = useCart()
//   const { isLoading } = useMeCustomer()
//   const items = useEnrichedLineItems()

//   if (!cart || !cart?.id?.length || isLoading) {
//     return (
//       <div className="flex flex-col pl-5 gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
//         <span>
//           <LoadingSpinner />
//         </span>
//         <span>Loading...</span>
//       </div>
//     )
//   }

//   return (
//     <>
//       {cart.items.length ? (
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               {/* )} */}
//               <th scope="col" className={style.heading}>
//                 Product
//               </th>
//               <th scope="col" className={style.heading}>
//                 Price
//               </th>
//               <th scope="col" className={style.heading}>
//                 Quantity
//               </th>
//               <th
//                 scope="col"
//                 className="heading uppercase tracking-wider text-black"
//               >
//                 Subtotal
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {/* <ul
//                 role="list"
//                 className="divide-y px-2 ml-5 divide-greenDark-50 bg-gray/5 rounded-lg"
//               > */}
//             {items &&
//               items
//                 .sort((a, b) => {
//                   return a.created_at > b.created_at ? -1 : 1
//                 })
//                 .map((item) => <CartItem key={item.id} item={item} />)}
//             {/* </ul> */}
//           </tbody>
//         </table>
//       ) : (
//         <div className="flex flex-col gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
//           <span>
//             <CartIcon className="w-8 h-8" />
//           </span>
//           <p>Your cart is empty</p>
//           <a href="/products" className="text-blue-600">
//             Continue Shopping
//           </a>
//         </div>
//       )}
//     </>
//   )
// }

// export default CartItemList

"use client"
import CartItem from "@/components/CartItem"
import LoadingSpinner from "@/components/common/LoadingSpinner"
import useEnrichedLineItems from "@/lib/hooks/use-enrich-line-items"
import CartIcon from "@/public/icons/cart.svg"
import { useCart, useMeCustomer } from "medusa-react"

const CartItemList = () => {
  const { cart } = useCart()
  const { isLoading } = useMeCustomer()
  const items = useEnrichedLineItems()

  if (!cart || !cart?.id?.length || isLoading) {
    return (
      <div className="flex flex-col pl-5 gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
        <span>
          <LoadingSpinner />
        </span>
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <>
      {cart.items.length ? (
        <ul
          role="list"
          className="divide-y px-2  divide-greenDark-50 bg-gray/5 rounded-lg"
        >
          {items &&
            items
              .sort((a, b) => {
                return a.created_at > b.created_at ? -1 : 1
              })
              .map((item) => <CartItem key={item.id} item={item} />)}
        </ul>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
          <span>
            <CartIcon className="w-8 h-8" />
          </span>
          <p>Your cart is empty</p>
          <a href="/products" className="text-blue-600">
            Continue Shopping
          </a>
        </div>
      )}
    </>
  )
}

export default CartItemList

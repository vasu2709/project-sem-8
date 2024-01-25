import Image from "next/image"
import Link from "next/link"
import { LineItem } from "@medusajs/medusa"
import CounterBtn from "../products/CounterBtn"
import RemoveFromCartBtn from "../products/RemoveFromCartBtn"

type Props = {
  item: LineItem
}

const CartItem = ({ item }: Props) => {
  return (
    // <li className="grid py-4 grid-cols-[25%_1fr] max-sm:grid-cols-[40%_1fr] p-2 gap-4 items-center">
    //           <RemoveFromCartBtn id={item.id} />

    //   <div className="overflow-hidden rounded-md border max-w-[150px] relative border-gray/30 aspect-square">
    //     <Image
    //       src={item.thumbnail}
    //       alt={item.title}
    //       fill
    //       style={{ objectFit: "contain" }}
    //     />
    //   </div>

    //   <div className="flex flex-col gap-2 py-1 justify-between h-full">
    //     <div className="flex justify-between gap-1 items-center">
    //       {/* <p className="text-body1 font-bold">{item.title}</p> */}
    //       <Link
    //         href={`/products/${item.variant.product.handle}`}
    //         className="text-body2  line-clamp-1"
    //       >
    //         {item.title}
    //       </Link>
    //       {/* <Price id={item.id} /> */}
    //       <span className="text-body2 font-medium text-greenDark-50">
    //         ₹{Number((item?.unit_price * item.quantity) / 100).toFixed(2)}
    //       </span>
    //     </div>
    //     <CounterBtn size="sm" cartItem={item} />
    //     <div>
    //     </div>
    //   </div>
    // </li>

    <li className="py-4 flex p-2 gap-4 items-center">
      <RemoveFromCartBtn id={item.id} />

      <div className="overflow-hidden rounded-md border w-[20%] relative border-gray/30 aspect-square">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col w-[70%]  px-2 gap-2 py-1 justify-between h-full">
        <div className="flex items-center justify-between">
          {/* <p className="text-body1 font-bold">{item.title}</p> */}
          <Link
            href={`/products/${item.variant.product.handle}`}
            className="text-body2  line-clamp-1"
          >
            {item.title}
          </Link>
          {/* <Price id={item.id} /> */}
          <span className="text-body2 font-medium text-greenDark-50">
            ₹{Number((item?.unit_price * item.quantity) / 100).toFixed(2)}
          </span>
        </div>
        <CounterBtn size="sm" cartItem={item} />
      </div>
    </li>

    // <div className="grid grid-cols-[122px_1fr] gap-x-4">
    //   <div className="overflow-hidden rounded-md border max-w-[150px] relative border-gray/30 aspect-square">
    //     <Image
    //       src={item.thumbnail}
    //       alt={item.title}
    //       fill
    //       style={{ objectFit: "contain" }}
    //     />
    //   </div>
    //   <div className="flex flex-col justify-between flex-1">
    //     <div className="flex flex-col flex-1">
    //       <div className="flex items-start justify-between">
    //         <div>
    //           <h3 className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4 w-[130px]">
    //             <Link href={`/products/${item.variant.product.handle}`}>
    //               {item.title}
    //             </Link>
    //           </h3>
    //           {/* <LineItemOptions variant={item.variant} /> */}
    //           <span>Quantity: {item.quantity}</span>
    //         </div>
    //         <div className="flex justify-end">
    //           {/* <LineItemPrice region={cart?.region} item={item} style="tight" /> */}
    //           <span>
    //             {Number((item?.unit_price * item.quantity) / 100).toFixed(2)}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex items-end justify-between text-small-regular flex-1">
    //       <div>
    //         <button
    //           className="flex items-center gap-x-1 text-gray-500"
    //           onClick={() => deleteItem(item.id)}
    //         >
    //           <Trash size={14} />
    //           <span>Remove</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default CartItem

// <tbody className="bg-white divide-y divide-gray-200">
//           {data.map((item: DataItem) => (
//             <tr key={item.id}>
//               <td className="px-2 py-4 whitespace-nowrap font-semibold text-gray-500">
//                 <button  onClick={() => onRemove(item.id)}>x</button>
//               </td>
//               {/* {screenSize === 'desktop' && ( */}
//                 <td className="h-40 px-2 py-4 whitespace-nowrap">
//                   <img src={item.thumbnail} alt={item.name} className="w-20 h-20 object-cover" />
//                 </td>
//               {/* )} */}
//               <td className="px-2 py-4 whitespace-nowrap text-black">
//                 {item.name}
//               </td>
//               <td className="px-2 py-4 whitespace-nowrap text-gray-500">
//                 ${item.price.toFixed(2)}
//               </td>
//               <td className="px-2 py-4 whitespace-nowrap text-gray-500">
//                 <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
//                 <span className="mx-2">{item.quantity}</span>
//                 <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//               </td>
//               <td className="px-2 py-4 whitespace-nowrap text-black">
//                 ${(parseFloat(item.price.toString()) * parseFloat(item.quantity.toString())).toFixed(2)}
//               </td>
//             </tr>

//           ))}

//         </tbody>

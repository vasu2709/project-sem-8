import React, { memo } from "react"
import clsx from "clsx"

type Props = {
  className?: any
  title?: string
  isLoading?: boolean
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" })
) & {
    variant?:
      | "shopallplants"
      | "addtocart"
      | "subscribe"
      | "viewcart"
      | "checkout"
      | "image-grid"
      | "login"
  }

const Button = ({
  isLoading,
  variant,
  color,
  as: As = "button",
  className,
  title,
  ...props
}: Props) => {
  return (
    <As
      className={clsx(
        " py-3 px-10 cursor-pointer flex gap-3 transition-all duration-300 text-center items-center text-lg  ",
        {
          "bg-white hover:bg-black  mt-4 border-[1px] hover:text-white border-black justify-center":
            variant === "shopallplants",
          "bg-greenDark-50  hover:bg-white text-white hover:text-black border-greenDark-50 ":
            variant === "addtocart",
          "bg-greenDark-50 hover:bg-slate-800 max-w-full justify-center ":
            variant === "subscribe",
            "bg-[#7fa15a] hover:bg-slate-800 hover:text-white mx-auto w-full mt-6 max-w-full justify-center ":
            variant === "login",
          "bg-greenDark-50 justify-center hover:bg-[#fefefe] hover:text-black  hover:border-black border-[1px] border-greenDark-50":
            variant === "viewcart",
          "bg-black hover:bg-white text-white justify-center hover:text-black border-black border-[1px] hover:border-greenDark-50":
            variant === "checkout",
          "bg-white hover:bg-greenDark-50 hover:text-white ":
            variant === "image-grid",
        }
      )}
      {...props}
    >
      {isLoading ? "Loading..." : <>{props.children}</>}
      {title && <span className="sr-only ">{title}</span>}
    </As>
  )
}

export default memo(Button)

// import React, { ReactNode } from 'react'

// type Props = {
//     children:ReactNode,
//     // buttonName: string;
//     // quantitySize:string,

// }

// const Button = ({children}: Props) => {
//     const Array = React.Children.toArray(children);
//   return (
//     <div className='w-1/2 h-[7dvh] font-medium bg-slate-50 hover:bg-greenDark-50 transition-all flex justify-center items-center hover:text-white'>
//       {/* <button className=''> <span>{Array[0]}<sup>{Array[1]}</sup></span></button> */}
//       <button >
//         <span>{Array[0]}
//         {<sup>{Array[1]}</sup>}</span>
//       </button>

//     </div>
//   )
// }

// export default Button

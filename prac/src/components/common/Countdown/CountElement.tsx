import clsx from "clsx"
import React, { ReactNode } from "react"

type Props = { children: ReactNode; time?: string; id1: string; id2: string }

function CountElement({ children, time, id1, id2 }: Props) {
  return (
    <div>
      <div
        className={clsx("", {
          "lg:text-8xl md:text-7xl text-4xl font-bold": id1 === "comingsoon",
          "rounded-full sm:w-10  md:w-12 md:aspect-square flex flex-col item-center  text-center px-2 py-2 bg-white  text-[#292929]":
            id1 === "homebanner",
        })}
      >
        {children}
      </div>
      <div
        className={clsx("", {
          "lg:text-base md:text-sm text-left text-xs": id2 === "comingsoon",
          "text-xs text-[#333333] text-center pt-3": id2 === "homebanner",
        })}
      >
        {time}
      </div>
    </div>
  )
}

export default CountElement

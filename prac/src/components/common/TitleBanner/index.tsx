import Link from "next/link"
import React, { ReactNode } from "react"

type Props = {
  children: string
}

const TitleBanner = ({ children, ...props }: Props) => {
  // const childrenArray = React.Children.toArray(children)

  return (
    <>
      <section className=" bg-[#f8f8f8] flex flex-wrap justify-around items-center text=[#f9f9f9]">
        <div className="flex flex-wrap w-screen justify-between items-center py-12 ">
          <strong className="flex flex-wrap text-[55px] ">{children}</strong>
          <ul className="flex flex-wrap gap-4 lg:pr-5">
            <Link href="/">
              <li>Home</li>
            </Link>
            <li className="py-1"> &#62; </li>
            <Link href={children}>
              <li>{children}</li>
            </Link>
          </ul>
        </div>
      </section>
    </>
  )
}

export default TitleBanner

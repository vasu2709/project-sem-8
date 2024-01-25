import React from "react"
import Link from "next/link"
import Logoblack from "./LogoBlack"
import Searchbar from "./SearchBar"
import Image from "next/image"

type Props = {}

const Errorpage = (props: Props) => {
  return (
    <div className="container mx-auto flex flex-col w-full items-center mt-10 px-5">
      <div className="-mb-8 md:-mb-16">
        <Logoblack />
      </div>
      <div className="flex items-center justify-center ">
        <div className="overflow-hidden mt-4">
          <Image
            src="https://lustria.g5plus.net/wp-content/uploads/2018/12/img-404.jpg"
            alt=""
            width={200}
            height={150}
            className=""
          />
        </div>
      </div>
      <h1 className="text-greenDark-50 text-4xl md:text-5xl lg:text-8xl mt-8 lg:mt-12 text-center whitespace-nowrap mx-3">
        page not found
      </h1>
      <div className="flex mt-10 md:mt-14">
        <Searchbar />
      </div>
      <p className="mt-7 md:mt-9 mb-3 text-base text-gray-500 text-center">
        You could either{" "}
        <Link
          href="javascript:history.back()"
          className="hover:greenDark-50 text-black hover:underline"
        >
          go back
        </Link>{" "}
        or{" "}
        <Link
          href="/"
          className="hover:greenDark-50 text-black hover:underline"
        >
          go to the home page
        </Link>
      </p>
    </div>
  )
}

export default Errorpage

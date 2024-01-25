import React from "react"
import mail from "@/public/icons/envelope-outline.svg"
type Props = {}

function Email({}: Props) {
  const Icon = mail
  return (
    <div className="container flex justify-center w-screen lg:max-w-[30dvw]  px-4 ">
      <div className="relative w-full">
        <input
          type="text "
          className=" bg-[#F5F5F5] text-lg px-4 transition-all duration-300 placeholder:text-neutral-300 rounded-none focus:ring-1 focus:ring-greenDark-50 focus:bg-transparent focus:text-neutral-300 w-full h-16"
          placeholder="Your email address"
        />

        <Icon className="h-6 absolute top-[30%] right-4 " />
      </div>
    </div>
  )
}

export default Email

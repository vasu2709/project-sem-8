import React from "react"

type Props = {
  children?: React.ReactNode
  title: string
  subtitle: string
}

const Greentext = ({ children, title, subtitle }: Props) => {
  return (
    <div className="flex mt-8 pb-10  w-full flex-col text-center gap-5 flex-wrap  ">
      <p className="font-medium  text-lime-600">{title}</p>
      <p className="text-4xl font-medium  text-center">{subtitle}</p>{" "}
    </div>
  )
}

export default Greentext

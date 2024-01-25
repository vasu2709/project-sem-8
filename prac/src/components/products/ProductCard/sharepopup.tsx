import React, { useEffect, useState } from "react"
import Triangle from "@/public/icons/triangle.svg"
interface CopyPopupProps {
  isOpen: boolean
}

const CopyPopup: React.FC<CopyPopupProps> = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(isOpen)
  useEffect(() => {
    setIsVisible(isOpen)
    const timeoutId = setTimeout(() => {
      setIsVisible(false)
    }, 4500)
    return () => clearTimeout(timeoutId)
  }, [isOpen])

  return (
    <div
      className={`copy-popup flex flex-col gap-0 -mt-2 justify-center duration-500 ease-in absolute ${
        isVisible ? "visible" : "hidden"
      } `}
    >
      <Triangle className="h-6 fill-black p-0 mb-[-10px]" />
      <div className="bg-black w-fit py-0.5 p-1.5 text-white  inline  text-sm">
        Copied!
      </div>
    </div>
  )
}

export default CopyPopup

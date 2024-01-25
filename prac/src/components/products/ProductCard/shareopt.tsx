"use client"
import React, { useState, useEffect, ReactNode } from "react"
import CopyPopup from "./sharepopup"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import clsx from "clsx"

type Props = { children: ReactNode; product?: PricedProduct; variant: string }

const ShareOpt = ({ children, product, variant }: Props) => {
  const [shareableLink, setShareableLink] = useState<string | null>(null)
  const [isCopyPopupOpen, setIsCopyPopupOpen] = useState(false)

  useEffect(() => {
    const currentLocation = window.location.href
    setShareableLink(currentLocation)
  }, [])

  const isProductOverviewPage =
    typeof window !== "undefined" && window.location.pathname === "/products"

  const handleOptClick = () => {
    if (isProductOverviewPage) {
      // Set custom link for product overview page
      navigator.clipboard.writeText(
        `${window.location.origin}/products/${product?.handle}`
      )
      setIsCopyPopupOpen(true)
      console.log("na hoy")
    } else if (shareableLink) {
      navigator.clipboard
        .writeText(shareableLink)
        .then(() => {
          console.log("Link copied to clipboard:", shareableLink)
          setIsCopyPopupOpen(true)
        })

        .catch((error) => {
          console.error("Failed to copy link to clipboard:", error)
        })
    }
  }

  return (
    <div className="group">
      <div
        className={clsx("", {
          "h-[48px] aspect-square bg-white  flex justify-center items-center  text-slate-700 hover:text-white hover:bg-black transition-all ":
            variant === "card",
          "bg-black hover:bg-white text-white justify-center hover:text-black border-black border-[1px] hover:border-greenDark-50 p-3.5":
            variant === "modal",
          "": variant === "page",
        })}
        onClick={handleOptClick}
        // style={{ cursor: 'pointer' }}
      >
        <span className=" font-bold text-sm">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg> */}
          {children}
        </span>
      </div>

      <CopyPopup isOpen={isCopyPopupOpen} />
    </div>
  )
}

export default ShareOpt

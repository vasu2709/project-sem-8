import React, { ReactNode } from "react"
import Button from "./button"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Link from "next/link"

interface ImageWithButtonProps {
  src: StaticImport | string
  alt: string
  buttonName: string
  quantitySize: string
}

const ImageWithButton: React.FC<ImageWithButtonProps> = ({
  src,
  alt,
  buttonName,
  quantitySize,
}) => (
  <div className="relative group overflow-hidden">
    <Image className="w-full h-full group-hover:scale-105 duration-500 transition-all" src={src} alt={alt} />
    <Link href='/products'>
    <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center pb-4">
      <Button variant="image-grid">
        <span>
          {buttonName}
          {<sup>{quantitySize}</sup>}
        </span>
      </Button>
    </div>
    </Link>
  </div>
)

export default ImageWithButton

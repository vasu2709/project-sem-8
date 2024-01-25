import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface ImageProps {
    src: StaticImport | string
    alt: string
    quantitySize: string
  }
  
  const CategoryHoverImage: React.FC<ImageProps> = ({
    src,
    alt,
  }) => (
    <div className="relative">
      <Image className="w-40 h-40" src={src} alt={alt} />
    </div>
  )

export default CategoryHoverImage
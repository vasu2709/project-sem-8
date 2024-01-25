import Categories from '@/components/Categories'
import React from 'react'

type Props = {}

const ProductCategory = (props: Props) => {
  return (
    <div className=' lg:w-[27dvw]  flex flex-col md:w-full  lg:mx-0 xl:mx-0 pr-4  '>
          {/* <span><h4 className='text-xl'>Catagories</h4></span> */}
          <Categories/>
        </div>
  )
}

export default ProductCategory
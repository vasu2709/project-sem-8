import React from 'react'
import Plantstype from './Plantstype'

type Props = {}

const Plantstypenames = (props: Props) => {
  return (
    <>
        <div className="hidden lg:block ">
        <p className="font-bold pb-8 text-2xl ">Categories</p>
        <div className='flex flex-col gap-y-8'>
          <Plantstype count='8' >House Plants </Plantstype>
          <Plantstype count='4' >Potter Plants </Plantstype>
          <Plantstype count='1' >Seeds </Plantstype>
          <Plantstype count='13' >Small Plants </Plantstype>
          <Plantstype count='3' >Succulents </Plantstype>
          <Plantstype count='1' >Terrariums </Plantstype>
        </div>
      </div>
      <div className="lg:hidden ">
        <details>
          <summary className="font-bold  text-2xl ">Categories</summary>
          <div className='flex flex-col gap-y-8'>
            <Plantstype count='8' >House Plants </Plantstype>
            <Plantstype count='4' >Potter Plants </Plantstype>
            <Plantstype count='1' >Seeds </Plantstype>
            <Plantstype count='13' >Small Plants </Plantstype>
            <Plantstype count='3' >Succulents </Plantstype>
            <Plantstype count='1' >Terrariums </Plantstype>
          </div>
        </details>
      </div>
    </>
  )
}

export default Plantstypenames
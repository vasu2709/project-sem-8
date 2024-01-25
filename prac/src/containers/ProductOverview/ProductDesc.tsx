'use client'
import React, { useState } from 'react'

type Props = {}

const ProductDesc = (props: Props) => {

  const [showFirstDiv, setShowFirstDiv] = useState(true); // Set to true to open by default
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [clickedItem, setClickedItem] = useState('Description');

  const toggledes = () => {
    setClickedItem('Description');
  }

  const togglereview = () => {
    setClickedItem('Reviews (0)');
  }

  const toggleFirstDiv = () => {
    // Check if the first div is already open, then close it
    if (showFirstDiv) {
      setShowFirstDiv(false);
      setClickedItem('');
    } else {
      setShowFirstDiv(true);
      setShowSecondDiv(false);
      setClickedItem('Description');
    }
  };

  const toggleSecondDiv = () => {
    setShowSecondDiv(true);
    setShowFirstDiv(false);
    setClickedItem('Reviews (0)');
  };

  return (
    <>
      <div className="des">
        <div className="flex flex-col">
          <ul className='flex xl:flex lg:flex-wrap md:flex-wrap sm:flex-warp flex-wrap text-bold text-[18px] mb-[45px] pb-[15px] gap-10'>
            <li className={`cursor-pointer ${clickedItem === 'Description' ? 'text-black' : 'text-slate-500'}`} onClick={() => {
              toggleFirstDiv();
              toggledes();
            }}
            >Description</li>
            <li className={`cursor-pointer ${clickedItem === 'Reviews (0)' ? 'text-black' : 'text-slate-500'}`} onClick={() => {
              toggleSecondDiv();
              togglereview();
            }}>Reviews (0)</li>
          </ul>
          <hr />
          {showFirstDiv &&
            (<p className='min-w-fit text-[#ababab]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam saepe laudantium, cum asperiores aperiam ratione aliquam suscipit consectetur laborum harum quia soluta consequatur. Animi repellendus quisquam mollitia adipisci quae assumenda in officiis dolor sapiente obcaecati a dolorum inventore deleniti non perspiciatis esse numquam </p>
            )}
          {showSecondDiv &&
            (<div>
              <div>
                <h1 className='font-edmondsans text-lg font-medium leading-normal tracking-normal letter-normal mb-4 text-gray-700'>Reviews</h1>
                <p className='mb-3 text-[16px] text-[#777777]'>There are no reviews yet.</p>
              </div>
              <div>
                <h1 className='font-edmondsans text-lg font-medium leading-normal tracking-normal letter-normal mb-4 text-gray-700'>Be the first to review <q>Aliquam sit amet</q> </h1>
                <p className='mb-3 text-[16px] text-[#777777]'>You mus be logged in to review</p>
              </div>
            </div>
            )}
        </div>
      </div>
    </>
  )
}

export default ProductDesc

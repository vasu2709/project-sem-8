import React from "react"

type Props = {}

function NewArrivalElement({}: Props) {
  return (
    <div>
      <details className="flex font-bold items-center text-base duration-300  transition-all text-[#ABABAB] hover:text-black">
        <summary className="text-3xl pt-[4px]" style={{ direction: "rtl" }}>
          More
        </summary>
        <div>
          <p className="text-greenDark-50 hover:text-black text-base ">
            New Arrival
          </p>
          <p className="text-greenDark-50 hover:text-black text-base ">Sale</p>
        </div>
      </details>
    </div>
  )
}

export default NewArrivalElement

// import SwiperSale from '@/containers/SwiperSale/SwiperSale';
// import Slide from '@/containers/swiper/Swiper';
// import React, { useState } from 'react'
// import '../../components/NewArrivalTitle/newarrival.component.css'

// type Props = {}

// function NewArrivalElement({}: Props) {
//   const [activeTab, setActiveTab] = useState('All Plants');

//   const handleTabClick = (tabName: string) => {
//     setActiveTab(tabName);

//     console.log(`Clicked on ${tabName}`);
//   };
//   return (
//     <div>
//         <details  className='flex items-center text-base  transition-all text-[#ABABAB] hover:text-black'>
//             <summary className='text-3xl'  style={{ direction: 'rtl'}}>More</summary>
//             <div>
//                 <p className={`text-greenDark-50 hover:text-black text-base ${activeTab === 'New Arrival' ? 'active' : ''}`}>
//                   <a
//               href="#"
//               className={`text-[#ABABAB] hover:text-black font-bold md:text-4xl`}
//               onClick={() => handleTabClick('New Arrival')}
//             >New Arrival</a>

//                 </p>
//                 <p className={`text-greenDark-50 hover:text-black text-base ${activeTab === 'Sale' ? 'active' : ''}`}>
//                   <a
//               href="#"
//               className={`text-[#ABABAB] hover:text-black font-bold md:text-4xl`}
//               onClick={() => handleTabClick('Sale')}
//             >Sale</a>

//             </p>
//             </div>
//             {activeTab === 'New Arrival' && <Slide/>}
//       {activeTab === 'Sale' && <SwiperSale/>}
//         </details>
//     </div>
//   )
// }

// export default NewArrivalElement

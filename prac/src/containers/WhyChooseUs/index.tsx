






import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import pic1 from '../../../public/about_image/1stgardencare.png'
import pic2 from '../../../public/about_image/2ndplantrenovation.png'
import pic3 from '../../../public/about_image/3rdseedsupply.png'
import pic4 from '../../../public/about_image/4thwateringgarden.png'
import pic5 from '../../../public/about_image/plantabout.jpg'


function App() {
  return (
    <>
      <div className="grid gap-3 pb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="justify-center text-center grid-span-1 justify-items-center ">
          <Image className="mx-auto pb-7 " src={pic1} alt="Photo 1" />
          <h3 className="text-2xl font-bold text-black pb-5 hover:text-greenDark-50">
            Garden Care
          </h3>
          <p className=" text-base  pb-2 text-grayDark-50">
            Let’s find a plant combination to suit{" "}
          </p>
          <p className="text-base text-grayDark-50">
            your border enjoy your time.
          </p>
        </div>

        <div className="justify-center text-center grid-span-1 justify-items-center">
          <Image className="mx-auto pb-7" src={pic2} alt="Photo 1" />
          <h3 className="text-2xl font-bold text-black pb-5 hover:text-greenDark-50">
            Plant Renovation
          </h3>
          <p className="text-base pb-2 text-grayDark-50">
            Let’s find a plant combination to suit{" "}
          </p>
          <p className="text-base text-grayDark-50">
            your border enjoy your time.
          </p>
        </div>

        <div className="justify-center text-center grid-span-1 justify-items-center">
          <Image className="mx-auto pb-7" src={pic3} alt="Photo 1" />
          <h3 className="text-2xl font-bold text-black pb-5 hover:text-greenDark-50">
            Seed Supply
          </h3>
          <p className="text-base pb-2 text-grayDark-50">
            Let’s find a plant combination to suit{" "}
          </p>
          <p className="text-base text-grayDark-50">
            your border enjoy your time.
          </p>
        </div>

        <div className="justify-center text-center grid-span-1 justify-items-center">
          <Image className="mx-auto pb-7" src={pic4} alt="Photo 1" />
          <h3 className="text-2xl font-bold text-black pb-5 hover:text-greenDark-50">
            Watering Graden
          </h3>
          <p className="text-base pb-2 text-grayDark-50">
            Let’s find a plant combination to suit{" "}
          </p>
          <p className="text-base text-grayDark-50">
            your border enjoy your time.
          </p>
        </div>
      </div>
      <section>
        <div className="relative mx-auto overflow-hidden text-center transition-all bg-black group w-fit ">
          <div className="absolute top-1/2 h-[2px] w-full rotate-45 z-10  ">
            <div className=" bg-white  h-[1px] w-full group-hover:translate-y-80 opacity-0 group-hover:opacity-100 -translate-x-2 transition-all duration-500  z-10"></div>
            <div className=" bg-white  h-[1px] w-full group-hover:-translate-y-80 opacity-0 group-hover:opacity-100 translate-x-12 transition-all duration-500 z-10"></div>
          </div>
          <Image
            src={pic5}
            alt=""
            className="mx-auto transition-all hover:opacity-75"
          />
        </div>

        <div className="   pt-11 sm:text-3xl lg:text-3xl text-greenDark-50">
          <h1 className="text-center ">
            “ We’re going to make the experience of discovering the perfect
            potted plants as wonderful as the plants themselves.“
          </h1>
        </div>
      </section>
    </>
  )
}

export default App

// import Image from "next/image"
// import React from "react"
// import style from "./whychooseus.module.css"
// import { whyChooseUs } from "@/lib/constData"
// import ServiceCard from "@/components/ServiceCard"

// type Props = {}

// const WhyChooseUs = (props: Props) => {
//   return (
//     <section className="pt-20">
//       <div className={style.container}>
//         <div className={style.contentWrapper}>
//           <div className={style.headingWrapper}>
//             <h3 className="text-heading4">{whyChooseUs.heading}</h3>
//             <p>{whyChooseUs.description}</p>
//           </div>
//           <div className={style.servicesWrapper}>
//             {whyChooseUs &&
//               whyChooseUs.services?.slice(0, 4).map((item) => {
//                 return <ServiceCard key={item.id} data={item} />
//               })}
//           </div>
//         </div>
//         <div className={style.imageWrapper}>
//           <div className={style.image}>
//             <Image
//               src={whyChooseUs.image}
//               alt="why choose us image"
//               fill
//               style={{ objectFit: "cover" }}
//               className="z-10 rounded-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WhyChooseUs

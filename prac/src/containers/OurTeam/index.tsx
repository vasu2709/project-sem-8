import React from "react"
import Image from "next/image"
import Instasvg1 from "@/public/icons/insta.svg"
import Instasvg2 from "@/public/icons/github.svg"
import Instasvg3 from "@/public/icons/linkdin.svg"
import { members } from "@/lib/constData"
import AnimatedAlpha from "./CountUpAlphabet"
import style from "./countup.module.css"
import Rounds from "@/components/products/ProductCard/rounds"

const OurTeam = () => {
  return (
    <section>
      <div className="flex flex-col pb-10 sm:pt-0 md:pt-10 lg:pt-10 lg:flex-row md:items-center">
        <div className="container mx-auto ">
          <div className="flex gap-3 text-center justify-center">
            <AnimatedAlpha
              requiredAlphabets={["O", "U", "R", " ", "T", "E", "A", "M"]}
            />
          </div>
          <div className="">
            <p className={style.heading}>
              We are a group of passionate developers who love to create amazing
              web applications using the latest technologies. We are always
              eager to learn new skills and take on new challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 pb-5 md:grid-cols-2 lg:grid-cols-4 ">
            {/* First Row (4 boxes) */}
            {members.slice(0, 4).map((member, index) => (
              <div
                key={index}
                className="bg-transparent relative border-[3px] border-transparent hover:border-black duration-300 p-4 flex overflow-hidden items-center group pt-10 flex-col rounded-lg"
              >
                <div className="absolute top-0 left-1 z-10 group-hover:opacity-100 opacity-0 duration-700">
                  {member.tag === "TL" && <Rounds variant="TL">TL</Rounds>}
                </div>
                <Image
                  src={member.photo}
                  alt={`Image of ${member.name}`}
                  className="object-cover mx-auto mb-4 rounded-full"
                />
                {/* Add the rotate effect for the bottom shape */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 z-10 duration-300 translate-y-10 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 rotate-6 group-hover:rotate-0 "
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#86A062"
                    fillOpacity="1"
                    d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,138.7C672,149,768,203,864,208C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
                <h2 className="text-2xl font-bold text-center">
                  {member.name}
                </h2>
                <br />
                <div className="text-grayDark-50 group-hover:text-greenDark-50">
                  Full Stack Devloper
                </div>
                <div className="flex w-[80%] justify-evenly py-8 pt-10 opacity-0 duration-700 z-0 translate-y-10 group-hover:-translate-y-6 group-hover:opacity-100 text-3xl space-x-0">
                  <a
                    className="transition-transform transform hover:scale-[1.3] duration-300 fill-red-500"
                    href={`https://www.instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Instasvg1 />
                  </a>
                  <a
                    className="transition-transform transform hover:scale-[1.3] duration-500 fill-black"
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Instasvg2 />
                  </a>
                  <a
                    className="transition-transform transform hover:scale-[1.3] duration-700 fill-blue-500"
                    href={`https://www.linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Instasvg3 />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Second Row (3 boxes) */}
          <div className="grid grid-cols-1 gap-4 pb-20 md:grid-cols-2 lg:grid-cols-3 lg:px-40 ">
            {members.slice(4, 7).map((member, index) => (
              <div
                key={index}
                className="bg-transparent relative border-[3px] border-transparent hover:border-black duration-300 p-4 flex overflow-hidden items-center group pt-10 flex-col rounded-lg "
              >
                <Image
                  src={member.photo}
                  alt={`Image of ${member.name}`}
                  className="object-cover mx-auto mb-4 rounded-full"
                />
                {/* Add the rotate effect for the bottom shape */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 z-10 duration-300 translate-y-10 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 rotate-6 group-hover:rotate-0 "
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#86A062"
                    fillOpacity="1"
                    d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,138.7C672,149,768,203,864,208C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
                <h2 className="text-2xl font-bold text-center">
                  {member.name}
                </h2>
                <br />
                <div className="text-grayDark-50 group-hover:text-greenDark-50">
                  Full Stack Devloper
                </div>

                <div className="flex w-[80%] justify-evenly py-10 opacity-0 duration-700 z-0 translate-y-10 group-hover:-translate-y-6 group-hover:opacity-100 text-3xl space-x-0">
                  <a
                    className="transition-transform transform hover:scale-[1.3] duration-300  fill-red-500 "
                    href={`https://www.instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Instasvg1 />
                  </a>
                  <a
                    className="transition-transform transform hover:scale-[1.3] duration-500 fill-black"
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Instasvg2 />
                  </a>
                  <a
                    className="transition-transform transform hover:scale-[1.3] duration-700 fill-blue-500"
                    href={`https://www.linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Instasvg3 />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam

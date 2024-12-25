"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

const ExamsLargeScreen = ({ examRequirement }) => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
 
    <div className="grid grid-cols-2 max-w-screen-xl mx-auto gap-5 justify-center">
      {examRequirement.map((require, index) => (
        <div
          key={`examlist${index}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`shadow-lg p-14  rounded-3xl duration-1000 ${
            hoveredIndex === index ? " h-auto pb-20" : "pb-0 h-fit"
          }`}
        >
          <div className="text-[#004AC8]">
            <h1 className=" mb-6 font-semibold text-xl sm:text-2xl lg:text-4xl mb-3lg:text-[40px] md:text-[30px] text-[45px] leading-tight mt-3">
              {require?.title}
            </h1>

            <div
              className={`${
                hoveredIndex === index ? "h-auto opacity-100" : "h-0 opacity-0"
              } duration-500`}
            >
              <ul className="list-disc ml-7 pl-5 space-y-2 ">
                {require?.description?.map((list, i) => (
                  <li key={`list${i}`}>{list}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-end w-50">
            <Image
              alt={require?.title}
              width={100}
              height={100}
              src="https://i.ibb.co.com/r6XjskD/blue-arrow.gif"
              className={`arrow z-20 w-[70px] relative bottom-0 duration-1000 ${
                hoveredIndex === index ? "w-0 opacity-0 " : " opacity-100"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamsLargeScreen;

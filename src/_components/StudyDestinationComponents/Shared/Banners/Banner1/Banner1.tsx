'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Banner1 = ({country}:{country:string}) => {
    const [bgHover, setBgHover] = useState<number>(0);

    return (
        <div
      className="  "
      onMouseEnter={() => setBgHover(1)}
      onMouseLeave={() => setBgHover(0)}
    >
      <div className="relative w-full mx-auto flex flex-col items-center justify-center">
        <div className="w-full">
          {bgHover == 1 ? (
            <Image width={100} height={100} className="xl:h-[700px] rounded-3xl w-full" src='https://i.ibb.co.com/xDWsG60/UK-Hero-Hover-BG-2.png' alt="" />
          ) : (
            <Image width={100} height={100} className="xl:h-[700px] rounded-3xl w-full" src='https://i.ibb.co.com/TcSds2P/UK-Hero-Hover-BG-1.png' alt="" />
          )}
        </div>
        <div className="absolute bottom-0 max-w-7xl mx-auto">
          <Image width={100} height={100} className="rounded-3xl w-auto h-auto" src='https://i.ibb.co.com/n1P7qZJ/UK-Hero-Hover-1.png' alt="" />
        </div>
        <div className="absolute z-10 top-[10%] flex flex-col items-center justify-center">
          <h1
            className={`text-2xl md:text-4xl lg:text-6xl poppins font-bold ${
              bgHover == 1 ? "text-white" : "text-[#00399F]"
            }`}
          >
            Study in the {country}
          </h1>
          <p
            className={`mt-4 text-xs w-[80%] md:text-lg font-semibold md:w-3/5 text-center  ${
              bgHover == 1 ? "text-white" : "text-[#1F1F1F]"
            }`}
          >
            Here’s a comprehensive guide for all students who want to study in
            the {country}.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Banner1;
'use client'
import { useEffect, useState } from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import countries from '../../../assets/json/countries.json'
import Link from "next/link";
import Image from "next/image";
const Home_Destination = () => {
  const [cardIndex, setCardIndex] = useState<number>(100);
  const [showAll, setShowAll] = useState(false);
  const [width, setWidth] = useState<number>(1024);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const displayedCountries = showAll ? countries : countries.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <div
      className="poppins flex flex-col py-10 lg:my-20 mt-0 mb-20   relative overflow-hidden lg:overflow-visible"
      
    >
      <div className="text-white text-center space-y-5 py-5">
        <div
          className={`absolute z-5 top-[-120px] hidden lg:flex ${width <= 1240 ? "right-[8%]" : "right-[27%]"} `}
        >
          <Image width={100} height={100} src='https://i.ibb.co.com/nDCNBSC/planepath.png' alt="" priority className={`${showAll ? "md:hidden" : " "} w-auto h-auto`} />
        </div>
        <div className="bg-[#21E5E5] bg-clip-text py-2 text-transparent text-4xl font-bold">
          <h1>Choose Your Destination</h1>
        </div>
        <h1 className="text-5xl font-bold pb-10">We’ll Plan the Rest</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-36 my-10 max-w-7xl mx-auto p-5 lg:p-0">
          {displayedCountries.map((country, index) => (
            <Link href={country?.to}
              key={index}
              onMouseEnter={() => setCardIndex(index)}
              onMouseLeave={() => setCardIndex(100)}
              className="bg-[#08183100] md:w-3/4 lg:w-4/6 md:mx-auto rounded-3xl h-[250px] relative"
            >
              <div
                style={{
                  transform: cardIndex === index ? "rotate(-10deg)" : "none",
                  transformOrigin: "bottom right",
                  transition: "transform 0.5s ease",
                }}
              >
                <Image width={100} height={100}
                  className={`${cardIndex === index && "rotate-bg"} h-[300px] scale-x-[-1] w-full rounded-3xl bg-white`}
                  src={country.img}
                  alt=""
                />
              </div>
              <div
                style={{
                  transform:
                    cardIndex === index
                      ? "rotate(10deg) translateY(40px) translateX(30px)"
                      : "none",
                  transformOrigin: "bottom left",
                  transition: "transform 0.5s ease",
                }}
                className={`${cardIndex === index
                    ? "bg-[#08214b] z-20"
                    : "bg-[#081831] z-10"
                  } absolute top-0 left-0 flex flex-col justify-around items-center w-full h-[300px] rounded-3xl`}
              >
                <h1 className="text-[#88F3D0] text-2xl text-center font-bold">
                  {country.name}
                </h1>
                <button className="w-fit bg-[#2563EB] rounded-full text-white p-2">
                  <LiaGreaterThanSolid />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={toggleShowAll}
        className="relative z-20 font-semibold bg-white px-16 py-2 mt-32 rounded-3xl mx-auto w-fit cursor-pointer"
      >
        {showAll ? "See less" : "Explore More"}
      </button>
    </div>
  );
};

export default Home_Destination;

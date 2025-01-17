"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Define an array of colors
const colors = ["bg-[#59C3CF]", "bg-[#E2635E]", "bg-[#A881F3]", "bg-[#58B1EA]"];

const RequirementCard = ({ require }) => {
  const description = require?.description || ""; // Fallback to empty string if undefined

  // Function to split by the first 100 letters
  const shortDescription = description.split("").slice(0, 200).join("");

  // Randomly select a color from the colors array
  const randomColor = colors[Math.floor(Math.random() * 4)];

  return (
    <div
      className={`${randomColor} pt-14 px-10  rounded-3xl transition-transform ease-in-out  duration-1000 group`}
    >
      <div className="text-white ">
        <h1 className="font-semibold text-2xl lg:text-4xl mb-3 ">
          {require?.title}
        </h1>
        <p className="break-words font-light visible group-hover:hidden h-auto group-hover:h-0 opacity-100 group-hover:opacity-0">
          {shortDescription}
        </p>
        <p className="h-0 overflow-hidden group-hover:h-auto  opacity-0 group-hover:opacity-100 duration-1000 break-words font-light lg:text-base text-sm">
          {require?.description}
        </p>
      </div>

      <div className="flex justify-end items-end ">
        <Image
          alt={require?.title || "Image related to requirement"} // More descriptive alt text
          src={require?.img}
          width={100}
          height={100}
          className="z-20 w-auto group-hover:w-full mt-5  group-hover:mt-12 duration-700"
        />
      </div>
    </div>
  );
};

const Requirement_Card_LargeScreen = ({ requirement }) => {
  const midIndex = Math.ceil(requirement.length / 2);
  const firstColumn = requirement.slice(0, midIndex);
  const secondColumn = requirement.slice(midIndex);

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-24 pb-36">
      {/* First Column */}
      <div className="flex flex-col gap-5">
        {firstColumn?.map((require) => (
          <RequirementCard require={require} key={require?._id} />
        ))}
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-5">
        {secondColumn?.map((require) => (
          <RequirementCard require={require} key={require?._id} />
        ))}
      </div>
    </div>
  );
};

export default Requirement_Card_LargeScreen;

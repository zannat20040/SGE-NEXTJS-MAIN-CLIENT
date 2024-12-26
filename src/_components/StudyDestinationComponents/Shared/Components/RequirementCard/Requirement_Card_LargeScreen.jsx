"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Define an array of colors
const colors = [
  "bg-[#59C3CF]",
  "bg-[#E2635E]",
  "bg-[#A881F3]",
  "bg-[#58B1EA]"
];

const RequirementCard = ({ require }) => {
  const shortDescription = require?.description?.split(" ").slice(0, 50).join(" ");
  
  // Randomly select a color from the colors array
  const randomColor = colors[Math.floor(Math.random() * 4)];
  
  return (
    <motion.div 
      key={require?._id} 
      initial={{ height: 'fit' }}
      animate={{ height: 'auto' }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      className={`h-fit pt-14 px-10 rounded-3xl group ${randomColor}`} // Apply the random color
    > 
      <div className="text-white">
        <h1 className="font-semibold text-2xl lg:text-4xl mb-3">
          {require?.title}
        </h1>
        
        {/* Short description visible initially */}
        <p className="font-light h-full group-hover:hidden duration-500">
          {shortDescription}
        </p>
        
        {/* Full description hidden initially, shown on hover */}
        <motion.p
          className="font-light lg:text-base text-sm h-0 overflow-hidden  transition-all duration-300 ease-in-out group-hover:h-full "
        >
          {require?.description}
        </motion.p>
      </div>

      <div className="flex justify-end items-end mt-10 h-60">
        <Image
          alt={require?.title || "Image related to requirement"} // More descriptive alt text
          src={require?.img}
          width={100}
          height={100}
          className="relative bottom-0 right-0 h-full w-auto"
        />
      </div>
    </motion.div>
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
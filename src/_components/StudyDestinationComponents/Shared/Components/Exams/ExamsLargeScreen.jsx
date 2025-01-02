"use client";
import { useState } from "react";
import Image from "next/image";

// ExamCard Component (Reusable)
const ExamCard = ({ exam, index, columnIndex, hoveredIndex, setHoveredIndex }) => {
  // Generate a unique index for each card based on its column and index
  const uniqueIndex = `${columnIndex}-${index}`;

  return (
    <div
      key={`examlist${exam?._id}`}
      onMouseEnter={() => setHoveredIndex(uniqueIndex)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`shadow-lg p-14 rounded-3xl duration-1000 ${
        hoveredIndex === uniqueIndex ? "h-auto pb-20" : "pb-0 h-fit"
      }`}
    >
      <div className="text-[#004AC8]">
        <h1 className="break-words mb-6 text-center md:text-left font-semibold text-xl sm:text-2xl lg:text-4xl mb-3lg:text-[40px] md:text-[30px] text-[45px] leading-tight mt-3">
          {exam?.title}
        </h1>

        <div
          className={`${
            hoveredIndex === uniqueIndex ? "h-auto opacity-100" : "h-0 opacity-0"
          } duration-700`}
        >
          <ul className="list-disc ml-7 pl-5 space-y-2">
            {exam?.description?.map(
              (list, i) =>
                list !== "" && (
                  <li className="break-words" key={`list${i}`}>
                    {list}
                  </li>
                )
            )}
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-end w-50">
        <Image
          alt={exam?.title}
          width={100}
          height={100}
          src="https://i.ibb.co/r6XjskD/blue-arrow.gif"
          className={`arrow z-20 w-[70px] relative bottom-0 duration-1000 ${
            hoveredIndex === uniqueIndex ? "w-0 opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

// ExamsLargeScreen Component (Parent)
const ExamsLargeScreen = ({ examRequirement }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Split the examRequirement into two columns
  const midIndex = Math.ceil(examRequirement.length / 2);
  const firstColumn = examRequirement.slice(0, midIndex);
  const secondColumn = examRequirement.slice(midIndex);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-start">
      {/* First Column */}
      <div className="flex flex-col gap-5">
        {firstColumn?.map((require, index) => (
          <ExamCard
            key={require?._id}
            exam={require}
            index={index}
            columnIndex={0} // First column index is 0
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-5">
        {secondColumn?.map((require, index) => (
          <ExamCard
            key={require?._id}
            exam={require}
            index={index}
            columnIndex={1} // Second column index is 1
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ExamsLargeScreen;

"use client";
import { useEffect, useState } from "react";
import Responsive_Exams from "./Responsive_Exams";
import ExamsLargeScreen from "./ExamsLargeScreen";

const Exams = ({ country, examRequirement }) => {
  return (
    <div className=" m-0 text-[#3B82F6] bg-[#F1F8FF] px-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="px-5 pt-10 mb-10  lg:pt-24 text-center font-semibold text-3xl md:text-4xl lg:text-6xl text-black">
          Exams Required to Study in {country}
        </h1>
        <ExamsLargeScreen examRequirement={examRequirement} />
      </div>
    </div>
  );
};

export default Exams;

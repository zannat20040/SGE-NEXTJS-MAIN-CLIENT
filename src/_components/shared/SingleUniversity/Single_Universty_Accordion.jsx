"use client";
import { useState } from "react";
import { LuTriangle } from "react-icons/lu";

const Single_Universty_Accordion = ({ university }) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (key) => {
    setIsOpen((prevIdx) => (prevIdx === key ? null : key));
  };

  const UniversityInfo = ({ data }) => {
    // Convert object to entries and remove specific indexes (e.g., 2 and 5)
    const entries = Object.entries(data)
      .slice(0, 9)
      .filter((_, index) => index !== 0 && index !== 4);

    return (
      <div>
        {/* {entries.map(([key, value]) => (
          <div key={key} className="mb-4">
            <div className="w-full font-poppins h-auto rounded-lg pb-0">
              <div key={key} className="my-3">
                <button
                  onClick={() => toggle(key)}
                  className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
                >
                  <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                    {key}
                  </span>
                  <span
                    className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                      isOpen === key ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                    }`}
                  >
                    <LuTriangle
                      className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                        isOpen === key && "!rotate-180 text-white"
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen === key
                      ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pr-4 text-sm">
                    {Array.isArray(value) ? value.join(", ") : value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))} */}

        {/* overview */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("overview")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Overview
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "overview" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "overview" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "overview"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* history */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("overview")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Overview
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "overview" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "overview" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "overview"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* ranking & achievement */}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("overview")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Overview
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "overview" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "overview" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "overview"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* department & faculty*/}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("overview")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Overview
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "overview" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "overview" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "overview"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* fee*/}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("overview")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Overview
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "overview" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "overview" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "overview"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
           {/* service*/}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("overview")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Overview
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "overview" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "overview" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "overview"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
           {/* accommodation*/}
        <div className="mb-4">
          <div className="w-full font-poppins h-auto rounded-lg pb-0">
            <div className="my-3">
              <button
                onClick={() => toggle("overview")}
                className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
              >
                <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F] text-left">
                  Overview
                </span>
                <span
                  className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                    isOpen === "overview" ? "bg-[#00399F]" : "bg-[#e1e1e1]"
                  }`}
                >
                  <LuTriangle
                    className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                      isOpen === "overview" && "!rotate-180 text-white"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === "overview"
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-sm">
                  {university?.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  };

  return (
    <div>
      {university ? (
        <UniversityInfo data={university} />
      ) : (
        <p>No university data available.</p>
      )}
    </div>
  );
};

export default Single_Universty_Accordion;

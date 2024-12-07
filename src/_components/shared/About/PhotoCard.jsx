"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export default function PhotoCard({ data }) {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 justify-between items-center ">
      {data?.map((data, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-white rounded-md shadow-lg group h-full hover:shadow-xl"
        >
          <div>
            <div className="group-hover:scale-90 duration-300 transition-all ">
              <Image
                width={100}
                height={100}
                className="w-full h-[200px] rounded-md"
                src={data?.url}
              />
            </div>
            <div className="p-5">
              <p className="text-xl poppins-semibold">{data?.title}</p>
              <p className="text-gray-500 my-4 ">{data?.description}</p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <Button className="rounded  poppins-normal  w-full bg-light-blue-900  border border-light-blue-900 hover:text-light-blue-900 hover:bg-white ">
              Read Full
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

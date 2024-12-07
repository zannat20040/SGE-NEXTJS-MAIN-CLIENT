import Banner2SVG from "./Banner2SVG";

const Banner2 = ({country}:{country:string}) => {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center ">
      < Banner2SVG/>
      <div className="absolute z-10 top-[10%] md:top-[15%] flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-4xl lg:text-6xl group-hover:text-white poppins font-extrabold">
          Study in the Australia
        </h1>
        <p className="mt-1 md:mt-4 text-xs w-[60%] md:text-lg font-semibold text-[#1F1F1F] md:w-3/5 px-10 text-center group-hover:text-white">
          Here’s a comprehensive guide for all students who want to study in {country}.
        </p>
      </div>
    </div>
  );
};

export default Banner2;

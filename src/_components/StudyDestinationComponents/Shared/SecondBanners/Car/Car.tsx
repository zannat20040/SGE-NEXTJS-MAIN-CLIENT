import Image from "next/image";

const SecondBanner = ({ country,description, bgColor }:{country:string, description:string, bgColor:string}) => {
    return (
      <div className="bg-[#EFF6FF] rounded-[32px] py-16">
        <div className={`max-w-screen-xl mx-auto ${bgColor} rounded-[32px] px-10 lg:px-24 pt-12 pb-44 text-white relative`}>
          <h4 className="text-2xl  lg:text-[40px] font-semibold text-center pb-6">
            Why Study in {country}?
          </h4>
          <p className="text-lg text-justify">
           {description}
          </p>
          <div className="w-80 h-[216px] sm:mr-24 mr-5 absolute right-0 bottom-0">
            <Image width={100} height={100} className="w-auto h-auto" src='https://i.ibb.co.com/7VK4ntw/australia-car.gif' alt="Car Animation" />
          </div>
        </div>
      </div>
    );
  };
  
  export default SecondBanner;
  
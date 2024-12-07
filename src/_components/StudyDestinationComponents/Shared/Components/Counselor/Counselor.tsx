import "./Counselor.css";
import CounsellorSVG from "./CounsellorSvg/CounsellorSVG";
import Link from "next/link";

const Counselor = ( {country, bgColor}:{country:string, bgColor:string}) => {
  return (
    <div style={{background:bgColor}} className={`   mt-[90px]`}>
      <div className="max-w-[1154px] mx-auto">
        <div className="flex justify-around lg:flex-row flex-col">
          <div className="lg:text-left text-center">
            <h1 className="lg:poppins-semibold poppins-bold lg:text-[56px] text-[28px] lg:leading-[72.8px] leading-[32px] -tracking-[0.01em] text-white pt-[51px] lg:pb-[69px] pb-[30px]">
              Talk to Our Expert<br></br> {country} Counselor
            </h1>
            <Link target="blank"
             href="https://wa.me/+447903108549"
              className="poppins-bold lg:text-[18px] text-[10px] bg-white lg:px-[124px] px-[66px] lg:py-[22px] py-[16px] rounded-[36px]"
            >
              Contact Now
            </Link>
          </div>
          <div className="lg:-mb-[90px] md:-mb-[62px] -mb-[10px] Counselor mx-auto lg:-mt-[70px]">
            <CounsellorSVG   />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselor;

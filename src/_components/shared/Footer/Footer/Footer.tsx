"use client";

import { useRef } from "react";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import BadgeComponent from "./BadgeComponent";

const Footer = () => {
  const accordion = useRef<HTMLDivElement>(null);

  const handleClick = (evt: React.MouseEvent<HTMLInputElement>) => {
    if (accordion.current) {
      accordion.current.querySelectorAll("input").forEach((input) => {
        if (input !== evt.target) {
          (input as HTMLInputElement).checked = false;
        }
      });
    }
  };

  return (
    <div>
      <div>
        <div className="w-full bg-transparent -mt-[110px] md:-mt-[80px] xl:-mt-[128px] mb-[-1px]">
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/ss4fdHz/footer-Shape.png"
            className="w-full"
            alt="footer shape"
          />
        </div>
        <div className="bg-[#081831] px-6 relative">
          <div className="footer-1 text-center max-w-[1154px] mx-auto">
            <h2 className="font-poppins lg:text-[21px] text-[16px] text-white mb-4">
              Our Students are Our Reference
            </h2>
            <Image
              width={100}
              height={100}
              className="mx-auto w-auto h-auto mb-[22px]"
              src="https://i.ibb.co.com/DRRN3ps/logo2.png"
              alt="logo"
            />
          </div>

          <div className="footer-2 leading-[150%] text-[#CACACA] border-t border-white pt-[35px] max-w-[1154px] mx-auto mt-[35px] flex flex-col lg:flex-row lg:gap-[117px]">
            <div className="w-3/4 lg:w-[231px] mx-auto lg:mx-0 text-center lg:text-start">
              <h2 className="mulish-regular text-base mb-4">
                About Shabuj Global Education
              </h2>
              <p className="mulish-regular lg:text-base text-sm">
                Shabuj Global Education (also known as SG Education) is one of
                the BRITISH COUNCIL accredited education service providers in
                the UK. The company has been working since 2010 with great pride
                and service excellence. At Shabuj Global we provide services to
                local and international students for UK University admission.
              </p>
            </div>
            <div className="w-[177px]  mx-auto lg:mx-0 text-center lg:text-start">
              <h2 className="lg:mulish-bold mulish-regular text-base mb-4 mt-8 uppercase">
                Study Destinations
              </h2>
              <ul className="mulish-regular lg:text-base text-sm">
                <Link href={"/UK"}>
                  <li className="hover:text-blue-600">UK</li>
                </Link>
              </ul>
            </div>
            <div className="w-[282px]  mx-auto lg:mx-0 text-center lg:text-start">
              <h2 className="lg:mulish-bold mulish-regular text-base mb-4 mt-8 uppercase">
                Services for students
              </h2>
              <ul className="flex-col flex   text-lg">
                <Link
                  className="hover:text-blue-600 text-sm"
                  href={"/personalizedUniversity"}
                >
                  <li>Personalized University Selection</li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/applicationAssistance"}
                >
                  <li>Application Assistance </li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/aidGuidance"}
                >
                  <li>Scholarship and Financial Aid Guidance</li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/immigrationSupport"}
                >
                  <li> Visa and Immigration Support </li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/travelAssistance"}
                >
                  <li> Pre-Departure and Post-Arrival Assistance </li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/postGraduationAid"}
                >
                  <li> Post-Graduation Support </li>
                </Link>
              </ul>
              <p className="lg:mulish-bold mulish-regular text-base mt-3 uppercase">
                Services for partners
              </p>
              <ul className=" my-4 text-lg">
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/admissionProcess"}
                >
                  <li> Seamless Admissions Process</li>
                </Link>
                <Link className="hover:text-blue-600  text-sm" href={"/studentGuidance"}>
                  <li>Expert Student Guidance </li>
                </Link>
                <Link className="hover:text-blue-600  text-sm" href={"/globalNetwork"}>
                  <li> Access to a Global Network of Universities</li>
                </Link>
                <Link className="hover:text-blue-600  text-sm" href={"/studentSuccess"}>
                  <li> Enhanced Student Success</li>
                </Link>
                <Link
                  className="hover:text-blue-600  text-sm"
                  href={"/recruitmentSupport"}
                >
                  <li> Marketing and Recruitment Support</li>
                </Link>
                <Link className="hover:text-blue-600  text-sm" href={"/collaboration"}>
                  <li> Long-Term Collaboration</li>
                </Link>
              </ul>
            </div>
            <div className="w-[229px]  mx-auto lg:mx-0 text-center lg:text-start">
              <h2 className="lg:mulish-bold mulish-regular text-base mb-4 mt-8 uppercase">
                Company
              </h2>
              <ul className="mulish-regular lg:text-base text-sm">
                <Link href={"/about"}>
                  <li className="hover:text-blue-600">About Us</li>
                </Link>
                <Link href={"/career"}>
                  <li className="hover:text-blue-600">Careers</li>
                </Link>
                <Link href={"/events"}>
                  <li className="hover:text-blue-600">Events</li>
                </Link>
                <Link href={"/blogs"}>
                  <li className="hover:text-blue-600">Blog</li>
                </Link>
                <Link href={"/contact"}>
                  <li className="hover:text-blue-600">Contact Us</li>
                </Link>
              </ul>
              <Link href={"/events"}>
                <p className="lg:mulish-bold mulish-regular text-base mt-3 uppercase hover:text-blue-600">
                  upcoming events
                </p>
              </Link>
            </div>
          </div>

          <div className="footer-3 leading-[150%] max-w-[1154px] mx-auto flex lg:flex-row flex-col lg:gap-[114px] border-t border-white justify-center">
            <div className='card-shine-effect-metal p-5 m-2 rounded-2xl mx-auto'>
              <BadgeComponent />
            </div>
            <div className="mx-auto">
              <div className="md:w-[577px] w-full mx-auto   bg-[rgba(255,255,255,0.7)] rounded-2xl text-center mt-[27px] mb-[31px] overflow-hidden">
                <h2 className="px-4 lg:mulish-semibold mulish-bold lg:text-[28px] text-[18px] text-[#081831] leading-[39.2px] pt-[14px] pb-[30px]">
                  UKVI Approved Test Centre for
                </h2>
                <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:gap-[41px]">
                  <Image
                    width={100}
                    height={100}
                    src="https://i.ibb.co.com/x7CPRrb/footer1.png"
                    className="w-[125px] max-w-full object-contain pb-8"
                    alt="footer1"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="https://i.ibb.co.com/6FZyqQ3/footer2.png"
                    className="w-[166px] max-w-full object-contain pb-8"
                    alt="footer2"
                  />

                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white max-w-[1154px] mx-auto">
            <h2 className="lg:mulish-bold mulish-regular uppercase lg:text-lg text-base text-center text-[#CACACA] mb-6 mt-4">
              Our offices
            </h2>
            <div
              className="max-w-[1152px] mx-auto pt-[23px] pb-[23px]"
              ref={accordion}
            >
              <div className="flex sm:flex-row flex-col lg:mx-4 md:mx-12 mx-8 flex-wrap">
                <div className="sm:w-[25%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                    United Kingdom
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      London (Head Office)
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>
                        1st Floor,94A Whitechapel High Street,London E1
                        7RA,United Kingdom.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-[25%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                    Bangladesh
                  </div>
                  <div className="collapse p-0 collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      Dhaka (South Aisan Regional Head Office)
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>
                        Nagar Lutfun Homes,House No 11,Road No 17,Block
                        D,Banani,Dhaka.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      Chattogram
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>
                        R.I. Tower(level 3),23/A MM Ali Road,Golpahar
                        moor,Chattogram.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      Sylhet
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>
                        3rd Floor,Symphony Heights,Baruth Khana,East
                        Zindabazar,Sylhet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-[16%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                    India
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      Kochin
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>
                        Shabuj Global Kochin,<br></br>
                        Door Number: 303,<br></br>
                        3rd Floor,Cityscape,<br></br>
                        South Kalamasery,<br></br>
                        Kochi-Kerala,682033
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      Kannur
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>
                        R.I. Tower(level 3),23/A MM Ali Road,Golpahar
                        moor,Chattogram.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-[16%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                    Nigeria
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      Abuja
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>
                        No. 9 Senangal<br></br>
                        Crescent, Wuse Zone<br></br>
                        5,Abuja,Nigeria.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      Lagos
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>
                        57,Bode Thomas<br></br>
                        Street,Surulere.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-[18%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                    Middle East
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      Saudi Arabia
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>Email: info@shabujglobal.com </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className="collapse-title text-base mulish-medium text-[#CACACA]">
                      UAE
                    </div>
                    <div className="collapse-content text-sm text-[#CACACA]">
                      <p>
                        Shabuj Global Education, Dubai Silicon Oasis, Dubai Digital Park - Dubai (Near to Dubai Academic City)- United Arab Emirates
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="footer-4 max-w-[1154px] relative z-10 mx-auto pb-6 lg:pb-0  flex flex-col lg:flex-row justify-between items-center border-t border-white">
            <div className="flex gap-[26px] mt-[21px] lg:justify-start justify-center lg:border-none border-b border-white lg:w-1/3 w-full pb-[11px]">
              <Link
                href="https://www.facebook.com/ShabujGlobaleducationuk/"
                target="_blank"
              >
                <Image
                  width={100}
                  height={100}
                  src="https://i.ibb.co.com/ZKrN7SD/facebook.png"
                  className="hover:bg-blue-500 w-10 p-1 rounded-md"
                  alt="facebook"
                />
              </Link>
              <Link
                href="https://www.instagram.com/shabujglobaleducation/"
                target="_blank"
              >
                <Image
                  width={100}
                  height={100}
                  src="https://i.ibb.co.com/BZ0mxMF/instagram.png"
                  className="hover:bg-blue-500 w-10 p-1 rounded-md"
                  alt="instagram"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEkbZ14xeAt8wAAAZEXbnaoJWt-ogVrPCWsB3Ufw3gb3wrzBSE3XcNHequ5lpil4I54Crsk0qaoWcyHvqLrTdX2geridADLkgc3_cGAuBn7zb4v-iR2dBdszRH3_wEnsRkelIE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fshabuj-global-education%2F"
                target="_blank"
              >
                <Image
                  width={100}
                  height={100}
                  src="https://i.ibb.co.com/FmtYMqv/linkedin.png"
                  className="hover:bg-blue-500 w-10 p-1 rounded-md"
                  alt="linkedin"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@shabujglobaleducation1568"
                target="_blank"
              >
                <Image
                  width={100}
                  height={100}
                  src="https://i.ibb.co.com/Yh1fpgZ/youtube.png"
                  className="hover:bg-blue-500 w-10 p-1 rounded-md"
                  alt="youtube"
                />
              </Link>
            </div>
            <div className="flex lg:gap-[18px] flex-col items-center lg:flex-row text-center">
              <p className="mulish-regular text-[14px] text-[#CACACA] mt-6 lg:mt-0 px-20 lg:px-0">
                Copyright © 2024, All Right Reserved{" "}
                <Link href="/">
                  <span className="underline">Shabuj Global Education</span>
                </Link>
              </p>
              <Link href="/Privacy">
                <p className="mulish-regular text-[14px] text-[#CACACA]">
                  Privacy Policy
                </p>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              width={100}
              height={100}
              src="https://i.ibb.co.com/PDLZwTB/vector7.png"
              alt="city bg"
              className="absolute h-auto w-auto bottom-0 hidden left-0 lg:block mx-auto right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

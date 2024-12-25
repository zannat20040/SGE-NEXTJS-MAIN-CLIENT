"use client";
import { useEffect, useState } from "react";
import { BsGridFill, BsCameraVideoFill } from "react-icons/bs";
import {
  IoShieldCheckmarkSharp,
  IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import { FaClock, FaUserFriends, FaHeart } from "react-icons/fa";
import { SiGooglesheets } from "react-icons/si";
import { RiNewsFill } from "react-icons/ri";
import { BiSolidMessageSquareError, BiSolidPhoneCall } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMicrophoneLines, FaChevronUp } from "react-icons/fa6";
import countryData from "../../../assets/json/countries.json";
import Link from "next/link";
import Image from "next/image";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import auth from "../../../../firebase.config";
import axios from "axios";

interface Destination {
  applyDocumentDescription: string;
  applyDocumentList: string[];
  destinationDescription: string;
  destinationFlag: string;
  destinationName: string;
  destinationTitle: string;
  documentDescription: string;
  documentList: string[];
  examRequirement: Array<{ [key: string]: any }>;
  expertNumber: string;
  faq: Array<{ question: string; answer: string }>;
  meta: string;
  pageTitle: string;
  popularIn: string[];
  quickFacts: string[];
  statementDescription: string;
  statementList: string[];
  topUniversity: Array<{ name: string; url: string }>;
  url: string;
  whyStudyDescription: string;
  whyStudyTitle: string;
  __v: number;
  _id: string;
}

const Navbar2 = () => {
  const [navButton, setNavButton] = useState(0);
  const [navIndex, setNavIndex] = useState(0);
  const [width, setWidth] = useState(1024);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const iconStyle =
    "flex bg-gray-200 lg:bg-white px-5 gap-2 lg:items-center hover:text-blue-500";
  const flagClass = " text-center my-2  ";
  const enterNavButton = (index: number) => {
    setNavButton(index);
  };
  const leaveNavButton = () => {
    setNavButton(0);
  };

  const NavButton = ({ ind, text }: { ind: number; text: string }) => {
    return (
      <div className={`cursor-pointer font-poppins`}>
        <div
          className="flex items-center gap-2"
          onMouseEnter={() => enterNavButton(ind)}
        >
          <button className="flex items-center gap-1">
            <p className={`   bg-white  lg:bg-[#F0F8FF] font-semibold`}>
              {text}
            </p>
          </button>
          <span
            className={` ${
              navButton == ind && "rotate-180 transition ease-in-out delay-450"
            }`}
          >
            <FaChevronUp />
          </span>
        </div>
      </div>
    );
  };

  const closeNavbar = () => {
    const drawerElement = document.getElementById(
      "my-drawer-4"
    ) as HTMLInputElement | null;
    if (drawerElement) {
      drawerElement.checked = false;
    }
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setNavIndex(navButton);
  }, [navButton, setNavIndex]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unSubscribe();
  }, []);

  const [countries, setCountries] = useState<Destination[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data using Axios
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/destination/getAllDestinations`
        );
        setCountries(response.data.data);
      } catch (err) {
        setError("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  console.log("hsjfsjdf==>", countries);

  return (
    <div
      onMouseLeave={() => leaveNavButton()}
      className="relative bg-[#F0F8FF]  z-40"
    >
      <div className="inter px-3 text-black lg:px-14 gap-10 flex flex-row items-center    justify-between py-10  lg:py-5">
        <Link href={"/"}>
          <Image
            width={100}
            height={100}
            className="h-[30px] w-[200px] lg:mx-0 md:h-[40px] md:w-[250px] lg:h-[50px] lg:w-[350px]"
            src="https://i.ibb.co/nBJ5Lsg/Logo.png"
            priority
            alt="logo"
          />
        </Link>

        {/* Small device navbar buttons */}

        <div className=" flex lg:hidden">
          <div className="drawer drawer-end  z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button  w-fit">
                <span className="btn bg-transparent shadow-none text-2xl p-2">
                  <GiHamburgerMenu />
                </span>
              </label>
            </div>

            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="  z-50 menu bg-base-200 space-y-2 py-10 text-base-content min-h-full w-80 p-4">
                <div>
                  <Link
                    onClick={closeNavbar}
                    href="/"
                    className="pl-5 text-xl font-medium"
                  >
                    Home
                  </Link>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" name="my-accordion-2" />
                  <div className="collapse-title  text-xl font-medium   ">
                    Study Destination
                  </div>
                  <div className="collapse-content text-sm ">
                    <ul className="grid grid-cols-2 justify-between items-start max-w-7xl mx-auto my-8 gap-3">
                      {countries.map((country) => (
                        <Link
                          onClick={closeNavbar}
                          key={country.destinationName}
                          className=" my-2 text-center flex flex-col justify-between"
                          href={`/study-destinations/${country?.url}`}
                        >
                          <Image
                            width={100}
                            height={100}
                            className="w-2/4 h-auto mx-auto rounded-lg  -rotate-90"
                            src={country?.destinationFlag}
                            alt="country flag"
                          />
                          <li> {country?.destinationName}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" name="my-accordion-2" />
                  <div className="collapse-title  text-xl font-medium   ">
                    Services
                  </div>
                  <div className="collapse-content text-sm  ">
                    <div className="flex flex-col  w-full ">
                      <div className="col-span-2 mt-2 ">
                        <Link onClick={closeNavbar} href="/services">
                          <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                            SERVICES
                          </h2>
                        </Link>

                        <h2 className="my-5 text-xl font-medium border-b-2   border-[#f85424]">
                          FOR STUDENTS
                        </h2>
                        <div className="flex flex-col md:flex-row  justify-center md:justify-start gap-10">
                          <ul className="flex-col flex gap-2 text-lg">
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/personalizedUniversity"}
                            >
                              <li>Personalized University Selection</li>
                            </Link>
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/applicationAssistance"}
                            >
                              <li>Application Assistance </li>
                            </Link>
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/aidGuidance"}
                            >
                              <li>Scholarship and Financial Aid Guidance</li>
                            </Link>
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/immigrationSupport"}
                            >
                              <li> Visa and Immigration Support </li>
                            </Link>
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/travelAssistance"}
                            >
                              <li>
                                {" "}
                                Pre-Departure and Post-Arrival Assistance{" "}
                              </li>
                            </Link>
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/postGraduationAid"}
                            >
                              <li> Post-Graduation Support </li>
                            </Link>
                            {/* <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/comingSoon"}
                            >
                              <li>University Application Process</li>
                            </Link>
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/comingSoon"}
                            >
                              <li>International Student Visa Guidance</li>
                            </Link> */}
                          </ul>
                          {/* <ul className="flex-col flex gap-2 text-lg">
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/comingSoon"}
                            >
                              <li>University Scholarship Guidance</li>
                            </Link>
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/comingSoon"}
                            >
                              <li>Study Abroad Destination Guide</li>
                            </Link>
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/comingSoon"}
                            >
                              <li>Personality Assessment Test</li>
                            </Link>
                            <Link
                              onClick={closeNavbar}
                              className="hover:text-blue-600"
                              href={"/comingSoon"}
                            >
                              <li>Study Accommodation</li>
                            </Link>
                          </ul> */}
                        </div>
                      </div>
                      <div className="col-span-1 md:my-10">
                        <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                          FOR PARTNERS
                        </h2>
                        <ul className="space-y-2 text-lg">
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/admissionProcess"}
                          >
                            <li> Seamless Admissions Process</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/studentGuidance"}
                          >
                            <li>Expert Student Guidance </li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/globalNetwork"}
                          >
                            <li> Access to a Global Network of Universities</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/studentSuccess"}
                          >
                            <li> Enhanced Student Success</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/recruitmentSupport"}
                          >
                            <li> Marketing and Recruitment Support</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/collaboration"}
                          >
                            <li> Long-Term Collaboration</li>
                          </Link>
                        </ul>
                      </div>

                      {/* <div className="col-span-1 md:my-10">
                        <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                          CHANNEL PARTNERS
                        </h2>
                        <ul className="space-y-2 text-lg">
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Customized Solution</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Instant Support</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Commissions</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Technological Support</li>
                          </Link>
                        </ul>
                      </div>

                      <div className="col-span-1 mt-0">
                        <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                          PARTNER INSTITUTION
                        </h2>
                        <ul className="space-y-2 text-lg">
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Customized Solution</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Instant Support</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Commissions</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Technological Support</li>
                          </Link>
                        </ul>
                      </div>

                      <div className="col-span-1 md:my-10">
                        <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                          GOVERNMENT INSTITUTIONS
                        </h2>
                        <ul className="space-y-2 text-lg">
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Customized Solution</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Instant Support</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Commissions</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Technological Support</li>
                          </Link>
                        </ul>
                      </div>

                      <div className="col-span-1 mt-0">
                        <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                          BUSINESS
                        </h2>
                        <ul className="space-y-2 text-lg">
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Customized Solution</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Instant Support</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Commissions</li>
                          </Link>
                          <Link
                            onClick={closeNavbar}
                            className="hover:text-blue-600"
                            href={"/comingSoon"}
                          >
                            <li>Technological Support</li>
                          </Link>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" name="my-accordion-2" />
                  <div className="collapse-title  text-xl font-medium   ">
                    Test Prep
                  </div>
                  <div className="collapse-content text-sm  ">
                    <div className="flex gap-5 flex-col justify-around py-10">
                      <Link
                        onClick={closeNavbar}
                        className=""
                        href="/comingSoon"
                      >
                        <Image
                          width={100}
                          height={100}
                          className="w-3/4 h-auto lg:w-2/12"
                          src="https://i.ibb.co/JCsX1Q0/IELTS-Logo.jpg"
                          alt="Image1"
                        />
                      </Link>
                      <Link
                        onClick={closeNavbar}
                        className=""
                        href="/comingSoon"
                      >
                        <Image
                          width={100}
                          height={100}
                          className="w-3/4 lg:w-2/12 h-auto"
                          src="https://i.ibb.co/hH49jpH/SELT-Logo.png"
                          alt="Image 2"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" name="my-accordion-2" />
                  <div className="collapse-title  text-xl font-medium   ">
                    About Us
                  </div>
                  <div className="collapse-content text-sm  ">
                    <div className="     ">
                      <ul className=" text-lg  mt-2">
                        <Link
                          onClick={closeNavbar}
                          className={`${iconStyle} flex gap-2 items-center  py-3 pt-6 `}
                          href="/about"
                        >
                          <BiSolidMessageSquareError />
                          <li>About Us</li>
                        </Link>

                        <Link
                          onClick={closeNavbar}
                          href={"/who-we"}
                          className={`${iconStyle} flex gap-2 items-center  py-3 `}
                        >
                          <BsGridFill />
                          <li>Who We Are</li>
                        </Link>

                        <Link
                          onClick={closeNavbar}
                          href={"/partners"}
                          className={`${iconStyle} flex gap-2 items-center  py-3`}
                        >
                          <FaHeart />
                          <li> Our Partners</li>
                        </Link>

                        <Link
                          onClick={closeNavbar}
                          href={"/timeline"}
                          className={`${iconStyle} flex gap-2 items-center  py-3`}
                        >
                          <FaClock />
                          <li> Our Timeline</li>
                        </Link>
                        <Link
                          onClick={closeNavbar}
                          href={"/leader"}
                          className={`${iconStyle} flex gap-2 items-center  py-3`}
                        >
                          <FaUserFriends />
                          <li> Our Leadership Team</li>
                        </Link>
                        <Link
                          onClick={closeNavbar}
                          href={"/partner-with-us"}
                          className={`${iconStyle} flex gap-2 items-center  py-3`}
                        >
                          <IoShieldCheckmarkSharp />
                          <li> Partner With Us</li>
                        </Link>
                        <Link
                          onClick={closeNavbar}
                          href={"/award"}
                          className={`${iconStyle} flex gap-2 items-center  py-3`}
                        >
                          <IoCheckmarkDoneCircleSharp />
                          <li> Award Recognitions</li>
                        </Link>
                        <Link
                          onClick={closeNavbar}
                          href={"/career"}
                          className={`${iconStyle} flex gap-2 items-center  py-3`}
                        >
                          <SiGooglesheets />
                          <li>Careers</li>{" "}
                          <span className="text-sm bg-green-500 text-white mx-2 p-1 rounded-sm">
                            Hiring
                          </span>
                        </Link>
                        <Link
                          onClick={closeNavbar}
                          href="/blogs"
                          className={`${iconStyle} flex gap-2 items-center  py-3`}
                        >
                          <RiNewsFill />
                          <li> Blog</li>
                        </Link>
                        <Link
                          onClick={closeNavbar}
                          href="/contact"
                          className={`${iconStyle} flex gap-2 items-center  py-3`}
                        >
                          <BiSolidPhoneCall />
                          <li> Contact Us</li>
                        </Link>
                        <Link
                          onClick={closeNavbar}
                          href={"/news"}
                          className={`${iconStyle} flex gap-2 items-center  py-3`}
                        >
                          <FaMicrophoneLines />
                          <li> News & Press</li>
                        </Link>

                        <Link
                          onClick={closeNavbar}
                          href="/events"
                          className={`${iconStyle} flex gap-2 items-center  py-3 pb-5`}
                        >
                          <BsCameraVideoFill />
                          <li> Events & Webinars</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>

                {!user || loading ? (
                  <div className="flex flex-col gap-2 px-4">
                    <Link
                      onClick={closeNavbar}
                      href="/registration"
                      className={`  text-xl font-medium`}
                    >
                      <button className="bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl w-full">
                        Registration
                      </button>
                    </Link>
                    <Link
                      onClick={closeNavbar}
                      href={"/login"}
                      className={` text-xl font-medium`}
                    >
                      <button className="bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl w-full">
                        Log In
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <p className="bg-[#BFDBFE] text-center text-lg p-2 py-1 rounded-lg">
                      {user?.displayName}
                    </p>
                    <button
                      onClick={() => signOut(auth)}
                      className="text-sm font-bold bg-red-500 p-2 py-1 text-white rounded-lg"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Large device navbar buttons */}

        <div
          className={`  hidden items-center   my-5 lg:flex flex-wrap justify-end gap-3`}
        >
          <div className={` flex items-center gap-1`}>
            <Link
              className={` bg-white  lg:bg-[#F0F8FF] font-semibold`}
              href="/"
            >
              Home
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Link href={"/study-destinations"}>
              <NavButton text="Study Destination" ind={1} />
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <Link href={"/services"}>
              <NavButton text="Services" ind={2} />
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <NavButton text="Test Prep." ind={3} />
          </div>

          <div className="flex items-center  gap-1">
            <Link href={"/about"}>
              <NavButton ind={4} text="About Us" />
            </Link>
          </div>
          {!user || loading ? (
            <div
              className={`${
                width >= 1244 ? "text-base" : "text-sm"
              } flex items-center justify-end gap-1`}
            >
              <Link
                className={`  bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl`}
                href="/registration"
              >
                Registration
              </Link>
              <Link
                className={`  bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl`}
                href="/login"
              >
                Log In
              </Link>
            </div>
          ) : (
            <div>
              {!user || loading ? (
                <div className="flex flex-col gap-2 px-4">
                  <Link
                    onClick={closeNavbar}
                    href="/registration"
                    className="text-xl font-medium"
                  >
                    <button className="bg-[#BFDBFE] col-span-2 font-bold px-5 py-2 rounded-2xl w-full">
                      Registration
                    </button>
                  </Link>
                  <Link
                    onClick={closeNavbar}
                    href="/login"
                    className="text-xl font-medium"
                  >
                    <button className="bg-[#BFDBFE] col-span-2 font-bold px-5 py-2 rounded-2xl w-full">
                      Log In
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex   gap-2">
                  {!loading && user ? (
                    <p className="bg-[#BFDBFE] text-center text-lg p-2 py-1 rounded-lg">
                      {user?.displayName}{" "}
                      {/* Fallback to "User" if displayName is not set */}
                    </p>
                  ) : (
                    <></>
                  )}
                  <button
                    onClick={() => signOut(auth)}
                    className="text-sm font-bold bg-red-500 p-2 py-1 text-white rounded-lg"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navbar Item */}
      <div className=" bg-white absolute w-full z-40 shadow-lg px-10 ">
        {navIndex == 1 && (
          <div className="md:px-10">
            <ul className="lg:grid hidden lg:grid-cols-7 justify-between items-center max-w-7xl mx-auto my-8 gap-3">
              {countries.map((country) => (
                <Link
                  key={country.destinationName}
                  className={flagClass}
                  href={`/study-destinations/${country?.url}`}
                >
                  <Image
                    width={100}
                    height={100}
                    className="w-2/4 h-auto mx-auto rounded-lg  -rotate-90"
                    src={country?.destinationFlag}
                    alt="country flag"
                  />
                  <li> {country?.destinationName}</li>
                </Link>
              ))}
            </ul>
          </div>
        )}
        {navIndex == 2 && (
          <>
            <div
              className={`${
                width <= 1450 ? "grid-cols-4" : "grid-cols-5"
              }   mx-10 gap-5 hidden  lg:grid md:mx-auto   md:max-w-[1800px]`}
            >
              <div className="col-span-1 md:my-10 my-5">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  FOR STUDENTS
                </h2>
                <div className="flex flex-col md:flex-row  justify-center md:justify-start gap-10">
                  <ul className="space-y-2 text-base">
                    <Link
                      className="hover:text-blue-600"
                      href={"/personalizedUniversity"}
                    >
                      <li>Personalized University Selection</li>
                    </Link>
                    <Link
                      className="hover:text-blue-600"
                      href={"/applicationAssistance"}
                    >
                      <li>Application Assistance </li>
                    </Link>
                    <Link className="hover:text-blue-600" href={"/aidGuidance"}>
                      <li>Scholarship and Financial Aid Guidance </li>
                    </Link>
                    <Link
                      className="hover:text-blue-600"
                      href={"/immigrationSupport"}
                    >
                      <li>Visa and Immigration Support </li>
                    </Link>
                    <Link
                      className="hover:text-blue-600"
                      href={"/travelAssistance"}
                    >
                      <li> Pre-Departure and Post-Arrival Assistance</li>
                    </Link>
                    <Link
                      className="hover:text-blue-600"
                      href={"/postGraduationAid"}
                    >
                      <li> Post-Graduation Support</li>
                    </Link>

                    {/* <Link className="hover:text-blue-600" href={"/comingSoon"}>
                      <li>University Application Process</li>
                    </Link>
                    <Link className="hover:text-blue-600" href={"/comingSoon"}>
                      <li>International Student Visa Guidance</li>
                    </Link>
                    <Link className="hover:text-blue-600" href={"/comingSoon"}>
                      <li>University Scholarship Guidance</li>
                    </Link>
                    <Link className="hover:text-blue-600" href={"/comingSoon"}>
                      <li>Study Abroad Destination Guide</li>
                    </Link>
                    <Link className="hover:text-blue-600" href={"/comingSoon"}>
                      <li>Personality Assessment Test</li>
                    </Link>
                    <Link className="hover:text-blue-600" href={"/comingSoon"}>
                      <li>Study Accommodation</li>
                    </Link> */}
                  </ul>
                </div>
              </div>
              <div className="col-span-1   md:my-10">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  CHANNEL PARTNERS
                </h2>
                <ul className="space-y-2 text-base">
                  <Link
                    className="hover:text-blue-600"
                    href={"/admissionProcess"}
                  >
                    <li>Seamless Admissions Process</li>
                  </Link>
                  <Link
                    className="hover:text-blue-600"
                    href={"/studentGuidance"}
                  >
                    <li>Expert Student Guidance </li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/globalNetwork"}>
                    <li>Access to a Global Network of Universities </li>
                  </Link>
                  <Link
                    className="hover:text-blue-600"
                    href={"/studentSuccess"}
                  >
                    <li> Enhanced Student Success </li>
                  </Link>
                  <Link
                    className="hover:text-blue-600"
                    href={"/recruitmentSupport"}
                  >
                    <li> Marketing and Recruitment Support</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/collaboration"}>
                    <li>Long-Term Collaboration</li>
                  </Link>
                </ul>
              </div>

              {/* <div className="col-span-1   md:my-10">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  CHANNEL PARTNERS
                </h2>
                <ul className="space-y-2 text-base">
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Customized Solution</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Instant Support</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Commissions</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Technological Support</li>
                  </Link>
                </ul>
              </div> */}

              {/* <div className="col-span-1 md:my-10">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  PARTNER INSTITUTION
                </h2>
                <ul className="space-y-2 text-base">
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Customized Solution</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Instant Support</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Commissions</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Technological Support</li>
                  </Link>
                </ul>
              </div>

              <div className="col-span-1 md:my-10">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  GOVERNMENT INSTITUTIONS
                </h2>
                <ul className="space-y-2 text-base">
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Customized Solution</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Instant Support</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Commissions</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Technological Support</li>
                  </Link>
                </ul>
              </div>

              <div className="col-span-1 md:my-10">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  BUSINESS
                </h2>
                <ul className="flex flex-col text-base">
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Customized Solution</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Instant Support</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Commissions</li>
                  </Link>
                  <Link className="hover:text-blue-600" href={"/comingSoon"}>
                    <li>Technological Support</li>
                  </Link>
                  <Link
                    className=" text-lg  mt-5  font-medium border-b-2 w-fit border-[#f85424]"
                    href="/services"
                  >
                    SERVICES
                  </Link>
                </ul>
              </div> */}
            </div>
          </>
        )}
        {navIndex == 3 && (
          <div className="lg:flex max-w-7xl  mx-auto hidden justify-around py-10">
            <Link href="comingSoon" className=" first-line:">
              <Image
                width={100}
                height={100}
                className=" w-3/4 h-auto lg:w-[200px]"
                src="https://i.ibb.co/hH49jpH/SELT-Logo.png"
                alt="Image 1"
              />
            </Link>
            <Link href="comingSoon" className=" ">
              <Image
                width={100}
                height={100}
                className="w-3/4 h-auto lg:w-[200px]"
                src="https://i.ibb.co/JCsX1Q0/IELTS-Logo.jpg"
                alt="Image 2"
              />
            </Link>
          </div>
        )}
        {navIndex == 4 && (
          <div className="hidden lg:grid  lg:grid-cols-3 px-10 max-w-7xl mx-10 space-y-2 lg:space-y-0 lg:mx-auto my-10">
            <ul className="col-span-1 space-y-4 text-lg ">
              <Link href="/who-we" className={iconStyle}>
                <BsGridFill />
                Who We Are
              </Link>
              <Link href="/partners" className={iconStyle}>
                <FaHeart />
                Our Partners
              </Link>
              <Link href="/timeline" className={iconStyle}>
                <FaClock />
                Our Timeline
              </Link>
              <Link href="/leader" className={iconStyle}>
                <FaUserFriends />
                Our Leadership Team
              </Link>
            </ul>
            <ul className="col-span-1 space-y-4 text-lg ">
              <Link href="/partner-with-us" className={iconStyle}>
                <IoShieldCheckmarkSharp />
                Partner With Us
              </Link>
              <Link href="/award" className={iconStyle}>
                <IoCheckmarkDoneCircleSharp />
                Award Recognitions
              </Link>
              <Link
                href="/career"
                className={`${iconStyle} hover:text-blue-500 flex gap-2 items-center`}
              >
                <SiGooglesheets />
                <li>Careers</li>
                <span className="text-sm bg-green-500 text-white mx-2 p-1 rounded-sm">
                  Hiring
                </span>
              </Link>
              <Link className={` ${iconStyle}`} href="/blogs">
                <RiNewsFill />
                Blog
              </Link>
            </ul>
            <ul className="col-span-1 space-y-4 text-lg ">
              <Link className={iconStyle} href="/contact">
                <BiSolidPhoneCall />
                Contact Us
              </Link>
              <Link className={iconStyle} href="/news">
                <FaMicrophoneLines />
                News & Press
              </Link>

              <Link className={iconStyle} href="/events">
                <BsCameraVideoFill />
                Events & Webinars
              </Link>
              <Link className={`${iconStyle} `} href="/about">
                <BiSolidMessageSquareError />
                About Us
              </Link>
            </ul>
            <ul></ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;

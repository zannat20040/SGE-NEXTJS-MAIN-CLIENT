"use client";
import "./Blogs_Cards.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Blogs_Cards = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [blogs, setBlogs] = useState(null); // Removed TypeScript type
  const [error, setError] = useState(null); // Removed TypeScript type

  useEffect(() => {
    // Function to fetch the blog data from API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blog/getAllBlogs`);
        setBlogs(response.data.blogs);
      } catch (err) {
        setError(err.response.data.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [apiUrl]);

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 my-5 bg-[#FFF] mt-32">
      <div className="hidden md:block px-4">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M8.87 4.83386H5.87C5.04157 4.83386 4.37 5.50544 4.37 6.33386V9.33386C4.37 10.1623 5.04157 10.8339 5.87 10.8339H8.87C9.69842 10.8339 10.37 10.1623 10.37 9.33386V6.33386C10.37 5.50544 9.69842 4.83386 8.87 4.83386Z"
              fill="#F25025"
            />
            <path
              d="M8.87 13.8339H5.87C5.04157 13.8339 4.37 14.5054 4.37 15.3339V18.3339C4.37 19.1623 5.04157 19.8339 5.87 19.8339H8.87C9.69842 19.8339 10.37 19.1623 10.37 18.3339V15.3339C10.37 14.5054 9.69842 13.8339 8.87 13.8339Z"
              fill="#F25025"
            />
            <path
              d="M17.87 13.8339H14.87C14.0416 13.8339 13.37 14.5054 13.37 15.3339V18.3339C13.37 19.1623 14.0416 19.8339 14.87 19.8339H17.87C18.6984 19.8339 19.37 19.1623 19.37 18.3339V15.3339C19.37 14.5054 18.6984 13.8339 17.87 13.8339Z"
              fill="#F25025"
            />
            <path
              d="M18.88 7.58386H17.13V5.83386C17.13 5.63495 17.051 5.44418 16.9103 5.30353C16.7697 5.16288 16.5789 5.08386 16.38 5.08386C16.1811 5.08386 15.9903 5.16288 15.8497 5.30353C15.709 5.44418 15.63 5.63495 15.63 5.83386V7.58386H13.88C13.6811 7.58386 13.4903 7.66288 13.3497 7.80353C13.209 7.94418 13.13 8.13495 13.13 8.33386C13.13 8.53277 13.209 8.72354 13.3497 8.86419C13.4903 9.00484 13.6811 9.08386 13.88 9.08386H15.63V10.8339C15.63 11.0328 15.709 11.2235 15.8497 11.3642C15.9903 11.5048 16.1811 11.5839 16.38 11.5839C16.5789 11.5839 16.7697 11.5048 16.9103 11.3642C17.051 11.2235 17.13 11.0328 17.13 10.8339V9.08386H18.88C19.0789 9.08386 19.2697 9.00484 19.4103 8.86419C19.551 8.72354 19.63 8.53277 19.63 8.33386C19.63 8.13495 19.551 7.94418 19.4103 7.80353C19.2697 7.66288 19.0789 7.58386 18.88 7.58386Z"
              fill="#F25025"
            />
          </svg>
          <h5 className="text-[#1F1F1F] font-semibold">Categories</h5>
        </div>
        <ul className="pt-3 text-sm space-y-2">
          <li>Personal statements</li>
          <li>Interview preparation</li>
          <li>Common application mistakes</li>
          <li>Visa processes</li>
          <li>Post-study work visas</li>
          <li>Immigration updates</li>
          <li>Scholarship opportunities</li>
          <li>Budgeting tips</li>
          <li>Accommodation options</li>
          <li>Cultural adaptation</li>
          <li>Social life balance</li>
          <li>Job search strategies</li>
          <li>TOEFL, IELTS, GRE, GMAT tips</li>
        </ul>
      </div>
      <div className="col-span-3 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          <h3 className="text-[28px] pb-5 md:pb-0 font-semibold">All Blogs</h3>
          <div className="flex items-center col-span-2 relative">
            <input
              className="bg-[#FAFAFA] outline-none text-gray-700 w-[80%] py-[11px] px-2 border-[1px] border-gray-300 rounded-l-full"
              type="text"
            />
            <button
              className="px-10 py-3  bg-[#F25025] rounded-r-full text-white"
              type="button"
            >
              Search
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="absolute left-4"
            >
              <path
                d="M2.87891 10.4476C2.87891 6.12239 6.3852 2.61609 10.7104 2.61609C15.0357 2.61609 18.542 6.12239 18.542 10.4476C18.542 12.2782 17.9139 13.9622 16.8614 15.2956L22.8789 21.3131L21.5759 22.6161L15.5585 16.5986C14.225 17.6511 12.5411 18.2792 10.7104 18.2792C6.3852 18.2792 2.87891 14.7729 2.87891 10.4476ZM10.7104 4.4588C7.40291 4.4588 4.72162 7.14009 4.72162 10.4476C4.72162 13.7552 7.40291 16.4364 10.7104 16.4364C14.018 16.4364 16.6993 13.7552 16.6993 10.4476C16.6993 7.14009 14.018 4.4588 10.7104 4.4588Z"
                fill="#CACACA"
              />
            </svg>
          </div>
        </div>

        {/* Show loading or error only in the mapping section */}
        {loading ? (
          <div className="p-8 text-center">Loading...</div>
        ) : error ? (
          <div className="p-8 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {blogs?.map((item) => (
              <div key={item?._id} className="group">
                <div className="shadow-xl rounded-[16px] flex flex-col h-full group-hover:bg-[#081831]  duration-300">
                  <Image
                    width={100}
                    height={100}
                    src={item?.img}
                    alt=""
                    className="h-[220px] w-full rounded-t-[16px]"
                  />
                  <div className="p-4 pb-4 flex flex-col justify-between flex-grow ">
                    <div>
                      <p className="inline-block w-fit px-2 py-[2px] text-[#FF8156] text-xs bg-[#FFF2EE] rounded mb-2">
                        {item?.category}
                      </p>
                      <h4 className="font-bold text-lg mb-2 group-hover:text-white">
                        {item?.title}
                      </h4>
                      <p className="text-[#525252] text-sm group-hover:text-white">
                        {item?.description?.slice(0, 150)}...
                      </p>
                    </div>
                    <Link
                      href={`/${item?.url}`}
                      className="text-white mt-3 bg-[#F25025] py-2 text-center rounded-[3px] text-sm group-hover:text-[#081831] group-hover:bg-[#FFF] duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs_Cards;

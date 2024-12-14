'use client';

import Link from "next/link";
import axios from 'axios';
import { useState } from 'react';
import "./Home_Contact.css";
import Swal from "sweetalert2";

const Home_Contact = () => {
  const text = "DREAM BIG STUDY ABROAD.";
  const Letter = text.split("");

  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    mobile: '',
    destination: '',
    year: '',
    intake: '',
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      // Use checked property if input is a checkbox; otherwise, use value
      [name]: e.target instanceof HTMLInputElement && e.target.type === 'checkbox' ? e.target.checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await axios.post(`${apiUrl}/apply`, formData);
      console.log('Form submitted successfully:', response.data);
      Swal.fire({
        icon: "success",
        title: "Thank You",
        text: "Our counsellor will contact you soon"
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  };

  return (
    <div className="bg-[#E7E7E7] pt-[98px] pb-[250px] overflow-hidden px-4 ">
      <div className="text-center">
        <h2 className="poppins-bold lg:text-[38px] text-[28px] text-[#081831] leading-[130%] -tracking-[0.02em] lg:pb-[39px] pb-5">
          It’s Time to Start Your Journey With Us
        </h2>
        <p className="mulish-regular text-[16px] text-[#1F1F1F] leading-[150%] pb-[18px]">
          Book Your{" "}
          <span className="bg-[#88F3D0] rounded-sm px-1 font-medium py-1">
            FREE
          </span>{" "}
          Consultation with Certified Counsellors
        </p>
      </div>
      <div className="flex justify-center text-center">
        <div className="max-w-[565px] lg:mx-auto md:mx-auto mx-5">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white rounded w-full lg:h-[40px] h-[45px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none block mx-auto mb-[10px]"
            />
            <div className="relative text-center mb-[10px]">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" bg-white rounded w-full lg:h-[40px] h-[45px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none pr-10"
              />
              <span className="absolute flex items-center right-[10px] top-3 inter-regular text-[12px] text-[#8E8E8E]">
                .com
              </span>
            </div>
            <div className="flex">
              <input
                readOnly
                placeholder="+880"
                name="phoneCode"
                className="lg:w-[74px] w-[41px] lg:h-[40px] h-[45px] rounded inter-regular text-[12px] leading-[12px] lg:pl-4 pl-[5px] outline-none"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="bg-white rounded flex-1 lg:h-[40px] h-[45px] pl-[12px]  inter-regular text-[12px] leading-[12px] outline-none mx-auto mb-[10px] lg:ml-[26px] ml-[14px]"
              />
            </div>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="bg-white px-3 py-2 w-full outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer rounded mb-[10px]"
            >
              <option value="">Preferred Study Destination</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
            </select>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="bg-white px-3 py-2 w-full outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer rounded mb-[10px]"
            >
              <option value="">Preferred Study Year</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>

            <select
              name="intake"
              value={formData.intake}
              onChange={handleChange}
              className="bg-white px-3 py-2 w-full outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer rounded mb-[10px]"
            >
              <option value="">Preferred Study Intake</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathematics">Mathematics</option>
            </select>

            <div className="flex items-start lg:items-center space-x-2 lg:max-w-[565px] max-w-[290px] lg:mx-auto mb-[10px]">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1"
              />
              <p className="poppins-regular text-[12px] leading-[22px]">
                By clicking you agree to our{" "}
                <Link href="/Privacy" className="text-[#008AFF] cursor-pointer">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <span className="text-[#008AFF] cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                *
              </p>
            </div>

            <button type="submit" className="lg:poppins-bold mulish-regular lg:text-[18px] text-[14px] lg:px-[81px] lg:py-[10px] px-[17px] py-2 bg-[#2563EB] hover:bg-[#3D7DED] text-white rounded-[32px]">
              Book Free Counselling
            </button>
          </form>
        </div>
      </div>

      <div className="lg:block hidden">
        <div className="App">
          <section>
            {Letter.map((item, index) => (
              <span key={index} className="letters" style={{ transform: `rotate(${index * 15.5}deg)` }}>
                {item}
              </span>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home_Contact;

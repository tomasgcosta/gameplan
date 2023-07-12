import React from 'react'
import logo from '../assets/logo.png'
import { FiMenu } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-[#6a696b] to-[#262527]">
      <div className="flex items-center  max-w-[70vw] mx-auto relative">
        {/* Left */}
        <div className="flex items-center justify-center  lg:justify-start py-2 px-2 lg:py-6 lg:px-8 w-full lg:w-auto   ">
          <div className="lg:hidden left-4 absolute text-white">
            <FiMenu className="text-[30px]" />
          </div>

          <div className="flex items-center  text-[#c5c3c0] font-semibold text-[26px]  ">
            <img src={logo} className="w-12 h-12 mr-2" />
            <p>Games</p>
          </div>
        </div>
        {/* Middle */}
        <div className="hidden lg:flex pl-10">
          <ul className="text-[#c5c3c0] text-[13px] flex  gap-5">
            <li>
              <p className="">STORE</p>
            </li>
            <li>
              <p className="">COMMUNITY</p>
            </li>
            <li>
              <p className="">LIBRARY</p>
            </li>
            <li>
              <p className="">SUPPORT</p>
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="absolute text-white  right-10 top-0 text-[12px] lg:flex  items-center mt-2 hidden">
          <div className="flex items-center bg-[#ED5611] px-2 py-1 rounded-[0.2rem]">
            <HiDownload className="mr-2" />
            <p className=" ">Download Ijji</p>
          </div>
          <div className=" ml-4 px-2 py-[2px] rounded-[0.5rem] group duration-100 ease-out">
            <p className="text-[#808080] font-semibold group-hover:text-white duration-100 ease-out">
              Login
            </p>
          </div>

          <div className="h-[15px] w-[1px] bg-[#808080] mx-2"></div>

          <div className="pl-2 flex items-center">
            <p className="text-[#808080] font-semibold hover:text-white duration-100 ease-out">
              Language
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full mt-24 bg-gray-600 text-white px-2 py-2 shadow-lg shadow-gray-400">
      <div className="justify-center max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-400 py-8 px-4">
        <div>
          <h6 className="font-bold uppercare pt-2">Solutions</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-600">Consulting</li>
            <li className="py-1 lg:hover:text-blue-600">Booking</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Support</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-600">Training</li>
            <li className="py-1 lg:hover:text-blue-600">Documentation</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Personal</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-600">About</li>
            <li className="py-1 lg:hover:text-blue-600">Blogs</li>
           
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Courses</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-600">Python</li>
            <li className="py-1 lg:hover:text-blue-600">Javascript</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Projects</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-600">Projects</li>
            <li className="py-1 lg:hover:text-blue-600">Blogs</li>
          </ul>
        </div>
        <div className="flex justify-end py-12">
          <Link href="/">
            <div className="rounded-full bg-gray-300 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#101b3b]" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

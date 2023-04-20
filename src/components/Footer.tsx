import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWarehouse,
} from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className=" w-full mt-24 bg-gray-700 text-gray-300 px-2 py-2 ">
      <div className="justify-center max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-400 py-8 px-4">
        <div>
          <h6 className="font-bold uppercare pt-2">Solutions</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-400">Travel</li>
            <li className="py-1 lg:hover:text-blue-400">Booking</li>
            <li className="py-1 lg:hover:text-blue-400">Flights</li>
            <li className="py-1 lg:hover:text-blue-400">Ground</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Support</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-400">Pricing</li>
            <li className="py-1 lg:hover:text-blue-400">Documentation</li>
            <li className="py-1 lg:hover:text-blue-400">Tours</li>
            <li className="py-1 lg:hover:text-blue-400">Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Company</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-400">About</li>
            <li className="py-1 lg:hover:text-blue-400">Blogs</li>
            <li className="py-1 lg:hover:text-blue-400">Jobs</li>
            <li className="py-1 lg:hover:text-blue-400">Press</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Company</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-400">About</li>
            <li className="py-1 lg:hover:text-blue-400">Blogs</li>
            <li className="py-1 lg:hover:text-blue-400">Jobs</li>
            <li className="py-1 lg:hover:text-blue-400">Press</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">Company</h6>
          <ul>
            <li className="py-1 lg:hover:text-blue-400">About</li>
            <li className="py-1 lg:hover:text-blue-400">Blogs</li>
            <li className="py-1 lg:hover:text-blue-400">Jobs</li>
            <li className="py-1 lg:hover:text-blue-400">Press</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 ">
        <p className="py-4 text-gray-300">
          <a href="https://www.techethio.com/">© 2023 Sintayehu Shibeshi</a>
        </p>
        <div className="flex justify-between sm:w-[300px] text-gray-300 pt-4 text-2xl">
          <a href="https://www.facebook.com/sentia156">
            <FaFacebook />
          </a>
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import cryptoImg from "../public/asstes/contact.avif";
import Link from "next/link";

const Techethio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] text-white z-10 py-2 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-30%] ">
          <h2 className="py-2">TechEthio</h2>
          <h3>Python | Javascript | Frappe | Mariadb</h3>
        </div>
      </div>
      <div className="justify-center items-center mx-w-[1240px] mx-auto p-2 grid md:grid-cols-5 pt-4 ">
        <div className="col-span-4 py-4 text-gray-600 max-w-[70%] m-auto">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Firebase. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Neque labore
            veritatis non deleniti eos illum maiores possimus ipsum omnis unde
            facere nobis, ex id reiciendis animi vitae suscipit alias quidem.
            Impedit deserunt aliquid repudiandae adipisci totam? Dolorem
            consequatur sapiente nulla, quis laboriosam blanditiis pariatur.
            Iure, enim ab. Soluta, iure a?
          </p>
          <button className="px-4 py-2 mt-4 mr-4">Demo</button>
          <button className="px-4 py-2 mt-4 mr-4">Code</button>
        </div>
        <div className="col-span-10 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ERPNext
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ERP System
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NFT
              </p>
            </div>
          </div>
        </div>
      </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer flex justify-center ">Back</p>
        </Link>
    </div>
  );
};

export default Techethio;

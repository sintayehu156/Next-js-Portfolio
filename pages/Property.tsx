import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import propertyImg from "../public/asstes/project1.avif";
import Link from "next/link";

const Property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] text-white z-10 py-2 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-30%] ">
          <h2 className="py-2">Kenema Pharmacy</h2>
          <h3>Python | Javascript | Frappe | Mariadb</h3>
        </div>
      </div>
      <div className="mx-w-[1240px] mx-auto p-2 grid md:grid-cols-5 pt-4 ">
        <div className="col-span-4 py-4 text-gray-600 max-w-[70%] m-auto">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Firebase. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Deserunt numquam
            nihil tenetur ratione enim nisi temporibus ducimus obcaecati ullam
            dolorem! Recusandae mollitia, perspiciatis vitae nostrum autem
            consequatur quisquam adipisci illum soluta itaque ea et enim
            repudiandae fugit accusantium magnam sed doloremque delectus
            laboriosam veniam ex pariatur voluptatum at! Suscipit, culpa?
          </p>
          <button className="px-4 py-2 mt-4 mr-4">Demo</button>
          <button className="px-4 py-2 mt-4 mr-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Frappe
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Github
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

export default Property;

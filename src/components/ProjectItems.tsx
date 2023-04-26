import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemsProps {
  title: string;
  backgroundImg: string;
  tech: string;
  projecturl: string;
}
const ProjectItems = ({
  title,
  backgroundImg,
  tech,
  projecturl,
}: ProjectItemsProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#f3f5f3] to-[#2c1105]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#ffffff] tracking-wider uppercase text-center">
          {title}
        </h3>
        <p className="text-[#072752]">{tech}</p>
        <Link href={projecturl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-[#36739b] hover:text-white ">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;

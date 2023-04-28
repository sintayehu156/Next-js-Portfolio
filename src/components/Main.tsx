import React from "react";
// import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-between items-center ">
        <div className="relative">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Build Something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hey, I`m <span className="text-[#5651e5]">Sintayehu</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto animate-slide-in-right">
            I am a full-stack software developer with expertise in designing,
            developing, and implementing ERP systems, web development, CI/CD,
            and project management. I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js.
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            <span className="text-[#5651e5]">Skills:</span> Full-stack web
            development ERP system design, development, and implementation
            Project management CI/CD pipeline setup and deployment Database
            design and management Strong problem-solving skills Excellent
            communication and collaboration skills
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#36739b] hover:text-white  ">
              <Link href="https://www.linkedin.com/in/sinteshibeshi">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#36739b] hover:text-white  ">
              <Link href="https://github.com/sintayehu156">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#36739b] hover:text-white  ">
              <Link href="http://www.facebook.com/sentia156">
                <FaFacebook />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#36739b] hover:text-white  ">
              <Link href="https://mail.google.com/mail/u/0/#inbox">
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center ">
          <div>
            <div>
              <Image
                className="rounded-xl "
                src="/../public/asstes/ME/Linkedin.jpeg"
                width={900}
                height={900}
                alt="/"
              />
            </div>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#36739b] hover:text-white  ">
                <Link href="https://www.linkedin.com/in/sinteshibeshi">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#36739b] hover:text-white  ">
                <Link href="https://github.com/sintayehu156">
                  <FaGithub />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#36739b] hover:text-white  ">
                <Link href="http://www.facebook.com/sentia156">
                  <FaFacebook />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#36739b] hover:text-white  ">
                <Link href="https://mail.google.com/mail/u/0/#inbox">
                  <AiOutlineMail />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Main;

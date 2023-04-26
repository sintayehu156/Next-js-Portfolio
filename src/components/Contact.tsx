import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contacts" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-2">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rponded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../public/asstes/contact1.avif"
                  width={700}
                  height={640}
                  alt="/"
                />
              </div>
              <div>
                <h1 className="py-2 text-2xl">Sintayehu Shibeshi</h1>
                <h2>
                  <span className="text-[#090836]">Full Stack Developer</span>
                </h2>
                <p className="py-4">
                  I`m available for a freelance or full time position, contact
                  me and lets talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex flex-center justify-between py-4">
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
                    <Link href="https://mail.google.com/mail/shibeshi156@gmail.com">
                      <AiOutlineMail />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 hover:bg-[#36739b] hover:text-white "
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 hover:bg-[#36739b] hover:text-white "
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 hover:bg-[#36739b] hover:text-white "
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 hover:bg-[#36739b] hover:text-white "
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className="border-2 rounded-lg p-3 border-gray-300 hover:bg-[#36739b] hover:text-white "></textarea>
                </div>
                <button className="w-full p-4  mt-4 hover:bg-[#a0a0a1] hover:text-white  ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

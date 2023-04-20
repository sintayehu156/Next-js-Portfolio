import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Build Something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hey, I`m <span className="text-[#5651e5]">Sintayehu</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            consequatur eaque commodi aspernatur expedita dignissimos dolore,
            minima optio accusamus, modi deleniti ab quidem dolores dolor
            corporis consequuntur autem tempora magnam!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
           
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Main
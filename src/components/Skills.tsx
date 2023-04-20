import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240%] mx-auto flox flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What Can I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/asstes/html.png"
                  width="100"
                  height="100"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/asstes/css.png"
                  width="100"
                  height="100"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/asstes/js.png"
                  width="100"
                  height="100"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/asstes/react.png"
                  width="100"
                  height="100"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/asstes/nextjs.png"
                  width="100"
                  height="100"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/asstes/python.png"
                  width="100"
                  height="200"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/asstes/erpnext.png"
                  width="100"
                  height="100"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ERPNext</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/asstes/frappe.png"
                  width="100"
                  height="100"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Frappe</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills
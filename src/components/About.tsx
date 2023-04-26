import React from "react";
import Link from "next/link";
import Image from "next/image";


const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-8 md:p-16 flex items-center"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl "
            src="/../public/asstes/about.avif"
            width={900}
            height={640}
            alt="/"
          />
        </div>
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a full-stack software developer with expertise in designing,
            developing, and implementing ERP systems, web development, CI/CD,
            and project management. I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js.
          </p>
          <p className="py-2 text-gray-600">
            Skills: Full-stack web development ERP system design, development,
            and implementation Project management CI/CD pipeline setup and
            deployment Database design and management Strong problem-solving
            skills Excellent communication and collaboration skills
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

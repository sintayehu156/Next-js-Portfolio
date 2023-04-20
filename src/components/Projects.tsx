import React from "react";
import ProjectItems from "./ProjectItems";
import propertyImg from '../../public/asstes/agile.avif'
import cryptoImg from '../../public/asstes/ecommerce.avif'



const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Kenema Pharmacy"
            backgroundImg={propertyImg}
            projecturl="/Property"
          />
          <ProjectItems
            title="ERP System"
            backgroundImg={cryptoImg}
            projecturl="/Kenema"
          />
          <ProjectItems
            title="Bizenforce"
            backgroundImg={cryptoImg}
            projecturl="/Bizenforce"
          />
          <ProjectItems
            title="TechEthio"
            backgroundImg={propertyImg}
            projecturl="/Techethio"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

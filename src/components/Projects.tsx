import React from "react";
import ProjectItems from "./ProjectItems";
import propertyImg from '../../public/asstes/pharmacy1.avif'
import cryptoImg from '../../public/asstes/ecommerce.avif'
import kenemaImg from "../../public/asstes/erp1.avif";
import techethioImg from "../../public/asstes/chatgpt.avif";



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
            tech="I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js."
            backgroundImg={propertyImg}
            projecturl="/Property"
          />
          <ProjectItems
            title="ERP System"
            tech="I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js."
            backgroundImg={cryptoImg}
            projecturl="/Kenema"
          />
          <ProjectItems
            title="Bizenforce"
            tech="I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js."
            backgroundImg={kenemaImg}
            projecturl="/Bizenforce"
          />
          <ProjectItems
            title="TechEthio"
            tech="I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js."
            backgroundImg={techethioImg}
            projecturl="/Techethio"
          />
          <ProjectItems
            title="TechEthio"
            tech="I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js."
            backgroundImg={techethioImg}
            projecturl="/Techethio"
          />
          <ProjectItems
            title="TechEthio"
            tech="I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js."
            backgroundImg={techethioImg}
            projecturl="/Techethio"
          />
          <ProjectItems
            title="TechEthio"
            tech="I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js."
            backgroundImg={techethioImg}
            projecturl="/Techethio"
          />
          <ProjectItems
            title="TechEthio"
            tech="I have experience in the field and have
            worked with various programming languages and frameworks, including
            Python, JavaScript, React, Next.js, Vue, and Nuxt.js."
            backgroundImg={techethioImg}
            projecturl="/Techethio"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

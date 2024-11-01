import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { userContext } from "../../User";
function Projects() {
  const { projects } = useContext(userContext);
  return (
    <div
      id="projects"
      className="bg-BG2 p-12 border border-gray-500 rounded-[17px] text-[#d9d9d9]"
    >
      <h1 className="text-white font-bold text-5xl mb-12">Our Projects</h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
        {projects.map((project, key) => (
          <ProjectCard
            key={key}
            title={project.title}
            img={project.img}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import AnimateScroll from "../AnimateScroll";

function ProjectCard({ title, description, img }) {
  return (
    <div className="flex gap-4 mb-10">
      <div className="flex flex-col bg-[#393939] rounded-xl p-4">
        <AnimateScroll>
          <h1 className="text-white font-bold text-3xl mb-8">{title}</h1>
        </AnimateScroll>
        <div className="flex gap-8">
          <AnimateScroll>
            <img className="rounded-2xl" src={img} width={200} height={200} />
          </AnimateScroll>
          <AnimateScroll>
            <p className="project-description ">{description}</p>
          </AnimateScroll>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

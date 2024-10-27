import React from "react";

export default function NavElements() {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <a
        href="#about-us"
        className="hover:text-ELECT"
        onClick={(e) => handleScroll(e, "about-us")}
      >
        ABOUT US
      </a>
      <a
        href="#activities"
        className="hover:text-ELECT"
        onClick={(e) => handleScroll(e, "activities")}
      >
        ACTIVITIES
      </a>
      <a
        href="#projects"
        className="hover:text-ELECT"
        onClick={(e) => handleScroll(e, "projects")}
      >
        PROJECTS
      </a>
      <a
        href="https://discord.gg/A3Yw7kybDz"
        className="hover:text-ELECT"
        target="_blank"
        rel="noopener noreferrer"
      >
        DISCORD
      </a>
    </>
  );
}

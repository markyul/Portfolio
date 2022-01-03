import React from "react";
import ProjectCard from "./common/ProjectCard";
import corner_archive1 from "../asset/corner_archive1.jpg";
import catlas from "../asset/catlas1.png";

export default function Projects() {
  const projects = [
    {
      name: "Corner Archive",
      img: corner_archive1,
    },
    {
      name: "Catlas",
      img: catlas,
    },
  ];

  return (
    <div className="projects-background">
      <div className="container">
        <header className="container-title">Project</header>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
}

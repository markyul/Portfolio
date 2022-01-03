import React from "react";
import ProjectCard from "./common/ProjectCard";
import corner_archive1 from "../asset/corner_archive1.jpg";
import portfolio from "../asset/portfolio.png";

export default function Projects() {
  const projects = [
    {
      name: "Corner Archive",
      img: corner_archive1,
      contents: {
        period: "2021-08 ~ 2021-12",
        lang: "Kotlin",
      },
    },
    {
      name: "Portfolio",
      img: portfolio,
      contents: {
        period: "2021-12 ~ ",
        lang: "JavaScript",
      },
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
            contents={project.contents}
          />
        ))}
      </div>
    </div>
  );
}

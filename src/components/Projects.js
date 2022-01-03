import React from "react";
import ProjectCard from "./common/ProjectCard";
import corner_archive1 from "../asset/corner_archive1.jpg";
import catlas from "../asset/catlas1.png";

export default function Projects() {
  return (
    <div className="projects-background">
      <div className="container">
        <header className="container-title">Project</header>
        <ProjectCard name="Corner Archive" img={corner_archive1} />
        <ProjectCard name="Catlas" img={catlas} />
      </div>
    </div>
  );
}

import React from "react";
import ProjectCard from "./common/ProjectCard";

export default function Projects() {
  return (
    <div className="projects-background">
      <div className="container">
        <header className="container-title">Project</header>
        <section className="projects-container">
          <ProjectCard />
        </section>
      </div>
    </div>
  );
}

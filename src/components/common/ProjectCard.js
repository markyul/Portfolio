import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="card project-card">
      <article className="project-container">
        <div className="project-screen">
          <img className="app-img" src={props.img} alt="app" />
        </div>
      </article>
    </div>
  );
}

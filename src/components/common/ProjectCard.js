import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="card project-card">
      <h1 className="project-name">{props.name}</h1>
      <article className="project-container">
        <div className="project-screen">
          <img className="app-img" src={props.img} alt="app" />
        </div>
        <div className="project-contents">
          <div>
            <strong>개발 기간: </strong>
            {props.contents.period}
          </div>
          <div>
            <strong>개발 언어: </strong>
            {props.contents.lang}
          </div>
          <div>
            <strong>설명</strong>
            <ul className="project-desc">
              {props.contents.desc.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

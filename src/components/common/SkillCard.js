import React from "react";

export default function SkillCard(props) {
  return (
    <article className="card">
      <img src={props.src} height="140" width="364" alt="logo" />
    </article>
  );
}

import React from "react";

export default function Card(props) {
  return (
    <article className="card">
      <img src={props.src} height="100" width="300" alt="logo" />
    </article>
  );
}

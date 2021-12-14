import React from "react";

export default function Card(props) {
  return (
    <article className="card">
      <img src={props.src} height="140" width="364" alt="logo" />
    </article>
  );
}

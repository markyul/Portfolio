import React from "react";
import Card from "./common/Card";

import htmlCssJsLogo from "../asset/html_css_js.png";
import reactLogo from "../asset/react_logo.png";
import vueLogo from "../asset/vue_logo.png";
import kotlinLogo from "../asset/kotlin_logo.png";
import reactNativeLogo from "../asset/react_native_logo.png";

export default function Skill() {
  return (
    <div className="skill-background">
      <div className="container">
        <section className="skill-container">
          <div className="skill-title">WEB</div>
          <hr className="skill-line"></hr>
          <section className="flex">
            <Card src={htmlCssJsLogo} />
            <Card src={reactLogo} />
            <Card src={vueLogo} />
          </section>
        </section>
        <section className="skill-container">
          <div className="skill-title">APP</div>
          <hr className="skill-line"></hr>
          <section className="flex">
            <Card src={kotlinLogo} />
            <Card src={reactNativeLogo} />
          </section>
        </section>
      </div>
    </div>
  );
}

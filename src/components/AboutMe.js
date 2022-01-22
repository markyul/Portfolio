import React from 'react';

export default function AboutMe(props) {
  return (
    <div ref={props.aboutMeElement} id="aboutMe" className="about-background">
      <div className="container">
        <div className="aboutme-container">
          <section className="name">궁금한 것이 많은 개발자</section>
          <section className="name">"김 학 률"</section>
          <section className="introduce">
            소통을 가장 중요시하며 분위기 자체가 밝은 사람입니다.
          </section>
          <hr className="about-line"></hr>
          <section className="reference">
            <article>
              <header>Github: </header>
              <span
                onClick={() =>
                  window.open('https://github.com/markyul', '_blank')
                }
              >
                https://github.com/markyul
              </span>
            </article>
            <article>
              <header>Email: </header>
              <span>pig68111000@gmail.com</span>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

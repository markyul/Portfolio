import React from 'react';
import gnuLogo from '../../asset/gnu.png';
import dxdataLogo from '../../asset/dxdata_logo.png';

export default function Career(props) {
  return (
    <div ref={props.careerElement} id="career" className="career-background">
      <div className="container">
        <header className="container-title" style={{ color: 'white' }}>
          Career
        </header>
        <div className="card career-card">
          <article className="career-grid">
            <div className="company">
              <img src={gnuLogo} height="120" width="200" alt="logo" />
              <h1>학교</h1>
            </div>
            <div className="history">
              <section>
                <h2>2018.07 ~ 12</h2>
                <li>백화점 내의 삼성 모바일 대리점에서 아르바이트</li>
              </section>
              <section>
                <h2>2020.07 ~ 08</h2>
                <li>진양고등학교에 외부 강사로서 수업 진행</li>
                <li>블록 코딩을 이용한 RC카 운전 프로그램</li>
              </section>
              <section>
                <h2>2020.09 ~ 11</h2>
                <li>학과 내 멘토링 활동에서 멘토로서 전공 관련 수업을 함</li>
                <li>자료 구조를 알려주며 C언어로 코딩</li>
              </section>
              <section>
                <h2>2020.10</h2>
                <li>
                  경상대학교 주최 ‘자연과학대학 학술창의력 경연대회’에서 발표
                </li>
                <li>은상 수상</li>
              </section>
              <section>
                <h2>2022.02</h2>
                <li>
                  경상국립대학교 졸업
                </li>
              </section>
            </div>
          </article>
          <hr />
          <article className="career-grid">
            <div className="company">
              <img src={dxdataLogo} height="70" width="160" alt="logo" />
              <h1>회사(DXDATA)</h1>
            </div>
            <div className="history">
              <section>
                <h2>2021.10 ~ 12</h2>
                <li>파트타임 연구원으로 주 5일 근무</li>
                <li>DXDATA 홈페이지 제작</li>
                <li>조선업 관련 기물 관련 대시보드 플랫폼 제작</li>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import gnuLogo from '../../asset/gnu.png';

export default function Career() {
  return (
    <div className="career-background">
      <div className="container">
        <header className="container-title" style={{ color: 'white' }}>
          Career
        </header>
        <div className="card career-card">
          <div className="company">
            <img src={gnuLogo} height="120" width="200" alt="logo" />
            <h1>학교</h1>
          </div>
          <div className="history">
            <section>
              <h2>2018.07 ~ 12</h2>
              <div>백화점 내의 삼성 모바일 대리점에서 아르바이트</div>
            </section>
            <section>
              <h2>2020.07 ~ 08</h2>
              <div>진양고등학교에 외부 강사로서 수업 진행</div>
              <div>블록 코딩을 이용한 RC카 운전 프로그램</div>
            </section>
            <section>
              <h2>2020.09 ~ 11</h2>
              <div>학과 내 멘토링 활동에서 멘토로서 전공 관련 수업을 함</div>
              <div>자료 구조를 알려주며 C언어로 코딩</div>
            </section>
            <section>
              <h2>2020.10</h2>
              <div>
                경상대학교 주최 ‘자연과학대학 학술창의력 경연대회’에서 발표
              </div>
              <div>은상 수상</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

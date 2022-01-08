import React from 'react';
import ProjectCard from './ProjectCard';
import corner_archive1 from '../../asset/corner_archive1.jpg';
import portfolio from '../../asset/portfolio.png';

export default function Projects() {
  const projects = [
    {
      name: 'Corner Archive',
      img: corner_archive1,
      contents: {
        period: '2021-08 ~ 2021-12',
        lang: 'Kotlin',
        desc: [
          '컴퓨터 과학과를 위해 동아리에서 만든 어플',
          '매년 여러가지 프로젝트가 이루어지는 특성상 만들어지고 사라지는 작품들이 아까워서 만들기로 결정',
          '무엇을 만들 수 있는지 모르는 후배들에게 도움이 될 것이라고 생각했다.',
          '태그를 이용해서 프로젝트를 분류하여 원하는 작품을 찾기 쉽게 설계',
          '프로젝트 주제, 설명, 실행 화면 등을 볼 수 있다.',
        ],
      },
    },
    {
      name: 'Portfolio',
      img: portfolio,
      contents: {
        period: '2021-12 ~ ',
        lang: 'JavaScript',
        desc: [
          '나를 소개하기 위한 사이트',
          '개발하기 쉽게 설계하기 위해 React를 이용해 개발',
          '계속 업데이트 할 예정',
        ],
      },
    },
  ];

  return (
    <div className="projects-background">
      <div className="container">
        <header className="container-title">Project</header>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            img={project.img}
            contents={project.contents}
          />
        ))}
      </div>
    </div>
  );
}

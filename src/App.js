import React, { useRef } from 'react';

import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skill from './components/skill/Skill';
import Projects from './components/project/Projects';
import Career from './components/career/Career';

function App() {
  const aboutMeElement = useRef(null);
  const skillElement = useRef(null);
  const projectElement = useRef(null);
  const careerElement = useRef(null);

  return (
    <div className="App">
      <Header
        aboutMeElement={aboutMeElement}
        skillElement={skillElement}
        projectElement={projectElement}
        careerElement={careerElement}
      />
      <AboutMe aboutMeElement={aboutMeElement} />
      <Skill skillElement={skillElement} />
      <Projects projectElement={projectElement} />
      <Career careerElement={careerElement} />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skill from './components/skill/Skill';
import Projects from './components/project/Projects';
import Career from './components/career/Career';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skill />
      <Projects />
      <Career />
    </div>
  );
}

export default App;

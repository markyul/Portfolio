import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skill from './components/skill/Skill';
import Projects from './components/project/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skill />
      <Projects />
    </div>
  );
}

export default App;

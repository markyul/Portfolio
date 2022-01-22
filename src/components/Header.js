export default function Header(props) {
  const onAboutMeClick = () => {
    props.aboutMeElement.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onSkillClick = () => {
    props.skillElement.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onProjectClick = () => {
    props.projectElement.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onCareerClick = () => {
    props.careerElement.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="header-nav">
        <div className="container side-flex">
          <section className="home">RYUL - Portfolio</section>
          <section className="side-flex">
            <div className="nav-item" onClick={onAboutMeClick}>
              About me
            </div>
            <div className="nav-item" onClick={onSkillClick}>
              Skill
            </div>
            <div className="nav-item" onClick={onProjectClick}>
              Project
            </div>
            <div className="nav-item" onClick={onCareerClick}>
              Career
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}

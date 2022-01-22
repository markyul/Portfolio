export default function Header() {
  return (
    <div>
      <header className="header-nav">
        <div className="container side-flex">
          <section className="home">RYUL - Portfolio</section>
          <section className="side-flex">
            <a href="#aboutMe" className="nav-item">
              About me
            </a>
            <a href="#skill" className="nav-item">
              Skill
            </a>
            <a href="#project" className="nav-item">
              Project
            </a>
            <a href="#career" className="nav-item">
              Career
            </a>
          </section>
        </div>
      </header>
    </div>
  );
}

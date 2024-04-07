function About() {
  return (
    <div className="about">
      <div className="about_gauche">
        <nav className="about_nav">
          <ul>
            <li>
              <a href="#whoami">à propos</a>
            </li>
            <li>
              <a href="#certificate">Diplômes</a>
            </li>
            <li>
              <a href="#experience">Expériences</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="about_droite">
        <div className="whoami" id="whoami">
          Qui suis-je ?
        </div>
        <div className="certificate" id="certificate">
          Diplome
        </div>
        <div className="experience" id="experience">
          Experiences
        </div>
      </div>
    </div>
  );
}
export default About;

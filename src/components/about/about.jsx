import ShowMore from "../showMore/showMore";

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
          
          <p>Qui suis-je ?<br/>Passionné par la technologie sous toutes ses formes, mon parcours a débuté avec une formation en conception de prototypes numériques, explorant diverses technologies telles que l'impression 3D, la réalité virtuelle, et l'Internet des objets. Cette expérience m'a conduit à découvrir ma passion pour le web design, où j'ai développé des compétences en création d'interfaces utilisateur esthétiques et conviviales. Par la suite, j'ai choisi de me spécialiser dans le développement front-end avec React, attiré par sa flexibilité et sa capacité à créer des interfaces interactives tout en gardant une sensibilité pour l'UX et l'UI.</p>
        </div>
        <div className="certificate" id="certificate">
          <p>
            Formations professionnelles<br/>
            <ShowMore nom="nomTesst" />
          </p>
        </div>
        <div className="experience" id="experience">
          Experiences
        </div>
      </div>
    </div>
  );
}
export default About;

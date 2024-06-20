import Projet from "../tuile_projet/projet";
import CardProjet from "../projet/projet";
import MenuMobile from "../menuMobile/menuMobile";
import ComponentProjet from "../componentProjet/componentProjet";

function Projets() {
  return (
    <div className="section_projets">
      <div className="section_projets_titre">
        <h2>Projets</h2>
        <p>Exemple de projets</p>
      </div>
      <div className="list_projets">
        <ComponentProjet />
        <CardProjet />
        <Projet />
      </div>
      <MenuMobile />
    </div>
  );
}
export default Projets;

import Projet from "../../../components/tuile_projet/projet";
import CardProjet from "../../../components/projet/projet";
import MenuMobile from "../../../components/menuMobile/menuMobile";
import ComponentProjet from "../../../components/componentProjet/componentProjet";

function Projets() {
  return (
    <div className="section_projets">
      <div className="section_projets_titre">
        <h2>Projets</h2>
        <p>Exemple de projets</p>
      </div>
      <div className="list_projets">
        <ComponentProjet />
        <ComponentProjet />
        <ComponentProjet />
        <ComponentProjet />
      </div>
      <MenuMobile />
    </div>
  );
}
export default Projets;

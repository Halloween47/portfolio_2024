import Projet from "../tuile_projet/projet";

function Projets() {
  return (
    <div className="section_projets">
      <div className="section_projets_titre">
        <h2>Projets</h2>
        <p>Exemple de projets</p>
      </div>
      <div className="list_projets">
        <Projet />
        <Projet />
        <Projet />
        <Projet />
        <Projet />
        <Projet />
        <Projet />
        <Projet />
        <Projet />
      </div>
    </div>
  );
}
export default Projets;

import React from "react";
import Kasa from "../../assets/living-room.jpg";

const Projet = () => {
  return (
    <div className="projet2">
      <img src={Kasa} alt="" />
      <div className="details">
        <h3>Projet Kasa</h3>
        <p>
          Implémentation du front-end d'une application avec des composants
          React pour la logique de présentation des données et React Router pour
          une gestion efficace du routage. Développement exclusif du front-end
          en se basant sur des maquettes fournies et des données simulées
          extraites d'un fichier JSON. Utilisation de Create React App pour la
          configuration initiale et de Node.js pour exécuter du code JavaScript
          en dehors du navigateur.
        </p>
        <div className="stack">
          <li>React JS</li>
          <li>Redux</li>
          <li>React Router</li>
        </div>
      </div>
    </div>
  );
};

export default Projet;

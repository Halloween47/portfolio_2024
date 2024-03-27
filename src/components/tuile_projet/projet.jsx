import React, { useState } from "react";
import Kasa from "../../assets/kasa.png";
import Overlay from "../overlay/overlay";

function Projet() {
  const [showOverlay, setShowOverlay] = useState(false);

  function infosProjet() {
    setShowOverlay(true);
  }

  return (
    <div className="projet" onClick={infosProjet}>
      <img src={Kasa} alt="" />
      <div className="overlay">
        <p>Projet Kasa</p>
      </div>
    </div>
  );
}
export default Projet;

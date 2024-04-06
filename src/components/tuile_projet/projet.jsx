import React from "react";
// import Kasa from "../../assets/kasa.png";
import Kasa from "../../assets/living-room.jpg";
import logo from "../../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { showOverlay } from "../../store/overlaySlice";
import { setTitre, setDescription, setLink, setMockup } from "../../store/infosTuilesSlice";
import tuilesInfos from "../../datas/datas"

function Projet() {
  const overlay = useSelector((state) => state.overlay.overlayState);
  const dispatch = useDispatch();

  const handleClickTuiles = (projetKey) => {
    dispatch(showOverlay())
    const projetInfos = tuilesInfos[projetKey];
    console.log(projetInfos);
    const titreProjet = projetInfos.titre;
    const descriptionProjet = projetInfos.description;
    const linkProjet = projetInfos.link;
    const mockupProjet = projetInfos.mockup;
    dispatch(setTitre(titreProjet))
    dispatch(setDescription(descriptionProjet))
    dispatch(setLink(linkProjet));
    dispatch(setMockup(mockupProjet))
  }

  return (
    <div className="projet" onClick={() => handleClickTuiles("projetKasa")}>
      <img src={Kasa} alt="appartement Kasa" />
      <div className="overlay">
        {/* <p>Projet Kasa</p> */}
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
export default Projet;

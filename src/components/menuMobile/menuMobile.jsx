import React from "react";

import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import { useDispatch } from "react-redux";
import { hideProjets, showProjets } from "../../store/projetsSlices";
import { hideContact, showContact } from "../../store/contactSlice";
import { hideAboutMe, showAboutMe } from "../../store/aboutSlice";
import { Link } from "react-router-dom";

function MenuMobile(props) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // dispatch(showProjets());

    if (
      e.target.closest(".menuElement").querySelector("p").textContent ===
      "Accueil"
    ) {
      console.log("IT WORKS !!! ACCUEIL");
      dispatch(hideProjets());
      dispatch(hideContact());
      dispatch(hideAboutMe());
    } else if (
      e.target.closest(".menuElement").querySelector("p").textContent ===
      "Projets"
    ) {
      console.log("IT WORKS !!! PROJETS");
      dispatch(showProjets());
      dispatch(hideContact());
      //   dispatch(hideContact());
      dispatch(hideAboutMe());
    } else if (
      e.target.closest(".menuElement").querySelector("p").textContent ===
      "Profil"
    ) {
      console.log("IT WORKS !!! PROFIL");
      dispatch(showAboutMe());
      dispatch(hideProjets());
      dispatch(hideContact());
    } else if (
      e.target.closest(".menuElement").querySelector("p").textContent ===
      "Ressources"
    ) {
      console.log("IT WORKS !!! RESSOURCES");
    } else {
      console.log("NO !!!");
    }
  };

  return (
    <div className="menuMobile">
      <ul>
        <li>
          <Link to="/" className="menuElement">
            <HomeIcon sx={{ fontSize: 35 }} />
            <p>Accueil</p>
          </Link>
        </li>
        <li>
          <Link to="/projets" className="menuElement">
            <FolderSpecialIcon sx={{ fontSize: 35 }} />
            <p>Projets</p>
          </Link>
        </li>
        <li>
          <Link to="/aPropos" className="menuElement">
            <PersonIcon sx={{ fontSize: 35 }} />
            <p>Profil</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="menuElement">
            <DescriptionIcon sx={{ fontSize: 35 }} />
            <p>Ressources</p>
          </Link>
        </li>
      </ul>
      {/* <div className="menuElement" onClick={handleClick}>
        <FolderSpecialIcon sx={{ fontSize: 35 }} />
        <p>Projets</p>
      </div>
      <div className="menuElement" onClick={handleClick}>
        <PersonIcon sx={{ fontSize: 35 }} />
        <p>Profil</p>
      </div>
      <div className="menuElement" onClick={handleClick}>
        <DescriptionIcon sx={{ fontSize: 35 }} />
        <p>Ressources</p>
      </div> */}
    </div>
  );
}

export default MenuMobile;

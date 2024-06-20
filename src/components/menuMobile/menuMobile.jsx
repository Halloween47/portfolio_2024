import React from "react";

import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';

import imgTest from "../../assets/projets.png";

function MenuMobile() {
  return (
    <div className="menuMobile">
      <div className="menuElement">
          <HomeIcon sx={{ fontSize: 40 }} />
        <p>Accueil</p>
      </div>
      <div className="menuElement">
          <FolderSpecialIcon sx={{ fontSize: 40 }} />
        <p>Projets</p>
      </div>
      <div className="menuElement">
          <PersonIcon sx={{ fontSize: 40 }} />
        <p>Profil</p>
      </div>
      <div className="menuElement">
          <DescriptionIcon sx={{ fontSize: 40 }} />
        <p>Ressources</p>
      </div>
    </div>
  );
}

export default MenuMobile;

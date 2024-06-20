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
        <a href="">
          <HomeIcon sx={{ fontSize: 35 }} />
        <p>Accueil</p>
        </a>
      </div>
      <div className="menuElement">
        <a href="">
          <FolderSpecialIcon sx={{ fontSize: 35 }} />
        <p>Projets</p>
        </a>
      </div>
      <div className="menuElement">
        <a href="">
          <PersonIcon sx={{ fontSize: 35 }} />
        <p>Profil</p>
        </a>
      </div>
      <div className="menuElement">
        <a href="">
          <DescriptionIcon sx={{ fontSize: 35 }} />
        <p>Ressources</p>
        </a>
      </div>
    </div>
  );
}

export default MenuMobile;

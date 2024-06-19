import React from "react";
import ImgProfil from "../../assets/profil.jpg";
import FolderList from "./folderList";

function ComponentContact() {
  return (
    <div className="contact">
      <div className="imgProfil">
        <img src={ImgProfil} alt="ImgProfil" />
      </div>
      <div className="infos">
        <div className="zoneIdentity">
          <img src={ImgProfil} alt="" />
          <div className="identityName">
            <p>Thomas Leconte</p>
            <p>Information de contact</p>
          </div>
        </div>
        <FolderList />
        <button>CV</button>
      </div>
    </div>
  );
}

export default ComponentContact;

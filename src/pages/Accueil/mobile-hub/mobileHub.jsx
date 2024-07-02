import MobileHubTuile from "../mobileHubTuile/MobileHubTuile";

import Projets from "../../assets/projets.png";
import Profil from "../../assets/profil.png";
import Ressources from "../../assets/ressources.png";
import ImgContact from "../../assets/contact.png";
import Stepper from "../stepper/stepper";

import Menu from "../menu/menu";
import Banner from "../banner/banner";

function MobileHub() {
  return (
    <div className="mobile-hub">
      <Menu />
      <Banner />
      <div className="zoneHub">
        <MobileHubTuile img={Projets} text="Projets" />
        <MobileHubTuile img={Profil} text="A propos" />
        <MobileHubTuile img={Ressources} text="Ressources" />
        <MobileHubTuile img={ImgContact} text="Contact" />
      </div>
      <Stepper />
    </div>
  );
}
export default MobileHub;

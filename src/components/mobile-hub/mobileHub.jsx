import MobileHubTuile from "../mobileHubTuile/MobileHubTuile";
import testImg from "../../assets/logo.svg";
import Projets from "../../assets/projets.png";
import Profil from "../../assets/profil.png";
import Ressources from "../../assets/ressources.png";
import Contact from "../../assets/contact.png";
import Stepper from "../stepper/stepper";

function MobileHub() {
  return (
    <div className="mobile-hub">
      {/* <h1>Mobile HUB</h1> */}
      <div className="zoneHub">
        <MobileHubTuile img={Projets} text="Projets" />
        <MobileHubTuile img={Profil} text="A propos" />
        <MobileHubTuile img={Ressources} text="Ressources" />
        <MobileHubTuile img={Contact} text="Contact" />
      </div>
      <Stepper />
    </div>
  );
}
export default MobileHub;

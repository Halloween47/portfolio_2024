
import Projets from "../../assets/projets.png";
import Profil from "../../assets/profil.png";
import Ressources from "../../assets/ressources.png";
import ImgContact from "../../assets/contact.png";
import Stepper from "../../components/stepper/stepper";

import Menu from "../../components/menu/menu";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="mobile-hub">
      <Menu />
      <Banner />
      <div className="zoneHub">
        <ul>
          <li className="mobile-tuile">
            <Link to="/projets" className="link">
              <img src={Projets} alt="" />
              <p className="texteTuile">Projets</p>
            </Link>
          </li>
          <li className="mobile-tuile">
            <Link to="/projets" className="link">
              <img src={Profil} alt="" />
              <p className="texteTuile">A propos</p>
            </Link>
          </li>
          <li className="mobile-tuile">
            <Link to="/projets" className="link">
              <img src={Ressources} alt="" />
              <p className="texteTuile">Ressources</p>
            </Link>
          </li>
          <li className="mobile-tuile">
            <Link to="/projets" className="link">
              <img src={ImgContact} alt="" />
              <p className="texteTuile">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="zoneHub">
        <MobileHubTuile img={Projets} text="Projets" />
        <MobileHubTuile img={Profil} text="A propos" />
        <MobileHubTuile img={Ressources} text="Ressources" />
        <MobileHubTuile img={ImgContact} text="Contact" />
      </div> */}
      <Stepper />
    </div>
  );
}
export default Accueil;

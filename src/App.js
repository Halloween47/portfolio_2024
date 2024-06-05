import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Overlay from "./components/overlay/overlay";
import Projets from "./components/projets/projets";
import CardProjet from "./components/projet/projet";
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Banner from "./components/banner/banner";
import MobileHub from "./components/mobile-hub/mobileHub";
import MobileContact from "./components/mobileContact/mobileContact";
import MobileAbout from "./components/mobileAbout/mobileAbout";
import MobileCertificate from "./components/mobileCertificate/mobileCertificate";
import BasicTimeline from "./components/mobileCertificate/mobileCertificate";
import MobileSectionProjets from "./components/mobileProjets/mobileProjets";
// import CustomizedTimeline from "./components/mobileCertificate/mobileCertificate";

function App() {
  const overlay = useSelector((state) => state.overlay.overlayState);
  const titreProjet = useSelector((state) => state.tuilesInfos.titre);
  const descriptionProjet = useSelector(
    (state) => state.tuilesInfos.description,
  );
  const linkProjet = useSelector((state) => state.tuilesInfos.link);
  const mockupProjet = useSelector((state) => state.tuilesInfos.mockup);
  const techProjet = useSelector((state) => state.tuilesInfos.tech);
  console.log(techProjet);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {overlay && (
        <Overlay
          titre={titreProjet}
          description={descriptionProjet}
          link={linkProjet}
          mockup={mockupProjet}
          tech={techProjet}
        />
      )}
      <Menu />
      <Banner />
      <MobileHub />
      {/* <Projets /> */}

      
      {/* <MobileSectionProjets />
      <MobileAbout />
      <MobileContact />
      <div className="hero">
        <p>Thomas Leconte</p>
        <h1>Développeur Javascript React</h1>
      </div>
      <Projets />
      <About /> */}
    </div>
  );
}

export default App;

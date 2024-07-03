import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Overlay from "./components/overlay/overlay";
import Projets from "./pages/projets/projets/projets";
import CardProjet from "./components/projet/projet";
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Banner from "./components/banner/banner";
import MobileContact from "./components/mobileContact/mobileContact";
import MobileAbout from "./pages/aPropos/mobileAbout";
import MobileCertificate from "./components/mobileCertificate/mobileCertificate";
import BasicTimeline from "./components/mobileCertificate/mobileCertificate";
import MobileSectionProjets from "./components/mobileProjets/mobileProjets";
import MonRouter from "./monRouter";
// import CustomizedTimeline from "./components/mobileCertificate/mobileCertificate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MAJComponentProjets from "./components/MAJComponentProjets/MAJComponentProjets";
import Projet from "./pages/projets/projets/projets";
import ComponentProjet from "./components/componentProjet/componentProjet";
import Accueil from "./pages/accueil/accueil";

function App() {
  const overlay = useSelector((state) => state.overlay.overlayState);
  const projets = useSelector((state) => state.projets.projetsState);
  const contact = useSelector((state) => state.contact.contactState);
  const about = useSelector((state) => state.about.aboutState);

  const titreProjet = useSelector((state) => state.tuilesInfos.titre);
  const descriptionProjet = useSelector(
    (state) => state.tuilesInfos.description,
  );
  const linkProjet = useSelector((state) => state.tuilesInfos.link);
  const mockupProjet = useSelector((state) => state.tuilesInfos.mockup);
  const techProjet = useSelector((state) => state.tuilesInfos.tech);

  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <MonRouter /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projet />} />
          <Route path="/aPropos" element={<MobileAbout />} />
          <Route path="/contact" element={<MobileContact />} />
          <Route path="/ressources" element={<MobileContact />} />
        </Routes>
      </Router>
      {/* {overlay && (
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
      {projets && <Projets />}
      {contact && <MobileContact />}
      {about && <MobileAbout />} */}
    </div>
  );
}

export default App;

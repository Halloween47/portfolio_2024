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
import MonRouter from "./monRouter";
// import CustomizedTimeline from "./components/mobileCertificate/mobileCertificate";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MAJComponentProjets from "./components/MAJComponentProjets/MAJComponentProjets";



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
        <Route path="/" element={<MobileHub />} />
        <Route path="/projets" element={<MAJComponentProjets />} />
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

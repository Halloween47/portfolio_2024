import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Overlay from "./components/overlay/overlay";
import Projets from "./components/projets/projets";

function App() {
  const overlay = useSelector((state) => state.overlay.overlayState);
  const titreProjet = useSelector((state) => state.tuilesInfos.titre);
  const descriptionProjet = useSelector((state) => state.tuilesInfos.description);
  const linkProjet = useSelector((state) =>  state.tuilesInfos.link);
  const mockupProjet = useSelector((state) =>  state.tuilesInfos.mockup);
  console.log(mockupProjet);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {overlay && <Overlay titre={titreProjet} description={descriptionProjet} link={linkProjet} mockup={mockupProjet} />}
      <div className="hero">
        <p>Thomas Leconte</p>
        <h1>Développeur Javascript React</h1>
      </div>
      <Projets />
    </div>
  );
}

export default App;

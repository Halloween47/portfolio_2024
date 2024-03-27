import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Overlay from "./components/overlay/overlay";
import Projets from "./components/projets/projets";

function App() {
  const overlay = useSelector((state) => state.overlay.overlayState);
  console.log(overlay);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {overlay && <Overlay />}
      <div className="hero">
        <p>Thomas Leconte</p>
        <h1>Développeur Javascript React</h1>
      </div>
      <Projets />
    </div>
  );
}

export default App;

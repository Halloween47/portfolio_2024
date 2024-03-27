import './App.css';
import Overlay from './components/overlay/overlay';
import Projets from './components/projets/projets';

function App() {
  return (
    <div className="App">
      {/* {showOverlay && <Overlay />} */}
      <div className='hero'>
        <p>Thomas Leconte</p>
        <h1>Développeur Javascript React</h1>
      </div>
      <Projets />
    </div>
  );
}

export default App;

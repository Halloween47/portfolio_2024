import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideOverlay } from "../../store/overlaySlice";
import  mockup from "../../assets/kasa_mockup.png";
import { Link } from "react-router-dom";

function Overlay() {
  const overlayRef = useRef(null);

  const overlay = useSelector((state) => state.overlay.overlayState);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        dispatch(hideOverlay())    
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="overlay">
        {/* <div className="overlay_content" ref={overlayRef}> test</div> */}
        <div className="gauche" ref={overlayRef}>
          <img src={mockup} alt="" />
        </div>
        <div className="droite">
          <div className="nom">Projet Kasa</div>
          <div className="presentation">
            Implémentation du front-end d'une application avec des composants React pour la logique de présentation des données et React Router pour une gestion efficace du routage.
Développement exclusif du front-end en se basant sur des maquettes fournies et des données simulées extraites d'un fichier JSON.
Utilisation de Create React App pour la configuration initiale et de Node.js pour exécuter du code JavaScript en dehors du navigateur.
</div>
          <div className="skills">Liste compétences</div>
          <div className="link-github">Liens github : https://github.com/Halloween47/projet-kasa</div>
          <Link>voir le code source</Link>
          <Link />
        </div>
      </div>
    </>
  );
}
export default Overlay;

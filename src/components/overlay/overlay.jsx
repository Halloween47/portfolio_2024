import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideOverlay } from "../../store/overlaySlice";
import mockup from "../../assets/kasa_mockup.png";
import { NavLink } from "react-router-dom";

function Overlay({titre, description, link, mockup, tech}) {
  const overlayRef = useRef(null);

  const overlay = useSelector((state) => state.overlay.overlayState);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        dispatch(hideOverlay());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="overlay">
        <div className="overlay_content" ref={overlayRef}>
          <div className="gauche">
            <img src={mockup} alt="" />
          </div>
          <div className="droite">
            {/* <div className="nom">Projet Kasa {titre}</div> */}
            <div className="nom">{titre}</div>
            <div className="presentation">
              {description}
            </div>
            <div className="skills">
              {/* <li>React JS</li>
              <li>Redux</li>
              <li>React Router</li> */}
              {tech.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </div>
            <div className="link-github">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lien GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Overlay;

import React from "react";
// import Kasa from "../../assets/kasa.png";
import Kasa from "../../assets/living-room.jpg";
import logo from "../../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { showOverlay } from "../../store/overlaySlice";

function Projet() {
  const overlay = useSelector((state) => state.overlay.overlayState);
  console.log(overlay);
  const dispatch = useDispatch();

  return (
    <div className="projet" onClick={() => dispatch(showOverlay())}>
      <img src={Kasa} alt="appartement Kasa" />
      <div className="overlay">
        {/* <p>Projet Kasa</p> */}
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
export default Projet;

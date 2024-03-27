import React from "react";
import Kasa from "../../assets/kasa.png";
import { useDispatch, useSelector } from "react-redux";
import { showOverlay } from "../../store/overlaySlice";

function Projet() {
  const overlay = useSelector((state) => state.overlay.overlayState);
  console.log(overlay);
  const dispatch = useDispatch();

  return (
    <div className="projet" onClick={() => dispatch(showOverlay())}>
      <img src={Kasa} alt="" />
      <div className="overlay">
        <p>Projet Kasa</p>
      </div>
    </div>
  );
}
export default Projet;

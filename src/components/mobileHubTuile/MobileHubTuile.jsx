import { useDispatch } from "react-redux";
import { showProjets } from "../../store/projetsSlices";
import { showContact } from "../../store/contactSlice";
import { showAboutMe } from "../../store/aboutSlice";
import { Link } from "react-router-dom";

function MobileHubTuile(props) {
  const dispatch = useDispatch();

  const handleClickProjets = (e) => {
    e.preventDefault();
    // dispatch(showProjets());

    if (props.text === "Projets") {
      console.log(props.text);
      dispatch(showProjets());

      // ICI changement de statue du composant dans le store
    } else if (props.text === "A propos") {
      console.log(props.text);
      dispatch(showAboutMe());
    } else if (props.text === "Ressources") {
      console.log(props.text);
    } else if (props.text === "Contact") {
      console.log(props.text);
      dispatch(showContact());
    } else {
      console.log("autres");
    }
  };

  return (
    // <div className="mobile-tuile" onClick={handleClickProjets}>
    <div className="mobile-tuile">
      <img src={props.img} alt="" />
      <p className="texteTuile">{props.text}</p>
    </div>
  );
}
export default MobileHubTuile;

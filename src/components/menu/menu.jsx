import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <div className="menu">
      <div id="hamburger">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <h1>Menu</h1>
    </div>
  );
}
export default Menu;

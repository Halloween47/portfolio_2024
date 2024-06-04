// import mi from "../../assets/mi.svg";
import mi from "../../assets/misansfond.svg";

function Banner() {
  return (
    <div className="zone-banner">
      <div className="banner">
        <p>Thomas Leconte</p>
        <p>Développeur Javascript React</p>
        <img src={mi} alt="illustration mission impossible" />
      </div>
    </div>
  );
}
export default Banner;

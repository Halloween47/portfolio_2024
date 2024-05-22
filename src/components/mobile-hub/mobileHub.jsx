import MobileHubTuile from "../mobileHubTuile/MobileHubTuile";
import testImg from '../../assets/logo.svg'
import Stepper from "../stepper/stepper";

function MobileHub() {
    return(
        <div className="mobile-hub">
            {/* <h1>Mobile HUB</h1> */}
            <div className="zoneHub">
                <MobileHubTuile img={testImg} text="Projets" />
                <MobileHubTuile img={testImg} text="A propos" />
                <MobileHubTuile img={testImg} text="Ressources" />
                <MobileHubTuile img={testImg} text="Contact" />
            </div>
            <Stepper />
        </div>
    )
}
export default MobileHub;
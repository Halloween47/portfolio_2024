import MobileHubTuile from "../mobileHubTuile/MobileHubTuile";
import testImg from '../../assets/logo.svg'

function MobileHub() {
    return(
        <div className="mobile-hub">
            {/* <h1>Mobile HUB</h1> */}
            <MobileHubTuile img={testImg} text="Projets" />
            <MobileHubTuile img={testImg} text="A propos" />
            <MobileHubTuile img={testImg} text="Ressources" />
            <MobileHubTuile img={testImg} text="Contact" />
        </div>
    )
}
export default MobileHub;